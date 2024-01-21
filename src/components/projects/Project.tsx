import { Card, CardBody, Divider, CardHeader, Chip } from '@nextui-org/react';
import { ProjectProps } from '@/types/projectType';
import Link from 'next/link';
import Image from 'next/image';

type ExtendedProjectProps = ProjectProps & { setSizes?: boolean };

export const Project = ({
  name,
  description,
  stack,
  live,
  sourceCode,
  imageUrls,
  divider,
  setSizes,
}: ExtendedProjectProps) => {
  return (
    <>
      <Card
        isBlurred
        className={`bg-background/60  dark:bg-default-100/50 shadow-md relative`}
        shadow="none"
      >
        <CardHeader className="flex-2">
          <Image
            alt="Album cover"
            className="object-cover lg:min-h-60 rounded-lg"
            src={imageUrls}
            width={1920}
            height={1080}
            sizes={
              setSizes
                ? '(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw'
                : '(min-width: 1024px) 50vw, 100vw'
            }
            quality={95}
          />
        </CardHeader>
        <CardBody className="flex-1 overflow-visible">
          <h1 className="text-2xl font-bold mb-4">{name}</h1>
          <p className="mb-8">{description}</p>
          <div className="flex mt-auto flex-wrap gap-2 mb-6">
            {stack.map((s) => (
              <Chip
                className="bg-pink-800 text-white dark:bg-teal-400/10 dark:text-teal-300"
                key={s}
              >
                {s}
              </Chip>
            ))}
          </div>

          <div className="flex gap-1">
            <Link
              href={live}
              className="w-28 py-3 rounded-md text-tiny text-white bg-zinc-900 dark:bg-black/10 border border-transparent dark:border-teal-400/5 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Link>
            <Link
              href={sourceCode}
              className="w-28 py-3 rounded-md text-tiny text-white bg-zinc-900 dark:bg-black/10 border border-transparent dark:border-teal-400/5 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </Link>
          </div>
        </CardBody>
      </Card>
      {divider && (
        <Divider className="my-20 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400" />
      )}
    </>
  );
};
