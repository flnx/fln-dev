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
        <p>I'm a web developer with a primary focus on the frontend.</p>

        <p>
          I love building cool stuff on the internet. And by "cool stuff".. I mean
          crafting wacky inventions. The process for each new project
          is always a wild ride with a lot of factory malfunctions. But hey, I'm
          still here, still going strong, and still loving every minute of it.
        </p>

        <p>You can also find me on the street running or in the gym.</p>

        <p>
          I've recently decided to create a blog. I'll be sharing my tales of code
          triumphs and tech tribulations, hoping to provide fellow developers with
          some insights. Not only that but also to elevate my own understanding to a
          more profound level.
        </p>
      </article>
    </section>
  );
};

export default About;
