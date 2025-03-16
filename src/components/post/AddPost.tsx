"use client"
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Input } from '../ui/input';
import { useAuthStore } from '@/store/useAuthStore';
import { createPost } from '@/app/lib/actions';

type Props = {}

const AddPost = (props: Props) => {
    const [user, setUser] = useState()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userData") || '{}');
        setUser(user)
    }, [])
    const [image, setImage] = useState<string | null>(null);
    console.log("user data", user)
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };


    return (
        <div className='flex items-center justify-center'>
            <Card>
                <CardHeader>
                    Create New Post
                </CardHeader>
                <CardContent >
                    {image && (
                        <div className='mt-4'>
                            <Image width={400} height={400} src={image} alt="Uploaded" className='rounded-sm' />
                        </div>
                    )}


                </CardContent>
                <CardFooter>
                    <form action={createPost} className='space-y-3'>
                        <input type="number" value={user?.id} name='user_id' className='hidden' />
                        <Input type="text" name='caption' placeholder='add a caption' />
                        <Input type="file" name='image' placeholder='Post image' />
                        <Button className='cursor-pointer capitalize' type='submit'>
                            Add Post
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    );
}

export default AddPost;