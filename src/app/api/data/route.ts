import Post from "@/components/Post";

const posts:Post[]=[]
// app/api/route.js
export async function GET() {
    return new Response(JSON.stringify({ posts}), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  export async function POST(request: Request) {
    const body = await request.json();
    // Assuming you have a Post model or similar to store the data
    console.log(body)
    const newPost:Post={
      id:posts.length+1,
      title:body.title,
      content:body.content
    }
    posts.push(newPost);
    console.log(posts)

    return new Response(JSON.stringify({ posts }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  export async function DELETE(request: Request) {
const body=await request.json()
const id=body.id
    const postIndex = posts.findIndex(post => post.id === id);

    if (postIndex === -1) {
      return new Response(JSON.stringify({ error: 'Post not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    posts.splice(postIndex, 1);

    return new Response(JSON.stringify({ posts }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  //create a prouct