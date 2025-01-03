"use client"

import Image from "next/image"
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;

    if (search) {
      router.push(`/list?search=${search}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex flex-1 items-center justify-center gap-4 bg-gray-100 p-2 rounded-md">
      <input type="text" name="search" placeholder="Search" className="flex-1 bg-transparent outline-none"/>
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16}/>
      </button>
    </form>
  )
}

export default SearchBar