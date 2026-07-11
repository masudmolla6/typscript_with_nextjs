import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';


type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({href, children}:NavLinkProps) => {
    const pathname=usePathname();

    return <Link className={`${pathname.startsWith(href)&&"bg-amber-600 text-white rounded-2xl px-4 py-2"}`} href={href}>{children}</Link>
};

export default NavLink;