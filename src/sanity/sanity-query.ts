import { groq } from "next-sanity";
const postData = `{
  title,
  metadata,
  slug,
  tags,
  author,,
  mainImage,
  publishedAt,
  body
}`;

export const postQuery = groq`*[_type == "post"] ${postData}`;

export const postQueryBySlug = groq`*[_type == "post" && slug.current == $slug][0] ${postData}`;
