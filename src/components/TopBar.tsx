import React from 'react'

type Props = {}

const TopBar = (props: Props) => {
    return (
        <nav className='flex items-center justify-between py-5 px-4'>
            <div>Logo</div>
            <div>Login</div>
        </nav>
    )
}

export default TopBar