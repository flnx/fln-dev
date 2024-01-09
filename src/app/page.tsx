import { Container } from '@/components/container/Container';
import { Projects } from '@/components/projects/Projects';
import { Showcase } from '@/components/showcase/Showcase';

import projects from '@/constants/projects.json';

export default function Home() {
  return (
    <section>
      <Container>
        <Showcase />
        <h2 className="text-2xl mb-8">Personal Projects</h2>
        <Projects projects={projects} />
      </Container>
    </section>
  );
}
