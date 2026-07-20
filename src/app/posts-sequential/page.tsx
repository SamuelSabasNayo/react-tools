import { Suspense } from "react";
import Author from "./author";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  const filteredPosts = posts.filter((post) => post.id % 10 === 1);

  return (
    <div>
      <h1>Blog Posts</h1>
      <div>
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Suspense
              fallback={<div>Loading author... </div>}
            >
              <Author userId={post.userId}/>
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}