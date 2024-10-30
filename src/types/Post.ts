import { PortableTextBlock } from "sanity"

export type Post = {
    _id: number,
    title: string,
    slug: string,
    metadata: string,
    body: PortableTextBlock[],
    mainImage: any,
    imageUrl: string
    author: string,
    tags: string[],
    publishedAt: string
}
