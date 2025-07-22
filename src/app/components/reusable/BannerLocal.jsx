import React from 'react'

export default function BannerLocal({ children }) {
    return (
        <section className='px-6 md:px-10 py-[96px] md:py-[200px] bg-gray-100'>
            <h1 className='text-5xl md:text-7xl font-bold leading-[58px] md:leading-[80px] '>
                {children.heading}
            </h1>
            <p className="text-xl font-semibold leading-[28px] mt-2 max-w-[750px]">
                {children.description}
            </p>
        </section>
    )
}
