"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { BeatLoader } from "react-spinners";
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      const userData = { name: "John Doe" }; 
      setUserName(userData.name);
    };
    fetchUserData();
  }, []);
  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setIsLoading(true);
    let botResponse = "Thank you for your message! Our team will get back to you soon.";
    const lowerCaseMessage = input.toLowerCase();
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey")) {
      botResponse = userName ? `Hi ${userName}! How can I assist you today?` : "Hi there! How can I assist you today? Can I get your name, please?";
    } else if (lowerCaseMessage.includes("my name is") || lowerCaseMessage.includes("i'm")) {
      const name = input.split("is")[1].trim();
      setUserName(name);
      botResponse = `Nice to meet you, ${name}! What can I help you with today?`;
    } else if (lowerCaseMessage.includes("price") || lowerCaseMessage.includes("cost") || lowerCaseMessage.includes("how much")) {
      botResponse = "Sure! Pricing varies by product. You can check the price on the product page, or let me know which item you're interested in, and I’ll help!";
    } else if (lowerCaseMessage.includes("size") || lowerCaseMessage.includes("sizes") || lowerCaseMessage.includes("fit")) {
      botResponse = "We offer sizes from XS to XXL. Each product page has a size guide to help you find the perfect fit. Need help with a specific item?";
    } else if (lowerCaseMessage.includes("shipping") || lowerCaseMessage.includes("delivery") || lowerCaseMessage.includes("how long")) {
      botResponse = "We ship worldwide! Shipping costs and delivery times depend on your location. For more details, check our shipping info page or let me know your location, and I’ll help!";
    } else if (lowerCaseMessage.includes("return") || lowerCaseMessage.includes("exchange") || lowerCaseMessage.includes("send back")) {
      botResponse = "We accept returns within 30 days of purchase, as long as the item is in its original condition. Visit our returns page for instructions, or let me know if you need help with a specific return!";
    } else if (lowerCaseMessage.includes("payment") || lowerCaseMessage.includes("pay") || lowerCaseMessage.includes("credit card")) {
      botResponse = "We accept credit cards, PayPal, and bank transfers. You can choose your preferred payment method at checkout. Need help with payment issues?";
    } else if (lowerCaseMessage.includes("material") || lowerCaseMessage.includes("fabric") || lowerCaseMessage.includes("what’s it made of")) {
      botResponse = "Our products are made from high-quality materials like cotton, polyester, and blends. Each product page lists the specific materials used. Let me know if you’d like details about a specific item!";
    } else if (lowerCaseMessage.includes("store") || lowerCaseMessage.includes("location") || lowerCaseMessage.includes("near me")) {
      botResponse = "We have stores in multiple locations! Use our store locator to find the nearest one, or let me know your city, and I’ll help you find one.";
    } else if (lowerCaseMessage.includes("gift card") || lowerCaseMessage.includes("buy gift card") || lowerCaseMessage.includes("gift voucher")) {
      botResponse = "You can purchase gift cards on our website—they’re perfect for any occasion! Let me know if you need help buying or redeeming one.";
    } else if (lowerCaseMessage.includes("customer service") || lowerCaseMessage.includes("support") || lowerCaseMessage.includes("help")) {
      botResponse = "Our customer service team is here to help! You can reach us via email or through our contact page. Let me know what you need, and I’ll guide you!";
    } else if (lowerCaseMessage.includes("sale") || lowerCaseMessage.includes("discount") || lowerCaseMessage.includes("on sale")) {
      botResponse = "We’ve got some great deals in our Sale section! Check it out for discounts on selected items. Let me know if you’re looking for something specific!";
    } else if (lowerCaseMessage.includes("new collection") || lowerCaseMessage.includes("new arrivals") || lowerCaseMessage.includes("latest")) {
      botResponse = "Our new collection is live! Head over to the New Arrivals section to explore the latest styles. Need recommendations? Let me know!";
    } else if (lowerCaseMessage.includes("track order") || lowerCaseMessage.includes("where is my order")) {
      botResponse = "You can track your order by logging into your account or using the tracking link in your confirmation email. Need help with your order number?";
    } else if (lowerCaseMessage.includes("cancel order") || lowerCaseMessage.includes("change order")) {
      botResponse = "If your order hasn’t been shipped yet, you can cancel or modify it. Let me know your order number, and I’ll assist you!";
    } else if (lowerCaseMessage.includes("out of stock") || lowerCaseMessage.includes("restock")) {
      botResponse = "Sorry about that! You can sign up for restock notifications on the product page. Let me know which item you’re interested in, and I’ll check for updates!";
    } else if (lowerCaseMessage.includes("recommend") || lowerCaseMessage.includes("suggest")) {
      botResponse = "I’d be happy to help! Let me know what you’re looking for—style, size, or occasion—and I’ll suggest some great options!";
    } else {
      botResponse = "I’m here to help! Could you clarify or provide more details about what you’re looking for?";
    }
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: botResponse, sender: "bot" },
      ]);
      setIsLoading(false);
    }, 1000);
    setInput("");
  };
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-black text-white shadow-xl rounded-2xl p-4 w-80 h-96 flex flex-col"
        >
          <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-2">
            <h3 className="text-lg font-semibold">Chat Support</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-200">
              ✖
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg text-sm max-w-xs ${
                  msg.sender === "user"
                    ? "bg-white text-black self-end rounded-br-none"
                    : "bg-gray-700 text-white self-start rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center items-center space-x-2">
                <BeatLoader size={8} color="#ffffff" />
                <span className="text-gray-400">Bot is typing...</span>
              </div>
            )}
          </div>
          <div className="flex items-center border-t border-gray-700 pt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm border border-gray-700 rounded-l focus:outline-none bg-black text-white"
            />
            <button
              onClick={sendMessage}
              className="bg-white text-black px-3 py-2 rounded-r hover:bg-gray-200"
            >
              <Send size={16} />
            </button>
          </div>
        </motion.div>
      )}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-black text-white rounded-full shadow-lg hover:bg-gray-800"
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
};

export default Chatbot;