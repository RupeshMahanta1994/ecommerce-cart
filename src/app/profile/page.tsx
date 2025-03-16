
import Hilights from '@/components/profile/Hilights'
import PostCollection from '@/components/profile/PostCollection'
import ProfileHeader from '@/components/profile/ProfileHeader'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='space-y-5 pt-10 px-30'>
            <ProfileHeader />
            <Hilights />
            <PostCollection />
        </div>
    )
}

export default page