import { motion } from "framer-motion";
import { Award, Users, Briefcase } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Award size={24} />,
      title: "Certified Training",
      desc: "Industry-recognized vocational programs designed for practical skill development.",
    },
    {
      icon: <Users size={24} />,
      title: "Expert Mentors",
      desc: "Learn from experienced instructors with real-world professional expertise.",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Career Opportunities",
      desc: "Hands-on learning and guidance to help students become job-ready.",
    },
  ];

  return (
    <section id="about" className="relative bg-slate-50 text-slate-900 py-16 px-6 lg:py-24 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Images Container - Reordered for Mobile (Text first usually works best, but keeping visual-first if preferred) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Students"
              className="rounded-2xl md:rounded-3xl h-52 md:h-72 w-full object-cover shadow-md"
            />

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Computer Training"
              className="rounded-2xl md:rounded-3xl h-52 md:h-72 w-full object-cover mt-8 md:mt-12 shadow-md"
            />
          </div>

          {/* Floating Card - Optimized for Mobile */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-4 left-6 md:left-10 bg-white border border-slate-200 rounded-xl md:rounded-2xl px-5 py-4 md:px-6 md:py-5 shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-600">
              10+
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-medium">
              Years of Excellence
            </p>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2"
        >
          <span className="text-blue-600 uppercase tracking-widest font-bold text-sm">
            About Our Institute
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Empowering Students with <span className="text-blue-600">Practical Skills</span>
          </h2>

          <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
            We provide career-focused vocational education designed to help
            students gain practical knowledge, hands-on experience, and the
            confidence needed for real-world opportunities.
          </p>

          {/* Features List */}
          <div className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-slate-500 text-sm md:text-base leading-snug">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <button className="mt-10 w-full md:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all shadow-lg shadow-blue-200 active:scale-95">
            Discover Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
}