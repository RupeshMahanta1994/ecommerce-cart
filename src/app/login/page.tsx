"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userLogin } from "../lib/actions";
import { useAuthStore } from "@/store/useAuthStore"; // Zustand Store

const Page = () => {
    const { user } = useAuthStore()

    const [loading, setLoading] = useState(false);
    const setUser = useAuthStore((state) => state.setUser); // Zustand state setter

    const handleLogin = async (formData: FormData) => {
        setLoading(true);



        const response = await userLogin(formData);

        const user = { id: response?.user?.id, username: response?.user?.username, email: response?.user?.email, profilePicture: response?.user?.profilePicture }
        setUser(user)
        localStorage.setItem("userData", JSON.stringify(user))


        setLoading(false);
    };

    console.log("User data", user)
    return (
        <div className="px-30 space-y-2">
            <h1 className="text-center font-bold tracking-wide text-xl">Login User</h1>

            <form action={handleLogin} className="flex-col flex items-center gap-3.5">
                <Input type="email" placeholder="Email" name="email" required />
                <Input type="password" placeholder="Password" name="password" required />

                <Button type="submit" className="cursor-pointer" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </Button>
            </form>
        </div>
    );
};

export default Page;
