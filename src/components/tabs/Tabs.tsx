'use client';
import { Card, CardBody, LinkIcon, Tab, Tabs as TabsNext } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Tabs = () => {
  const pathname = usePathname();

  return (
    <TabsNext
      aria-label="Options"
      selectedKey={pathname}
      size="lg"
      radius="sm"
      fullWidth
      // className="[&>div]:bg-transparent"
    >
      <Tab 
        key="/about" 
        title="Profile"
        as={Link}
        href="/about"
      >
        <Card>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </CardBody>
        </Card>
      </Tab>
      <Tab
        key="/about/work-history"
        href="/about/work-history"
        title="Work History"
        as={Link}
      >
        <Card>
          <CardBody>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </CardBody>
        </Card>
      </Tab>
      <Tab
        key="/about/contact"
        href="/about/contact"
        title="Contact"
        as={Link}
      >
        <Card>
          <CardBody>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </CardBody>
        </Card>
      </Tab>
    </TabsNext>
  );
};
