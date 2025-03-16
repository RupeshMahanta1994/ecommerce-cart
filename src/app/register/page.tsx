import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { createPost } from '../lib/actions'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='px-30 space-y-2'>
            <h1 className='text-center font-bold tracking-wide text-xl'>Register User</h1>
            <form action={createPost} className='flex-col flex items-center justify-between gap-3.5'>
                <Input type="text" placeholder='username' name='username' />
                <Input type="email" placeholder='email' name='email' />
                <Input type="password" placeholder='password' name='password' />
                <Input type="file" name="profilePic" placeholder='Profile Picture' />
                <Button type='submit' className='cursor-pointer'>Register</Button>
            </form>
        </div>
    )
}

export default page