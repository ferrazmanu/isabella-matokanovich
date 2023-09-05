/* eslint-disable prettier/prettier */
export interface BlogProps {
  id: string;
  date: string;
  tags: Array<string>;
  title: string;
  slug: string;
  coverImage: CoverImageProps;
  content: ContentProps;
  excerpt: string;
  category: CategoriesProps;
}

export interface CategoriesProps {
  id: string;
  name: string;
}

interface CoverImageProps {
  url: string;
}

export interface ContentProps {
  text?: string;
  html?: any;
}

export interface IconProps {
  color?: string;
  width?: string;
  height?: string;
}

export interface SobreProps {
  title: string;
  subtitle: string;
  content: ContentProps;
}
