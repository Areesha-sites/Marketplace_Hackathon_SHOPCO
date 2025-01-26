// My Place an Order Schema
export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'userId',
      title: 'User ID',
      type: 'number',
      validation: (Rule) => Rule.required().error('User ID is required.'),
    },
    {
      name: 'cartId',
      title: 'Cart ID',
      type: 'reference',
      to: [{ type: 'cart' }],
      validation: (Rule) => Rule.required().error('Cart ID is required.'),
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: ['Paid', 'Pending', 'Failed'],
      },
    },
    {
      name: 'deliveryAddress',
      title: 'Delivery Address',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).error('Address must be at least 10 characters long.'),
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['Order Placed', 'Shipped', 'Delivered', 'Cancelled'], // Dropdown options
      },
    },
    {
      name: 'estimatedDelivery',
      title: 'Estimated Delivery Date',
      type: 'datetime',
    },
  ],
};