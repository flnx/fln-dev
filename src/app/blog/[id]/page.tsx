import { getBlogArticle } from '@/app/api/strapi/blogs';
import { Container } from '@/components/container/Container';
import { BlogDataProps } from '@/types/blogType';
import { Chip, Image } from '@nextui-org/react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const article: { data: BlogDataProps[] } = await getBlogArticle(params.id);

  if (article.data.length === 0) return {};

  const { title, description, Seo, keywords } = article.data[0].attributes;

  return {
    title: Seo?.metaTitle ?? title,
    description: Seo?.metaDescription ?? description,
    keywords: keywords ?? '',
  };
};

const BlogArticle = async ({ params }: Props) => {
  const article: { data: BlogDataProps[] } = await getBlogArticle(params.id);

  if (article.data.length === 0) {
    notFound();
  }

  const { attributes } = article.data[0];
  const { url, alternativeText, width, height } = attributes.imgUrl.data.attributes;

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
          src={url}
          alt={alternativeText || 'blog image'}
          width={width}
          height={height}
          className="object-cover"
          style={{ maxHeight: '34rem' }}
        />
      </header>
      <article className="max-w-screen-md m-auto text-lg dark:text-slate-300 break-words">
        <div
          dangerouslySetInnerHTML={{ __html: attributes.content }}
          className="prose prose-lg text-primary prose-headings:text-secondary prose-strong:text-primary"
        />
      </article>
    </Container>
  );
};

export default BlogArticle;
