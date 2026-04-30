import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync scroll state to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Courses", href: "/courses" },
    { name: "Programs", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo - VIVA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="bg-cyan-500 p-1.5 rounded-lg shadow-lg shadow-cyan-500/20">
            <GraduationCap className="text-white" size={22} />
          </div>
          <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
            isScrolled ? "text-slate-900" : "text-slate-900"
          }`}>
            VI<span className="text-cyan-500">VA</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.href)}
                className={`text-sm font-semibold transition-all hover:text-cyan-500 ${
                  isScrolled ? "text-slate-600" : "text-white/80"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className={`text-sm font-bold px-4 py-2 transition-colors ${
            isScrolled ? "text-slate-600 hover:text-slate-900" : "text-white/70 hover:text-white"
          }`}>
            Login
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-cyan-500 text-white text-sm font-bold shadow-lg shadow-cyan-500/20 hover:bg-cyan-600 transition-all"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-xl transition-colors ${
            isScrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-bold text-slate-900 flex justify-between items-center group"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                  <ChevronRight className="text-slate-300 group-hover:text-cyan-500 transition-colors" />
                </a>
              ))}
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <button className="py-4 rounded-2xl bg-slate-50 text-slate-600 font-bold border border-slate-200">
                  Login
                </button>
                <button className="py-4 rounded-2xl bg-cyan-500 text-white font-bold shadow-lg shadow-cyan-500/20">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}