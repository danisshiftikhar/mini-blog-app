"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { deleteBlogById, getBlogById } from "@/lib/blogs";
import { IBlog } from "@/types";
import { ROUTES } from "@/constants";
import Button from "@/components/shared/Button";
import NoContentCard from "@/components/dashboard/NoContentCard";

const Blog = () => {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<IBlog>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blog = getBlogById(+id);
    setBlog(blog);
    setLoading(false);
  }, [id]);

  const deleteHandler = (): void => {
    deleteBlogById(+id);
    router.push(ROUTES.DASHBOARD);
  };

  const updateHandler = () => {
    router.push(`${ROUTES.EDIT_BLOG}/${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && !blog?.id) {
    return (
      <NoContentCard message="sorry we don't have any blog against this id at the moment" />
    );
  } else {
    return (
      <div className="p-4 flex flex-col gap-4">
        <div className=" w-fit mx-auto text-5xl font-semibold">
          {blog?.title}
        </div>
        <div className="text-2xl">{blog?.content}</div>
        <div className="text-sm font-extralight">{blog?.date}</div>
        <div className="flex flex-col md:flex-row gap-2">
          <Button
            onClickHandler={updateHandler}
            title="Edit"
            color="bg-blue-500"
          />
          <Button
            onClickHandler={deleteHandler}
            title="Delete"
            color="bg-red-500"
          />
        </div>
      </div>
    );
  }
};

export default Blog;
