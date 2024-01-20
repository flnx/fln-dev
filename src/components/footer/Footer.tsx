import { Container } from '@/components/container/Container';
import { Linkedin, MailCheck } from 'lucide-react';
import { GithubIcon } from '../github-icon/GithubIcon';

import Link from 'next/link';

const paths = [
  { name: 'Terms of Service (in Progress)', href: '#' },
  { name: 'Privacy (in Progress)', href: '#' },
  { name: 'About', href: '/about' },
];

export const Footer = () => {
  return (
    <footer className="border-t-1 py-14 pb-14 text-small">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <SectionLinks />
          <Aside />
        </div>
        <Rights />
      </Container>
    </footer>
  );
};

export const SectionLinks = () => {
  return (
    <section>
      <div className="md:flex gap-56">
        {/* Title */}
        <div>
          <h3 className="text-xl sm:text-2xl mb-3">Kaloyan Georgiev</h3>

          <div className="flex gap-2 items-center mb-10">
            <Link
              href="https://github.com/flnx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={8} />
            </Link>
            <Linkedin size={33} strokeWidth={2} />
          </div>
        </div>

        {/* Col 1 */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl mb-3 font-bold">Resources</h3>
          <ul className="flex flex-col gap-3">
            {paths.map((p) => (
              <li key={p.name}>
                <Link
                  href={p.href}
                  className="border-b-1 border-transparent hover:border-foreground transition-all"
                  scroll={true}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export const Aside = () => {
  return (
    <aside>
      <h3 className="text-xl mb-3 font-bold">Connect with me</h3>

      <Link
        href="mailto:definitelywebdev@yahoo.com"
        className="hover:text-pink-700 transition-all"
      >
        <div className="flex gap-2 mb-5">
          <MailCheck />
          definitelywebdev@yahoo.com
        </div>
      </Link>
    </aside>
  );
};

export const Rights = () => {
  return (
    <div className="text-small mt-10">
      &copy; {new Date().getFullYear()} FLN-dev. All Rights Reserved
    </div>
  );
};
