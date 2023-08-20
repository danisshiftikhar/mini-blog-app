'use client'
import React, { useEffect, useState } from 'react';
import BlogForm from '@/components/shared/BlogForm';
import { useParams } from 'next/navigation'
import { getBlogById } from '@/lib/blogs';

interface InitialValues {
    id: number;
    title: string;
    content: string;

}

const EditBlog = () => {
    const { id } = useParams()
    const [initialValues, setInitialValues] = useState<InitialValues>()

    useEffect(() => {
        const blog = getBlogById(+id)
        if (blog) {
            const { id, title, content } = blog
            setInitialValues({
                id,
                title, content
            })
        }
    }, [id])


    return (
        <BlogForm initialValues={initialValues} />
    );
};

export default EditBlog;
