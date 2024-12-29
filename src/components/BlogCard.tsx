import React from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { TbHandClick } from 'react-icons/tb';


interface BlogCardProps {
    post: { id: string, title: string, description: string, date: string, imageUrl: string };
    isDarkBackground: boolean;
}

const BlogCard = ({ post, isDarkBackground }: BlogCardProps) => {
    return (
        <Card className={`p-4 ${isDarkBackground ? 'bg-[#2A254B] text-white' : 'text-slate-800'} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>

            <img
                src={post.imageUrl}
                alt={post.title}
                className='w-full h-48 object-cover rounded-t-lg'
            />

            <CardTitle className='text-xl font-normal mt-4 text-center'> {post.title} </CardTitle>
            <br />

            <CardContent className='text-center'>
                <p>{post.description}</p>
            </CardContent>

            <div className="flex flex-col items-center mt-4">
                <p className={`text-sm mb-2 ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}>
                    Published On: {new Date(post.date).toLocaleDateString()}
                </p>

                <a href={`/posts/${post.id}`}
                    className={`w-30 py-1 px-6 text-white bg-amber-600 rounded hover:bg-amber-500 ${isDarkBackground ? 'bg-amber-600 hover:bg-amber-500' : 'bg-amber-600 hover:bg-amber-500'}`}>
                    <div className="flex items-center justify-between w-full">
                        <span>Read More</span>
                        <TbHandClick className="ml-2 text-red-600 animate-color-change" size={22} />
                    </div>
                </a>


            </div>


        </Card>
    );
}

export default BlogCard