import { Card, CardFooter, Image, CardHeader, Chip } from '@nextui-org/react';
import { ProjectProps } from '@/types/projectType';
import Link from 'next/link';

export const Project = ({
  name,
  description,
  stack,
  live,
  sourceCode,
}: ProjectProps) => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{name}</p>
        <h4 className="text-white font-medium text-large">{description}</h4>
      </CardHeader>
      <Image
        alt="Woman listing to music"
        className="z-0 w-full h-full object-cover"
        width={600}
        height={0}
        src="/images/hero-card.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col gap-1 self-start">
            {stack.slice(0, 2).map((name) => (
              <Chip
                size="sm"
                variant="bordered"
                className="border-white text-white"
                key={name}
              >
                {name}
              </Chip>
            ))}
          </div>
          <div className="flex flex-col gap-1 self-start">
            {stack.slice(2, Math.min(stack.length, 4)).map((name) => (
              <Chip
                size="sm"
                variant="bordered"
                className="border-white text-white"
                key={name}
              >
                {name}
              </Chip>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1 ml-auto">
          <Link
            href={live}
            className="flex justify-center rounded-md p-2 lg:px-3.5 lg:py-2.5 text-tiny text-white bg-black/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </Link>
          <Link
            href={sourceCode}
            className="flex justify-center rounded-md p-2 lg:px-3.5 lg:py-2.5 text-tiny text-white bg-black/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
