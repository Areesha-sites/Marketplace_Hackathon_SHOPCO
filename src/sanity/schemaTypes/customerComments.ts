import { defineType } from "sanity";

export default defineType({
  name: "customerComments",
  title: "Customer Comments",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "date",
      title: "Description",
      type: "text",
    },
  ],
});
