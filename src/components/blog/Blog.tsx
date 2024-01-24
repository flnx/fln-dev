import { Card, CardHeader, CardBody, Chip, Image } from '@nextui-org/react';
import { BlogDataProps } from '@/types/blogType';

import Link from 'next/link';

export const Blog = (blogData: BlogDataProps) => {
  const { attributes: blog } = blogData;
  const { url, alternativeText, formats } = blog?.imgUrl.data.attributes ?? {};
  const { width, height } = formats?.medium ?? {};

  return (
    <Link href={`/blog/${blog?.slug || ''}`}>
      <Card className="gap-5 bg-transparent shadow-none h-full">
        <CardHeader className="overflow-visible p-0 flex-1">
          <Image
            alt={alternativeText || 'blog image'}
            className="object-cover rounded-xl w-full m-auto flex"
            style={{
              aspectRatio: '1.75/1',
            }}
            src={url || '/images/hero-card.jpeg'}
            width={width}
            height={height}
          />
        </CardHeader>
        <CardBody className="pb-0 pt-2 flex-col items-start p-0 gap-1">
          <Chip color="secondary" className="mb-3">
            {blog?.categories}
          </Chip>
          <h4 className="font-bold text-xl mb-5 min-h-14">{blog?.title}</h4>
          <small className="text-default-500 text-medium mb-5 min-h-20 block">
            {blog?.description}
          </small>
          <div className="mt-auto flex justify-between w-full pb-2">
            <time dateTime={blog?.date}>{blog?.date}</time>
            <span>{blog?.readTime} min read</span>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};
