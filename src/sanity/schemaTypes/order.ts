import { defineType, defineField } from "sanity";
export default defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "orderId",
      title: "Order ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "totalItems",
      title: "Total Items",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "totalQuantity",
      title: "Total Quantity",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "shippingAddress",
      title: "Shipping Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
