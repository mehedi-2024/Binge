'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const brands = [
    '/brands/brandlogo.png',
    '/brands/brandlogo.png',
    '/brands/brandlogo.png',
    '/brands/brandlogo.png',
    '/brands/brandlogo.png',
    '/brands/brandlogo.png',
];

export default function BrandSlider() {
    const allBrands = [...brands, ...brands];

    return (
        <div className="relative w-full py-8 px-10 bg-white overflow-hidden">
            {/* Left and Right fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white from-55% to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white from-55% to-transparent z-10" />

            <Marquee speed={50} gradient={false} pauseOnHover className="z-0">
                {allBrands.map((src, idx) => (
                    <div key={idx} className="mx-4 flex-shrink-0">
                        <Image src={src} alt={`Brand ${idx}`} width={150} height={90} />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
