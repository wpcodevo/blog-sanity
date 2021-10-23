export default {
  type: "document",
  name: "about",
  title: "About",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
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
      ],
    },
  ],
};
