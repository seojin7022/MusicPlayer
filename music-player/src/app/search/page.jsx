import SearchResults from '@/components/SearchResults'

export default function Search() {
  const popularSongs = [
    {
      id: 1,
      title: "Shape of You",
      artist: "Ed Sheeran",
      duration: "3:53",
      thumbnail: "/api/placeholder/120/68"
    },
    {
      id: 2,
      title: "Blinding Lights",
      artist: "The Weeknd",
      duration: "3:20",
      thumbnail: "/api/placeholder/120/68"
    },
    {
      id: 3,
      title: "Dance Monkey",
      artist: "Tones and I",
      duration: "3:29",
      thumbnail: "/api/placeholder/120/68"
    },
    {
      id: 4,
      title: "Sunflower",
      artist: "Post Malone, Swae Lee",
      duration: "2:38",
      thumbnail: "/api/placeholder/120/68"
    },
    {
      id: 5,
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      duration: "2:54",
      thumbnail: "/api/placeholder/120/68"
    },
  ]

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold p-4">Popular on YouTube</h2>
      <SearchResults songs={popularSongs} />
    </div>
  )
}