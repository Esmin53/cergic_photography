import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

const Banner = () => {
  return (
    <MaxWidthWrapper background_color={"foreground"}>
        <div className='w-full bg-foreground flex items-center relative pt-8 pb-12 sm:pb-16'>
            <div className='flex flex-col sm:flex-row flex-1 mt-auto gap-8 relative px-2 lg:px-4'>
                <div className='absolute sm:w-full sm:h-2 h-full w-2 bg-text left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2' />
                <div className='flex-1 aspect-square flex relative group'>
                    <div className='flex-1 relative rounded-lg overflow-hidden'>
                        <Image 
                            src={"/wedding.jpg"} 
                            fill 
                            alt='Weddings' 
                            className='object-cover cursor-pointer shadow transition-all duration-500 ease-in-out group-hover:scale-110'
                        />
                    </div>
                    <p className='text-4xl sm:text-5xl font-semibold sm:font-bold font-script absolute pointer-events-none cursor-pointer  text-tex left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 text-[#fff]'>
                        Svadbe
                    </p>
                </div>
                <div className='flex-1 aspect-square flex  relative group'>
                    <div className='flex-1 relative rounded-lg overflow-hidden'>
                        <Image src={"/portrait.jpg"} fill alt='' className='object-cover cursor-pointer shadow transition-all duration-500 ease-in-out group-hover:scale-110'/>
                    </div>
                    <p className='text-4xl sm:text-5xl font-semibold sm:font-bold font-script absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 dark:text-text text-[#fff]'>Portreti</p>
                </div>
                <div className='flex-1 aspect-square flex  relative group'>
                    <div className='flex-1 relative rounded-lg overflow-hidden'>
                        <Image src={"/nature5.jpg"} fill alt='' className='object-cover cursor-pointer shadow transition-all duration-500 ease-in-out group-hover:scale-110'/>
                    </div>
                    <p className='text-4xl sm:text-5xl font-semibold sm:font-bold font-script absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 text-[#fff]'>Eventi</p>
                </div>


            </div>
        </div> 
    </MaxWidthWrapper>
  )
}

export default Banner