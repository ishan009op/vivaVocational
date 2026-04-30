import { motion } from "framer-motion";
import { Award, Users, Briefcase } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Award size={28} />,
      title: "Certified Training",
      desc: "Industry-recognized vocational programs designed for practical skill development.",
    },
    {
      icon: <Users size={28} />,
      title: "Expert Mentors",
      desc: "Learn from experienced instructors with real-world professional expertise.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Career Opportunities",
      desc: "Hands-on learning and guidance to help students become job-ready.",
    },
  ];

  return (
    <section id="about" className="bg-slate-950 text-white py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Images */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-5">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Students"
              className="rounded-3xl h-72 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Computer Training"
              className="rounded-3xl h-72 w-full object-cover mt-12"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.35 }}
            className="absolute bottom-0 left-10 bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 shadow-xl"
          >
            <h3 className="text-3xl font-extrabold text-cyan-400">
              10+
            </h3>
            <p className="text-slate-300 mt-1">
              Years of Experience
            </p>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold">
            About Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Empowering Students with Practical Skills
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            We provide career-focused vocational education designed to help
            students gain practical knowledge, hands-on experience, and the
            confidence needed for real-world opportunities.
          </p>

          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            From computer basics and language learning to tailoring and
            technical training, our programs are built to make learning simple,
            accessible, and industry-relevant.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                }}
                className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <button className="mt-10 px-7 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-lg shadow-lg shadow-cyan-500/20">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}