import { Container } from '@/components/container/Container';
import { UserHeader } from '@/components/user-header/UserHeader';

const About = () => {
  return (
    <section className="absolute inset-0">
      <div className="h-40 w-full md:h-72 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 z-0" />

      <Container>
        <UserHeader />
      </Container>
    </section>
  );
};

export default About;
