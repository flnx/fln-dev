import { Container } from '@/components/container/Container';
import { Project } from '@/components/projects/Project';

import projects from '@/constants/projects.json';

const Projects = () => {
  return (
    <Container>
      <div className="max-w-screen-lg m-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-12">All Projects</h1>

        {projects.map((p) => (
          <Project {...p} divider={true} key={p.name} />
        ))}

      </div>
    </Container>
  );
};

export default Projects;
