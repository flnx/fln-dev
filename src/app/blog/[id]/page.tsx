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

  const { attributes } = article.data[0];

  return (
    <Container>
      <header className="max-w-screen-md m-auto mb-16">
        <h1 className="font-bold text-4xl mb-6">{attributes.title}</h1>
        <div className="flex justify-between">
          <time
            dateTime={attributes.date}
            className="text-default-500 text-large font-semibold inline-block mb-10"
          >
            {attributes.date}
          </time>
          <Chip color="secondary">{attributes.categories}</Chip>
        </div>
        <Image
          src={attributes.imgUrl.data.attributes.url}
          alt={attributes.imgUrl.data.attributes.alternativeText || 'blog image'}
          width={attributes.imgUrl.data.attributes.width}
          height={attributes.imgUrl.data.attributes.height}
          className="object-cover"
          style={{ maxHeight: '34rem' }}
        />
      </header>
      <article className="max-w-screen-md m-auto text-lg dark:text-slate-300 break-words">
        <div
          dangerouslySetInnerHTML={{ __html: attributes.content }}
          className="prose prose-lg text-primary prose-headings:text-secondary"
        />
      </article>
    </Container>
  );
};

export default BlogArticle;
