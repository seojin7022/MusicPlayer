"use client"

import { usePathname } from "next/navigation"
import Link from "next/link";
import { Search, Settings, User } from "lucide-react";

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-around items-center p-4 bg-white border-t">
            <Link href="/search" className={pathname === '/search' ? 'text-green-500' : 'text-black'}>
                <Search size={24} />
            </Link>
            <Link href="/" className={pathname === '/' ? 'text-green-500' : 'text-black'}>
                <User size={24} />
            </Link>
            <Link href="/setting" className={pathname === '/setting' ? 'text-green-500' : 'text-black'}>
                <Settings size={24} />
            </Link>
        </nav>
        
    )
}