// My User Registration Api
export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .error("Name is required and must be at least 3 characters long."),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
            name: "email format",
            invert: false,
          })
          .error("Invalid email format."),
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      hidden: true, 
      validation: (Rule) =>
        Rule.required().min.error(
          "Password is required and must be at least 8 characters long."
        ),
    },
  ],
};
