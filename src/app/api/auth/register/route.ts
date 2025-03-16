import pool from "@/app/lib/db";
import bcrypt from "bcryptjs";


export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const username = formData.get("username") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const profilePic = formData.get("profilePic") as File | null;
        console.log(username, email, password, profilePic);
        if (!username || !email || !password || !profilePic) {
            return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
        }

        // Check if user exists
        const [rows] = await pool.query("SELECT * FROM users_list WHERE email = ?", [email]);
        console.log(rows);
        if (Array.isArray(rows) && rows.length > 0) {
            console.log("I was here");
            return new Response(JSON.stringify({ message: "User already exists" }), { status: 409 });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Convert profilePic to binary
        const arrayBuffer = await profilePic.arrayBuffer();
        const profile_pic = Buffer.from(arrayBuffer);

        // Insert user
        await pool.query(
            "INSERT INTO users_list (username, email, password_hash, profile_pic) VALUES (?, ?, ?, ?)",
            [username, email, hashedPassword, profile_pic]
        );

        return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
    } catch (error) {
        console.log("catch error", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}
