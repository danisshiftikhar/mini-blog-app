"use client";
import React, { useEffect, useState } from "react";
import BlogForm from "@/components/shared/BlogForm";
import { useParams } from "next/navigation";
import { getBlogById } from "@/lib/blogs";
import NoContentCard from "@/components/dashboard/NoContentCard";

interface InitialValues {
  id: number;
  title: string;
  content: string;
}

const EditBlog = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState<InitialValues>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blog = getBlogById(+id);
    if (blog) {
      const { id, title, content } = blog;
      setInitialValues({
        id,
        title,
        content,
      });
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div> Loading ...</div>;
  }
  if (!loading && !initialValues?.id) {
    return (
      <NoContentCard message="Sorry we are not able to find any blog against this id" />
    );
  } else {
    return <BlogForm initialValues={initialValues} />;
  }
};

export default EditBlog;
