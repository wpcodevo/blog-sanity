export default {
  type: "document",
  name: "terms",
  title: "Terms",
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
        },
      ],
    },
  ],
};
