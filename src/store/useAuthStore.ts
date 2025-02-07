import { create } from 'zustand';

interface AuthState {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  resetAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  email: '',
  setEmail: (email) => set({ email }),
  password: '',
  setPassword: (password) => set({ password }),
  resetAuth: () => set({ email: '', password: '' }),
}));

export default useAuthStore;
