import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import SearchBar from "./SearchBar"
import NavIcons from "./NavIcons"

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      
      <div className="flex md:hidden justify-between items-center h-full">
        {/* MOBILE */}
        <Link href="/">
          <span className="text-2xl tracking-wide">  
            LAMA
          </span>
        </Link>
        <MobileMenu />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex justify-between items-center gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <span className="text-2xl tracking-wide">  
              LAMA
            </span>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex justify-end gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar