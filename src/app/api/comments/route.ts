import pool from "@/app/lib/db";


// 🟢 CREATE COMMENT (POST)
export async function POST(req: Request) {
    try {
        const { user_id, post_id, content } = await req.json();

        if (!user_id || !post_id || !content) {
            return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
        }

        await pool.query(
            "INSERT INTO comments (user_id, post_id, content) VALUES (?, ?, ?)",
            [user_id, post_id, content]
        );

        return new Response(JSON.stringify({ message: "Comment added successfully" }), { status: 201 });
    } catch (error) {
        console.error("Error adding comment:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}

// 🔵 GET ALL COMMENTS (GET)
export async function GET() {
    try {
        const [comments] = await pool.query("SELECT * FROM comments ORDER BY created_at DESC");
        return new Response(JSON.stringify(comments), { status: 200 });
    } catch (error) {
        console.error("Error fetching comments:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}
