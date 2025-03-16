import React from 'react'
import ProfileDetailsBar from './ProfileDetailsBar'

type Props = {}

const Suggestions = (props: Props) => {
    return (

        <div className='pt-10 pl-3 pr-16'>
            <div className='py-5'>
                <ProfileDetailsBar actionText='Switch' />
            </div>
            <div className='space-y-2.5'>
                <div className='flex items-center justify-between'>
                    <p className='text-gray-500 font-bold tracking-wide'>Suggested for you</p>
                    <p className='text-sm font-bold'>See All</p>
                </div>
                <div className='pl-1 space-y-2 '>
                    <ProfileDetailsBar actionText='Follow' />
                    <ProfileDetailsBar actionText='Follow' />
                    <ProfileDetailsBar actionText='Follow' />
                    <ProfileDetailsBar actionText='Follow' />
                    <ProfileDetailsBar actionText='Follow' />
                    <ProfileDetailsBar actionText='Follow' />
                </div>
            </div>
        </div>
    )
}

export default Suggestions