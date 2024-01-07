import Link from 'next/link';

const About = () => {
  return (
    <section>
      <h1>About</h1>
      <Link href="/about/work-history">Work History</Link>
    </section>
  );
};

export default About;
