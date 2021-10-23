export default {
  type: "document",
  name: "privacy",
  title: "Privacy",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              {
                title: "Heading",
                value: "heading",
                blockEditor: {
                  icon: () => "H",
                },
              },
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
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
      ],
    },
  ],
};
