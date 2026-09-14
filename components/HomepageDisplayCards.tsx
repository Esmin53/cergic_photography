"use client"

import { useEffect, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

interface DisplayCardsProps {
  images_array: string[]
  banner: string
  inverted: boolean
  title: string
  _id: string
  category: string
}

const HomepageDisplayCards = ({images_array, banner, inverted, title, _id, category}: DisplayCardsProps) => {

    const [data, setData] = useState<{
              id: string,
              category: string,
              title: string,
              color: string,
              slotNumber: number
              imageUrl: string,
    }[]>([])
    const [isLoading, setIsLoading] = useState(true)
  
    const getData = async () => {
        setIsLoading(true)  
        try {
                  
              const response = await fetch(`/api/admin/data?category=${category}`, {
                  method: "GET"
              })
      
              const responseData = await response.json()
      
              setData(responseData.data)
              console.log("Response data", responseData)
      
          } catch (error) {
              setIsLoading(false)
              console.log(error)
        } finally {
          setIsLoading(false)
        }
    }
  
    useEffect(() => {
  
      getData()
  
    }, [])

  return (
    <MaxWidthWrapper background_color={null}>
      <div className='flex flex-col w-full h-full' id={_id}>
        <div className={`flex w-full py-2 items-center justify-between gap-4 sm:gap-12`}>
          <div className='h-0.75 flex-1 bg-text' />
          <h1 className='font-script text-5xl'>{title}</h1>
          <div className='h-0.75 flex-1 bg-text' />
        </div>

        <div className={`flex w-full py-2 gap-1.5 xl:gap-4 h-full flex-col-reverse ${inverted ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
          {!isLoading ? <div className='grid grid-cols-2 md:grid-cols-3 gap-1.5 w-full max-w-4xl'>
           {data?.map((item, i) => {
            return i != 6 ? <div className='bg-background aspect-square ' key={item.id}>
              <div className='w-full h-full relative'>
                {<Image src={item.imageUrl} fill alt='' className='rounded-xl object-cover'/>}
              </div>
            </div> : <div key={item.id} />
           })}
          </div> : <div className='grid grid-cols-2 md:grid-cols-3 gap-1.5 w-full max-w-4xl'>
                <div className='w-full h-full rounded-xl bg-foreground animate-pulse aspect-square' />
                <div className='w-full h-full rounded-xl bg-foreground animate-pulse aspect-square' />
                <div className='w-full h-full rounded-xl bg-foreground animate-pulse aspect-square' />
                <div className='w-full h-full rounded-xl bg-foreground animate-pulse aspect-square' />
                <div className='w-full h-full rounded-xl bg-foreground animate-pulse aspect-square' />
                <div className='w-full h-full rounded-xl bg-foreground animate-pulse aspect-square' />
            </div>}
          <div className='flex-1 max-w-0.5 bg-text' />

          <div className='w-full min-h-96 sm:min-w-80  sm:flex-1 relative'>
            {data.length && !isLoading ? <Image src={data[6].imageUrl} fill alt='' className='rounded-xl object-cover object-top'/> 
            :  <div className='w-full min-h-96 sm:min-w-80  sm:flex-1 relative bg-foreground animate-pulse h-full rounded-xl' />}
          </div>
        </div>
      </div>

    </MaxWidthWrapper>
  )
}

export default HomepageDisplayCards