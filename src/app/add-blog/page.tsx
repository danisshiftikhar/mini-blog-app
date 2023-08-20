'use client'
import React, { useState } from 'react';
import { createBlog } from '@/lib/blogs';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';
import BlogForm from '@/components/shared/BlogForm';

const AddBlog = () => {

  return (
    <BlogForm/>
  );
};

export default AddBlog;
