const customerReviewsSchema = {
  name: "customerReviews",
  title: "Customer Reviews",
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
      title: "Date",
      type: "datetime",
    },
  ],
};

export default customerReviewsSchema;