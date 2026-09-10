import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSun } from "react-icons/fa";
import { GiVampireDracula } from 'react-icons/gi';

const Navbar = () => {
  return (
    <MaxWidthWrapper background_color={"foreground"}>
        <div className='w-full flex flex-col py-6 font-mono'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='text-5xl font-script pb-6 font-semibold'>Majid Čergić <br /> Photography</h1>
                <div className='w-2/3 mx-auto h-0.5 rounded-full bg-white my-3' />
                
                <div className='w-full py-6 flex items-center justify-center gap-12 '>
                    <p className='cursor-pointer text-lg ease-in-out duration-200 hover:-mt-1'>Weddings</p>
                    <p className='cursor-pointer text-lg ease-in-out duration-200 hover:-mt-1'>Portraits</p>
                    <p className='cursor-pointer text-lg ease-in-out duration-200 hover:-mt-1'>Nature</p>
                    <p className='cursor-pointer text-lg ease-in-out duration-200 hover:-mt-1'>Contact</p>
                    <p className='cursor-pointer text-lg ease-in-out duration-200 hover:-mt-1'>Pricing</p>
                </div>
                <div className='flex items-center gap-6'>
                    <FaFacebook className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                    <FaInstagram className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                    <FaLinkedin className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                    <FaPinterest className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                    <FaSun className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                </div>

            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Navbar