import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-sm">
            {/* Cola's Kitchen Text */}
            <span className="text-lg font-bold text-green-700 lg:ml-32">
                {`Cola's Kitchen`}
            </span>

            {/* Navigation Links */}
            <nav className="flex justify-center w-full lg:w-auto space-x-4 lg:space-x-8 text-sm  font-medium text-gray-700">
                <ul className="hover:font-bold hover:text-green-700 hover:border-b-2 hover:border-green-700">
                    <li>
                        <Link href={"/profile"}> Profile </Link>
                    </li>
                </ul>
                <ul className="hover:font-bold hover:text-green-700 hover:border-b-2 hover:border-green-700">
                    <li>
                        <Link href="/food"> Our Foods </Link>
                    </li>
                </ul>
                <ul className="hover:font-bold hover:text-green-700 hover:border-b-2 hover:border-green-700">
                    <li>
                        <Link href="/uni"> {`Dog's`} University</Link>
                    </li>
                </ul>
                <ul className="hover:font-bold hover:text-green-700 hover:border-b-2 hover:border-green-700">
                    <li>
                        <Link href="/us"> Our Story </Link>
                    </li>
                </ul>
                <ul className="hover:font-bold hover:text-green-700 hover:border-b-2 hover:border-green-700">
                    <li>
                        <Link href="/faq"> FAQ </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
