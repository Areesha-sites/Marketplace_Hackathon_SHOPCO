export default {
  name: "subscription",
  type: "document",
  title: "Subscription",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Subscriber Name",
    },
    {
      name: "email",
      type: "string",
      title: "Subscriber Email",
    },
    {
      name: "plan",
      type: "string",
      title: "Subscription Plan",
      options: {
        list: [
          { title: "Monthly", value: "monthly" },
          { title: "Yearly", value: "yearly" },
        ],
      },
    },
    {
      name: "status",
      type: "string",
      title: "Subscription Status",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    },
    {
      name: "renewalDate",
      type: "datetime",
      title: "Renewal Date",
    },
  ],
};
