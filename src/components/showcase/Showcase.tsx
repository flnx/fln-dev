import Image from 'next/image';
import { Link } from '@nextui-org/react';

export const Showcase = () => {
  return (
    <section className="mb-16">
      <div className="md:flex flex-row-reverse gap-4 p-2">
        <div className="flex flex-1 gap-4 relative mb-5">
          <Image
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_900,q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_snowboarding_flying_red"
            width={900}
            height={0}
            alt="image"
            sizes="100vw"
            className="w-full h-auto object-contain mb-12"
          />
        </div>
        <div className="flex-1 pt-5 md:pt-32">
          <div className="flex flex-col gap-20 lg:pr-28">
            <h1 className="text-3xl md:text-4xl !leading-tight">
              I'm Kaloyan, I like coding and sharing my experiences in the world of
              web development
            </h1>
            <div className="flex flex-col gap-2">
              <Link
                isBlock
                href="/blog"
                color="foreground"
                className="py-5 px-10 rounded-lg mr-auto bg-primary ground font-semibold"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
