"use client"


import { useEffect, useState } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import UpdateImageForm from './UpdateBanerImageForm'
import BannerSkeleton from './BannerSkeleton'

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
        { data.length > 0 ?<div className='w-full bg-foreground grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 relative pb-12 sm:pb-16'>
            {data.map((item, i) => <UpdateImageForm slot={i + 1} category='banner' imageUrl={item.imageUrl} key={item.id} titleProp={item.title} colorProp={item.color}/>)}            
        </div> : <div className='w-full bg-foreground grid grid-cols-3 gap-4 relative pt-8 pb-12 sm:pb-16'>
                <BannerSkeleton />
                <BannerSkeleton />
                <BannerSkeleton />
        </div>
            }
    </MaxWidthWrapper>
  )
}

export default Banner