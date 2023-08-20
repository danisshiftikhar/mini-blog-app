'use client'
import React, { useEffect, useState } from 'react';
import { getAllBlogs } from '@/lib/blogs';
import { Blog } from '@/types';
import BlogCard from '@/components/dashboard/BlogCard';
import NoContentCard from '@/components/dashboard/NoContentCard';

const Dashboard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const allBlogs = getAllBlogs();
    setBlogs(allBlogs);
  }, []);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className='flex justify-end w-full my-4'>
        <input
          type='text'
          placeholder='Search by title...'
          value={searchTerm}
          onChange={handleSearchInputChange}
          className='p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 w-full md:w-1/4'
        />
      </div>
      {filteredBlogs.length > 0 ? (
        <div className='flex flex-col md:flex-row flex-wrap box-border gap-2 overflow-hidden '>
          {filteredBlogs.map((blog: Blog) => (
            <BlogCard key={blog.id} data={blog} />
          ))}
        </div>
      ) : (
        <div className='h-screen flex flex-col justify-center'>
          <NoContentCard />
        </div>
      )}
    </>
  );
};

export default Dashboard;
