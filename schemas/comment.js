export default {
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      title: "Approved",
      name: "approved",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "comment",
      type: "text",
    },
    {
      name: "blog",
      type: "reference",
      to: [{ type: "blog" }],
    },
  ],
  preview: {
    select: {
      name: "name",
      comment: "comment",
      blog: "blog.title",
    },
    prepare({ name, comment, blog }) {
      return {
        title: `${name} commented on ${blog}`,
        subtitle: comment,
      };
    },
  },
};
