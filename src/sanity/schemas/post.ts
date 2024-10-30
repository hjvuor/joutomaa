import { PlayIcon, UploadIcon } from '@sanity/icons'

const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        unique: true,
        slugify: (input: any) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        },
      },
      validation: (Rule: any) =>
        Rule.required().custom((fields: any) => {
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
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          type: "string",
          validation: (Rule: any) =>
            Rule.custom((fields: any) => {
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
      validation: (Rule: any) => Rule.required(),
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
      validation: (Rule: any) => Rule.required(),
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
          type: "image"
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
      validation: (Rule: any) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author",
      media: "mainImage",
    },
    prepare(selection: any) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
export default post;
