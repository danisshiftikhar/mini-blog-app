'use client'
import React, { useEffect, useState } from 'react'
import { getAllBlogs } from '@/lib/blogs'
import { Blog } from '@/types'
import BlogCard from '@/components/dashboard/BlogCard'
import NoContentCard from '@/components/dashboard/NoContentCard'

const Dashboard = () => {

  const [blogs, setBlogs] = useState<Blog[]>([])
  useEffect(() => {
    const blogs = getAllBlogs()
    setBlogs(blogs)
  }, [])

  return (
    <>
      {
        blogs.length > 0 ?
          <div className='flex flex-col md:flex-row gap-4 m-4' >
            {
              blogs.map((blog: Blog) => <BlogCard key={blog.id} data={blog} />)
            }
          </div> :
          <NoContentCard />
      }

    </>

  )
}

export default Dashboard
