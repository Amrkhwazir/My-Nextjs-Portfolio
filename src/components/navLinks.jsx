"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavLinks = ({link}) => {
    const pathName = usePathname();
    console.log(link);
  return (
    <Link className={`rounded px-2 py-1 text-white ${pathName === link.url && "bg-gradient-to-r from-purple-300 to-red-300 text-white"}`} href={link.url}>
        {link.title}
        </Link>
  )
}
