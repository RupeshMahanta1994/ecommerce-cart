"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Input } from '../ui/input';

type Props = {}

const AddPost = (props: Props) => {
    const [image, setImage] = useState<string | null>(null);

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
                <CardContent>
                    {image && (
                        <div className='mt-4'>
                            <Image width={400} height={400} src={image} alt="Uploaded" className='rounded-sm' />
                        </div>
                    )}
                    <Input type="text" placeholder='add a caption' />
                    <Input type="file" onChange={handleImageUpload} />
                    <Button className='cursor-pointer capitalize'>
                        Select from computer
                    </Button>

                </CardContent>
            </Card>
        </div>
    );
}

export default AddPost;