import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

const Banner = () => {
  return (
    <MaxWidthWrapper background_color={"foreground"}>
        <div className='w-full bg-foreground flex items-center relative pt-8 pb-16'>
            <div className='flex flex-1 mt-auto gap-8 relative px-4'>
                <div className='absolute w-full h-2 bg-white left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2' />
                <div className='flex-1 aspect-square flex relative group'>
                    <div className='flex-1 relative rounded-lg overflow-hidden'>
                        <Image 
                            src={"/wedding.jpg"} 
                            fill 
                            alt='Weddings' 
                            className='object-cover cursor-pointer shadow transition-all duration-500 ease-in-out group-hover:scale-110'
                        />
                    </div>
                    <p className='text-5xl font-bold font-script absolute -bottom-6 left-1/2 -translate-x-1/2 shadow pointer-events-none cursor-pointer'>
                        Weddings
                    </p>
                </div>
                <div className='flex-1 aspect-square flex  relative group'>
                    <div className='flex-1 relative rounded-lg overflow-hidden'>
                        <Image src={"/portrait.jpg"} fill alt='' className='object-cover cursor-pointer shadow transition-all duration-500 ease-in-out group-hover:scale-110'/>
                    </div>
                    <p className='text-5xl font-bold font-script absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2'>Portraits</p>
                </div>
                <div className='flex-1 aspect-square flex  relative group'>
                    <div className='flex-1 relative rounded-lg overflow-hidden'>
                        <Image src={"/nature.jpg"} fill alt='' className='object-cover cursor-pointer shadow transition-all duration-500 ease-in-out group-hover:scale-110'/>
                    </div>
                    <p className='text-5xl font-bold font-script absolute -top-6 left-1/2 -translate-x-1/2'>Nature</p>
                </div>


            </div>
        </div> 
    </MaxWidthWrapper>
  )
}

export default Banner