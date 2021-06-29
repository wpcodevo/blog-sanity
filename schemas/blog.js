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
          type: "string",
          name: "alt",
          title: "Alt",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "smallImage",
      title: "Small Image",
      type: "image",
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alt",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      title: "File",
      name: "file",
      type: "file",
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
    {
      title: "Content",
      name: "content",
      type: "blockContent",
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
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "download",
      type: "boolean",
      title: "Download",
    },
    {
      name: "downloadLink",
      type: "string",
      title: "Download Link",
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "coverImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
