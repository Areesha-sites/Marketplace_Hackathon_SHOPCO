export type Address = {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  cityLocality: string;
  stateProvince: string;
  postalCode: string;
  countryCode: string;
  addressResidentialIndicator: "yes" | "no";
};
export type unit = "ounce" | "gram" | "kilogram" | "pound";
export type dimensionUnit = "inch" | "centimeter";

export type Package = {
  weight: {
    value: number;
    unit: unit;
  };
  dimensions: {
    height: number;
    width: number;
    length: number;
    unit: dimensionUnit;
  };
};

export type Rate = {
  rateId: string;
  rateType: string;
  carrierId: string;
  shippingAmount: {
    currency: string;
    amount: number;
  };
  serviceType: string;
  serviceCode: string;
  trackable: boolean;
  carrierFriendlyName: string;
  validationStatus: string;
  warningMessages?: string[];
};


export interface trackingObjType {
  trackingNumber: string;
  labelId: string;
  carrierCode: string;
}

export interface TrackingData {
  trackingNumber?: string;
  statusDescription?: string;
  carrierStatusDescription?: string;
  estimatedDeliveryDate?: string;
  actualDeliveryDate?: string;
}
export interface OrderData {
  productId: string;
  productName: string;
  quantity: number;
  totalAmount: number;
  status: string;
  originalPrice: number;
}
export interface Order {
  orderId: string;
  userId: string;
  orderDate: string;
  orderData: OrderData[];
}

export interface ShipmentData {
  orderId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  countryCode: string;
  shippingAddress: string;
  status: string;
  trackingNumber: string;
  shipmentDate: string;
  deliveryDate: string;
  carrier: string;
}
