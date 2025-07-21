import React from 'react'

export default function Hero() {
    return (
        <div className='flex justify-center items-center py-20 md:py-[150px] lg:py-[203px]'>
            <section className='text-center flex flex-col gap-[24px] text-[70px] sm:text-[80px] lg:text-[100px]'>
                <div className='flex flex-col md:flex-row ms:justify-center gap-[20px] md:gap-4'>
                    <h2 className='font-[300] leading-[1]'>YOUR</h2>
                    <h2 className='font-black leading-[1]'>EYES</h2>
                </div>
                <div className='flex flex-col md:flex-row ms:justify-center gap-[16px] md:gap-4 md:ml-[150px] lg:ml-[200px]'>
                    <h2 className='font-[300] leading-[1]'>WANT</h2>
                    <h1 className='text-[130px] sm:text-[150px] lg:text-[200px] font-black leading-[1] md:-mt-3'>MORE</h1>
                </div>
            </section>
        </div>
    )
}
