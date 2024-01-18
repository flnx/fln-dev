import { getBlogArticle } from '@/app/api/strapi/blogs';
import { Container } from '@/components/container/Container';
import { BlogDataProps } from '@/types/blogType';
import { Chip, Image } from '@nextui-org/react';
import { notFound } from 'next/navigation';

type BlogArticlePageProps = {
  params: {
    id: string;
  };
};

const BlogArticle = async ({ params }: BlogArticlePageProps) => {
  const article: { data: BlogDataProps[] } = await getBlogArticle(params.id);

  if (article.data.length === 0) {
    notFound();
  }

  return (
    <Container>
      <header className="max-w-screen-md m-auto mb-16">
        <h1 className="font-bold text-4xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum.
        </h1>
        <div className="flex justify-between">
          <time
            dateTime="15.01.2024"
            className="text-default-500 text-large font-semibold inline-block mb-10"
          >
            15.01.2024
          </time>
          <Chip color="secondary">NextJS</Chip>
        </div>
        <Image src="/images/hero-card.jpeg" alt="image" />
      </header>
      <article className="max-w-screen-md m-auto text-lg dark:text-slate-300 break-words">
        <div
          dangerouslySetInnerHTML={{ __html: article.data[0].attributes.content }}
          className="prose prose-lg text-primary prose-headings:text-secondary"
        />
      </article>
    </Container>
  );
};

export default BlogArticle;
