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
  const article: { data: BlogDataProps[]; error?: boolean } = await getBlogArticle(
    params.id,
  );

  if (article.error) return {};

  const { title, description, Seo, keywords, slug, imgUrl } = article.data[0].attributes || {};

  return {
    title: Seo?.metaTitle ?? title,
    description: Seo?.metaDescription ?? description,
    keywords: keywords ?? '',
    openGraph: {
      title: title,
      description: description,
      siteName: 'webdevkalo',
      url: `https://webdevkalo.vercel.app/${slug}`,
      type: 'article',
      locale: 'en-US',
      authors: 'Kaloyan Georgiev',
      images: {
        url: imgUrl.data.attributes.url,
        width: imgUrl.data.attributes.width,
        height: imgUrl.data.attributes.height,
        alt: imgUrl.data.attributes.alternativeText || `${title} image`,
      },
    },
  };
};

const BlogArticle = async ({ params }: Props) => {
  const article: { data: BlogDataProps[]; error?: boolean } = await getBlogArticle(
    params.id,
  );

  if (article.error) {
    notFound();
  }

  const { attributes } = article.data[0];
  const { url, alternativeText, width, height } = attributes.imgUrl.data.attributes;

  const structuredData = attributes.Seo?.structuredData;

  return (
    <Container>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
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
      <article className="max-w-screen-md m-auto">
        <div
          dangerouslySetInnerHTML={{ __html: attributes.content }}
          className="prose prose-lg break-words text-primary prose-headings:text-secondary prose-strong:text-primary dark:prose-blockquote:text-slate-300 bg-code dark:prose-a:text-blue-700"
        />
      </article>
    </Container>
  );
};

export default BlogArticle;
