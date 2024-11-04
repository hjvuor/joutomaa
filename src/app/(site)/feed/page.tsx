import { getPosts } from "@/sanity/sanity-utils";
import { Post } from "@/types/interface"

import PostCard from "./post-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiidi"
}

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
