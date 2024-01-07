import { Container } from '@/components/container/Container';
import { UserHeader } from '@/components/user-header/UserHeader';
import { Tabs } from '@/components/tabs/Tabs';
import { Divider } from '@nextui-org/react';

export const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="absolute inset-0">
      <div className="h-40 w-full md:h-72 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 z-0" />

      <Container>
        <UserHeader />

        <div className="w-96 flex flex-col mt-10">
          <Tabs />
          {children}
        </div>
        <Divider className="my-3" />
      </Container>
    </section>
  );
};

export default AboutLayout;
