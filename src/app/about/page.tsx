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
          I'm a web developer with a knack for building interesting things on the
          internet
        </p>

        <p>
          I love seeking new and innovative ways to enhance my skills and the
          projects I work on. Each new endeavor is thrilling journey, filled with
          challenges and the occasional unexpected turn. Still loving every minute of
          it. I remain committed to learning and delivering quality work.
        </p>

        <p>You can also find me on the street running or in the gym.</p>

        <p>
          I've recently decided to create a blog. I'll be sharing my tales of code
          triumphs and tech tribulations, hoping to provide helpful information and
          some insights. Not only that but also to elevate my own understanding to a
          more profound level.
        </p>
      </article>
    </section>
  );
};

export default About;
