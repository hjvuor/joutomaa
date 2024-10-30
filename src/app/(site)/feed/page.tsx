import { getPosts } from "@/sanity/sanity-utils";
import { Post } from "@/types/Post"

import PostCard from "./post-card";

export default async function Feed() {
  const posts = await getPosts();
  return (
    <div>
      <div className="flex flex-col justify-center bg-black px-0">
        {posts.map((post: Post) => (
          <PostCard 
          key={post._id} 
          post={post}/>
        ))}
      </div>
    </div>
  );
}
