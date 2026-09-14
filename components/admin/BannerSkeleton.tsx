import React from 'react'

const BannerSkeleton = () => {
  return (
                    <div className='flex-1 flex flex-col gap-2'>
                    <div>
                        <label htmlFor='naslov' className='text-foreground'>Naslov</label>
                        <div className='bg-background w-full  rounded h-10 px-2 animate-pulse' />
                    </div>
                    <div className='flex w-full items-center justify-between h-10'>
                        <p className='text-foreground'>Boja teksta:</p>
                        <div className='flex gap-2 h-full'>
                            <div className={`h-full aspect-square rounded bg-background cursor-pointer shadow animate-pulse`}  />
                            <div className={`h-full aspect-square rounded bg-background cursor-pointer shadow animate-pulse`}  />
                            
                        </div>
                    </div>
                    <div className='w-full aspect-square bg-background rounded p-4 relative animate-pulse'>

                        
                    </div>
                    <div className={`w-full h-10 bg-background rounded text-text flex items-center justify-center animate-pulse`} />
                    <div className={`w-full h-10 bg-background rounded text-text flex items-center justify-center animate-pulse`} />


                </div>
  )
}

export default BannerSkeleton