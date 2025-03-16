import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { userLogin } from '../lib/actions'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='px-30 space-y-2'>
            <h1 className='text-center font-bold tracking-wide text-xl'>Login User</h1>
            <form action={userLogin} className='flex-col flex items-center justify-between gap-3.5'>

                <Input type="email" placeholder='email' name='email' />
                <Input type="password" placeholder='password' name='password' />

                <Button type='submit' className='cursor-pointer'>Login</Button>
            </form>
        </div>
    )
}

export default page