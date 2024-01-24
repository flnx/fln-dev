'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from '@nextui-org/react';

const paths = [
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
];

export const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = (bool: boolean) => setIsOpen(bool);

  const isActive = (path: string) => path === pathname;
  const activeClass = (path: string) => path === pathname ? 'text-pink-600' : 'foreground';

  return (
    <Navbar
      className="py-5"
      shouldHideOnScroll
      maxWidth="2xl"
      onMenuOpenChange={handleMenu}
      isMenuOpen={isOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Logo*/}
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className={`font-bold text-2xl ${activeClass('/')}`}
            aria-current={isActive('/') ? 'page' : false}
            onClick={() => handleMenu(false)}
          >
            bad engineer
          </Link>
        </NavbarBrand>
        <NavbarItem className="ml-2">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Desktop Logo*/}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className={`font-bold text-2xl ${activeClass('/')}`}
            aria-current={isActive('/') ? 'page' : false}
          >
            bad engineer
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop */}
      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {paths.map((p) => (
          <NavbarItem isActive={isActive(p.href)} key={p.name}>
            <Link
              href={p.href}
              aria-current={isActive(p.href) ? 'page' : false}
              className={`text-lg font-medium ${activeClass(p.href)}`}
            >
              {p.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile */}
      <NavbarMenu className="pt-14">
        {paths.map((p) => (
          <NavbarMenuItem isActive={isActive(p.href)} key={p.name}>
            <Link
              href={p.href}
              aria-current={isActive(p.href) ? 'page' : false}
              className={`text-2xl mb-3 ${activeClass(p.href)}`}
              onClick={() => handleMenu(false)}
            >
              {p.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
