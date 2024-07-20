import { Play, ChevronDown, Download } from 'lucide-react'

export default function SearchResults({ songs }) {
  return (
    <div className="flex-grow overflow-y-auto">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center p-4 border-b">
          <img src={song.thumbnail} alt={song.title} className="w-16 h-9 object-cover mr-4" />
          <div className="flex-grow">
            <div className="font-semibold">{song.title}</div>
            <div className="text-sm text-gray-500">{song.artist}</div>
            <div className="text-xs text-gray-400">{song.duration}</div>
          </div>
          <div className="flex space-x-2">
            <Play size={20} />
            <ChevronDown size={20} />
            <Download size={20} />
          </div>
        </div>
      ))}
    </div>
  )
}