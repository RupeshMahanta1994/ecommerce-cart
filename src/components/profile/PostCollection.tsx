import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {}

const PostCollection = (props: Props) => {
    return (
        <div>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="posts">Posts</TabsTrigger>
                    <TabsTrigger value="reels">Reels</TabsTrigger>
                    <TabsTrigger value="saved">Saved</TabsTrigger>
                    <TabsTrigger value="tagged">Tagged</TabsTrigger>
                </TabsList>
                <TabsContent value="posts">Make changes to your account here.</TabsContent>
                <TabsContent value="reels">Change your password here.</TabsContent>
                <TabsContent value="saved">Change your password here.</TabsContent>
                <TabsContent value="tagged">Change your password here.</TabsContent>
            </Tabs>

        </div>
    )
}

export default PostCollection