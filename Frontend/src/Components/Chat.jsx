import { useState, useRef, useEffect } from "react";
import { SendHorizonal, Bot, Sparkles, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "I'm having trouble connecting to the server. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pt-24 px-4 pb-10 overflow-hidden relative">
      
      {/* Dynamic Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 blur-[120px] rounded-full animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-100/50 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Chat Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-4xl h-[80vh] mx-auto bg-white/80 border border-slate-200 backdrop-blur-xl rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
      >
        {/* Header */}
        <div className="border-b border-slate-100 px-8 py-6 flex items-center justify-between bg-white/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Bot size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-800">
                SkillForge AI <span className="text-blue-600">Assistant</span>
              </h2>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-slate-500 text-xs font-medium">Online & Ready to help</p>
              </div>
            </div>
          </div>
          <Sparkles className="text-slate-300" size={20} />
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6 scrollbar-thin scrollbar-thumb-slate-200">
          {messages.length === 0 && (
            <div className="h-full flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center max-w-sm"
              >
                <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto text-blue-600 shadow-sm mb-6">
                  <Bot size={40} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800">How can I help today?</h3>
                <p className="mt-3 text-slate-500 leading-relaxed">
                  Ask me about <span className="text-blue-600 font-semibold">admissions</span>, 
                  <span className="text-blue-600 font-semibold"> course fees</span>, or 
                  <span className="text-blue-600 font-semibold"> technical programs</span>.
                </p>
              </motion.div>
            </div>
          )}

          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-auto shadow-sm ${
                    msg.role === "user" ? "bg-slate-800 text-white" : "bg-white border border-slate-200 text-blue-600"
                  }`}>
                    {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  
                  <div className={`px-5 py-4 rounded-[2rem] text-[15px] leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-gradient-to-tr from-blue-600 to-blue-500 text-white rounded-br-none"
                      : "bg-white border border-slate-100 text-slate-700 rounded-bl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <div className="flex justify-start items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                <Bot size={14} />
              </div>
              <div className="bg-white border border-slate-100 px-5 py-4 rounded-[2rem] rounded-bl-none">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white/50 backdrop-blur-md border-t border-slate-100">
          <div className="flex items-center gap-3 bg-white border border-slate-200 p-2 rounded-[2rem] shadow-sm focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50 transition-all">
            <input
              type="text"
              placeholder="Type your question here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-transparent px-5 py-3 outline-none text-slate-700 placeholder:text-slate-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendMessage}
              className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-lg shadow-blue-200"
            >
              <SendHorizonal size={20} />
            </motion.button>
          </div>
          <p className="text-center text-[10px] text-slate-400 mt-3 font-medium uppercase tracking-widest">
            Powered by SkillForge Intelligence
          </p>
        </div>
      </motion.div>
    </div>
  );
}