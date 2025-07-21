// components/ServicesSection.jsx
import Image from 'next/image';

export default function ServicesSection() {
    const tabs = ['Strategy', 'Creative', 'Production', 'Distribution'];

    return (
        <section className="px-[20px] md:px-10 py-16 md:py-[96px]">
            <h2 className="text-4xl font-bold mb-8">Services</h2>

            {/* Main Card */}
            <div className="relative rounded-2xl overflow-hidden md:max-h-screen ">
                <img src="images/sky.jpg" className='w-full h-full' alt="" />
                {/* color overflow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white to-black/40 from-10%"></div>
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black bg-black/0">
                    <h3 className="text-3xl md:text-3xl font-semibold mb-2">
                        Creative Development
                    </h3>
                    <p className="max-w-xl text-base md:text-xl mb-4 px-4">
                        Our creative team transforms ideas into compelling video content and communication campaigns that resonate with audiences.
                    </p>
                    <button className="px-4 py-2 cursor-pointer border border-gray-700/40 rounded-full text-black bg-white hover:bg-black hover:text-white transition">
                        See More
                    </button>
                </div>
            </div>


            {/* Tabs */}
            <div className="flex flex-col md:flex-row items-center md:justify-center gap-5 md:gap-8 mt-6 text-gray-400 text-lg font-medium">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        className={`hover:text-black transition cursor-pointer ${tab === 'Creative' ? 'text-black' : ''
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </section>
    );
}
