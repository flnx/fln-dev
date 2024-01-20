import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Frontend web developer with a passion for React, Next.js, and cool projects. Constantly learning and having fun. Explore my coding journey, along with my interests in running, fitness, and blogging about web development stuff and more!',
};

const About = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-7">Hi there👋</h1>
      <article
        className="max-w-screen-xs prose prose-p:text-primary"
        aria-label="about me"
      >
        <p>
          I'm a web developer with a primary focus on the frontend. I finished my
          studies in SoftUni (Bulgaria) in early 2023.
        </p>

        <p>
          I love working on projects that I'm passionate about. My goal is to have
          fun and learn new things everyday. I also enjoy reading/watching IT related
          stuff, sci-fi movies, listening to podcasts and audiobooks. You can also
          find me on the street running or in the gym.
        </p>

        <p>
          I recently decided to create a blog and I'd love to share my knowledge and
          experience along the way.
        </p>
      </article>
    </section>
  );
};

export default About;
