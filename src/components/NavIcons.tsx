"use client"

import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartDropdown from "./CartDropdown";

const NavIcons = () => {

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  // TEMPORARY
  const isLoggedIn = true;

  const handleProfileOpen = () => {
    if (isLoggedIn) {
      setIsProfileOpen((prev) => !prev)
    }

    if (!isLoggedIn) {
      router.push("/login");
    }
  }

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <button onClick={handleProfileOpen}>
        <Image src="/profile.png" alt="user" width={22} height={22}/>
      </button>
      {isProfileOpen && (
        <ul className="absolute top-12 left-0 p-4 text-sm shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20">
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>Logout</li>
        </ul>
      )}
      
      <button>
        <Image src="/notification.png" alt="user" width={22} height={22}/>
      </button>

      <button className="relative" onClick={() => setIsCartOpen((prev) => !prev)}>
          <Image src="/cart.png" alt="cart" width={22} height={22}/>
          <div className="absolute w-6 h-6 -top-4 -right-4 bg-lama text-white text-sm flex items-center justify-center rounded-full">2</div>
      </button>
      {isCartOpen && (
        <CartDropdown />
      )}
    </div>
  )
}

export default NavIcons