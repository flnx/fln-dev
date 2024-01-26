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
      `${process.env.STRAPI_HOST}/api/blogs?sort=createdAt:desc&fields[0]=title&fields[1]=description&fields[2]=date&fields[3]=categories&fields[4]=readTime&fields[5]&fields[6]=slug&fields[7]=featured&populate[0]=imgUrl`,
      authHeaders(),
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.error(err);
    return {
      data: [],
      error: true,
    };
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

    const article = await res.json();

    if (article.data.length === 0) {
      throw new Error("Not Found");
    }

    return article;
  } catch (err) {
    console.error(err);
    return {
      data: [],
      error: true,
    };
  }
};

export const getLatestArticles = async () => {
  try {
    const res = await fetch(
      `${process.env.STRAPI_HOST}/api/blogs?sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=3&fields[0]=title&fields[1]=description&fields[2]=date&fields[3]=categories&fields[4]=readTime&fields[5]&fields[6]=slug&populate[0]=imgUrl`,
      authHeaders(),
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.error(err);
    return {
      data: [],
      error: true,
    };
  }
};
