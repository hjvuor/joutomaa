import { PortableTextBlock } from "sanity"
import { ImageAsset } from "sanity"

export type Post = {
    _id: number,
    title: string,
    slug: string,
    metadata: string,
    body: PortableTextBlock[],
    mainImage: ImageAsset,
    imageUrl: string
    author: string,
    tags: string[],
    publishedAt: string
}
