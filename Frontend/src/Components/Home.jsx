import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative top-3 min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 text-slate-900">

      {/* Background Glow */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full"></div> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-sm font-medium mb-6"
          >
            Learn Real Skills • Build Your Career
          </motion.span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
            Vocational Training for the{" "}
            <span className="text-cyan-600">
              Modern Workforce
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-slate-600 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Gain industry-ready skills through hands-on training programs in
            technology, business, tailoring, communication, and more.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-5">

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-4 bg-cyan-500 hover:bg-cyan-600 transition rounded-2xl text-lg font-semibold text-white shadow-lg shadow-cyan-500/20"
            >
              Explore Courses
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-4 border border-slate-300 hover:bg-slate-100 transition rounded-2xl text-lg font-semibold"
            >
              Watch Demo
            </motion.button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-5 max-w-md mx-auto lg:mx-0">

            {[
              { number: "25K+", label: "Students" },
              { number: "120+", label: "Courses" },
              { number: "95%", label: "Placement" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-cyan-600">
                  {item.number}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative flex justify-center"
        >

          {/* Main Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Students Learning"
              className="w-[500px] rounded-2xl object-cover"
            />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white border border-slate-200 p-5 rounded-2xl shadow-xl"
            >
              <p className="text-sm text-slate-500">
                Top Program
              </p>

              <h4 className="text-xl font-bold mt-1">
                Computer Basics
              </h4>

              <p className="text-cyan-600 mt-2 font-medium">
                4.9 ★ Rating
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}