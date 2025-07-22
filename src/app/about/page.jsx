import React from 'react'
import Nav from '../components/global/Nav'
import BannerLocal from '../components/reusable/BannerLocal'
import FullScreenVideoIframe from '../components/home/FullScreenVideoIframe'
import { Playfair_Display } from 'next/font/google';

// Configure the italic-bold variant (weight 700 + italic)
const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: '700',
    style: 'italic',
    display: 'swap', // Optional: better font loading behavior
});

export default function page() {
    const features = [
        {
            img: "images/sky.jpg", // replace with your real icon path
            title: "Big ideas. Zero templates.",
        },
        {
            img: "images/sky.jpg",
            title: "Strategy before execution.",
        },
        {
            img: "images/sky.jpg",
            title: "We’re creative, not chaotic.",
        },
        {
            img: "images/sky.jpg",
            title: "We don’t do boring.",
        },
    ];
    return (
        <div>
            <Nav />
            {/* hero  */}
            <BannerLocal>
                {
                    {
                        heading: 'THE STORY BEHIND OUR AGENCY',
                        description: "Built for brands that want to grow faster, look better, stay remembered,and lead the conversation with content that performs on every platform."
                    }
                }
            </BannerLocal>

            <section className='bg-gray-100'>
                <FullScreenVideoIframe />
                <div className='py-16 md:py-[96px] px-5 md:px-10 lg:px-[90px] flex flex-col gap-6 md:gap-10'>
                    <h2 className='text-3xl md:text-4xl leading-[40px]'>
                        Founded in 2023 Out of Brooklyn, We Help Ambitious Brands Grow Through audience-first media that’s deeply grounded in strategy, cultural insight, and measurable results.
                    </h2>

                    <h2 className={`text-3xl md:text-4xl leading-[40px] font-bold ${playfair.className}`}>
                        Less Layers. More Thinking. No Ego.
                    </h2>

                    <div>
                        <h2 className='text-3xl md:text-4xl leading-[40px] mb-5 md:mb-8'>
                            Let’s make media people actually want to Binge. That means a few important things for you:
                        </h2>

                        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center space-y-4">
                                    <div className="bg-white rounded-full p-4 shadow-md">
                                        <img src={feature.img} alt="Icon" className="h-10 w-10" />
                                    </div>
                                    <p className="text-lg font-medium text-gray-800 leading-snug">
                                        {feature.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
