import pool from "@/app/lib/db";
// 🔴 REMOVE LIKE (DELETE)
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const [result]: any = await pool.query("DELETE FROM likes WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ message: "Like not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Like removed successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing like:", error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
