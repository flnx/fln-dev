import { Container } from '@/components/container/Container';
import { Project } from './Project';
import { Divider } from '@nextui-org/react';

const Projects = () => {
  return (
    <Container>
      <div className="max-w-screen-lg m-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-12">All Projects</h1>
        <Project />
        <Divider className="my-12 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400" />
        <Project />
        <Divider className="my-12 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400" />
        <Project />
        <Divider className="my-12 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400" />
        <Project />
        <Divider className="my-12 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400" />
        <Project />
        <Divider className="my-12 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400" />
        <Project />
        <Divider className="my-12 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400" />
        <Project />
        <Divider className="my-12 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400" />
        <Project />
      </div>
    </Container>
  );
};

export default Projects;
