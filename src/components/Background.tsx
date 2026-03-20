import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* 🌌 Deep Ambient Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#1e1b4b_0%,_transparent_70%)] opacity-40" />
      
      {/* 🔮 Corner Glows */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]"
      />
      
      {/* 🕸 Minimal Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* 💎 Noise Texture Overlay (handled in CSS but ensured here) */}
      <div className="noise-overlay" />
    </div>
  );
};

export default Background;
