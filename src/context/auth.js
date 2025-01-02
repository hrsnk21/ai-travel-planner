import { create } from 'zustand';
import { auth, googleProvider, signInWithPopup, signOut } from '../services/firebse';
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const useAuthStore = create((set) => {

  setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.error("Failed to set auth persistence:", error);
  });

  const initializeAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        set({
          user: user,
          isAuthenticated: true,
        });
      } else {
        set({
          user: null,
          isAuthenticated: false,
        });
      }
    });
  };

  // Call the initializer function during store creation
  initializeAuthState();

  return {
    user: null,
    isAuthenticated: false,

    signInWithGoogle: async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        set({
          user: result.user,
          isAuthenticated: true,
        });
        toast.success('Signed in successfully!');
      } catch (error) {
        toast.error('Sign in failed');
        console.error(error);
      }
    },

    signOut: async () => {
      try {
        await signOut(auth);
        set({
          user: null,
          isAuthenticated: false,
        });
        toast.success('Signed out successfully!');
      } catch (error) {
        toast.error('Sign out failed');
        console.error(error);
      }
    },
  };
});

export default useAuthStore;
