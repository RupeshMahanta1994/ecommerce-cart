'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export async function registerUser(formData: FormData) {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const profilePic = formData.get("profilePic");

    const data = new FormData();
    data.append("username", username as string);
    data.append("email", email as string);
    data.append("password", password as string);
    if (profilePic instanceof File) {
        data.append("profilePic", profilePic);
    }

    const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        body: data,
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        throw new Error('Failed to create post');
    }

    revalidatePath("/");


    try {
        return await response.json();
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        throw new Error('Failed to parse server response');
    }
}
export async function userLogin(formData: FormData) {

    const email = formData.get("email");
    const password = formData.get("password");


   
    

    const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({email,password}),
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        throw new Error('Failed to Login');
    }

    revalidatePath("/");


    try {
        return await response.json();

    } catch (error) {
        console.error('Failed to parse JSON:', error);
        throw new Error('Failed to parse server response');
    }
}

//Post actions
//create post
export async function createPost(formData: FormData) {
    const user_id = formData.get("user_id")
    const caption = formData.get("caption");
    const profilePic = formData.get("image");
    const data = new FormData();
    data.append("user_id", user_id as string);
    data.append("caption", caption as string);
    data.append("image", profilePic as string);
    if (profilePic instanceof File) {
        data.append("image", profilePic);
    }
    console.log("fresh data",data)

    const response = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        body: data,
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        throw new Error('Failed to create post');
    }

    revalidatePath("/");


    try {
        return await response.json();
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        throw new Error('Failed to parse server response');
    }
}
