import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    },
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-4xl relative z-10"
      >
        <motion.div variants={item} className="mb-4">
          <span className="px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-medium tracking-wider uppercase">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]"
        >
          Building Digital <br />
          <span className="text-gradient">Experiences</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
        >
          I'm <span className="text-white font-semibold">Divya Jangid</span>, a Frontend Developer specialized in building
          <span className="text-cyan-400 italic"> high-performance</span>, visually stunning web applications.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <MagneticButton text="View Projects" onClick={() => scrollTo("projects")} />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("contact")}
            className="px-10 py-3 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 🧬 Decorative Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-cyan-400 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
