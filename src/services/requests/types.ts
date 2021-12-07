export type Manga = {
  end_date: string | null;
  image_url: string;
  mal_id: number;
  members: number;
  rank: number;
  score: number;
  start_date: string;
  title: string;
  type: string;
  url: string;
  volumes: number | null;
};

export type TopMangasResponse = {
  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string;
  top: Manga[];
};
