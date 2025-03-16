import pool from "@/app/lib/db";

// 🟢 FOLLOW A USER (POST)
export async function POST(req: Request) {
    try {
        const { follower_id, following_id } = await req.json();

        if (!follower_id || !following_id) {
            return new Response(JSON.stringify({ message: "Follower ID and Following ID are required" }), { status: 400 });
        }

        await pool.query(
            "INSERT INTO followers (follower_id, following_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE id = id",
            [follower_id, following_id]
        );

        return new Response(JSON.stringify({ message: "Followed successfully" }), { status: 201 });
    } catch (error) {
        console.error("Error following user:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}

// 🔵 GET ALL FOLLOWERS (GET)
export async function GET() {
    try {
        const [followers] = await pool.query(`
            SELECT f.id, f.follower_id, u1.username AS follower_name, f.following_id, u2.username AS following_name, f.created_at 
            FROM followers f
            JOIN users_list u1 ON f.follower_id = u1.id
            JOIN users_list u2 ON f.following_id = u2.id
            ORDER BY f.created_at DESC
        `);

        return new Response(JSON.stringify(followers), { status: 200 });
    } catch (error) {
        console.error("Error fetching followers:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}
