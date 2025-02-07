import { type SchemaTypeDefinition } from "sanity";
import casual from "./casual";
import newArrivals from "./newArrivals";
import topSelling from "./topSelling";
import productDetailsProduct from "./productDetailsProduct";
import kids from "./kids";
import women from "./women";
import men from "./men";
import customerComments from "./customerComments";
import customerReviews from "./customerReviews";
import faqs from "./faqs";
import userGuide from "./userGuide";
import order from "./order";
import user from "./user";
import salesData from "./salesData";
import customers from "./customers";
import subscription from "./subscription";
import analytics from "./analytics";
import checkOrder from "./checkOrder";
import checkUser from "./checkUser";
import inventory from "./inventory";
import products from "./products";
import shipment from "./shipment";
import contact from "./contact";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    casual,
    newArrivals,
    topSelling,
    productDetailsProduct,
    kids,
    women,
    men,
    customerComments,
    customerReviews,
    faqs,
    userGuide,
    user,
    salesData,
    customers,
    order,
    subscription,
    analytics,
    checkOrder,
    checkUser,
    inventory,
    products,
    shipment,
    contact
  ],
};
