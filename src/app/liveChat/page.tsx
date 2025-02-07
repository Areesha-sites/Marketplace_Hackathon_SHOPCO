import Chatbot from "../Components/ChatBots";
import {   Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator, } from "@/components/ui/breadcrumb";
  import Link from "next/link";
const ChatbotPage = () => {
  return (
   <>
    <div className="absolute top-[150px] left-[100px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/" className="font-satoshi">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbLink>
                <Link href="/helpCenter" className="font-satoshi">
                  Help Center
                </Link>
              </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <Link href="/liveChat" className="font-satoshi">
                  Chat Bot
                </Link>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    <div className="flex justify-center items-center w-full min-h-screen pt-28 flex-col text-black">
      <div className="w-full py-20 text-center">
        <h1 className="text-[35px] font-bold mb-4 font-integralCf tracking-widest">Welcome to Our Live Chat Support</h1>
        <p className="text-[16px] text-gray-500 font-satoshi">Get instant help from our AI-powered chatbot, available 24/7!</p>
        <button className="mt-6 font-satoshi bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800">
          Start Chatting Now
        </button>
      </div>

      <div className="w-full pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-satoshiBold">Why Choose Our Live Chat?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2 font-satoshiBold">Instant Responses</h3>
              <p className="text-gray-400 font-satoshi">Get answers to your questions in real-time.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2 font-satoshiBold">24/7 Availability</h3>
              <p className="text-gray-400 font-satoshi">Our chatbot is always here to help, day or night.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2 font-satoshiBold">AI-Powered</h3>
              <p className="text-gray-400 font-satoshi">Smart, efficient, and always learning.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
          <Chatbot />
      </div>
    </div>
   </>
  );
};

export default ChatbotPage;