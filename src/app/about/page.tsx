import { Container } from '@/components/container/Container';
import { Avatar, Image } from '@nextui-org/react';

const About = () => {
  return (
    <section className="absolute inset-0">
      <div className="h-40 w-full lg:h-72 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 z-0" />

      <Container>
        <header>
          <div className="flex">
            <div className="-mt-24">
              <Image
                isBlurred
                radius="full"
                width={150}
                src="/images/me.jpg"
                alt="NextUI Album Cover"
                className="m-5"
              />
            </div>

            <div className="ml-11 mt-2 h-14 flex items-center space-x-2">
              <h2 className="text-2xl">Kaloyan Georgiev</h2>
              <svg
                className="w-6 h-6 text-[#0070F3]"
                viewBox="0 0 20 20"
                fill="currentColor "
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </header>
      </Container>
    </section>
  );
};

export default About;
