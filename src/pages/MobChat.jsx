import React, { useState } from "react";
import axios from "axios";
import { Send } from "lucide-react";
import api from "../api/axios";

const MobChat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I’m your Movie Assistant! Ask me anything." }
  ]);
  const [input, setInput] = useState("");



  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    try {
       const res = await api.post("/chat/msg", {
        messages: input,
      });

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: res.data.reply }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "❌ Sorry, something went wrong!" }
      ]);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black py-4 text-center shadow-md">
        <h1 className="text-lg sm:text-xl font-semibold"> Movie Assistant</h1>
      </header>

      {/* Chat Box */}
      <main className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[75%] p-3 rounded-2xl ${
              msg.sender === "user"
                ? "ml-auto bg-white text-black rounded-br-none"
                : "mr-auto bg-red-600 text-white rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </main>

      {/* Input Area */}
      <footer className="bg-gray-800 p-3 flex items-center gap-2 sticky bottom-15">
        <input
          className="flex-1 bg-transparent border border-gray-600 rounded-lg px-3 py-2 focus:outline-none text-sm sm:text-base"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me a movie suggestion..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg flex items-center gap-1 transition"
        >
          <Send size={18} /> <span className="hidden sm:inline">Send</span>
        </button>
      </footer>
    </div>
  );
};

export default MobChat;
