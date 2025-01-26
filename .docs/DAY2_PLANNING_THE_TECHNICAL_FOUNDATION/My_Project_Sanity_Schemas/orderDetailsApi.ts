export default {
  name: 'payment',
  title: 'Payment',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'Order ID',
      type: 'reference',
      to: [{ type: 'order' }],
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: ['Credit Card', 'Debit Card', 'PayPal'],
      },
    },
    {
      name: 'status',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: ['Success', 'Failed'],
      },
    },
    {
      name: 'transactionDate',
      title: 'Transaction Date',
      type: 'datetime',
    },
  ],
};