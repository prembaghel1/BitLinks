import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-5 items-center text-white'>
        <Link href="/"><div className="logo font-bold text-lg">BitLinks</div></Link>
        <ul className='flex justify-between items-center gap-10'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex justify-between items-center gap-3'>
                 <Link href="/shorten"><button className='bg-purple-500 cursor-pointer shadow-lg px-3 py-1 rounded-lg font-bold'>Try Now</button></Link>
                 <Link href="/github"><button className='bg-purple-500 cursor-pointer shadow-lg px-3 py-1 rounded-lg font-bold'>GitHub</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
