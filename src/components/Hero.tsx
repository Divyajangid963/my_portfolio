import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { useEffect } from "react";

const Hero = () => {

  // 🖱️ 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      x.set(clientX / innerWidth - 0.5);
      y.set(clientY / innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden perspective-1000">
      {/* ✨ Subtle Particle System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%" 
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: ["-10%", "110%"],
            }}
            transition={{ 
              duration: Math.random() * 15 + 15, 
              repeat: Infinity,
              delay: Math.random() * 10
            }}
            className="absolute w-[2px] h-[2px] bg-cyan-400/50 rounded-full blur-[1px]"
          />
        ))}
      </div>

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-6xl relative z-10"
      >
        <motion.div variants={item} className="mb-6 md:mb-10">
          <span className="px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase backdrop-blur-md">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-tight text-white leading-[0.85] mb-12 select-none"
        >
          <span className="flex justify-center flex-wrap">
            {"Building Iconic".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={charVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
          <span className="text-gradient flex justify-center mt-6">
            {"Experiences".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={charVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 md:mt-14 text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed px-4 font-medium"
        >
          I'm <span className="text-white font-black text-xl md:text-3xl underline decoration-cyan-400 decoration-4 underline-offset-8 transition-all hover:decoration-purple-500">Divya Jangid</span>, <br className="hidden md:block" /> a Frontend Specialist dedicated to crafting <span className="text-cyan-400 italic font-black">high-performance</span>, <br className="hidden md:block" /> visually stunning digital journeys for the modern web.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 md:mt-24 flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-100 transition duration-700"></div>
            <MagneticButton text="Explore My Work" onClick={() => scrollTo("projects")} />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="px-12 md:px-16 py-5 md:py-6 rounded-full border border-white/20 text-white font-black text-sm md:text-lg uppercase tracking-widest transition-all duration-300 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 🧬 Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400/40 to-transparent relative">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-[-1px] w-[3px] h-[3px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
