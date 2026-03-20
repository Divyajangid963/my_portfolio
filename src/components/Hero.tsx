import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(ySpring, [-300, 300], [10, -10]);
  const rotateY = useTransform(xSpring, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring" as const, stiffness: 100, damping: 20 } 
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#020617]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* 📝 Content Side */}
        <div className="flex flex-col space-y-8">
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
              Frontend Specialist & Architect
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white leading-tight tracking-tighter">
              Divya <span className="text-gradient">Jangid</span>
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-2xl max-w-xl leading-relaxed font-light"
          >
            Engineering high-performance digital solutions at the intersection of <span className="text-white font-medium italic">mathematical precision</span> and <span className="text-white font-medium italic">visual artistry</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
            <button 
              onClick={() => scrollTo("projects")}
              className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              View Work
            </button>
            <button 
              onClick={() => scrollTo("contact")}
              className="px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 active:scale-95 transition-all text-sm uppercase tracking-widest backdrop-blur-sm"
            >
              Start a Project
            </button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-8 pt-12 border-t border-white/5"
          >
            {[
              { label: "Stability", value: "99.9%" },
              { label: "Performance", value: "100" },
              { label: "Engagement", value: "+45%" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-white font-bold text-xl">{stat.value}</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-none mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 🔮 Visual Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative hidden lg:flex items-center justify-center select-none"
        >
          {/* Main Aura */}
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-[100px] animate-pulse rounded-full" />
            
            {/* Glossy Core */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[15%] glass-card rounded-[40px] flex items-center justify-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="text-[12rem] filter blur-sm opacity-20 group-hover:opacity-40 transition-opacity">
                {"{ }"}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cyan-400/10 to-transparent" />
            </motion.div>

            {/* Floating Accents */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-20 h-20 glass border border-white/20 rounded-2xl backdrop-blur-xl flex items-center justify-center"
            >
              <div className="w-8 h-1 bg-cyan-400 rounded-full blur-[1px]" />
            </motion.div>
            
            <motion.div
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 w-24 h-24 glass border border-white/20 rounded-full backdrop-blur-xl flex flex-col items-center justify-center p-4"
            >
              <div className="w-full h-1 bg-purple-500/50 rounded-full mb-2" />
              <div className="w-2/3 h-1 bg-purple-500/30 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* 🧬 Subtle Grid Background (Local) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
