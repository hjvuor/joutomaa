import { PortableTextBlock, Slug, ImageAsset, Reference } from "sanity"

export interface Post {
    _id: number,
    title: string,
    slug: Slug,
    metadata: string,
    body: PortableTextBlock[],
    mainImage: ImageAsset,
    imageUrl: string
    author: string,
    tags: string[],
    publishedAt: string
}

export interface AudioAsset {
    title: string,
    asset: Reference
}

export interface InlineImage {
    alt: string,
    asset: Reference
}

export interface YoutubeEmbed {
    url: string
}