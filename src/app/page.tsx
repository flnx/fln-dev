import { Container } from '@/components/container/Container  ';
import { Projects } from '@/components/projects/Projects  ';
import { Showcase } from '@/components/showcase/Showcase  ';

export default function Home() {
    return (
        <section>
            <Container>
                <Showcase />
                <Projects />
            </Container>
        </section>
    );
}
