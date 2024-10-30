import { createClient, groq } from "next-sanity";
import config from "./config/client-config";


export async function getPosts() {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == "post"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            author,
            body,
            "imageUrl": mainImage.asset->url,
            url
        }`
  );
}

export async function getPostBySlug(slug: string) {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            author,
            body,
            "imageUrl": mainImage.asset->url,
            url,
            "date": publishedAt
        }`,
        { slug }
  );
}
