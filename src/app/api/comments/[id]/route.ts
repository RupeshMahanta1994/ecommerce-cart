import pool from "@/app/lib/db";


// 🟡 GET SINGLE COMMENT
export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const [comment] = await pool.query("SELECT * FROM comments WHERE id = ?", [id]);

        if (!Array.isArray(comment) || comment.length === 0) {
            return new Response(JSON.stringify({ message: "Comment not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(comment[0]), { status: 200 });
    } catch (error) {
        console.error("Error fetching comment:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}

// 🟠 UPDATE COMMENT
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { content } = await req.json();

        if (!content) {
            return new Response(JSON.stringify({ message: "Content is required" }), { status: 400 });
        }

        const [result]: any = await pool.query("UPDATE comments SET content = ? WHERE id = ?", [content, id]);

        if (result.affectedRows === 0) {
            return new Response(JSON.stringify({ message: "Comment not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: "Comment updated successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error updating comment:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}

// 🔴 DELETE COMMENT
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        const [result]: any = await pool.query("DELETE FROM comments WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return new Response(JSON.stringify({ message: "Comment not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: "Comment deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting comment:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}
