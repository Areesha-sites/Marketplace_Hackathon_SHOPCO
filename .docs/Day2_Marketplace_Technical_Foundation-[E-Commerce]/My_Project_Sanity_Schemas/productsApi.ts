// My Prodcuts Schema
 export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).error('Name must be at least 3 characters long.'),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).error('Price must be a positive number.'),
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).error('Stock must be a positive number or zero.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true, 
      },
    },
  ],
};
// =====================Example Response=============================
[
  {
    "_id": "1",
    "name": "Product A",
    "price": 100,
    "stock": 50,
    "description": "This is Product A",
    "image": "https://cdn.sanity.io/images/your-project-id/your-dataset/filename.jpg"
  },
  {
    "_id": "2",
    "name": "Product B",
    "price": 200,
    "stock": 20,
    "description": "This is Product B",
    "image": "https://cdn.sanity.io/images/your-project-id/your-dataset/filename.jpg"
  }
]