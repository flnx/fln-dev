import { Blog } from '@/components/blog/Blog';
import { Container } from '@/components/container/Container';

const Page = () => {
  return (
    <Container>
      {/* Featured */}
      <h1 className="text-4xl text-center mb-2 font-bold">IT Blog Page</h1>
      <p className="text-large text-center mb-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, perspiciatis.</p>
      <article>
        <Blog />

      </article>

      {/* Blogs */}
      <section></section>
    </Container>
  );
};

export default Page;
