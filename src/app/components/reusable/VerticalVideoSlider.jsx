'use client';

import Marquee from 'react-fast-marquee';
import { FaPlay } from 'react-icons/fa';

const allVideos = [
    '/images/sky.jpg',
    '/images/sky.jpg',
    '/images/sky.jpg',
    '/images/sky.jpg',
];

export default function VerticalVideoSlider() {
    return (
        <Marquee speed={40} gradient={false} direction='right' pauseOnHover className="z-0">
            {allVideos.map((src, idx) => (
                <div
                    key={idx}
                    className="mx-4 w-[352px] h-[626px] aspect-video flex-shrink-0 overflow-hidden rounded-xl shadow relative group cursor-pointer"
                >
                    <img src={src} alt={`Video ${idx}`} className="w-full h-full object-cover" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                        <div className='px-4 py-1  flex items-center gap-2 bg-white shadow rounded-full  text-black'>
                            <p className='font-semibold'>Play Video</p>
                            <FaPlay size={12} />
                        </div>
                    </div>
                </div>
            ))}
        </Marquee>
    );
}
