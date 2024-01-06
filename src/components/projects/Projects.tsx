import { Project } from './Project';
import { ProjectProps } from '@/types/projectType';

type ProjectsProps = {
    projects: ProjectProps[];
};

export const Projects = ({ projects }: ProjectsProps) => {
    return (
        <section className="pt-5 pb-5">
            <h2 className="text-3xl mb-5">Personal Projects</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <Project {...p} key={p.name}/>
                ))}
            </div>
        </section>
    );
};
