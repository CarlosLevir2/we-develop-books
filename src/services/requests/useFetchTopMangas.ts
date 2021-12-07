import { useQuery } from 'react-query';
import { api } from '../api';
import { TopMangasResponse } from './types';

async function getTopMangas() {
  const { data } = await api.get<TopMangasResponse>('top/manga');

  return data;
}

export default function useFetchTopMangas() {
  return useQuery('mangas', getTopMangas);
}
