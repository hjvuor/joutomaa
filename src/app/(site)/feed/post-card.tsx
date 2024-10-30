import { Post } from "@/types/Post";
import Link from "next/link";
import Image from "next/image";

export default function PostCard({post} : {post: Post}) {
  console.log(post.imageUrl)
  const isImage = !post.imageUrl === false

  //Date formatting
  const date = new Intl.DateTimeFormat('fi-FI', {
    dateStyle: 'long',
  }).format(Date.parse(post.publishedAt))
  
  return (

    <div className="p-1 pb-5 mb-12 xl:max-w-prose border-b border-gray-600">
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
      
      <h1 className="text-3xl font-bold">{post.title}</h1>
      </Link>
      
      <p>{date} - {post.author}</p>
    </div>

  );
}
