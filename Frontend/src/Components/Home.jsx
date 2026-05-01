import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Star, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#FDFDFD] pt-24 pb-12 overflow-hidden">
      
      {/* Decorative Elements - Organic & Subtle */}
      <div className="absolute top-0 right-0 w-[50%] h-[500px] bg-gradient-to-b from-cyan-50/50 to-transparent rounded-bl-full -z-10 tracking-tighter" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/50 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
            >
              <ShieldCheck size={16} className="text-cyan-600" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                Government Accredited 2026
              </span>
            </motion.div>

            {/* Typography: Light & Elegant */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight"
            >
              Real Skills for the <br />
              <span className="text-cyan-600 relative">
                Modern Era
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-cyan-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-8 text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Advance your career with practical, hands-on vocational training designed 
              by industry experts for the next generation of professionals.
            </motion.p>

            {/* CTA Group */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <button className="w-full sm:w-auto group px-8 py-4 bg-cyan-600 text-white rounded-2xl text-lg font-bold hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-200 flex items-center justify-center gap-2">
                Explore Programs
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl text-lg font-bold hover:border-cyan-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Play size={14} className="text-cyan-600 ml-0.5" fill="currentColor" />
                </div>
                Quick Demo
              </button>
            </motion.div>

            {/* Feature List (Mobile Priority) */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle2, text: "Job Placement Support" },
                { icon: Zap, text: "Industry Recognized" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-600 font-medium">
                  <item.icon size={20} className="text-cyan-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Modern Soft Frame */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full"
          >
            <div className="relative rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                alt="Student success"
                className="rounded-[2rem] w-full h-auto object-cover"
              />
              
              {/* Floating Review Card */}
             
            </div>

            {/* Abstract Background Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-100/30 rounded-full blur-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}