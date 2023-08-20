import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants';
import { createBlog, editBlogById } from '@/lib/blogs';

interface BlogFormProps {
    initialValues?: { id: number; title: string; content: string };
}

const BlogForm: React.FC<BlogFormProps> = ({ initialValues }) => {
    const isEditing = !!initialValues?.id
    const router = useRouter();
    const [title, setTitle] = useState(initialValues?.title || '');
    const [content, setContent] = useState(initialValues?.content || '');
    const [error, setError] = useState('');

    console.log("isedignnigng",isEditing)

    const handleSubmit = () => {
        if (title.trim() === '' || content.trim() === '') {
            setError('Please fill in both title and content fields.');
        } else {
            if (isEditing) {
                editBlogById(initialValues.id, title, content);
            } else {
                createBlog(title, content);
            }
            router.push(ROUTES.DASHBOARD);
        }
    };

    return (
        <div className="flex flex-col gap-4 p-4 border rounded-md shadow-md">
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
                    className="w-full h-32 p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
                onClick={handleSubmit}
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
                {isEditing ? 'Update' : 'Submit'}
            </button>
        </div>
    );
};

export default BlogForm;
