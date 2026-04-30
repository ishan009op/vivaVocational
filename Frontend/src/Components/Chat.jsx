import { useState, useRef, useEffect } from "react";
import { SendHorizonal, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Server error",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      chatEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);
  }, [messages, loading]);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-4 pb-10 overflow-hidden">

      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Chat Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 w-full max-w-4xl h-[82vh] mx-auto bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] overflow-hidden flex flex-col shadow-2xl"
      >

        {/* Header */}
        <div className="border-b border-white/10 px-6 py-5 flex items-center gap-4 bg-slate-900/40 backdrop-blur-xl">
          
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
            <Bot size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              SkillForge AI Assistant
            </h2>

            <p className="text-slate-400 text-sm mt-1">
              Ask about courses, admissions, fees, and programs
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-6 pb-10 space-y-5">

          {messages.length === 0 && (
            <div className="h-full flex items-center justify-center">
              <div className="text-center max-w-md">
                
                <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mx-auto text-cyan-400">
                  <Bot size={40} />
                </div>

                <h3 className="mt-6 text-3xl font-bold">
                  Welcome to SkillForge AI
                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">
                  Get instant answers about vocational courses, training
                  programs, admissions, timings, and more.
                </p>
              </div>
            </div>
          )}

          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-5 py-4 rounded-3xl text-sm leading-relaxed shadow-lg ${
                    msg.role === "user"
                      ? "bg-cyan-500 text-white rounded-br-md"
                      : "bg-slate-900 border border-white/10 text-slate-200 rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-slate-900 border border-white/10 text-slate-400 px-5 py-4 rounded-3xl rounded-bl-md text-sm">
                AI is typing...
              </div>
            </motion.div>
          )}

          <div ref={chatEndRef} className="h-2" />
        </div>

        {/* Input */}
        <div className="border-t border-white/10 p-5 bg-slate-900/40 backdrop-blur-xl">
          <div className="flex items-center gap-3">

            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              className="flex-1 bg-slate-900/70 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition text-white placeholder:text-slate-500"
            />

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendMessage}
              className="w-14 h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition flex items-center justify-center shadow-lg shadow-cyan-500/20"
            >
              <SendHorizonal size={22} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}