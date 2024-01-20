import { Project } from '@/components/projects/Project';
import { ProjectProps } from '@/types/projectType';

type ProjectsProps = {
  projects: ProjectProps[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="pt-5 pb-5">
      <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <Project {...p} key={p.name} />
        ))}
      </div>
    </section>
  );
};
