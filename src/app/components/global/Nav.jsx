'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const menuItems = [
    { name: 'About', href: '/about' },
    {
        name: 'Services',
        href: '/services',
        subMenu: [
            { name: 'Web Development', href: '/services/web' },
            { name: 'Mobile Apps', href: '/services/mobile' },
            { name: 'UI/UX Design', href: '/services/uiux' },
            { name: 'SEO Optimization', href: '/services/seo' },
        ],
    },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
];

export default function Nav() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [scrollUp, setScrollUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrollUp(currentY < lastScrollY || currentY <= 0);
            setLastScrollY(currentY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className='h-16 w-full'>
            <nav
                className={`w-full px-[20px] md:px-[40px] h-[64px] bg-white flex items-center justify-between fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${scrollUp ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                {/* Mobile: Logo left */}
                <div className="block xl:hidden">
                    <Link href="/" className="block">
                        <Image src="/logos/Logo.svg" alt="Logo" width={118} height={40} priority />
                    </Link>
                </div>

                {/* Desktop: Logo center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden xl:block">
                    <Link href="/" className="block">
                        <Image src="/logos/Logo.svg" alt="Logo" width={118} height={40} priority />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden xl:flex items-center gap-4">
                    {menuItems.map((item) => (
                        <div key={item.name} className="relative">
                            {item.subMenu ? (
                                <>
                                    <button
                                        onClick={() => setShowSubmenu(!showSubmenu)}
                                        className="text-base font-semibold px-4 py-1 flex items-center gap-1 cursor-pointer"
                                    >
                                        {item.name}
                                        <FiChevronDown
                                            className={`transition-transform duration-300 ${showSubmenu ? 'rotate-180' : 'rotate-0'}`}
                                        />
                                    </button>
                                    {showSubmenu && (
                                        <div className="absolute top-full left-0 mt-2 py-2 bg-white shadow border rounded-lg border-gray-700/40 z-50">
                                            {item.subMenu.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className="block px-6 py-2 text w-full hover:bg-gray-100 whitespace-nowrap"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link href={item.href} className="text-base font-semibold px-4 py-1">
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Desktop: Contact button */}
                <div className="hidden xl:block">
                    <Link
                        href="/contact"
                        className="px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-900"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile: Hamburger Icon */}
                <div className="xl:hidden">
                    <button onClick={() => setShowMobileMenu(!showMobileMenu)} className='cursor-pointer'>
                        {showMobileMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`xl:hidden grid absolute top-[64px] left-0 w-full transition-all duration-500 ease-in-out ${showMobileMenu ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} text-sm text-gray-700`}
                >
                    <div className="w-full bg-white overflow-hidden">
                        <div className="flex flex-col p-4 px-[40px]">
                            {menuItems.map((item) => (
                                <div key={item.name} className="relative mb-2">
                                    {item.subMenu ? (
                                        <>
                                            <button
                                                onClick={() => setShowSubmenu(!showSubmenu)}
                                                className="text-base font-semibold w-full text-left px-2 py-1 cursor-pointer flex items-center gap-1"
                                            >
                                                {item.name}
                                                <FiChevronDown
                                                    className={`transition-transform duration-300 ${showSubmenu ? 'rotate-180' : 'rotate-0'}`}
                                                />
                                            </button>
                                            {showSubmenu && (
                                                <div className="mt-1 pl-4 text-xs text-gray-600">
                                                    {item.subMenu.map((sub) => (
                                                        <Link
                                                            key={sub.href}
                                                            href={sub.href}
                                                            className="block px-2 py-1 text-sm hover:bg-gray-100 w-fit"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link href={item.href} className="block text-base font-semibold px-2 py-1">
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Mobile: Contact Button */}
                            <Link
                                href="/contact"
                                className="mt-2 px-4 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-900 w-fit"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
