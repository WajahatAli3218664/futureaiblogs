import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { IoIosSearch } from 'react-icons/io'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <div className='bg-[#2A254B] text-pink-600 py-4 sticky top-0'>
      {/* Links for larger screens */}
      <div className='hidden lg:flex lg:justify-between gap-4 md:gap-96 lg:ml-14 ml-4 lg:mr-14'>
        <div className='font-bold lg:text-2xl font-serif'>FarahBlogsAI</div>
        <ul className='flex lg:gap-10 gap-6 lg:text-xl'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>

      {/* Header for Mobile Screens */}
      <div className="flex lg:hidden items-center justify-between mr-2 ml-2">
        {/* Blog Name and Icons */}
        <div className="font-bold text-pink-600 font-serif">FarahBlogsAI</div>

        {/* Hamburger Menu and Search Icon on Right */}
        <div className="flex items-center gap-4">
          <IoIosSearch size={20} className="text-gray-600" />
          <Sheet>
            <SheetTrigger>
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Header
