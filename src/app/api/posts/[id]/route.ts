import pool from "@/app/lib/db";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        await pool.query("DELETE FROM posts WHERE id = ?", [id]);

        return new Response(JSON.stringify({ message: "Post deleted successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error deleting post:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const [posts] = await pool.query("SELECT * FROM posts WHERE id = ?", [id]);

        if (!posts.length) return new Response(JSON.stringify({ message: "Post not found" }), { status: 404 });

        return new Response(JSON.stringify(posts[0]), { status: 200 });
    } catch (error) {
        console.error("Error fetching post:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        console.log("I am here");
        const { id } = params;
        const formData = await req.formData();

        const caption = formData.get("caption") as string | null;
        const imageFile = formData.get("image") as File | null;

        console.log(caption, imageFile);

        let query = "UPDATE posts SET ";
        const paramsArr: any[] = [];

        if (caption) {
            query += "caption = ?, ";
            paramsArr.push(caption);
        }

        if (imageFile) {
            const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
            query += "image_url = ?, ";
            paramsArr.push(imageBuffer);
        }

        query = query.slice(0, -2) + " WHERE id = ?";
        paramsArr.push(id);

        await pool.query(query, paramsArr);
        return new Response(JSON.stringify({ message: "Post updated successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error updating post:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}
