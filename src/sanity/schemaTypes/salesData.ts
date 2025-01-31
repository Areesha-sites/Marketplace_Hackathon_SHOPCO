
export default {
  name: 'salesData',
  title: 'Sales Data',
  type: 'document',
  fields: [
    {
      name: 'salesAmount',
      title: 'Sales Amount',
      type: 'number',
    },
    {
      name: 'salesDate',
      title: 'Sales Date',
      type: 'date',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'string',
    },
  ],
};