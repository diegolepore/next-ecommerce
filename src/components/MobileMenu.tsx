"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

const MobileMenu = () => {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  return (
    <div>
      <Image 
        src="/menu.png" 
        alt="" 
        width={28} 
        height={28} 
        className="cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />

      {isMenuOpen && (
        <ul className="absolute top-20 right-0 bg-black text-white w-full h-[calc(100vh-5rem)] p-4 flex flex-col items-center justify-center gap-8 text-xl z-10">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Shop</Link></li>
          <li><Link href="/">Deals</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Contact</Link></li>
          <li><Link href="/">Logout</Link></li>
          <li><Link href="/">Cart(1)</Link></li>
        </ul>
      )}
    </div>
  )
}

export default MobileMenu