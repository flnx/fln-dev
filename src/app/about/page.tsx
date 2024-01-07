import { Container } from '@/components/container/Container';
import { Avatar, Image } from '@nextui-org/react';

const About = () => {
  return (
    <section className="absolute inset-0">
      <div className="h-40 w-full lg:h-64 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 z-0" />

      <Container>
        <header>
          <Image
            isBlurred
            radius="full"
            width={200}
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            alt="NextUI Album Cover"
            className="m-5 -mt-24"
          />
          {/* Avatar */}
          {/* Name */} {/* Icons */}
          {/* View Github Profile */}
        </header>
      </Container>
    </section>
  );
};

export default About;
