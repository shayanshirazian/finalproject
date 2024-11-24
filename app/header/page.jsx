import React from 'react';
import Link from 'next/link';

const NavItem = ({href, text}) => {
    return (
        <ul className="hover:font-bold hover:text-green-700 hover:border-b-2 hover:border-green-700">
            <li>
                <Link href={href}>{text}</Link>
            </li>
        </ul>
    );
};

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-sm">
            <Link href="/">
            <span className="text-lg font-bold text-green-700 lg:ml-32 cursor-pointer">
                {`Cola's Kitchen`}
            </span>
            </Link>

            <nav
                className="flex justify-center w-full lg:w-auto space-x-4 lg:space-x-8 text-sm font-medium text-gray-700">
                <NavItem href="/profile" text="Profile"/>
                <NavItem href="/food" text="Our Foods"/>
                <NavItem href="/uni" text="Dog's University"/>
                <NavItem href="/us" text="Our Story"/>
                <NavItem href="/faq" text="FAQ"/>
            </nav>
        </header>
    );
};

export default Header;
