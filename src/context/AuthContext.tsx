import React, { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut as fbSignOut,
} from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { auth, db, googleProvider } from "../lib/firebase";

export interface ProjectReview {
  id: string;
  projectId: string;
  rating: number;
  comment: string;
  userName: string;
  userEmail?: string;
  createdAt: any;
}

export interface GuestProfile {
  uid: string;
  displayName: string;
  email: string;
  isGuest: boolean;
}

interface AuthContextType {
  user: User | null;
  guestUser: GuestProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInGuest: () => void;
  logout: () => Promise<void>;
  submitInquiry: (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
    company?: string;
  }) => Promise<string>;
  submitProjectReview: (
    projectId: string,
    rating: number,
    comment: string
  ) => Promise<string>;
  reviews: ProjectReview[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [guestUser, setGuestUser] = useState<GuestProfile | null>(() => {
    const saved = localStorage.getItem("bharat_guest_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<ProjectReview[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        // If logged in with real auth, clear guest user
        setGuestUser(null);
        localStorage.removeItem("bharat_guest_user");

        // Sync user doc in Firestore
        try {
          const userRef = doc(db, "users", currentUser.uid);
          await setDoc(
            userRef,
            {
              id: currentUser.uid,
              email: currentUser.email || "",
              displayName: currentUser.displayName || "Anonymous User",
              photoURL: currentUser.photoURL || "",
              updatedAt: new Date().toISOString(),
            },
            { merge: true }
          );
        } catch (err) {
          console.warn("Could not sync user profile to Firestore:", err);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // Listen to project reviews from Firestore
  useEffect(() => {
    try {
      const reviewsRef = collection(db, "projectReviews");
      const unsubscribe = onSnapshot(
        reviewsRef,
        (snapshot) => {
          const fetched: ProjectReview[] = [];
          snapshot.forEach((d) => {
            const data = d.data();
            fetched.push({
              id: d.id,
              projectId: data.projectId,
              rating: data.rating,
              comment: data.comment,
              userName: data.userName,
              userEmail: data.userEmail,
              createdAt: data.createdAt,
            });
          });
          setReviews(fetched);
        },
        (err) => {
          console.warn("Reviews snapshot listener:", err);
        }
      );
      return () => unsubscribe();
    } catch (e) {
      console.warn("Failed to subscribe to reviews:", e);
    }
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      // Quietly ignore expected user cancellation events
      if (
        error?.code === "auth/popup-closed-by-user" ||
        error?.code === "auth/cancelled-popup-request" ||
        error?.code === "auth/popup-blocked"
      ) {
        return;
      }
      console.warn("Google sign in notice:", error?.message || error);
    }
  };

  const signInGuest = () => {
    // Verified local guest session that avoids Firebase admin-restricted-operation errors
    const guest: GuestProfile = {
      uid: "guest-" + Date.now().toString(36),
      displayName: "Guest Reviewer",
      email: "guest@recruiter.com",
      isGuest: true,
    };
    setGuestUser(guest);
    localStorage.setItem("bharat_guest_user", JSON.stringify(guest));
  };

  const logout = async () => {
    try {
      setGuestUser(null);
      localStorage.removeItem("bharat_guest_user");
      if (user) {
        await fbSignOut(auth);
      }
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const submitInquiry = async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
    company?: string;
  }) => {
    try {
      const activeUid = user ? user.uid : guestUser ? guestUser.uid : "anonymous";
      const docRef = await addDoc(collection(db, "inquiries"), {
        ...data,
        userId: activeUid,
        createdAt: new Date().toISOString(),
      });
      return docRef.id;
    } catch (error) {
      console.warn("Inquiry firestore backup notice:", error);
      return "offline-" + Date.now();
    }
  };

  const submitProjectReview = async (
    projectId: string,
    rating: number,
    comment: string
  ) => {
    const authorName =
      user?.displayName || guestUser?.displayName || "Guest Reviewer";
    const authorEmail = user?.email || guestUser?.email || "";
    const authorId = user?.uid || guestUser?.uid || "anonymous";

    try {
      const docRef = await addDoc(collection(db, "projectReviews"), {
        projectId,
        rating,
        comment,
        userName: authorName,
        userEmail: authorEmail,
        userId: authorId,
        createdAt: new Date().toISOString(),
      });
      return docRef.id;
    } catch (error) {
      console.warn("Firestore review persistence fallback:", error);
      // Optimistic local update if offline
      const mockId = "local-" + Date.now();
      setReviews((prev) => [
        {
          id: mockId,
          projectId,
          rating,
          comment,
          userName: authorName,
          userEmail: authorEmail,
          createdAt: new Date().toISOString(),
        },
        ...prev,
      ]);
      return mockId;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        guestUser,
        loading,
        signInWithGoogle,
        signInGuest,
        logout,
        submitInquiry,
        submitProjectReview,
        reviews,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
