"use client"
import { useState } from 'react'
import SongList from '@/components/SongList'
import { Search } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [songs] = useState([
    { id: 1, name: 'Song 1', composer: 'Composer 1' },
    { id: 2, name: 'Song 2', composer: 'Composer 2' },
    { id: 3, name: 'Song 3', composer: 'Composer 3' },
    { id: 4, name: 'Song 4', composer: 'Composer 4' },
    { id: 5, name: 'Song 5', composer: 'Composer 5' },
  ])

  const filteredSongs = songs.filter(song =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.composer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 bg-gray-100 flex items-center space-x-2">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pr-8 rounded-md border border-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-2 top-2 text-gray-400" size={20} />
        </div>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md whitespace-nowrap">
          Play All
        </button>
      </div>
      <SongList songs={filteredSongs} />
    </div>
  )
}