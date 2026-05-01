import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

const programs = [
  {
    id: "01",
    title: "Beginner",
    category: "Foundation",
    description: "Deconstructing the basics to build an unbreakable technical foundation.",
    // Updated: High-quality classroom/learning setting
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    accent: "#2563eb",
  },
  {
    id: "02",
    title: "Professional",
    category: "Specialization",
    description: "Bridging the gap between theory and industry-grade performance.",
    // Updated: Technical workstation/focused work
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
    accent: "#4f46e5",
  },
  {
    id: "03",
    title: "Internship",
    category: "Placement",
    description: "Live project immersion designed to secure high-value employment.",
    // NEW WORKING URL: Professional collaborative office environment
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    accent: "#0891b2",
  },
];

export default function Programs() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-[#f8fafc] text-slate-900">
      {/* Intro - Adjusted for Mobile Sizing */}
      <section className="h-[70vh] md:h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm"
          >
            Curriculum 2026
          </motion.p>
          <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase leading-none">
            The <span className="text-blue-600 italic">Program.</span>
          </h2>
          <p className="text-slate-500 mt-6 max-w-md mx-auto text-sm md:text-lg px-4">
            High-performance tracks engineered for the next generation of builders.
          </p>
        </div>
      </section>

      {/* Program Sections */}
      {programs.map((prog, i) => (
        <ProgramSection key={i} prog={prog} index={i} />
      ))}

      {/* Footer CTA */}
      <section className="h-[40vh] flex flex-col items-center justify-center bg-white border-t border-slate-100">
        <h3 className="text-2xl md:text-5xl font-black mb-6 tracking-tight">READY TO TRANSFORM?</h3>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95">
          APPLY NOW <ArrowUpRight size={20}/>
        </button>
      </section>
    </div>
  );
}

function ProgramSection({ prog }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  // Parallax: Slower movement for light theme elegance
  const yImage = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.1], [0.95, 1]);

  return (
    <section ref={sectionRef} className="relative h-[120vh] md:h-[150vh] flex items-center justify-center">
      <motion.div 
        style={{ opacity, scale }}
        className="sticky top-0 h-screen w-full flex items-center px-4 md:px-24"
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center w-full max-w-7xl mx-auto">
          
          {/* CONTENT: Order 2 on mobile (bottom), Order 1 on Desktop (left) */}
          <div className="order-2 lg:order-1 px-2">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="text-3xl md:text-5xl font-black text-blue-600/20">
                {prog.id}
              </span>
              <div className="h-[2px] w-8 md:w-12 bg-blue-600" />
              <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                {prog.category}
              </span>
            </div>
            
            <h3 className="text-4xl md:text-7xl font-black text-slate-900 mb-4 md:mb-8 tracking-tighter uppercase leading-[0.9]">
              {prog.title}
            </h3>
            
            <p className="text-slate-600 text-base md:text-xl max-w-sm leading-relaxed mb-8 md:mb-10 font-medium">
              {prog.description}
            </p>

            <button className="flex items-center gap-4 text-slate-900 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                <Plus size={20} className="group-hover:rotate-90 transition-transform" />
              </div>
              <span className="text-xs md:text-sm font-black uppercase tracking-widest">Syllabus Details</span>
            </button>
          </div>

          {/* IMAGE: Order 1 on mobile (top), Order 2 on Desktop (right) */}
          <div className="order-1 lg:order-2 relative aspect-[16/9] lg:aspect-square overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-2xl shadow-slate-200 border-4 border-white">
            <motion.img 
              style={{ y: yImage, scale: 1.1 }}
              src={prog.image}
              className="absolute inset-0 w-full h-full object-cover"
              alt={prog.title}
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
}