"use client";
import React, { useEffect, useState } from "react";
import { getAllBlogs } from "@/lib/blogs";
import { IBlog } from "@/types";
import BlogsList from "@/components/dashboard/BlogsList";

const Dashboard = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allBlogs = getAllBlogs();
    setBlogs(allBlogs);
    setLoading(false);
  }, []);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div className="flex justify-end w-full my-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchInputChange}
          className="p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 w-full md:w-1/4"
        />
      </div>
      <BlogsList blogs={filteredBlogs} />
    </>
  );
};

export default Dashboard;
