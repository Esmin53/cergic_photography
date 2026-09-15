"use client"

import Link from 'next/link'
import { FaHouse } from 'react-icons/fa6'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { FiLogOut } from 'react-icons/fi'
import { logoutAction } from '@/app/login/actions'

const Navbar = () => {
  return (
    <MaxWidthWrapper background_color={"foreground"}>
        <div className='w-full h-12 flex items-center justify-between py-4'>
            <h1 className='text-3xl'>Admin</h1>
            <div className='flex items-center gap-4'>
                <Link href="/">
                    <FaHouse className='text-2xl'/>
                </Link>
                <div className='cursor-pointer' onClick={() => logoutAction()}>
                    <FiLogOut  className='text-2xl'/>
                </div>
            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Navbar