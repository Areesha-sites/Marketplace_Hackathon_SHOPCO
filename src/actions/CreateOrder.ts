import { client } from "../sanity/lib/client";
import { Order } from "../../types/Tracking-ShipmentTypes";
export const createOrder = async (order: Order) => {
  try {
    const existingOrder = await client.fetch(
      `*[_type == "checkOrder" && orderId == $orderId][0]`,
      { orderId: order.orderId }
    );
    if (existingOrder) {
      console.log(`Order with orderId ${order.orderId} already exists.`);
      return { message: `Order with orderId ${order.orderId} already exists.` };
    }
    const newOrder = {
      _type: 'checkOrder',
      orderId: order.orderId,
      userId: order.userId,
      orderDate: order.orderDate,
      orderData: order.orderData.map((item) => ({
        productId: item.productId,
        productName: item.productName,
        quantity: item.quantity,
        totalAmount: item.totalAmount,
        status: item.status,
        originalPrice: item.originalPrice,
      })),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const createdOrder = await client.create(newOrder);
    console.log('Order created:', createdOrder);
    return createdOrder;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
