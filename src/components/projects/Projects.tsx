import { Project } from './Project';
import { ProjectProps } from '@/types/projectType';

type ProjectsProps = {
  projects: ProjectProps[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="pt-5 pb-5">
      <h2 className="text-3xl mb-8">Personal Projects</h2>
      <div className="grid gap-5 grid-cols-1 xl:gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <Project {...p} key={p.name} />
        ))}
      </div>
    </section>
  );
};
