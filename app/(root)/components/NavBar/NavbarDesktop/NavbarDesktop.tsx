import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { links } from '../NavBar.data'


export default function NavbarDesktop() {
  return (
    <div className='hidden md:flex items-center gap-4 text-lg '>
        {links.map((link)=>(
            <Button key={link.name} asChild variant="ghost" className='text-white hover:text-white hover:bg-blue-500/30 transition'>
                <Link href={link.href}>{link.name}</Link>
            </Button>
        ))}
    </div>
  )
}
