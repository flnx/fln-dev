import { Divider } from '@nextui-org/react';
import { Skills } from './Skills';
import { Projects } from '@/components/projects/Projects';

import projects from '@/constants/projects.json';

const TechBackground = async () => {
  return (
    <section>
      <h1 className="text-xl font-semibold mb-10">
        Creating and deploying interactive & mobile-friendly applications
      </h1>

      <article>
        <code className="text-medium inline-block mb-5">Skills</code>
        <Skills />

        <Divider className="my-12 max-w-screen-md" />

        <h1 className="text-2xl font-semibold mb-10">Personal projects</h1>
        <Projects projects={projects} />
      </article>
    </section>
  );
};
export default TechBackground;
