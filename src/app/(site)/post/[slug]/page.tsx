import { getPostBySlug } from "@/sanity/sanity-utils";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import { ImageComponent } from "@/components/image-container";
import { AudioComponent } from "@/components/inline-audio";
import { YoutubeComponent } from "@/components/youtube-container";

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
        <p className="text-xs text-green-700">tekijä: {post.author}</p>
        <p className="text-xs text-green-700">{date}</p>
      </div>

      { isImage && <div
        style={{ width: "100%", height: "100%", position: "relative" }}
        className="min-h-96 pb-32 z-0"
      >
        <Link href={post.imageUrl}>
          <Image
            alt="Mountains"
            src={post.imageUrl}
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>}
      <div className="prose prose-lg prose-headings:text-green-600 prose-headings:font-semibold prose-p:text-green-600">
        <PortableText value={post.body} components={components} />
      </div>
    </div>
  );
}
