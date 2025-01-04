"use client"

import Image from "next/image"
import Link from "next/link"
import { title } from "process"
import { useEffect, useState } from "react"

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

  const [ currentSlide, setCurrentSlide ] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => prev === slides.length - 1 ? 0 : prev + 1)
  //   }, 3000)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      {/* SLIDES */}
      <div className="w-max h-full flex transition-all ease-in-out duration-1000" 
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row items-center justify-center`}>
            {/* TEXT CONTAINER */}
            <div className="w-full h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
              <Link href={slide.url} className="text-white bg-black rounded-md py-3 px-4">Shop Now</Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="relative w-full h-1/2 xl:w-1/2 xl:h-full">
              <Image src={slide.img} alt="" fill sizes="100%" className="object-cover" />
            </div>
          </div>
        ))}
      </div>
      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`
              w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center 
              ${currentSlide === index ? 'scale-150': ''}`}
              onClick={() => setCurrentSlide(index)}
            >
              { currentSlide === index && ( 
                <div className="w-[6px] h-[6px] rounded-full bg-gray-600" />
               ) }
            </div>
        ))}
      </div>
    </div>
  )
}

export default Slider