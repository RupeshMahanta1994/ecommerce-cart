'use client'
import React from 'react'

type Props = {
    id: number,
    handleDelete: (id: number) => void
}

const DeletePost = (props: Props) => {
    return (
        <div onClick={() => props.handleDelete(props.id)}>DeletePost</div>
    )
}

export default DeletePost