'use client'
import React from 'react'
import ProfileAvatar from './ProfileAvatar'
import PostOptions from './PostOptions'
import Image from 'next/image'
import PostImage from "../../public/demo.jpeg"
import InteractiveButtons from './InteractiveButtons'
import { Input } from './ui/input'

type Props = {}

const Post = (props: Props) => {
    return (
        <div className='flex-col flex gap-1  border-b-2 pb-3 space-y-1.5' >
            {/* Profile  */}
            <div className='flex items-center justify-between'>

                <div className='flex items-center gap-1.5'>
                    <ProfileAvatar avatarSize={'7'} />
                    <p className='font-bold' onClick={() => console.log("Hello workd")}>user_name</p>
                </div>
                <PostOptions />
            </div>
            {/* picture */}
            <div>
                <Image src={PostImage} className='rounded-sm' alt='Image' />
            </div>
            {/* Like buttons */}
            <InteractiveButtons />
            <div className='text-sm'>
                99 likes
            </div>
            {/* comments */}
            <div className='text-sm'>
                View all 5 comments
            </div>
            {/* add a comments */}
            <Input placeholder='Add a comments...' />

        </div>
    )
}

export default Post