import { Bookmark, Heart, MessageCircle, Send } from 'lucide-react'
import React from 'react'

type Props = {}

const InteractiveButtons = (props: Props) => {
    return (
        <div className='flex items-center justify-between '>
            <div className='flex gap-2'>

                <Heart />
                <MessageCircle />
                <Send />
            </div>
            <div>

                <Bookmark />
            </div>
        </div>
    )
}

export default InteractiveButtons