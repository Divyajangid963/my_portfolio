import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const SpotlightCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const springConfig = { stiffness: 150, damping: 20 };
  const posX = useSpring(0, springConfig);
  const posY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    posX.set(mousePos.x);
    posY.set(mousePos.y);
  }, [mousePos, posX, posY]);

  return (
    <>
      {/* 🔦 Main Spotlight */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: posX,
          y: posY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed z-[9999] h-8 w-8 rounded-full bg-cyan-400 mix-blend-difference"
      />
      
      {/* 🌫 Outer Glow */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: posX,
          y: posY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed z-[9998] h-64 w-64 rounded-full bg-cyan-400/10 blur-[64px]"
      />
    </>
  );
};

export default SpotlightCursor;
