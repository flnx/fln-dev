import { Divider } from '@nextui-org/react';
import { Skills } from './Skills';

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
      </article>
    </section>
  );
};
export default TechBackground;
