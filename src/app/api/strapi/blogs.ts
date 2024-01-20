const authHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      "Content-Type": "application/json",
    },
  };
};

export const getBlogs = async () => {
  try {
    const res = await fetch(
      `${process.env.STRAPI_HOST}/api/blogs?populate=imgUrl&thumbnail=true`,
      authHeaders(),
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw err;
  }
};

export const getBlogArticle = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.STRAPI_HOST}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
      authHeaders(),
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw err;
  }
};

export const getLatestArticles = async () => {
  try {
    const res = await fetch(
      `${process.env.STRAPI_HOST}/api/blogs?sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=3&fields[0]=title&fields[1]=description&fields[2]=date&fields[3]=categories&fields[4]=readTime&fields[5]&populate[0]=imgUrl`,
      authHeaders(),
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw err;
  }
};