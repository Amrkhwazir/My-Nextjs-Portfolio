"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavLinks = ({link}) => {
    const pathName = usePathname();
    // console.log(pathName);
    // console.log(link.url);
  return (
    <Link className={`rounded px-2 py-1 text-white ${pathName === link.url && "bg-gradient-to-r from-sky-500 to-indigo-500 text-white"}`} href={link.url}>
        {link.title}
        </Link>
  )
}
