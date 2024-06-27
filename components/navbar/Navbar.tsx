import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import { ActiveLink } from '@/components';

interface NavItems {
  path: string;
  text: string;
}

const navItems: NavItems[] = [
  {
    path: '/about',
    text: 'About',
  },
  {
    path: '/contact',
    text: 'Contact',
  },
  {
    path: '/pricing',
    text: 'Pricing',
  },
];

export const Navbar = async () => {
  return (
    <div>
      <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href="/" className="flex items-center">
          <HomeIcon className="mr-2" />
          <span>Home</span>
        </Link>

        <div className="flex flex-1"></div>

        {navItems.map((item) => (
          <ActiveLink key={item.path} {...item} />
        ))}

        {/*<Link className="mr-2" href="/about">*/}
        {/*  About*/}
        {/*</Link>*/}
        {/*<Link className="mr-2" href="/pricing">*/}
        {/*  Pricing*/}
        {/*</Link>*/}
        {/*<Link className="mr-2" href="/contact">*/}
        {/*  Contact*/}
        {/*</Link>*/}
      </nav>
    </div>
  );
};
