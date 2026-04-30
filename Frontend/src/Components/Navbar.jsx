import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "Courses",
    "Programs",
    "About",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">

        <div className="backdrop-blur-xl bg-white/80 border border-slate-200 rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">

          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
            className="text-2xl font-extrabold text-slate-900 cursor-pointer"
          >
            VI<span className="text-cyan-500">VA</span>
          </motion.h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10 text-slate-700 font-medium">

            {navLinks.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -2 }}
                className="cursor-pointer hover:text-cyan-500 transition"
                onClick={()=> navigate(`/`)}
              >
                <a href={`/#${item.toLowerCase()}`}>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold shadow-lg shadow-cyan-500/20"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-900"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-xl"
          >

            <ul className="flex flex-col gap-5 text-slate-700 font-medium">

              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-cyan-500 transition cursor-pointer"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}