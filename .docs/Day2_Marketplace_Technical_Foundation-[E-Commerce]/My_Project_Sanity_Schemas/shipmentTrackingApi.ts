// My Shipment Api Schema
export default {
  name: "shipment",
  title: "Shipment",
  type: "document",
  fields: [
    {
      name: "shipmentId",
      title: "Shipment ID",
      type: "string",
      validation: (Rule) => Rule.required().error("Shipment ID is required."),
    },
    {
      name: "orderId",
      title: "Order ID",
      type: "reference",
      to: [{ type: "order" }],
      validation: (Rule) => Rule.required().error("Order ID is required."),
    },
    {
      name: "status",
      title: "Shipment Status",
      type: "string",
      options: {
        list: [
          { title: "Processing", value: "Processing" },
          { title: "In Transit", value: "In Transit" },
          { title: "Delivered", value: "Delivered" },
          { title: "Cancelled", value: "Cancelled" },
        ],
      },
      validation: (Rule) =>
        Rule.required().error("Shipment status is required."),
    },
    {
      name: "expectedDeliveryDate",
      title: "Expected Delivery Date",
      type: "datetime",
      validation: (Rule) =>
        Rule.required().error("Expected Delivery Date is required."),
    },
  ],
};
