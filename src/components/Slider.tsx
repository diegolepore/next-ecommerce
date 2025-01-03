"use client"

import Image from "next/image"
import Link from "next/link"
import { title } from "process"

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.unsplash.com/photo-1542727934-07691d6ebf0e?q=80&w=3484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.unsplash.com/photo-1496886077455-6e206da90837?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50"
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.unsplash.com/photo-1534531304203-b830551771b9?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50"
  }
]

const Slider = () => {


  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide) => (
          <div key={slide.id} className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row items-center justify-center`}>
            {/* TEXT CONTAINER */}
            <div className="w-full h-1/2 xl:w-1/2 xl:h-full">
              <h2>{slide.description}</h2>
              <h1 className="text-4xl font-bold">{slide.title}</h1>
              <Link href={slide.url} className="bg-white text-black px-4 py-2 mt-4">Shop Now</Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="relative w-full h-1/2 xl:w-1/2 xl:h-full">
              <Image src={slide.img} alt="" fill sizes="100%" className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider