import React from 'react'

export default function BigEye() {
    return (
        <section className='px-5 md:px-10 pt-16 md:pt-[96px] bg-white grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* left  */}
            <div className='flex flex-col items-center text-center md:items-start md:text-start gap-5 md:gap6 pb-6 md:pb-[96px]'>
                <h3 className='text-3xl md:text-[40px] font-bold'>
                    Create your first video today.
                </h3>
                <p className='md:text-xl font-semibold'>Purchase a video and start your project today, and get your video in as little as 2 weeks.</p>
                <button className="bg-white text-black px-4 py-2 rounded-full font-semibold border border-gray-700/60 text-nowrap cursor-pointer">
                    Get started Now
                </button>
            </div>

            {/* right */}
            <div className="w-full flex items-end">
                <img src="images/bigeye.png" className='max-w-0' alt="" />
            </div>
        </section>
    )
}
