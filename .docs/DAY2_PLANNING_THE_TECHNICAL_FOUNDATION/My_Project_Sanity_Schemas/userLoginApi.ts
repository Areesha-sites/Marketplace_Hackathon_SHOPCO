// My user Login Api schema
export default {
  name: 'userSession',
  title: 'User Session',
  type: 'document',
  fields: [
    {
      name: 'userId',
      title: 'User ID',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule) => Rule.required().error('User ID is required.'),
    },
    {
      name: 'token',
      title: 'Authentication Token',
      type: 'string',
      validation: (Rule) => Rule.required().error('Token is required.'),
    },
    {
      name: 'status',
      title: 'Login Status',
      type: 'string',
      options: {
        list: [
          { title: 'Login Successful', value: 'Login Successful' },
          { title: 'Login Failed', value: 'Login Failed' },
        ],
      },
      validation: (Rule) => Rule.required().error('Login status is required.'),
    },
    {
      name: 'loginTime',
      title: 'Login Time',
      type: 'datetime',
      validation: (Rule) =>
        Rule.required().error('Login time is required.'),
    },
  ],
};