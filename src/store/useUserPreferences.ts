import create from 'zustand';
import { persist } from 'zustand/middleware';

type InitialState = {
  themeName: 'dark' | 'light';
  toggleTheme: () => void;
};

export const useUserPreferences = create<InitialState>(
  persist(
    (set, get) =>
      ({
        themeName: 'dark',
        toggleTheme: () => {
          const currentThemeName = get().themeName;

          const newTheme = currentThemeName === 'dark' ? 'light' : 'dark';

          set({ themeName: newTheme });
        },
      } as InitialState),
    {
      name: 'useUserPreferences',
    }
  )
);
