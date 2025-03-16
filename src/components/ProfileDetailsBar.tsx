import React from 'react'
import ProfileAvatar from './ProfileAvatar'

type Props = {
    actionText: string
}

const ProfileDetailsBar = (props: Props) => {
    return (
        <div className='flex items-center justify-between '>
            <div className='felx items-center '>
                <div className='inline-flex items-center gap-2'>

                    <ProfileAvatar avatarSize={'9'} />
                    <div >
                        <div className='text-sm font-bold text-stone-100'>rupesh_mahanta</div>
                        <div className='text-sm text-gray-500'>Ruepsh Mahanta</div>
                    </div>

                </div>

            </div>
            <div className='text-blue-500'>
                {props.actionText}
            </div>
        </div>
    )
}

export default ProfileDetailsBar

