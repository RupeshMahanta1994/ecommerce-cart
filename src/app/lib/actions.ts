'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

 
export async function createPost(formData: FormData) {
    const title=formData.get("title")
    const content=formData.get("content")
    const response = await fetch('http://localhost:3001/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({  title, content }),
    });

    if (!response.ok) {
        throw new Error('Failed to create post');
    }
revalidatePath("/blog")

    return await response.json();

}
 
export async function deletePost(id:number) {
console.log("I got here")
    const response = await fetch(`http://localhost:3001/api/posts/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to create post');
    }
    revalidatePath("/")
    

}