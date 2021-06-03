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
        },
      ],
    },
  ],
};
