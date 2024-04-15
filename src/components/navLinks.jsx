"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavLinks = ({link}) => {
    const pathName = usePathname();
  return (
    <Link className={`rounded px-2 py-1 text-white ${pathName === link.url && "bg-indigo-500 text-white"}`} href={link.url}>
        {link.title}
        </Link>
  )
}
