// components/ResourcesGallery.js
import Image from "next/image";

const resources = [
    {
        src: "/images/blog3.png", // Replace with your image paths
        alt: "Person talking on video call",
        title: "Why Your Brand Needs Video"
    },
    {
        src: "/images/blog2.png",
        alt: "Man filming in studio",
        title: "Inside a Pro Brand Video Shoot"
    },
    {
        src: "/images/blog1.png",
        alt: "Woman working in orange light",
        title: "Top 5 Video Styles That Work"
    },
];

export default function BlogSection() {
    return (
        <section className="bg-gray-100 px-5 md:px-10 py-16 lg:py-[96px] flex flex-col gap-8">
            {/* top part */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <h3 className="text-4xl font-bold text-center sm:text-start">Check out our resources to get started with video marketing.</h3>
                <button className="bg-white text-black px-4 py-2 rounded-full font-semibold border border-gray-700/60 text-nowrap cursor-pointer">
                    View All Resources
                </button>
            </div>

            {/* bottom part */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mx-auto w-full">
                {resources.map((res, idx) => (
                    <div key={idx}>
                        <div className="rounded-xl overflow-hidden relative">
                            <img src={res.src}
                                alt={res.alt} />
                        </div>
                        <h5 className="text-xl lg:text-2xl font-semibold mt-2 md:mt-4">
                            {res.title}
                        </h5>
                    </div>
                ))}
            </div>
        </section>
    );
}
