import { personSchema } from '@/static/seo-schemas/personSchema';
import { Container } from '@/components/container/Container';
import { Projects } from '@/components/projects/Projects';
import { Showcase } from '@/components/showcase/Showcase';

import projects from '@/constants/projects.json';

export default function Home() {
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Container>
        <Showcase />
        <h2 className="text-3xl mb-12 font-mono tracking-wide">Personal Projects</h2>
        <Projects projects={projects} />
      </Container>
    </section>
  );
}
