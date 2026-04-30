import { useState } from "react";
import { motion } from "framer-motion";

export default function Courses() {
  const courses = [
    {
      title: "Computer Basics",
      desc: "Learn typing, MS Office, internet usage, emails, and essential digital skills.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Cooking Classes",
      desc: "Master everyday cooking, bakery items, food presentation, and kitchen management.",
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "English Speaking",
      desc: "Improve spoken English, grammar, confidence, and communication skills.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Stitching & Tailoring",
      desc: "Learn stitching, fashion designing, measurements, and tailoring techniques.",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Photography",
      desc: "Understand camera basics, editing, lighting, and professional photography.",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Electrician Training",
      desc: "Gain practical knowledge of wiring, repairs, safety, and electrical systems.",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <section id="courses" className="bg-slate-950 text-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            Our Courses
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Learn Practical Skills for Real Careers
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            Industry-focused vocational training programs designed to help
            students gain hands-on experience and job-ready skills.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {visibleCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.18 },
              }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400/40 transition"
            >
              {/* Image */}
              <div className="overflow-hidden h-56">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold">
                  {course.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-relaxed">
                  {course.desc}
                </p>

                <button className="mt-6 text-cyan-400 font-semibold hover:text-cyan-300 transition">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && (
          <div className="flex justify-center mt-14">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
              onClick={() => setShowAll(true)}
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-lg shadow-lg shadow-cyan-500/20"
            >
              View More Courses
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}