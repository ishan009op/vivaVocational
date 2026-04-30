import { MessageCircleMore } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AiButton() {
    const navigate=useNavigate()
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-400 shadow-2xl shadow-cyan-500/30 flex items-center justify-center"
      onClick={()=>{navigate('/ai-chat')}}
    >
      <MessageCircleMore size={30} className="text-white" />
    </motion.button>
  );
}