import { PlayIcon, UploadIcon } from '@sanity/icons'
import { Rule } from 'sanity';
import { Slug } from 'sanity';


const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        unique: true,
        slugify: (input: string) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        },
      },
      validation: (rule: Rule) =>
        rule.required().custom((fields: Slug) => {
          if (
            fields?.current !== fields?.current?.toLowerCase() ||
            fields?.current.split(" ").includes("")
          ) {
            return "Slug must be lowercase and not be included space";
          }
          return true;
        }),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      validation: (rule: Rule) => rule.required(),
      of: [
        {
          type: "string",
          validation: (rule: Rule) =>
            rule.custom((fields: string) => {
              if (
                fields !== fields.toLowerCase() ||
                fields.split(" ").includes("")
              ) {
                return "Tags must be lowercase and not be included space";
              }
              return true;
            }),
        },
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      // validation: (Rule: any) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { 
          type: "block" 
        },
        {
          name: 'image',
          type: "image",
          title: 'Image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text'
            }
          ]
        },
        {
          name: 'audio',
          type: 'file',
          title: 'Audio (.mp3)',
          icon: UploadIcon,
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Audio Name'
            }
          ]
        },
        {
          name: 'youtube',
          type: 'object',
          title: 'YouTube Embed',
          icon: PlayIcon,
          fields: [
              {
                  name: 'url',
                  type: 'url',
                  title: 'YouTube Video URL'
              }
          ]
      }

    ],
      validation: (rule: Rule) => rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author",
      media: "mainImage",
    },
    /* prepare(selection: {author}) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    }, */
  },
};
export default post;
