export default {
  type: "document",
  name: "blog",
  title: "Blog",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Alt",
        },
      ],
    },
    {
      title: "File",
      name: "file",
      type: "file",
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
        },
        {
          name: "author",
          type: "reference",
          title: "Author",
          to: { type: "author" },
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                title: "Color",
                name: "color",
                type: "color",
              },
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    title: "Reference",
                    to: [{ type: "blog" }],
                  },
                ],
              },
            ],
          },
        },
        {
          type: "youtube",
        },
        {
          type: "image",

          fields: [
            {
              name: "position",
              title: "Position",
              type: "string",
              options: {
                list: [
                  { title: "Left", value: "left" },
                  { title: "Right", value: "right" },
                  { title: "Center", value: "center" },
                ],
                layout: "radio",
                isHighlighted: true,
              },
            },
            {
              type: "text",
              name: "alt",
              title: "Alt",
              options: {
                isHighlighted: true,
              },
            },
          ],
          options: {
            hotspot: true,
          },
        },

        {
          type: "code",
          options: {
            withFilename: true,
          },
        },
      ],
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => {
        return Rule.required();
      },
    },
  ],
};
