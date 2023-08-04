'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export default function SearchFilter ({ initialValue }) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState(initialValue || '')
  const [showRegions, setShowRegions] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search/${searchQuery}`)
  }
  return (
    <div className='flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 gap-10'>
      <form onSubmit={handleSubmit} className='grow w-full md:w-auto'>
        <input class='bg-white dark:bg-dark-blue shadow rounded-lg h-14 w-full md:max-w-[400px] p-4' placeholder='Search for a country...' onChange={(e) => setSearchQuery(e.target.value)} type='text' value={searchQuery} />
      </form>
      <div className='relative w-[200px] z-10'>
        <button onClick={() => setShowRegions(!showRegions)} type='button' className='bg-white dark:bg-dark-blue shadow rounded-lg h-14 px-4 flex items-center justify-between w-full'>Filter by region {showRegions ? <BsChevronUp /> : <BsChevronDown />}</button>
        <div className={`${showRegions ? 'max-h-[200px]' : 'max-h-0'} transition-[max-height] overflow-hidden absolute left-0 top-[calc(100%+theme(spacing.1))] bg-white dark:bg-dark-blue shadow rounded-lg w-full`}>
          <ul className='p-4 flex flex-col gap-2'>
            <li><Link href='/search/africa'>África</Link></li>
            <li><Link href='/search/america'>América</Link></li>
            <li><Link href='/search/asia'>Asia</Link></li>
            <li><Link href='/search/europe'>Europe</Link></li>
            <li><Link href='/search/oceania'>Oceania</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
