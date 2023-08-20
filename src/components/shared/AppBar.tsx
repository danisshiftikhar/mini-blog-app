'use client'
import React from 'react'
import Link from 'next/link'
import { ROUTES } from '@/constants'
import { usePathname } from 'next/navigation'


const AppBar = () => {
    const pathname = usePathname()
    const isPageAddBlog = pathname.includes(ROUTES.ADD_BLOG)
    return (
        <div className='w-full bg-blue-600 text-xl p-4 box-border font-semibold flex justify-between' >
            <Link href={ROUTES.DASHBOARD} className='cursor-pointer'>Mini Blog App</Link>
            {!isPageAddBlog && <Link href={ROUTES.ADD_BLOG} className='cursor-pointer'>
                + Add Blog
            </Link>}
        </div>
    )
}

export default AppBar