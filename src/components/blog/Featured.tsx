import { Card, CardHeader, CardBody, Image, Chip } from '@nextui-org/react';
import { BlogDataProps } from '@/types/blogType';

import Link from 'next/link';

export const FeaturedBlog = (blogData: BlogDataProps) => {
  const { attributes: blog } = blogData;
  const { url, alternativeText, formats } = blog?.imgUrl.data.attributes ?? {};
  const { width, height } = formats?.medium ?? {};

  return (
    <Link href={`/blog/${blog?.slug || ''}`}>
      <Card className="lg:flex-row gap-5 bg-transparent shadow-none">
        <CardHeader className="overflow-visible p-0 flex-1">
          <Image
            alt={alternativeText || 'blog image'}
            className="object-cover rounded-xl"
            src={url || '/images/hero-card.jpeg'}
            width={width}
            height={height}
          />
        </CardHeader>
        <CardBody className="pb-0 pt-2 flex-col items-start flex-1 p-5 gap-1">
          {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
          <Chip color="secondary" className="mb-3">
            {blog?.categories}
          </Chip>
          <h4 className="font-bold text-xl mb-5 lg:text-4xl">{blog?.title}</h4>
          <small className="text-default-500 text-medium mb-5">
            {blog?.description}
          </small>
          <div className="mt-auto flex justify-between w-full pb-2">
            <time dateTime="20.02.2012">{blog?.date}</time>
            <span>{blog?.readTime} min read</span>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};
