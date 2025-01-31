"use client";
import KPIsCard from "../Components/KPIsCard";
import {
  HiCurrencyRupee,
  HiOutlineShoppingBag,
  HiUsers,
  HiOutlineStar,
} from "react-icons/hi2";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { client } from "@/sanity/lib/client";
import { UserTypes } from "../../../types/ComponentsTypes";
import { OrderTypes } from "../../../types/ComponentsTypes";
import DashBoardSideBar from "../Components/DashBoardSideBar";
import SalesChart from "../Components/SalesChart";
import CalendarComponent from "../Components/Calendar";
import BarChart from "../Components/BarsChart";
import DashboardProfile from "../Components/Profile";
import ProductDashboard from "../Components/DashboardProducts";
import CustomerDashboard from "../Components/DashboardCustomer";
import OrdersDashboard from "../Components/DashboardOrders";

const userQuery = groq`*[_type == "user"] { _id, name, email }`;
const orderQuery = groq`*[_type == "order"] { _id, orderAmount, orderDate, status }`;
const topSellingQuery = groq`*[_type == "topSelling"] { _id, name }`;
// const salesQuery = groq`*[_type == "salesData"] { _id, salesAmount, salesDate }`;
export default function Dashboard() {
  const [users, setUsers] = useState<UserTypes[]>([]);
  const [orders, setOrders] = useState<OrderTypes[]>([]);
  const [mostPopularProduct, setMostPopularProduct] = useState("Loading...");
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const usersData: UserTypes[] = await client.fetch(userQuery);
      const ordersData: OrderTypes[] = await client.fetch(orderQuery);
      const topSellingData = await client.fetch(topSellingQuery);
      setUsers(usersData);
      setOrders(ordersData);
      if (topSellingData.length > 0) {
        setMostPopularProduct(topSellingData.length.toString());
      } else {
        setMostPopularProduct("0");
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    const token = Cookies.get("authToken");
    if (!token) {
      router.push("/login");
    } else {
      setIsAuth(true);
    }
  }, [router]);
  const totalSales = orders.reduce((acc, order) => acc + order.orderAmount, 0);
  const totalOrders = orders.length;
  const totalUsers = users.length;
  const monthlySalesData = [
    { date: "Feb", salesAmount: 22 },
    { date: "Mar", salesAmount: 30 },
    { date: "Apr", salesAmount: 25 },
    { date: "May", salesAmount: 40 },
    { date: "Jun", salesAmount: 35 },
    { date: "Jul", salesAmount: 50 },
  ];
  const productSalesData = [
    { product: "Product One", salesAmount: 22 },
    { product: "Product Two", salesAmount: 35 },
  ];
  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="loader"></div>
          <p className="mt-4 text-white text-lg font-semibold">
            Redirecting to login...
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen">
      <aside className="w-64">
        <DashBoardSideBar setActiveTab={setActiveTab} />
      </aside>
      <div className="flex-1 p-6">
        {activeTab === "dashboard" && (
          <div>
            <h1 className="text-3xl font-extrabold font-integralCf tracking-wider mb-6">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600 mb-8">
              Welcome to my SHOP.CO analytics dashboard.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <KPIsCard
                title="Total Sales"
                value={`₹${totalSales}`}
                icon={<HiCurrencyRupee className="text-[21px] text-white/80" />}
              />
              <KPIsCard
                title="Total Orders"
                value={totalOrders.toString()}
                icon={
                  <HiOutlineShoppingBag className="text-[21px] text-white/80" />
                }
              />
              <KPIsCard
                title="Total Users"
                value={totalUsers.toString()}
                icon={<HiUsers className="text-[21px] text-white/80" />}
              />
              <KPIsCard
                title="Most Popular Product"
                value={mostPopularProduct}
                icon={<HiOutlineStar className="text-[21px] text-white/80" />}
              />
            </div>
            <SalesChart salesData={monthlySalesData} />
            <BarChart data={productSalesData} />
          </div>
        )}
        {activeTab === "calendar" && (
          <div>
            <h1 className="text-3xl font-extrabold font-integralCf tracking-wider mb-6">
              Calendar
            </h1>
            <CalendarComponent />
          </div>
        )}
        {activeTab === "profile" && (
          <div>
            <h1 className="text-3xl font-extrabold font-integralCf tracking-wider mb-6">
              Profile
            </h1>
            <DashboardProfile />
          </div>
        )}
        {activeTab === "product" && (
          <div>
            <h1 className="text-3xl font-extrabold font-integralCf tracking-wider mb-6">
              Products
            </h1>
            <ProductDashboard />
          </div>
        )}
        {activeTab === "customers" && (
          <div>
            <h1 className="text-3xl font-extrabold font-integralCf tracking-wider mb-6">
              Customers
            </h1>
            <CustomerDashboard />
          </div>
        )}
        {activeTab === "orders" && (
          <div>
            <h1 className="text-3xl font-extrabold font-integralCf tracking-wider mb-6">
              Orders
            </h1>
            <OrdersDashboard />
          </div>
        )}
      </div>
    </div>
  );
}