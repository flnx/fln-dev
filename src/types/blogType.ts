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

type BlogSEO = {
  id: number | null;
  metaTitle: string | null;
  metaDescription: string | null;
  structuredData: JSON | null;
}

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
  Seo?: BlogSEO;
  RelatedBlogs?: BlogDataProps;
};

export type BlogDataProps = {
  id: number;
  attributes: BlogAttributes;
};
