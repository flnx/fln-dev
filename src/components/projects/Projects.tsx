import { Project } from './Project';
import { ProjectProps } from '@/types/projectType';

type ProjectsProps = {
  projects: ProjectProps[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="pt-5 pb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-8">
        {projects.map((p) => (
          <Project {...p} key={p.name} />
        ))}
      </div>
    </section>
  );
};