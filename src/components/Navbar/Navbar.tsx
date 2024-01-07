'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link } from '@nextui-org/react';

const paths = [
  { name: 'Portfolio', href: '/Portfolio' },
  { name: 'About', href: '/about' },
];

export const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = (bool: boolean) => setIsOpen(bool);

  const isActive = (path: string) => path === pathname;

  return (
    <Navbar
      className="mb-10"
      isBordered
      shouldHideOnScroll
      maxWidth="2xl"
      onMenuOpenChange={handleMenu}
      isMenuOpen={isOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Logo*/}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className="font-bold text-2xl"
            aria-current={isActive('/') ? 'page' : false}
            color={`${isActive('/') ? 'warning' : 'foreground'}`}
            onClick={() => handleMenu(false)}
          >
            FLN-DEV
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Logo*/}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className="font-bold text-2xl"
            aria-current={isActive('/') ? 'page' : false}
            color={`${isActive('/') ? 'warning' : 'foreground'}`}
          >
            FLN-DEV
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop */}
      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        {paths.map((p) => (
          <NavbarItem isActive={isActive(p.href)} key={p.name}>
            <Link
              href={p.href}
              aria-current={isActive(p.href) ? 'page' : false}
              color={`${isActive(p.href) ? 'warning' : 'foreground'}`}
              className="text-xl"
            >
              {p.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile */}
      <NavbarMenu>
        {paths.map((p) => (
          <NavbarMenuItem isActive={isActive(p.href)} key={p.name}>
            <Link
              href={p.href}
              aria-current={isActive(p.href) ? 'page' : false}
              color={`${isActive(p.href) ? 'warning' : 'foreground'}`}
              className="text-xl"
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
