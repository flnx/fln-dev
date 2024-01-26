import type { Metadata } from 'next';
import { Blog } from '@/components/blog/Blog';
import { Container } from '@/components/container/Container';
import { FeaturedBlog } from '@/components/blog/Featured';

import { BlogDataProps } from '@/types/blogType';
import { getBlogs } from '../api/strapi/blogs';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'A technical blog about web development and articles on NextJS, React, HTML, CSS, Front-end development and more.',
  keywords:
    'React, NextJS, JavaScript, HTML, CSS, Web Development, Front-end, SSR, Server Side Components',
};

type BlogsProp = {
  data: BlogDataProps[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
  error?: boolean;
};

const Page = async () => {
  const blogs: BlogsProp = await getBlogs();
  const featured: BlogDataProps | undefined = blogs.data.find(
    (b) => b.attributes.featured,
  );

  return (
    <Container>
      {/* Featured */}
      <h1 className="text-4xl text-center mb-2 font-bold mt-8">Blog</h1>
      <p className="text-large text-center mb-20">
        Web Development Insights and IT Essentials
      </p>

      {blogs.error ? (
        <section className="text-center">
          <p className="text-xl text-pink-600">
            The blog is currently on a break. We'll be back soon with fresh content
            and insightful discussions.
          </p>
        </section>
      ) : (
        <>
          <article className="mb-28">
            {featured && <FeaturedBlog {...featured} />}
          </article>
          {/* Blogs */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Articles</h2>
            <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.data.map((b) => (
                <Blog {...b} key={b.id} />
              ))}
            </div>
          </section>
        </>
      )}
    </Container>
  );
};

export default Page;
