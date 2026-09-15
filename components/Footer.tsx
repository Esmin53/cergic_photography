import MaxWidthWrapper from './MaxWidthWrapper'
import { FaEnvelope, FaFacebook, FaFingerprint, FaHandPointer, FaHandPointLeft, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa'

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
        <div className='w-full flex flex-col md:flex-row pb-10 pt-6 sm:pb-6 font-mono items-center justify-between relative'>
            <div className='flex absolute bottom-2 -right-2 gap-2 items-center text-text/75'>
                <a href='https://portfolio-dun-six-56.vercel.app/' target='blank' className='text-xs border-b border-text/75'>developer information</a>
                <FaHandPointLeft className=''/>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='font-script text-2xl lg:text-3xl'>Majid Čergić < br />Photography</h1>
            </div>
            <div className='py-6 flex items-center flex-wrap justify-center gap-2 lg:gap-6'>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1' onClick={() => handleScroll("svadbe")}>Svadbe</p>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1' onClick={() => handleScroll("portreti")}>Portreti</p>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1' onClick={() => handleScroll("eventi")}>Eventi</p>
                <p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1' onClick={() => handleScroll("kontakt")}>Kontakt</p>
                {/*<p className='cursor-pointer lg:text-lg ease-in-out duration-200 hover:-mt-1' onClick={() => handleScroll("cijene")}>Cijene</p>*/}
            </div>
            <div className='flex gap-6 '>
                <a href='https://www.facebook.com/majid.cergic.2025' target='_blank'>
                    <FaFacebook className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                </a>
                <a href='https://www.instagram.com/cergicphotography/' target='_blank'>
                    <FaInstagram className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                </a>
                <a 
                href="mailto:majidcergic02@gmail.com" 
                className="hover:underline"
                >
                <FaEnvelope className='text-2xl cursor-pointer ease-in-out duration-200 hover:-mt-1'/>
                </a>
            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Footer