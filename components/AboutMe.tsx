"use client"

import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaCameraRetro, FaFacebook, FaInstagram, FaPhone, FaPinterest } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { getMajidData } from './admin/actions'

export interface ContactItem {
  id: number;
  description: string;
  equipment: string;
  location: string;
  instagram: string;
  instagram_link: string;
  facebook: string;
  facebook_link: string;
  cellphone: string;
}

const AboutMe = () => {
  const [data, setData] = useState<ContactItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadPrices = async () => {
    const res = await getMajidData();
    if (res?.error) {
      setError(res.error);
    } else if (res?.data) {
      setData(res.data[0]);
    }
  };

  useEffect(() => {
    async function init() {
      setLoading(true);
      await loadPrices();
      setLoading(false);
    }
    init();
  }, []);



  return (
    <MaxWidthWrapper background_color={null}>
        <div className='w-full flex flex-col sm:flex-row pt-6 sm:py-12 font-mono h-fit gap-6 sm:gap-12 z-10' id='kontakt'>
            {!loading || data != null ? <div className='flex-1 flex flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                    <p className='text-3xl font-bold text-center'>Majid Čergić</p>
                    <div className='w-3/4 h-0.5 bg-text mx-auto' />
                    <p>{data?.description}</p>
                </div>
                
            <div className='flex flex-1 gap-6'>
                <div className='flex'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <FaLocationPin className='text-xl'/>
                            <p className='sm:text-md'>{data?.location}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCameraRetro className='text-xl'/>
                            <p className='sm:text-md'>{data?.equipment}</p>
                        </div>
                        <a href={data?.instagram_link} target='_blank' className='flex items-center gap-2'>
                            <FaInstagram className='text-xl'/>
                            <p className='sm:text-md'>{data?.instagram}</p>
                        </a>
                        <div className='flex items-center gap-2'>
                            <FaPhone className='text-xl'/>
                            <p className='sm:text-md'>{data?.cellphone}</p>
                        </div>
                        <a href={data?.facebook_link} target='_blank' className='flex items-center gap-2'>
                            <FaFacebook className='text-xl'/>
                            <p className='sm:text-md'>{data?.facebook}</p>
                        </a>
                    </div>
                </div>
            </div> 
            </div> : <div className='flex-1 rounded-xl shadow bg-foreground animate-pulse'/>}

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