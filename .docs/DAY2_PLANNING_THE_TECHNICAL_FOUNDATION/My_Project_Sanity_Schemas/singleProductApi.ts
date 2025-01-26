//  My Single Prooduct API Schema
export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .error("Name must be at least 3 characters long."),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(0).error("Price must be a positive number."),
    },
    {
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error("Stock must be a positive number or zero."),
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags", 
      },
    },
  ],
};
