import { Card, CardBody, Image, CardHeader, Chip } from '@nextui-org/react';
import Link from 'next/link';

export const Project = () => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 sm:flex-row relative"
      shadow="sm"
      isFooterBlurred
    >
      <CardHeader className="flex-1">
        <Image
          alt="Album cover"
          className="object-cover"
          shadow="md"
          src="/images/hero-card.jpeg"
          width="100%"
        />
      </CardHeader>
      <CardBody className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Project name</h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, accusantium?
        </p>
        <div className="flex mt-auto flex-wrap gap-2 mb-6">
          <Chip>React</Chip>
          <Chip color="secondary">NextJS</Chip>
          <Chip color="success">NodeJS</Chip>
          <Chip color="danger">Prisma</Chip>
        </div>

        <div className="flex gap-1">
          <Link
            href={'#'}
            className="w-28 py-3 rounded-md text-tiny text-white bg-black/40 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </Link>
          <Link
            href={'#'}
            className="w-28 py-3 rounded-md text-tiny text-white bg-black/40 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};
