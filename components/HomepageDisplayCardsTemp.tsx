import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

const HomepageDisplayCardsTemp = () => {
  return (
    <MaxWidthWrapper background_color={null}>
      <div className='flex flex-col w-full h-full'>
        <div className='flex flex-col w-full items-end'>
          <h1 className='font-script text-4xl'>Portraits</h1>
          <div className='h-0.5 w-3/4 bg-text' />
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla possimus error!</p>
        </div>

        <div className='flex w-full py-6 gap-4 h-full flex-row'>
          <div className='grid grid-cols-3 gap-2 w-full max-w-4xl'>
            <div className='bg-background aspect-square shadow-sm'>
              <div className='w-full h-full relative'>
                <Image src={"/portrait1.jpg"} fill alt='' className='rounded-xl object-cover'/>
              </div>
            </div>
            <div className='bg-background aspect-square shadow-sm'>
              <div className='w-full h-full relative'>
                <Image src={"/portrait2.jpg"} fill alt='' className='rounded-xl object-cover'/>
              </div>
            </div>
            <div className='bg-background aspect-square shadow-sm'>
              <div className='w-full h-full relative'>
                <Image src={"/portrait4.jpg"} fill alt='' className='rounded-xl object-cover'/>
              </div>
            </div>
            <div className='bg-background aspect-square shadow-sm'>
              <div className='w-full h-full relative'>
                <Image src={"/portrait5.jpg"} fill alt='' className='rounded-xl object-cover'/>
              </div>
            </div>
            <div className='bg-background aspect-square shadow-sm'>
              <div className='w-full h-full relative'>
                <Image src={"/portrait6.jpg"} fill alt='' className='rounded-xl object-cover'/>
              </div>
            </div>
            <div className='bg-background aspect-square shadow-sm'>
              <div className='w-full h-full relative'>
                <Image src={"/portrait3.jpg"} fill alt='' className='rounded-xl object-cover'/>
              </div>
            </div>
          </div>

        <div className='flex-1 max-w-0.5 bg-text' />

          <div className='flex-1 relative'>
            <Image src={"/portrait7.jpg"} fill alt='' className='rounded-xl object-cover'/>
          </div>
        </div>
      </div>

    </MaxWidthWrapper>
  )
}

export default HomepageDisplayCardsTemp