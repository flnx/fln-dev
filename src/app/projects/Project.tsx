import { Card, CardBody, Image, CardHeader, Chip, Divider } from '@nextui-org/react';
import Link from 'next/link';

import { ProjectProps } from '@/types/projectType';

export const Project = ({
  name,
  description,
  stack,
  live,
  sourceCode,
  imageUrls,
}: ProjectProps) => {
  return (
    <>
      <Card
        isBlurred
        className="bg-background/60 dark:bg-default-100/50 shadow-md sm:flex-row relative "
        shadow='none'
      >
        <CardHeader className="flex-1">
          <Image
            alt="Album cover"
            className="object-cover"
            src={imageUrls}
            width="100%"
          />
        </CardHeader>
        <CardBody className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{name}</h1>
          <p className="mb-8">{description}</p>
          <div className="flex mt-auto flex-wrap gap-2 mb-6">
            {stack.map((s) => (
              <Chip color="secondary" key={s}>
                {s}
              </Chip>
            ))}
          </div>

          <div className="flex gap-1">
            <Link
              href={live}
              className="w-28 py-3 rounded-md text-tiny text-white bg-slate-800 dark:bg-black/40 border border-violet-500/20 dark:border-violet-500/20 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Link>
            <Link
              href={sourceCode}
              className="w-28 py-3 rounded-md text-tiny text-white bg-slate-800 dark:bg-black/40 border border-violet-500/20 dark:border-violet-500/20 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </Link>
          </div>
        </CardBody>
      </Card>
      <Divider className="my-20 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400" />
    </>
  );
};
