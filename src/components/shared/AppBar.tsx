import React from 'react'
import Link from 'next/link'
import { ROUTES } from '@/constants'


const AppBar = () => {
    return (
        <div className='w-full bg-blue-400 text-xl p-4  font-semibold flex justify-between' >
            <Link href={ROUTES.DASHBOARD} className='cursor-pointer'>Mini Blog App</Link>
            <Link href={ROUTES.ADD_BLOG} className='cursor-pointer'>
                + Add Blog
            </Link>
        </div>
    )
}

export default AppBar