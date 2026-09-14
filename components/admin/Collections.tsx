"use client"

import { useEffect, useState } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import UpdateImageForm from './UpdateImageForm'

interface CollectionsProps {
  title: string
  category: string
}

const Collections = ({title ,category}: CollectionsProps) => {

  const [data, setData] = useState<{
            id: string,
            category: string,
            title: string,
            color: string,
            slotNumber: number
            imageUrl: string,
  }[]>([])

  const getData = async () => {
        try {
                
            const response = await fetch(`/api/admin/data?category=${category}`, {
                method: "GET"
            })
    
            const responseData = await response.json()
    
            setData(responseData.data)
            console.log("Response data", responseData)
    
        } catch (error) {
            console.log(error)
      }
  }

  useEffect(() => {

    getData()

  }, [])
  
  return (
    <MaxWidthWrapper background_color={null}>
      <div className='w-full flex flex-col gap-2 my-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>Uredi {title}</h1>
        </div>
        <div className='w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 relative '>
            {data.map((item, i) => <UpdateImageForm imageUrl={item.imageUrl} slot={i+1} category={category} key={item.id}/>)}

        </div> 
      </div>
    </MaxWidthWrapper>
  )
}

export default Collections