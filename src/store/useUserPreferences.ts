import create from 'zustand';
import { persist } from 'zustand/middleware';
import { dark } from '../styles/theme/dark';

type InitialState = {
  theme: typeof dark;
};

export const useUserPreferences = create<InitialState>(
  persist(
    () => ({
      theme: dark,
    }),
    {
      name: 'useUserPreferences',
    }
  )
);
