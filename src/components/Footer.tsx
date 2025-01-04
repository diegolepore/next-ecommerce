import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row gap-16">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <span className="text-2xl tracking-wide">  
              LAMA
            </span>
          </Link>
          <p>
            123 Fake Street, Springfield, IL, 62701
          </p>
          <span className="font-semibold">info@example.com</span>
          <span className="font-semibold">+1 (555) 123-4567</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="facebook" width={16} height={16} />
            <Image src="/instagram.png" alt="instagram" width={16} height={16} />
            <Image src="/youtube.png" alt="youtube" width={16} height={16} />
            <Image src="/pinterest.png" alt="pinterest" width={16} height={16} />
            <Image src="/x.png" alt="x" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-2/4">
          <div className="flex flex-col gap-8">
            <h3 className="font-medium text-lg">COMPANY</h3>
            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="font-medium text-lg">SHOP</h3>
            <div className="flex flex-col gap-6">
              <Link href="/">New Arrivals</Link>
              <Link href="/">Accesories</Link>
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="font-medium text-lg">HELP</h3>
            <div className="flex flex-col gap-6">
              <Link href="/">Customer Service</Link>
              <Link href="/">My Account</Link>
              <Link href="/">Find a Store</Link>
              <Link href="/">Legal & Privacy</Link>
              <Link href="/">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h2 className="font-medium text-lg">
            SUBSCRIBE
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat dolorem cupiditate asperiores. Quidem, accusamus.
          </p>
          <div className="flex">
            <input 
              type="text" 
              placeholder="Email address" 
              className="p-4 w-3/4"
            />
            <button className="bg-lama text-white p-4">
              JOIN
            </button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/visa.png" alt="visa" width={40} height={40} />
            <Image src="/mastercard.png" alt="mastercard" width={40} height={40} />
            <Image src="/paypal.png" alt="paypal" width={40} height={40} />
            <Image src="/skrill.png" alt="paypal" width={40} height={40} />
            <Image src="/discover.png" alt="paypal" width={40} height={40} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-8">
        <div className="text-center">
          &copy; 2023 LAMA. All Rights Reserved.
        </div>
        <div className="flex flex-col md:flex-row gap-8 text-center">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer