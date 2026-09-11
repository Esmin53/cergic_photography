import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Prices = () => {
  return (
    <MaxWidthWrapper background_color={null}>
        <div className='flex-1 flex flex-col gap-4 sm:p-2 py-6 sm:py-2 pt-8 rounded' id='cijene'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl sm:text-3xl'>Cijene</h1>
                <div className='w-full sm:w-3/4 h-0.5 bg-text'/>
                <p>Svi paketi mogu biti prilagođeni prema vašim potrebama.</p>
            </div>
            <div className='w-full gap-4 items-start justify-center flex flex-col'>
                <div className='w-full sm:w-3/4 flex items-center justify-between'>
                    <h1 className='text-lg sm:text-xl'>Svadbe</h1>
                    <div className="flex-1 mx-4 mt-2 max-h-0.5 border-b-2 border-dotted border-text" />
                    <p className='text-lg sm:text-xl'>400.00 KM</p>
                </div>
                <div className='w-full sm:w-3/4 flex items-center justify-between'>
                    <h1 className='text-lg sm:text-xl'>Portreti</h1>
                    <div className="flex-1 mx-4 mt-2 max-h-0.5 border-b-2 border-dotted border-text" />
                    <p className='text-lg sm:text-xl'>100.00 KM</p>
                </div>
                <div className='w-full sm:w-3/4 flex items-center justify-between'>
                    <h1 className='text-lg sm:text-xl'>Eventi</h1>
                    <div className="flex-1 mx-4 mt-2 max-h-0.5 border-b-2 border-dotted border-text" />
                    <p className='text-lg sm:text-xl'>100.00 KM</p>
                </div>

            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Prices