import Link from 'next/link'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className='bg-gray-600 flex-col gap-4 pt-4 flex items-center '>
            <div className='bg-amber-100 w-[80%] py-1 text-center text-black '>
                <Link href="/">Home</Link>
            </div>
            <div className='bg-amber-100 w-[80%] py-1 text-center text-black '>
                <Link href="/blog">Blog</Link>
            </div>
            <div className='bg-amber-100 w-[80%] py-1 text-center text-black '>Gallery</div>
            <div className='bg-amber-100 w-[80%] py-1 text-center text-black '>Contact Me</div>

        </div>
    )
}

export default Sidebar