// components/Footer.jsx
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    const info = {
        logo: 'BiNGE',
        description:
            'NDIRAP is an industry leading video production, social media & paid advertising agency serving clients across the USA, est. 2013.',
        phone: '+1 (800) 123-4567',
        email: 'support@curely.com',
        address: ['500 Wellness Ave, Suite 10,', 'MedCity, NY 10001'],
    };

    const menuLinks = [
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'Blog', href: '#' },
    ];

    const socialLinks = [
        { name: 'Instagram', href: '#' },
        { name: 'YouTube', href: '#' },
        { name: 'TikTok', href: '#' },
        { name: 'Twitter', href: '#' },
    ];

    const icons = [
        { icon: <FaFacebookF />, href: '#' },
        { icon: <FaInstagram />, href: '#' },
        { icon: <FaLinkedinIn />, href: '#' },
        { icon: <FaTiktok />, href: '#' },
        { icon: <FaYoutube />, href: '#' },
    ];

    return (
        <footer className="bg-black text-white">
            <div className="container px-[40px] py-[96px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Left Section */}
                <div className='lg:col-span-3'>
                    <Image src="/logos/Logo-white.svg" alt="Logo" width={165} height={56} priority />
                    <p className="text-gray-300 text-sm mt-4 mb-4 max-w-[352px]">{info.description}</p>
                    <p className="text-gray-400 text-sm">{info.phone}</p>
                    <p className="text-gray-400 text-sm">{info.email}</p>
                    {info.address.map((line, i) => (
                        <p key={i} className="text-gray-400 text-sm">{line}</p>
                    ))}
                    <div className="flex gap-4 mt-4 text-xl">
                        {icons.map((item, i) => (
                            <a key={i} href={item.href} className="hover:text-gray-400">
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 text-white'>
                    {/* col 1 */}
                    <div>
                        <h3 className="text-gray-400 mb-3">Sitemap</h3>
                        <ul className="space-y-2">
                            {menuLinks.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="hover:text-gray-400">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* col 2 */}
                    <div>
                        <h3 className="text-gray-400 mb-3">Sitemap</h3>
                        <ul className="space-y-2">
                            {socialLinks.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href} className="hover:text-gray-400">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 px-10 py-5">
                <div className=" flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                    <p>Copyright © 2024 Binge Media LLC. All rights reserved</p>
                    <div className="flex gap-6 mt-2 md:mt-0">
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
