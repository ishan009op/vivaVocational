import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Top Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}
          <div>
            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="text-3xl font-extrabold"
            >
              Skill<span className="text-cyan-400">Forge</span>
            </motion.h2>

            <p className="mt-5 text-slate-400 leading-relaxed">
              Empowering students with practical vocational education and
              industry-ready skills for a brighter future.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-7">

              {[
                {
                  icon: <FaFacebookF />,
                  link: "#",
                },
                {
                  icon: <FaInstagram />,
                  link: "#",
                },
                {
                  icon: <FaTwitter />,
                  link: "#",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "#",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">
              {[
                "Home",
                "About Us",
                "Courses",
                "Programs",
                "Contact",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold">
              Popular Courses
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">
              {[
                "Computer Basics",
                "English Speaking",
                "Tailoring",
                "Cooking Classes",
                "Photography",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold">
              Contact Info
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-slate-300 font-medium">
                    +91 98765 43210
                  </p>

                  <p className="text-slate-500 text-sm mt-1">
                    Mon - Sat, 9am - 6pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-slate-300 font-medium">
                    info@skillforge.com
                  </p>

                  <p className="text-slate-500 text-sm mt-1">
                    Send us your queries anytime
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-slate-300 font-medium">
                    Punjab, India
                  </p>

                  <p className="text-slate-500 text-sm mt-1">
                    Vocational Training Center
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl">

          <div>
            <h3 className="text-3xl font-bold">
              Subscribe to Our Newsletter
            </h3>

            <p className="mt-3 text-slate-400">
              Get updates about new courses, programs, and training opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-900/70 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition min-w-[280px]"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold shadow-lg shadow-cyan-500/20"
            >
              Subscribe
            </motion.button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">

          <p>
            © 2026 SkillForge. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="hover:text-cyan-400 transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-cyan-400 transition cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}