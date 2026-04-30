import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    {
      title: "Beginner Program",
      duration: "3 Months",
      students: "1.2k+ Students",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
      description:
        "Perfect for beginners starting their vocational learning journey with practical fundamentals.",
    },
    {
      title: "Professional Training",
      duration: "6 Months",
      students: "3.5k+ Students",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      description:
        "Advanced hands-on training designed to prepare students for real-world industry jobs.",
    },
    {
      title: "Internship Program",
      duration: "2 Months",
      students: "800+ Students",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      description:
        "Work on live projects, gain experience, and build confidence through internship-based learning.",
    },
  ];

  return (
    <section id="programs" className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-24 px-6 lg:px-12 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-cyan-600 uppercase tracking-[0.3em] font-semibold">
            Our Programs
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Skill-Based Training Programs
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Explore practical learning programs designed to build confidence,
            improve skills, and create career opportunities.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.18 },
              }}
              className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >

              {/* Image */}
              <div className="overflow-hidden h-64">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-7">

                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{program.duration}</span>
                  <span>{program.students}</span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {program.description}
                </p>

                <button className="mt-7 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white transition font-semibold shadow-lg shadow-cyan-500/20">
                  Join Program
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}