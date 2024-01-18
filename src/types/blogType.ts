type imageFormat = {
  url: string;
  width: number;
  height: number;
}

type imageFormats = {
  large: imageFormat;
  small: imageFormat;
  medium: imageFormat;
  thumbNail: imageFormat;
}

type BlogImage = {
  data: {
    id: number;
    attributes: {
      name: "string";
      alternativeText: null | string;
      width: number;
      height: number;
      formats: imageFormats;
      url: string;
    };
  };
};

type BlogAttributes = {
  title: string;
  slug: string;
  featured?: boolean | null;
  categories: string;
  date: string;
  description: string;
  readTime: number;
  keywords: string;
  preventIndexing: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: string;
  imgUrl: BlogImage;
};

export type BlogData = {
  id: number;
  attributes: BlogAttributes;
};
