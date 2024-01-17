import { Blog } from '@/components/blog/Blog';
import { Container } from '@/components/container/Container';

const Page = () => {
  return (
    <Container>
      {/* Featured */}
      <h1 className="text-4xl text-center mb-2 font-bold">IT Blog Page</h1>
      <p className="text-large text-center mb-20">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, perspiciatis.
      </p>
      <article className="mb-28">
        <Blog featured={true} />
      </article>
      {/* Blogs */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">Articles</h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </section>
    </Container>
  );
};

export default Page;