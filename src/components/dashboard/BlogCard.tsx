'use client'
import React from 'react'
import { Blog } from '@/types'
import Link from 'next/link'
import { ROUTES } from '@/constants'

interface BlogCardProps {
    data: Blog
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
    const { id, title, content, date } = data
    return (
        <div className='flex flex-col gap-2 border-solid border-2 border-blue-500 p-4 rounded-md w-full md:w-1/2 text-start'>
            <Link href={`${ROUTES.BLOG}/${id}`} className='cursor-pointer text-2xl font-semibold'>
                {title}
            </Link>
            <div className='text-lg'>
                {content.slice(0, 200).concat('...')}
            </div>
            <div className='text-xs font-extralight'>
                {date}
            </div>
        </div>
    )
}

export default BlogCard