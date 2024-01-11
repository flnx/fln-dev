import { Container } from '@/components/container/Container';
import { Linkedin } from 'lucide-react';

import Link from 'next/link';
import { GithubIcon } from '../github-icon/GithubIcon';

export const Footer = () => {
  return (
    <footer className="border-t-1 py-14 pb-14">
      <Container>
        <div className="flex justify-between gap-5">
          <h2 className="text-2xl">Kaloyan Georgiev</h2>
          <div>
            <p className="text-large mb-3">Connect with me</p>
            <div className="flex gap-2 items-center">
              <Link
                href="https://github.com/flnx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={8} />
                {/* <Github size={36} className="rounded-full bg-white p-1" color='#222' fill="#000" /> */}
              </Link>
              <Linkedin size={33} strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="text-small">
          &copy; {new Date().getFullYear()} FLN-dev. All Rights Reserved
        </div>
      </Container>
    </footer>
  );
};
