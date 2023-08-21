"use client";
import React from "react";
import { IBlog } from "@/types";
import Link from "next/link";
import { ROUTES } from "@/constants";
import { contentSlicer } from "@/utils";

interface BlogCardProps {
  data: IBlog;
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const { id, title, content, date } = data;
  return (
    <div className="flex flex-col border p-4 rounded-md w-full md:w-[49.7%] text-start border-box break-words text-wrap">
      <Link
        href={`${ROUTES.BLOG}/${id}`}
        className="cursor-pointer text-2xl font-semibold"
      >
        {title}
      </Link>
      <div className="text-lg">{contentSlicer(content, 200)}</div>
      <div className="text-xs font-extralight">{date}</div>
    </div>
  );
};

export default BlogCard;
