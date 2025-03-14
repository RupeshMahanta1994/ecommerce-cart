import DeletePost from "@/components/DeletePost";
import { createPost, deletePost } from "./lib/actions";

export default async function Home() {
  // async function getData() {
  //   const res = await fetch('http://localhost:3001/api/posts'); // Full URL
  //   const data = await res.json();
  //   console.log(data);
  // }

  // getData();
  interface Post {
    id: number;
    title: string;
    content: string;
  }
  const res = await fetch('http://localhost:3001/api/posts'); // Full URL
  const data: Post[] = await res.json();
  return (
    <div>
      {
        data?.map(post => {
          return <div key={post.id} className="grid grid-cols-4">
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <DeletePost id={post.id} handleDelete={deletePost} />
          </div>
        })
      }
      <form action={createPost}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="content" placeholder="Content" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}