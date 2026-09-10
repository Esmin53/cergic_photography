import MaxWidthWrapper from './MaxWidthWrapper'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <MaxWidthWrapper background_color={"foreground"}>
        <div className='w-full flex flex-col md:flex-row py-6 font-mono items-center justify-between'>
            <div className='flex flex-col justify-center'>
                <h1 className='font-script text-2xl lg:text-3xl'>Majid Cergic < br />Photography</h1>
            </div>
            <div className='py-6 flex items-center flex-wrap justify-center gap-2 lg:gap-4'>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1'>Weddings</p>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1'>Portraits</p>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1'>Nature</p>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1'>Contact</p>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1'>Pricing</p>
            </div>
            <div className='flex gap-6 '>
                <FaFacebook className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                <FaInstagram className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                <FaLinkedin className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                <FaPinterest className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Footer