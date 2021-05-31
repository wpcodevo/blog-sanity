// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: "author",
      type: "document",
      title: "Author",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
        },
        {
          name: "avatar",
          type: "image",
          title: "Avatar",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alt",
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
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
    },
  ]),
});
