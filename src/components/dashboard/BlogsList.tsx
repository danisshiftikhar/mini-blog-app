import React, { FC } from "react";
import NoContentCard from "./NoContentCard";
import { Blog } from "@/types";
import BlogCard from "./BlogCard";

interface BlogsListProps {
  blogs: Array<any>;
}

const BlogsList: FC<BlogsListProps> = ({ blogs }) => {
  if (!blogs.length) {
    return <NoContentCard />;
  }
  return (
    <div className="flex flex-col md:flex-row flex-wrap box-border gap-2 overflow-hidden ">
      {blogs.map((blog: Blog) => (
        <BlogCard key={blog.id} data={blog} />
      ))}
    </div>
  );
};

export default BlogsList;
