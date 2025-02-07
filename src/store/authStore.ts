import { create } from 'zustand';

type AuthState = {
  user: null | string;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void; // Adicionando a função signup
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (email, password) => {
    // Lógica de autenticação aqui
    set({ user: email });
  },
  signup: (name, email, password) => {
    // Lógica de registro aqui
    console.log('Usuário registrado:', { name, email, password });
    set({ user: email }); // Você pode querer armazenar o nome ou outros dados também
  },
  logout: () => set({ user: null }),
}));