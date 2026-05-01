import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
// Import React Icons
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // The updated X logo

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-slate-200">
        
        {/* --- Left Side: The "Identity" Panel --- */}
        <div className="bg-slate-900 p-8 md:p-16 text-white relative flex flex-col justify-between overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl font-black leading-tight italic tracking-tighter">
                SAY <span className="text-blue-400 font-normal not-italic">HELLO.</span>
              </h2>
              <p className="mt-6 text-slate-400 text-lg max-w-sm">
                Ready to transform your career? Drop us a line and let's build something incredible together.
              </p>
            </motion.div>

            <div className="mt-12 space-y-8">
              {[
                { icon: <Phone size={24} />, label: "Call Us", value: "+91 98765 43210" },
                { icon: <Mail size={24} />, label: "Email", value: "hello@Viva.com" },
                { icon: <MapPin size={24} />, label: "Location", value: "Ludhiana, Punjab, IN" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{item.label}</p>
                    <p className="text-lg font-medium group-hover:text-blue-400 transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Updated Social Links with React Icons */}
          <div className="relative z-10 mt-16 flex gap-6">
            {[
              { icon: <FaInstagram size={22} />, link: "#", hover: "hover:text-pink-500" },
              { icon: <FaXTwitter size={22} />, link: "#", hover: "hover:text-blue-400" },
              { icon: <FaGithub size={22} />, link: "#", hover: "hover:text-white" },
            ].map((soc, i) => (
              <motion.a 
                whileHover={{ y: -3 }}
                key={i} 
                href={soc.link} 
                className={`text-slate-500 transition-all duration-300 ${soc.hover}`}
              >
                {soc.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* --- Right Side: The "Action" Panel --- */}
        <div className="p-8 md:p-16 bg-white flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-10"
          >
            <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>
            <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
          </motion.div>

          <form className="space-y-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder=" "
                className="peer w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-blue-600 transition-colors placeholder-transparent"
              />
              <label className="absolute left-0 top-3 text-slate-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Full Name
              </label>
            </div>

            <div className="relative">
              <input 
                type="email" 
                placeholder=" "
                className="peer w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-blue-600 transition-colors placeholder-transparent"
              />
              <label className="absolute left-0 top-3 text-slate-400 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                Email Address
              </label>
            </div>

            <div className="relative pt-4">
              <textarea 
                rows={3} 
                placeholder=" "
                className="peer w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-blue-600 transition-colors placeholder-transparent resize-none"
              />
              <label className="absolute left-0 top-7 text-slate-400 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
                Your Message
              </label>
            </div>

            <motion.button 
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>

          {/* Mobile Only: WhatsApp Integration */}
          <div className="mt-12 lg:hidden flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <span className="text-slate-600 font-medium italic">Faster response?</span>
            <button className="text-green-600 font-black flex items-center gap-2 hover:scale-105 transition-transform">
              <FaWhatsapp size={20} /> WHATSAPP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}