import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticButton = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 150, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set(e.clientX - rect.left - centerX);
    y.set(e.clientY - rect.top - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow duration-300 relative z-50"
    >
      {text}
    </motion.button>
  );
};

export default MagneticButton;
