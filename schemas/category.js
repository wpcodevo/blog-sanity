export default {
  name: "category",
  title: "Category",
  type: "document",

  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "icon",
      title: "Icon",
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
  ],
};
