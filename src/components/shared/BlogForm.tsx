import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants";
import { createBlog, editBlogById } from "@/lib/blogs";
import Button from "./Button";

interface BlogFormProps {
  initialValues?: { id: number; title: string; content: string };
}

const BlogForm: React.FC<BlogFormProps> = ({ initialValues }) => {
  const isEditing = !!initialValues?.id;
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialValues) {
      const { title, content } = initialValues;
      setTitle(title);
      setContent(content);
    }
  }, [initialValues]);

  const handleSubmit = () => {
    if (title.trim() === "" || content.trim() === "") {
      setError("Please fill in both title and content fields.");
    } else {
      if (isEditing) {
        editBlogById(initialValues.id, title, content);
        router.back();
      } else {
        createBlog(title, content);
        router.push(ROUTES.DASHBOARD);
      }
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-md my-4">
      <div>
        <label className="text-lg font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      <div>
        <label className="text-lg font-medium">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-48 p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-col md:flex-row gap-2">
        <Button
          onClickHandler={handleSubmit}
          title={isEditing ? "Update" : "Submit"}
          color="bg-blue-500"
        />
        <Button
          onClickHandler={handleCancel}
          title="Cancel"
          color="bg-red-500"
        />
      </div>
    </div>
  );
};

export default BlogForm;
