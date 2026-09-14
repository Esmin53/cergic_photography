import Link from 'next/link'
import React from 'react'
import { FaHouse } from 'react-icons/fa6'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Navbar = () => {
  return (
    <MaxWidthWrapper background_color={"foreground"}>
        <div className='w-full h-12 flex items-center justify-between py-4'>
            <h1 className='text-3xl'>Admin</h1>
            <Link href="/">
                <FaHouse className='text-2xl'/>
            </Link>
        </div>
    </MaxWidthWrapper>
  )
}

export default Navbar