import React from 'react'
import Link from 'next/link'
import { ROUTES } from '@/constants'

const NoContentCard = () => {
    return (
        <div className='flex flex-col gap-2 border-solid border-2 border-blue-500 mx-auto mt-2 p-4 rounded-md w-2/3 text-center text-lg shadow-lg'>
            <div className=' w-auto'>Sorry we dont have any blog at the moment kindly click below to create blog</div>
            <Link href={ROUTES.ADD_BLOG} className='bg-blue-400 py-2 px-4 w-fit rounded-md m-auto font-semibold' >
                Add Blog
            </Link>
        </div>
    )
}

export default NoContentCard