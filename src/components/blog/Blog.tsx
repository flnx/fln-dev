import { Card, CardHeader, CardBody, Image, Chip } from '@nextui-org/react';
import Link from 'next/link';

type BlogProps = {
  featured?: boolean;
};

export const Blog = ({ featured }: BlogProps) => {
  return (
    <Link href="/blog/1">
    <Card
      className={`${featured ? 'lg:flex-row' : ''} gap-5 bg-transparent shadow-none`}
    >
      <CardHeader className="overflow-visible p-0 flex-1">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card.jpeg"
        />
      </CardHeader>
      <CardBody
        className={`pb-0 pt-2 flex-col items-start ${featured ? 'flex-1 p-5' : 'p-0'} gap-1`}
      >
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
        <Chip color="secondary" className="mb-3">
          React
        </Chip>
        <h4 className={`font-bold text-xl mb-5 ${featured ? 'lg:text-4xl' : ''}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque.
        </h4>
        <small className="text-default-500 text-medium mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
          nisi eveniet atque consequatur nam aliquid nesciunt quas nobis quia,
          dolorem perspiciatis optio asperiores repudiandae.
        </small>
        <div className="mt-auto flex justify-between w-full pb-2">
          <time dateTime="20.02.2012">20.02.2012</time>
          <span>3 min read</span>
        </div>
      </CardBody>
    </Card>
    </Link>

  );
};
