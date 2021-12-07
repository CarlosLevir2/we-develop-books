import create from 'zustand';
import { persist } from 'zustand/middleware';

type InitialState = {
  favorites?: number[];
};

export const useFavoriteMangas = create<InitialState>(
  persist(() => ({}), {
    name: 'useFavoriteMangas',
  })
);
