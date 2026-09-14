"use client"

import { useEffect, useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

const Banner = () => {
        const [data, setData] = useState<{
            id: string,
            category: string,
            title: string,
            color: string,
            slotNumber: number
            imageUrl: string,
        }[]>([])
    
        const fetchData = async () => {
            try {
                
                const response = await fetch(`/api/admin/data?category=banner`, {
                    method: "GET"
                })
    
                const responseData = await response.json()
    
                setData(responseData.data)
               console.log(responseData)
    
            } catch (error) {
                console.log(error)
            }
        }
    
    
        useEffect(() => {
            fetchData()
        }, [])

  return (
    <MaxWidthWrapper background_color={"foreground"}>
        <div className='w-full bg-foreground flex items-center relative pt-8 pb-12 sm:pb-16'>
            <div className='flex flex-col sm:flex-row flex-1 mt-auto gap-8 relative px-2 lg:px-4'>
                {data.length && <div className='absolute sm:w-full sm:h-2 h-full w-2 bg-text left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2' />}
                {data.length ? data.map(({imageUrl, title, id}) => <div className='flex-1 aspect-square flex relative group' key={id}>
                    <div className='flex-1 relative rounded-lg overflow-hidden'>
                        <Image 
                            src={imageUrl} 
                            fill 
                            alt='Weddings' 
                            className='object-cover cursor-pointer shadow transition-all duration-500 ease-in-out group-hover:scale-110'
                        />
                    </div>
                    <p className='text-4xl sm:text-5xl font-semibold sm:font-bold font-script absolute pointer-events-none cursor-pointer  text-tex left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 text-[#fff]'>
                        {title}
                    </p>
                </div>) : <div className='flex flex-col sm:flex-row flex-1 mt-auto gap-8 relative px-2 lg:px-4'>
                    <div className='flex-1 aspect-square flex relative bg-background animate-pulse rounded-lg'/>
                    <div className='flex-1 aspect-square flex relative bg-background animate-pulse rounded-lg'/>
                    <div className='flex-1 aspect-square flex relative bg-background animate-pulse rounded-lg'/>
                </div>}

            </div>
        </div> 
    </MaxWidthWrapper>
  )
}

export default Banner