import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

interface DisplayCardsProps {
  images_array: string[]
  banner: string
  inverted: boolean
  title: string
}

const HomepageDisplayCards = ({images_array, banner, inverted, title}: DisplayCardsProps) => {
  return (
    <MaxWidthWrapper background_color={null}>
      <div className='flex flex-col w-full h-full'>
        <div className={`flex flex-col w-full py-2 ${inverted ? "items-end" : "items-start"}`}>
          <h1 className='font-script text-4xl'>{title}</h1>
          <div className='h-0.5 w-3/4 bg-text' />
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla possimus error!</p>
        </div>

        <div className={`flex w-full py-2 gap-1.5 xl:gap-4 h-full flex-col-reverse ${inverted ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-1.5 w-full max-w-4xl'>
           {images_array.map((item, i) => {
            return <div className='bg-background aspect-square ' key={i}>
              <div className='w-full h-full relative'>
                {<Image src={item} fill alt='' className='rounded-xl object-cover'/>}
              </div>
            </div>
           })}

          </div>
          <div className='flex-1 max-w-0.5 bg-text' />

          <div className='w-full min-h-96 sm:min-w-80  sm:flex-1 relative'>
            <Image src={banner} fill alt='' className='rounded-xl object-cover object-top'/>
          </div>
        </div>
      </div>

    </MaxWidthWrapper>
  )
}

export default HomepageDisplayCards