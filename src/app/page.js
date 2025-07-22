import React from 'react'
import Nav from './components/global/Nav'
import Hero from './components/home/Hero'
import Footer from './components/global/Footer'
import FullScreenVideoIframe from './components/home/FullScreenVideoIframe'
import Slider from './components/home/Slider'
import HorizontalVideoSlider from './components/reusable/HorizontalVideoSlider'
import VerticalVideoSlider from './components/reusable/VerticalVideoSlider'
import ServicesSection from './components/home/ServicesSection'
import BlogSection from './components/home/BlogSection'
import BigEye from './components/reusable/BigEye'

const page = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <section>
        <FullScreenVideoIframe />
      </section>
      <Slider />

      <section>
        <div className='py-16 md:py-[96px] px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {/* left  */}
          <div className='lg:h-full'>
            <h3 className='text-4xl leading-[48px] font-bold lg:sticky top-16'>
              Story-led, strategy-backed. <br />
              And always binge-worthy
            </h3>
          </div>

          {/* right  */}
          <div className='flex flex-col gap-8'>
            <p className='text-xl leading-[28px]'>
              Our team blends creativity with strategy. We don’t just make things look good, we make them work. Whether you are launching, scaling, or rebranding, we’ve got you. Fast turnarounds. Flexible packages. Big ideas. We’re not just your video team, we’re your creative partner. Let’s bring your vision to life, frame by frame.
            </p>

            {/* 1 */}
            <div className='flex flex-col gap-2'>
              <h3 className='text-4xl font-bold'>
                3 Billion
              </h3>
              <p className='text-xl leading-[28px]'>
                Views Generated
              </p>
            </div>
            {/* 2 */}
            <div className='flex flex-col gap-2'>
              <h3 className='text-4xl font-bold'>
                1000 Project
              </h3>
              <p className='text-xl leading-[28px]'>
                Project Delivered
              </p>
            </div>
            {/* 3 */}
            <div className='flex flex-col gap-2'>
              <h3 className='text-4xl font-bold'>
                32 Worldwide
              </h3>
              <p className='text-xl leading-[28px]'>
                Countries
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 md:py-[96px] space-y-8 bg-black'>
        <div className='flex flex-col md:flex-row justify-between gap-3 text-center md:text-start text-white px-5 md:px-10'>
          <h5 className='text-4xl font-bold'>Our Project</h5>
          <p className='text-xl leading-[28px] max-w-[544px]'>We believe in storytelling that leads the way—always driven by a clear strategy and designed to keep your audience hooked.</p>
        </div>
        <HorizontalVideoSlider />
        <VerticalVideoSlider />
      </section>

      <ServicesSection />
      <BlogSection />
      <BigEye />

      <Footer />
    </div>
  )
}

export default page