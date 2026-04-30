           import { ShieldCheck, Trophy,Users } from "lucide-react";
import { motion } from "framer-motion";
import { 
  Monitor, Scissors, Utensils, Zap, MessageSquare, 
  ArrowRight, Star, Clock, GraduationCap 
} from "lucide-react";

export default function Courses() {
  const courses = [
    { 
      title: "Computer Basics", 
      desc: "Fundamental IT skills for office work.", 
      icon: Monitor, 
      duration: "3m", 
      color: "bg-blue-600",
      lightColor: "bg-blue-50 text-blue-600",
      size: "lg" // Bento hint
    },
    { title: "Stitching", icon: Scissors, duration: "6m", lightColor: "bg-pink-50 text-pink-600" },
    { title: "Cooking", icon: Utensils, duration: "4m", lightColor: "bg-orange-50 text-orange-600" },
    { title: "Electrician", icon: Zap, duration: "6m", lightColor: "bg-amber-50 text-amber-600" },
    { title: "Spoken English", icon: MessageSquare, duration: "2m", lightColor: "bg-cyan-50 text-cyan-600" },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="text-cyan-600 font-bold text-sm uppercase tracking-widest mb-3">Vocational Programs</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight leading-none">
              Build your future <br className="hidden md:block" /> with real skills.
            </h3>
          </div>
          <p className="text-slate-500 font-medium md:text-right max-w-xs">
            Certified courses designed to bridge the gap between learning and earning.
          </p>
        </div>

        {/* The Hybrid Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-full">
          
          {/* 1. Feature Card - Always prominent */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="col-span-2 row-span-2 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-slate-200"
          >
            <div className="relative z-10">
              <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                <Monitor size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-3xl font-bold mb-4">Computer Basics</h4>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                Master Windows, MS Office, and Internet essentials. The perfect starting point for any career.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm font-bold"><Clock size={18}/> 3 Months</div>
                <div className="flex items-center gap-2 text-sm font-bold"><Star size={18} fill="currentColor" className="text-cyan-400"/> 4.9</div>
              </div>
            </div>
            
            <button className="relative z-10 mt-12 w-fit flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-xl font-bold transition-all">
              Apply Now <ArrowRight size={20}/>
            </button>

            {/* Abstract Background Design */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap size={200} />
            </div>
          </motion.div>

          {/* 2. Secondary Cards - Tiled on Mobile, Bento on Desktop */}
          {courses.slice(1).map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`col-span-1 rounded-[2rem] p-6 flex flex-col justify-between border border-slate-100 transition-all hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-500/5 cursor-pointer bg-white group`}
            >
              <div className={`w-12 h-12 rounded-xl ${course.lightColor} flex items-center justify-center mb-4 transition-transform group-hover:rotate-6`}>
                <course.icon size={24} />
              </div>
              
              <div>
                <h5 className="font-bold text-slate-900 text-lg leading-tight mb-2">
                  {course.title}
                </h5>
                <div className="flex items-center justify-between text-slate-400 text-[10px] font-black uppercase tracking-tighter">
                  <span>{course.duration} Program</span>
                  <ArrowRight size={14} className="text-cyan-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* 3. The "More" Card - Fills the gap */}
          <div className="col-span-1 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-6 hover:bg-slate-50 transition-colors cursor-pointer">
            <p className="text-slate-400 font-bold text-xs uppercase mb-2">+ 15 More</p>
            <p className="text-slate-900 font-bold text-sm">Explore All Skills</p>
          </div>

        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all">
           <div className="flex items-center gap-2 font-bold text-slate-400"><ShieldCheck size={20}/> ISO Certified</div>
           <div className="flex items-center gap-2 font-bold text-slate-400"><Users size={20}/> 25K+ Alumni</div>
           <div className="flex items-center gap-2 font-bold text-slate-400"><Trophy size={20}/> Top Rated</div>
        </div>
      </div>
    </section>
  );
}

// Just adding missing imports for the demo