import { Card, CardFooter, CardHeader, Chip, Image } from '@nextui-org/react';
import { ProjectProps } from '@/types/projectType';
import Link from 'next/link';

export const Project = ({
  name,
  description,
  stack,
  live,
  sourceCode,
  imageUrls,
}: ProjectProps) => {
  return (
    <div className="mb-5">
      <p className="text-tiny text-center text-white/80 uppercase font-bold mb-3">
        {description}
      </p>
      <Card isFooterBlurred className="border-none bg-content1 h-full" radius="lg">
        <CardHeader className="absolute z-10 flex-col !items-start pointer-events-none hidden xl:flex bg-black/20">
          <p className="text-tiny text-white/80 uppercase font-bold">{name}</p>
        </CardHeader>
        <Image
          alt={name}
          className="z-0 w-full min-h-72 object-cover !transition-all brightness-90 hover:brightness-100"
          src={imageUrls}
          isZoomed
          width={1280}
          height={1024}
        />

        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 py-1.5">
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
    </div>
  );
};
