import { Play, ChevronDown, Download } from 'lucide-react'

export default function SongList({ songs }) {
  return (
    <div className="flex-grow overflow-y-auto">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center justify-between p-4 border-b">
          <div>
            <div className='text-black'>{song.name}</div>
            <div className="text-sm text-gray-500">{song.composer}</div>
          </div>
          <div className="flex space-x-2 text-black">
            <Play size={20} />
            <ChevronDown size={20} />
            <Download size={20} />
          </div>
        </div>
      ))}
    </div>
  )
}