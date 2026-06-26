export type Tag = {
  id: string;
  name: string;
  [key: string]: unknown;
};

export type ArtefactsItem = {
  id: string;
  title: string;
  code: string;
  year: string;
  bannerImage: string;
  images: string[];
  description: string[];
  tags: Tag[];
};

export type LogItem = {
  id: string;
  title: string;
  description: string[];
  code: string;
  bannerImage: string;
};

export type LogItem_V2 = {
  id: string;
  code: string;
  cover_image: string;
  creator: string;
  description: string[];
  log_number: number;
  tags: Tag[];
  title: string;
  year: string;
};
