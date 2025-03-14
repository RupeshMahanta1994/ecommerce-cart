'use client'
import React, { use } from 'react'
interface Post {
    id: number;
    title: string;
    content: string;
}
type Props = {
    posts: Promise<Post[]>
}

const Post = (props: Props) => {
    const allPosts = use(props.posts)
    console.log("all post", allPosts)

    return (
        <div>
            {
                allPosts?.map(post => {
                    return (<div key={post.id}>
                        <div>{post.id}</div>
                        <div>{post.title}</div>
                        <div>{post.content}</div>
                    </div>)
                })
            }
        </div>
    )
}

export default Post