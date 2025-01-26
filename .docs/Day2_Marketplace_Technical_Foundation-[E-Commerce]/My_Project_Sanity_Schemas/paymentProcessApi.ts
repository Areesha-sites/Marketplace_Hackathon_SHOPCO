// My Payment Processing API Schema
export default {
  name: "payment",
  title: "Payment",
  type: "document",
  fields: [
    {
      name: "paymentId",
      title: "Payment ID",
      type: "string",
      validation: (Rule) => Rule.required().error("Payment ID is required."),
    },
    {
      name: "orderId",
      title: "Order ID",
      type: "reference",
      to: [{ type: "order" }],
      validation: (Rule) => Rule.required().error("Order ID is required."),
    },
    {
      name: "amount",
      title: "Amount",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error("Amount is required and must be positive."),
    },
    {
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "Credit Card", value: "Credit Card" },
          { title: "Debit Card", value: "Debit Card" },
          { title: "PayPal", value: "PayPal" },
          { title: "Bank Transfer", value: "Bank Transfer" },
        ],
      },
      validation: (Rule) =>
        Rule.required().error("Payment method is required."),
    },
    {
      name: "cardDetails",
      title: "Card Details",
      type: "object",
      fields: [
        {
          name: "cardNumber",
          title: "Card Number",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .regex(/^\d{4}-\d{4}-\d{4}-\d{4}$/, {
                name: "card number",
                invert: false,
              })
              .error("Invalid card number format. Use 1234-5678-9876-5432."),
        },
        {
          name: "expiryDate",
          title: "Expiry Date",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .regex(/^\d{2}\/\d{2}$/, { name: "expiry date", invert: false })
              .error("Invalid expiry date format. Use MM/YY."),
        },
      ],
    },
    {
      name: "status",
      title: "Payment Status",
      type: "string",
      options: {
        list: [
          { title: "Payment Successful", value: "Payment Successful" },
          { title: "Payment Failed", value: "Payment Failed" },
          { title: "Pending", value: "Pending" },
        ],
      },
      validation: (Rule) =>
        Rule.required().error("Payment status is required."),
    },
    {
      name: "transactionDate",
      title: "Transaction Date",
      type: "datetime",
      validation: (Rule) =>
        Rule.required().error("Transaction date is required."),
    },
  ],
};
