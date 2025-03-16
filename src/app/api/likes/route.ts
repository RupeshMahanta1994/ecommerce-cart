import pool from "@/app/lib/db";


// 🟢 ADD LIKE (POST)
export async function POST(req: Request) {
    try {
        const { user_id, post_id } = await req.json();

        if (!user_id || !post_id) {
            return new Response(JSON.stringify({ message: "User ID and Post ID are required" }), { status: 400 });
        }

        await pool.query(
            "INSERT INTO likes (user_id, post_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE id = id",
            [user_id, post_id]
        );

        return new Response(JSON.stringify({ message: "Like added successfully" }), { status: 201 });
    } catch (error) {
        console.error("Error adding like:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}

// 🔵 GET ALL LIKES (GET)
export async function GET() {
    try {
        const [likes] = await pool.query("SELECT * FROM likes ORDER BY created_at DESC");
        return new Response(JSON.stringify(likes), { status: 200 });
    } catch (error) {
        console.error("Error fetching likes:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}
