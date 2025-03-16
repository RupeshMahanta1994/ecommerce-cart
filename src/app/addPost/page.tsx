import AddPost from '@/components/post/AddPost'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='flex items-center justify-center '>
            <AddPost />
        </div>
    )
}

export default page