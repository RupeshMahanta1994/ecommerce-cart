import pool from "@/app/lib/db";


export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const userId = formData.get("user_id") ;
        const caption = formData.get("caption") as string | null;
        const imageFile = formData.get("image") as File | null;

        if (!userId || !imageFile) {
            return new Response(JSON.stringify({ message: "User ID and image are required" }), { status: 400 });
        }

        // Convert image to binary
        const arrayBuffer = await imageFile.arrayBuffer();
        const imageBuffer = Buffer.from(arrayBuffer);
        const created_at=new Date();

        const [result] = await pool.query(
            "INSERT INTO posts (user_id, image_url, caption,created_at) VALUES (?, ?, ?,?)",
            [userId, imageBuffer, caption,created_at]
        );

        return new Response(JSON.stringify({ message: "Post created successfully", id: result.insertId }), { status: 201 });
    } catch (error) {
        console.error("Error creating post:", error);
        return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
    }
}

export async function GET() {
  try {
    const [posts] = await pool.query(`
        SELECT 
            posts.*, 
            COUNT(comments.id) AS comment_count, 
            COUNT(likes.id) AS like_count,
            JSON_ARRAYAGG(
                JSON_OBJECT(
                    'id', comments.id,
                    'text', comments.content,
                    'user_id', comments.user_id,
                    'created_at', comments.created_at
                )
            ) AS comments
        FROM posts
        LEFT JOIN comments ON posts.id = comments.post_id
        LEFT JOIN likes ON posts.id = likes.post_id
        GROUP BY posts.id
    `);
    

      return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
      console.error("Error fetching posts:", error);
      return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
