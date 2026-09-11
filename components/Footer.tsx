import MaxWidthWrapper from './MaxWidthWrapper'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa'

const Footer = () => {

    const handleScroll = (targetId: string) => {
        const target = document.getElementById(targetId);
        console.log("Target : ", target)
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <MaxWidthWrapper background_color={"foreground"}>
        <div className='w-full flex flex-col md:flex-row py-6 font-mono items-center justify-between'>
            <div className='flex flex-col justify-center'>
                <h1 className='font-script text-2xl lg:text-3xl'>Majid Cergic < br />Photography</h1>
            </div>
            <div className='py-6 flex items-center flex-wrap justify-center gap-2 lg:gap-4'>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1' onClick={() => handleScroll("svadbe")}>Svadbe</p>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1' onClick={() => handleScroll("portreti")}>Portreti</p>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1' onClick={() => handleScroll("eventi")}>Eventi</p>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1' onClick={() => handleScroll("kontakt")}>Kontakt</p>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1' onClick={() => handleScroll("cijene")}>Cijene</p>
            </div>
            <div className='flex gap-6 '>
                <FaFacebook className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                     <a href='https://www.instagram.com/cergicphotography/' target='_blank'>
                        <FaInstagram className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                     </a>
                <FaPinterest className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Footer