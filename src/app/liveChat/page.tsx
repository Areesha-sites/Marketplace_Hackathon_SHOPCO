import Chatbot from "../Components/ChatBots";

const ChatbotPage = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen flex-col ">
      <h1 className="text-4xl font-bold mb-4 font-integralCf tracking-widest">Welcome to Our Chatbot</h1>
      <p className="text-lg text-gray-700 font-satoshi">Ask anything and get instant responses!</p>
      <Chatbot />
    </div>
  );
};

export default ChatbotPage;
