
import { Post } from "@/types/Post";
import Link from "next/link";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default function PostCard({post}) {
  console.log(post.imageUrl)
  const isImage = !post.imageUrl === false
  const components = {
    block: {
      h1: ({children}) => <h1 className="text-2xl font-bold">{children}</h1>,
      h2: ({children}) => <h2 className="text-2xl font-bold">{children}</h2>,
      h3: ({children}) => <h3 className="text-xl font-bold">{children}</h3>
    }
  }
  
  return (

    <div className="p-1 pb-5 mb-12 xl:max-w-prose border-b border-gray-600">
          <Link className="hover:bg-gray-900 " href={`/post/${post.slug}`}>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          </Link>
       
      {isImage &&
        <div style={{width: '100%', height: '100%', position: 'relative'}} className="min-h-64 pb-32">
        <Image
          alt='Mountains'
          src={post.imageUrl}
          layout='fill'
          objectFit='contain'
        />
      </div>
      }
      <p>{post.author}</p>
      <h3>{post.publishedAt}</h3>
      <PortableText value={post.body} components={components}/>
    </div>

  );
}
