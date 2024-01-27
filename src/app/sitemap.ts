import { MetadataRoute } from "next";
import { getBlogs } from "./api/strapi/blogs";
import { BlogDataProps } from "@/types/blogType";

type BlogsProp = {
  data: BlogDataProps[];
  error?: boolean;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data }: BlogsProp = await getBlogs();

  const blogRoutes = data.map((blog) => ({
    url: `https://webdevkalo.vercel.app/blog/${blog.attributes.slug}`,
    lastModified: blog.attributes.updatedAt,
  }));

  const routes = [
    "/",
    "/projects",
    "/blog",
    "/about",
    "/about/tech-background",
    "/about/contact",
  ].map((route) => ({
    url: `https://webdevkalo.vercel.app${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogRoutes];
}
