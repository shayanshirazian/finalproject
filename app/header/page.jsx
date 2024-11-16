import React from 'react';
import Link from 'next/link';


const Header = () => {
    return (
        <header className="flex justify-evenly items-center px-6 py-4 bg-gray-100 shadow-sm">
            <span className="text-lg font-bold text-green-700">{`cola's`}</span>
            <nav className="flex space-x-8 text-sm font-medium text-gray-700">

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
                        <Link href="/uni"> Dogs University</Link>
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


            {/*           <nav className="flex space-x-8 text-sm font-medium text-gray-700">*/}
            {/*               <a href="#" className="hover:font-bold hover:text-green-700 hover:border-b-2 hover:border-green-700*/}
            {/*">Profile</a>*/}
            {/*               <a href="#" className="hover:font-bold hover:text-green-700 hover:border-b-2 hover:border-green-700">Our*/}
            {/*                   Food</a>*/}
            {/*               <a href="#"*/}
            {/*                  className="hover:font-bold hover:text-green-700 hover:border-b-2 hover:border-green-700">{`Dog's University`}</a>*/}
            {/*               <a href="#" className="hover:font-bold hover:text-green-700 hover:border-b-2 hover:border-green-700">Our*/}
            {/*                   Story</a>*/}
            {/*               <a href="#"*/}
            {/*                  className="hover:font-bold hover:text-green-700 hover:border-b-2 hover:border-green-700">FAQ</a>*/}
            {/*           </nav>*/}
        </header>

    );
};

export default Header;
