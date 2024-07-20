import { useRouter } from 'next/router'
import Link from 'next/link'
import {Search, Settings, User } from 'lucide-react'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <div className="flex flex-col h-screen bg-white">
      <main className="flex-grow overflow-y-auto">
        {children}
      </main>
      <nav className="flex justify-around items-center p-4 bg-white border-t">
        <Link href="/search" className={router.pathname === '/search' ? 'text-green-500' : 'text-black'}>
          <Search size={24} />
        </Link>
        <Link href="/" className={router.pathname === '/' ? 'text-green-500' : 'text-black'}>
          <User size={24} />
        </Link>
        <Link href="/setting" className={router.pathname === '/setting' ? 'text-green-500' : 'text-black'}>
          <Settings size={24} />
        </Link>
      </nav>
    </div>
  )
}