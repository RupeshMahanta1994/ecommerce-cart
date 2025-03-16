import pool from "@/app/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
    }

    // Check if user exists
    const [user] = await pool.query("SELECT * FROM users_list WHERE email = ?", [email]);
    console.log(user)
    if (user.length === 0) {
      return new Response(JSON.stringify({ message: "user not found" }), { status: 401 });
    }

    const validPassword = await bcrypt.compare(password, user[0].password_hash);
    if (!validPassword) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user[0].id, username: user[0].username }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return new Response(JSON.stringify({ token, user: { id: user[0].id, username: user[0].username, email: user[0].email,profilePicture:user[0].profile_pic } }), { status: 200 });
  } catch (error) {
    console.log("Login error",error)
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}

