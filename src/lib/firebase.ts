import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInAnonymously, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Dynamically detect local config file if present without failing builds when omitted in GitHub
const configModules = import.meta.glob("../../firebase-applet-config.json", { eager: true });
const fileConfig = (configModules["../../firebase-applet-config.json"] as any)?.default || {};

// Read from secure environment variables first, falling back to local git-ignored config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || fileConfig.apiKey || "AIzaSy_DEV_KEY_PLACEHOLDER",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || fileConfig.authDomain || "app-portfolio.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || fileConfig.projectId || "app-portfolio",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || fileConfig.storageBucket || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || fileConfig.messagingSenderId || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || fileConfig.appId || "",
};

let app: FirebaseApp;
try {
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
} catch {
  // Fallback app initialization with placeholder if missing
  app = initializeApp(
    {
      apiKey: "AIzaSy_DEV_KEY_PLACEHOLDER",
      projectId: "app-portfolio",
    },
    "fallback"
  );
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export { signInWithPopup, signInAnonymously, signOut };
