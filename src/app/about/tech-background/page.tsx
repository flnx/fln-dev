import { Divider } from '@nextui-org/react';
import { Skills } from './Skills';
import { Projects } from '@/components/projects/Projects';

import projects from '@/constants/projects.json';

const WorkHistory = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-5">
        Creating and deploying interactive & mobile-friendly applications
      </h1>

      <article className="[&>p]:mb-5 text-large">
        <code className="text-medium inline-block mb-2">Skills</code>
        <Skills />

        <Divider className="my-10" />

        <h1 className="text-2xl font-semibold mb-5">Personal projects</h1>

        <Projects projects={projects}/>
      </article>
    </section>
  );
};
export default WorkHistory;
