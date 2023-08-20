'use client'
import { BLOGS_KEY } from "@/constants";
import { Blog } from "@/types";


// Function to get all blogs
const getAllBlogs = (): Blog[] => {
    const blogsJSON = localStorage.getItem(BLOGS_KEY);
    const blogs: Blog[] = blogsJSON ? JSON.parse(blogsJSON) : [];
    return blogs;
}

// Function to get a blog by id
const getBlogById = (blogId: number): Blog | undefined => {
    const blogsJSON = localStorage.getItem(BLOGS_KEY);
    const blogs: Blog[] = blogsJSON ? JSON.parse(blogsJSON) : [];
    return blogs.find(blog => blog.id === blogId);
}

// Function to delete a blog by id
const deleteBlogById = (blogId: number): void => {
    const blogsJSON = localStorage.getItem(BLOGS_KEY);
    if (blogsJSON) {
        let blogs: Blog[] = JSON.parse(blogsJSON);
        blogs = blogs.filter(blog => blog.id !== blogId);
        localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
    }
}

// Function to edit a blog by id
const editBlogById = (blogId: number, newTitle: string, newContent: string): void => {
    const blogsJSON = localStorage.getItem(BLOGS_KEY);
    if (blogsJSON) {
        let blogs: Blog[] = JSON.parse(blogsJSON);
        const index = blogs.findIndex(blog => blog.id === blogId);
        if (index !== -1) {
            blogs[index].title = newTitle;
            blogs[index].content = newContent;
            localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
        }
    }
}

// Function to create a new blog
const createBlog = (title: string, content: string): void => {
    const blogsJSON = localStorage.getItem(BLOGS_KEY);
    const blogs: Blog[] = blogsJSON ? JSON.parse(blogsJSON) : [];
    const newBlog: Blog = {
        id: Date.now(),
        title: title,
        content: content,
        date: new Date(Date.now()).toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })
    };
    blogs.push(newBlog);
    localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
}

export { getAllBlogs, getBlogById, deleteBlogById, editBlogById, createBlog };