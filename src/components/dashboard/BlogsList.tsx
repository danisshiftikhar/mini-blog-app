import React, { FC } from "react";
import NoContentCard from "./NoContentCard";
import { IBlog } from "@/types";
import BlogCard from "./BlogCard";

interface BlogsListProps {
  blogs: IBlog[];
}

const BlogsList: FC<BlogsListProps> = ({ blogs }) => {
  if (!blogs.length) {
    return (
      <NoContentCard message="Sorry we dont any blogs at the moment, Kindly click below button to create new Blog" />
    );
  }
  return (
    <div className="flex flex-col md:flex-row flex-wrap box-border gap-2 overflow-hidden ">
      {blogs.map((blog: IBlog) => (
        <BlogCard key={blog.id} data={blog} />
      ))}
    </div>
  );
};

export default BlogsList;
