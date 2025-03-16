import Post from '@/components/Post'
import Suggestions from '@/components/Suggestions'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <section className='grid grid-cols-11'>
            <div className='col-span-7 px-25 space-y-4'>
                {[1, 2, 3, 4, 5].map((post, index) => (<Post key={index} />))}
            </div>
            <div className='col-span-4 '>
                <Suggestions />
            </div>

        </section>
    )
}

export default page