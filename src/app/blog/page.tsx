import Post from '@/components/Post';
import React, { Suspense } from 'react'

type Props = {}
interface Post {
    id: number;
    title: string;
    content: string;
}
const page = (props: Props) => {
    async function getData() {
        const res = await fetch('http://localhost:3001/api/posts'); // Full URL
        const data: Post[] = await res.json();
        return data
    }
    const posts = getData()
    return (
        <>
            <div>All posts goes here

            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Post posts={posts} />
            </Suspense>
        </>
    )
}

export default page