import { getPostBySlug, getPosts } from "@/sanity/sanity-utils";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageComponent } from "@/components/image-container";
import { AudioComponent } from "@/components/inline-audio";
import { YoutubeComponent } from "@/components/youtube-container";
import { Post } from "@/types/interface";

// generateMetadata function
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug)
  return ({
    title: post.title,
    metadata: post.metadata
  })
}

//generate static urls from post slugs
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post: Post) => ({
    slug: post.slug
  }))
}

//Main post page
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);
  if (post === null) (
    notFound()
  )
  const isImage = !post.imageUrl === false

  //Date formatting
  const date = new Intl.DateTimeFormat("fi-FI", {
    dateStyle: "long",
  }).format(Date.parse(post.publishedAt));

  const components: PortableTextComponents = {
    types: {
      image: ImageComponent,
      audio: AudioComponent,
      youtube: YoutubeComponent,
    },
  };

  return (
    <div className="xl:w-5/6">
      <Link className="text-green-700" href="/feed">
        ←takaisin
      </Link>
      <div className="pb-6">
        <h1 className="text-4xl xl:text-6xl pb-2 font-semibold italic">
          {post.title}
        </h1>
        <p className="text-xs text-green-700">{post.author}</p>
        <p className="text-xs text-green-700">{date}</p>
      </div>

      { isImage && <div className="min-h-96 pb-6 z-0 justify-items-center">
          <Image
            alt="Main image"
            src={post.imageUrl}
            width={400}
            height={400}
          />
      </div>}
      <div className="mx-auto justify-items-center prose prose-lg prose-headings:text-green-600 prose-headings:font-semibold prose-p:text-green-600 ">
        <PortableText value={post.body} components={components} />
      </div>
    </div>
  );
}
