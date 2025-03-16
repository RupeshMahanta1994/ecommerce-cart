"use client"
import React from 'react'
import ProfileAvatar from '../ProfileAvatar'
import { Button } from '../ui/button'
import { Settings } from 'lucide-react'

type Props = {}

const ProfileHeader = (props: Props) => {
    return (
        <div className='flex-row flex gap-10 px-10 items-center'>
            <div className='w-[9rem] h-[9rem]'>
                <ProfileAvatar avatarSize='1' />
            </div>
            <div>
                <div className='flex-row items-center flex gap-5'>
                    <div className='font-bold text-md'>rupesh_mahanta</div>
                    <div className='flex-row flex items-center gap-2' >
                        <Button size='sm' variant='secondary' className='cursor-pointer' onClick={() => alert("Hello ")}>Edit Profile</Button>
                        <Button size='sm' variant='secondary'>View archive</Button>
                        <Settings />
                    </div>
                </div>
                <div className="flex-row flex my-5">
                    <div>48 <span className='text-gray-400'>posts</span></div>
                    <div>48 <span className='text-gray-400'>followers</span></div>
                    <div>48 <span className='text-gray-400'>followings</span></div>
                </div>
                {/* Bio Section */}
                <div>
                    <div>Rupesh Mahanta</div>
                    <Button variant='outline'>@rupesh_mahanta</Button>
                    <div>
                        Engineer <br />
                        Libra <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader