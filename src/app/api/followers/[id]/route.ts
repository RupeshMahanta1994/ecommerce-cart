import pool from "@/app/lib/db";

// 🟡 GET FOLLOW DETAILS BY ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const [follow] = await pool.query("SELECT * FROM followers WHERE id = ?", [id]);

        if (!Array.isArray(follow) || follow.length === 0) {
            return new Response(JSON.stringify({ message: "Follow entry not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(follow[0]), { status: 200 });
    } catch (error) {
        console.error("Error fetching follow entry:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}

// 🔴 UNFOLLOW A USER (DELETE)
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        const [result]: any = await pool.query("DELETE FROM followers WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return new Response(JSON.stringify({ message: "Follow entry not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: "Unfollowed successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error unfollowing user:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}
