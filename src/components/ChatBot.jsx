import React, { useState } from "react";
import axios from "axios";
import { X, Send, Bot, User } from "lucide-react";
import api from "../api/axios";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I’m your Movie Assistant! Ask me anything." }
  ]);
  const [input, setInput] = useState("");

  const backend = import.meta.env.VITE_BACKEND_URI;

  const sendMessage = async () => {
    if (!input.trim()) return;

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
    <>
      {open ? (
        <div className="fixed bottom-15 right-15 w-80 sm:w-96 h-[450px] bg-gradient-to-t from-black via-gray-900 to-red-600 text-white rounded-2xl shadow-2xl flex flex-col animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-black/40 backdrop-blur-md rounded-t-2xl">
            <h1 className="font-bold text-lg flex items-center gap-2">
               Movie Assistant
            </h1>
            <X
              className="cursor-pointer hover:text-red-400 transition"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* Chat Box */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <Bot className="text-red-400 mt-1 shrink-0" size={18} />
                )}
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm ${
                    msg.sender === "user"
                      ? "bg-red-500 text-white rounded-br-none"
                      : "bg-white/90 text-black rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <User className="text-gray-300 mt-1 shrink-0" size={18} />
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 flex items-center gap-2 border-t border-gray-700 bg-black/40 backdrop-blur-md rounded-b-2xl">
            <input
              className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me a movie suggestion..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-full transition flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        // Floating Button
        <div
          className="fixed bottom-15 right-15 w-24 h-24 rounded-full bg-black border border-gray-600 shadow-lg cursor-pointer flex items-center justify-center hover:scale-110 transition"
          onClick={() => setOpen(true)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/705/705062.png"
            alt="chatbot"
            className="w-15 h-15"
          />
        </div>
      )}
    </>
  );
};

export default Chatbot;
