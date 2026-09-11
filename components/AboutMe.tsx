import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import { FaCameraRetro, FaInstagram, FaPhone, FaPinterest } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

const AboutMe = () => {
  return (
    <MaxWidthWrapper background_color={null}>
        <div className='w-full flex flex-col sm:flex-row pt-6 sm:py-12 font-mono h-fit gap-6 sm:gap-12 z-10' id='kontakt'>
            <div className='flex-1 flex flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                    <p className='text-3xl font-bold text-center'>Majid Čergić</p>
                    <div className='w-3/4 h-0.5 bg-text mx-auto' />
                    <p>Ja sam fotograf na području Tuzlanskog Kantona. Dostupan sam za svadbe, rođendane, portrete i druge slične angažmane.</p>
                </div>
                
            <div className='flex flex-1 gap-6'>
                <div className='flex'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <FaLocationPin className='text-xl'/>
                            <p className='sm:text-md'>Banovići/Tuzlanski kanton</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCameraRetro className='text-xl'/>
                            <p className='sm:text-md'>Canon R10</p>
                        </div>
                        <a href='https://www.instagram.com/cergicphotography/' target='_blank' className='flex items-center gap-2'>
                            <FaInstagram className='text-xl'/>
                            <p className='sm:text-md'>cergicphotography</p>
                        </a>
                        <div className='flex items-center gap-2'>
                            <FaPhone className='text-xl'/>
                            <p className='sm:text-md'>062 555 232</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaPinterest className='text-xl'/>
                            <p className='sm:text-md'>Pinterest</p>
                        </div>
                    </div>
                </div>
            </div> 



            </div>
            <div className='w-full sm:w-2/5 h-80 sm:h-96 relative group'>
                <div className='sm:w-full h-full absolute top-5 -left-5 bg-foreground rounded'/>
                <div className='w-full h-full relative overflow-hidden rounded'>
                    <Image src={"/majcidrzikameru.jpg"} fill alt='' className='object-cover rounded duration-300 ease-in-out group-hover:scale-110'/>
                </div>
                <div className='w-1/3 h-1/3 border-t-2 border-r-2 border-text absolute top-4 right-4 rounded-tr ' />
                <div className='w-1/3 h-1/3 border-b-2 border-l-2 border-text absolute bottom-4 left-4 rounded-bl' />
            </div>

        </div>
    </MaxWidthWrapper>
  )
}

export default AboutMe