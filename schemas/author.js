export default {
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
          type: "string",
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
};
