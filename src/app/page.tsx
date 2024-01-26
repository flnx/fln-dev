import { Container } from '@/components/container/Container';
import { Projects } from '@/components/projects/Projects';
import { Showcase } from '@/components/showcase/Showcase';
import { Blog } from '@/components/blog/Blog';

import { getLatestArticles } from './api/strapi/blogs';

import { personSchema } from '@/static/seo-schemas/personSchema';
import { BlogDataProps } from '@/types/blogType';
import projects from '@/constants/projects.json';

export default async function Home() {
  const blogs: { data: BlogDataProps[] } = await getLatestArticles();

  return (
    <section className="mt-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Container>
        <Showcase />
        <h2 className="text-3xl mb-12 font-mono tracking-wide">Personal Projects</h2>
        <Projects projects={projects} />

        <h2 className="text-3xl mb-12 font-mono tracking-wide mt-20">
          Latest Articles
        </h2>

        <section>
          <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.data.map((b) => (
              <Blog {...b} key={b.id} />
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
}
