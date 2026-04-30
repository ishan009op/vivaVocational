import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-24 px-6 lg:px-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-cyan-600 uppercase tracking-[0.35em] font-semibold">
            Contact
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Let’s Start Your Learning Journey
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Reach out to our team for course details, admissions, and guidance
            about vocational training programs.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mt-20 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-stretch">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl"
          >

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Students"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-900/50 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">

              <h3 className="text-3xl font-bold text-white leading-tight">
                Build Skills.
                <br />
                Create Opportunities.
              </h3>

              <p className="mt-5 text-slate-200 leading-relaxed">
                Join thousands of students learning practical skills through
                hands-on vocational education programs.
              </p>

              {/* Contact Cards */}
              <div className="mt-10 space-y-4">

                {[
                  {
                    icon: <Phone size={20} />,
                    title: "+91 98765 43210",
                  },
                  {
                    icon: <Mail size={20} />,
                    title: "info@skillforge.com",
                  },
                  {
                    icon: <MapPin size={20} />,
                    title: "Punjab, India",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/20 text-cyan-100 flex items-center justify-center">
                      {item.icon}
                    </div>

                    <p className="text-white font-medium">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-xl"
          >

            <div className="flex items-center justify-between flex-wrap gap-4">

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Send Message
                </h3>

                <p className="mt-2 text-slate-500">
                  Fill the form and our team will contact you shortly.
                </p>
              </div>

              <div className="px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-sm font-medium">
                Usually replies in 24 hours
              </div>
            </div>

            <form className="mt-10 space-y-6">

              {/* Grid Inputs */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-slate-700 block mb-2 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div>
                  <label className="text-slate-700 block mb-2 font-medium">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-slate-700 block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 transition"
                />
              </div>

              {/* Select */}
              <div>
                <label className="text-slate-700 block mb-2 font-medium">
                  Interested Course
                </label>

                <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 transition">

                  <option>Computer Basics</option>
                  <option>Cooking Classes</option>
                  <option>English Speaking</option>
                  <option>Tailoring</option>

                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-slate-700 block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500 transition resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white transition font-semibold text-lg shadow-lg shadow-cyan-500/20"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}