import { Post } from "@/types/interface";
import Link from "next/link";
import Image from "next/image";

export default function PostCard({post} : {post: Post}) {
  const isImage = !post.imageUrl === false

  //Date formatting
  const date = new Intl.DateTimeFormat('fi-FI', {
    dateStyle: 'long',
  }).format(Date.parse(post.publishedAt))
  
  return (

    <div className="p-1 pb-8 mb-12 xl:max-w-prose ">
      <Link className="hover:bg-gray-900 " href={`/post/${post.slug}`}>
      {isImage &&
        <div style={{width: '100%', height: '100%', position: 'relative'}} className="min-h-64 pb-32">
        <Image
          alt='Mountains'
          src={post.imageUrl}
          layout='fill'
          objectFit='contain'
        />
      </div>}
      
      <h1 className="text-3xl font-semibold italic">{post.title}</h1>
      <div className="flex justify-between">
        <p className="text-green-700 pl-1 italic">{post.author}</p>
        <p className="italic text-green-700 pr-1">{date}</p>
      </div>

      </Link>
      
      
    </div>

  );
}
