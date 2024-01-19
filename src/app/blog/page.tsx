import { Blog } from '@/components/blog/Blog';
import { Container } from '@/components/container/Container';
import { getBlogs } from '../api/strapi/blogs';
import { BlogDataProps } from '@/types/blogType';
import { FeaturedBlog } from '@/components/blog/Featured';

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
};

const Page = async () => {
  const blogs: BlogsProp = await getBlogs();

  return (
    <Container>
      {/* Featured */}
      <h1 className="text-4xl text-center mb-2 font-bold">IT Blog Page</h1>
      <p className="text-large text-center mb-20">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, perspiciatis.
      </p>
      <article className="mb-28">
        <FeaturedBlog {...blogs.data[0]} />
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
    </Container>
  );
};

export default Page;
