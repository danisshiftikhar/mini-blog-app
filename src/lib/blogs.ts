"use client";
import { BLOGS_KEY } from "@/constants";
import { IBlog } from "@/types";
import { currentDataWTime, sortingOnDate } from "@/utils";


// Function to get all blogs
const getAllBlogs = (): IBlog[] => {
  const blogsJSON = localStorage.getItem(BLOGS_KEY);
  const blogs: IBlog[] = blogsJSON ? sortingOnDate(blogsJSON) : [];
  return blogs;
};

// Function to get a blog by id
const getBlogById = (blogId: number): IBlog | undefined => {
  const blogsJSON = localStorage.getItem(BLOGS_KEY);
  const blogs: IBlog[] = blogsJSON ? JSON.parse(blogsJSON) : [];
  return blogs.find((blog) => blog.id === blogId);
};

// Function to delete a blog by id
const deleteBlogById = (blogId: number): void => {
  const blogsJSON = localStorage.getItem(BLOGS_KEY);
  if (blogsJSON) {
    let blogs: IBlog[] = JSON.parse(blogsJSON);
    blogs = blogs.filter((blog) => blog.id !== blogId);
    localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
  }
};


// Function to edit a blog by id
const editBlogById = (
  blogId: number,
  newTitle: string,
  newContent: string
): void => {
  const blogsJSON = localStorage.getItem(BLOGS_KEY);
  if (blogsJSON) {
    let blogs: IBlog[] = JSON.parse(blogsJSON);
    const index = blogs.findIndex((blog) => blog.id === blogId);
    if (index !== -1) {
      blogs[index].title = newTitle;
      blogs[index].content = newContent;
      blogs[index].date = currentDataWTime();
      localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
    }
  }
};

// Function to create a new blog
const createBlog = (title: string, content: string): void => {
  const blogsJSON = localStorage.getItem(BLOGS_KEY);
  const blogs: IBlog[] = blogsJSON ? JSON.parse(blogsJSON) : [];
  const newBlog: IBlog = {
    id: Date.now(),
    title: title,
    content: content,
    date: currentDataWTime(),
  };
  blogs.push(newBlog);
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
};

export { getAllBlogs, getBlogById, deleteBlogById, editBlogById, createBlog };
