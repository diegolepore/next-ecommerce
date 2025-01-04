import Image from "next/image"
import Link from "next/link"


const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
            src="https://toymachine.com/media/catalog/product/cache/6a4bed52e932688e7f72d168675cc1cb/t/m/tm_lostnfound_sscblk_2_1.jpg" 
            alt="product" 
            fill 
            sizes="25vw"
            className="rounded-md absolute object-contain z-10 hover:opacity-0 transition-all ease-in-out duration-500"
          />
          <Image 
            src="https://toymachine.com/media/catalog/product/cache/6a4bed52e932688e7f72d168675cc1cb/t/m/tm_lostnfound_sscblkbck_2_5.jpg" 
            alt="product" 
            fill 
            sizes="25vw"
            className="rounded-md absolute object-contain"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Lost & Found Crew</span>
          <span className="font-semibold">$50.00</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
            src="https://toymachine.com/media/catalog/product/cache/6a4bed52e932688e7f72d168675cc1cb/t/m/tm_earlysect_mug_org.jpg" 
            alt="product" 
            fill 
            sizes="25vw"
            className="rounded-md absolute object-contain z-10 hover:opacity-0 transition-all ease-in-out duration-500"
          />
          <Image 
            src="https://toymachine.com/media/catalog/product/cache/6a4bed52e932688e7f72d168675cc1cb/t/m/tm_earlysect_mug_org.jpg" 
            alt="product" 
            fill 
            sizes="25vw"
            className="rounded-md absolute object-contain"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Early Sect Mug</span>
          <span className="font-semibold">$15.95</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
            src="https://toymachine.com/media/catalog/product/cache/6a4bed52e932688e7f72d168675cc1cb/t/m/tm_mydrug55.jpg" 
            alt="product" 
            fill 
            sizes="25vw"
            className="rounded-md absolute object-contain z-10 hover:opacity-0 transition-all ease-in-out duration-500"
          />
          <Image 
            src="https://toymachine.com/media/catalog/product/cache/6a4bed52e932688e7f72d168675cc1cb/t/m/tm_mydrug55.jpg" 
            alt="product" 
            fill 
            sizes="25vw"
            className="rounded-md absolute object-contain"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">My Drug 56mm</span>
          <span className="font-semibold">$36.00</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
      </Link>
      <Link href="/product/1" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
            src="https://toymachine.com/media/catalog/product/cache/6a4bed52e932688e7f72d168675cc1cb/t/m/tm_monstcomp_ylo.jpg" 
            alt="product" 
            fill 
            sizes="25vw"
            className="rounded-md absolute object-contain z-10 hover:opacity-0 transition-all ease-in-out duration-500"
          />
          <Image 
            src="https://toymachine.com/media/catalog/product/cache/6a4bed52e932688e7f72d168675cc1cb/t/m/tm_monstcomp_ylo.jpg" 
            alt="product" 
            fill 
            sizes="25vw"
            className="rounded-md absolute object-contain"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Monster 7.75</span>
          <span className="font-semibold">$120.00</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
      </Link>
    </div>
  )
}

export default ProductList