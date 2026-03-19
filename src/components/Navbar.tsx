import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const navItems = ["Hero", "About", "Skills", "Projects", "Contact"];
  const [activeTab, setActiveTab] = useState("Hero");

  return (
    <>
      {/* 🖥️ Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-[1001] px-8 py-3 rounded-full glass border border-white/10 hidden md:block"
      >
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveTab(item)}
                className={`text-sm font-bold transition-all uppercase tracking-widest ${
                  activeTab === item ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* 📱 Mobile Navbar (Bottom Bar) */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-6 left-6 right-6 z-[1001] glass border border-white/10 rounded-2xl flex md:hidden items-center justify-around py-4"
      >
        {navItems.slice(0, 4).map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setActiveTab(item)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === item ? "text-cyan-400" : "text-gray-500"
            }`}
          >
            <span className="text-[10px] font-black uppercase tracking-tighter">{item}</span>
            {activeTab === item && (
              <motion.div layoutId="activeDot" className="w-1 h-1 rounded-full bg-cyan-400" />
            )}
          </a>
        ))}
        {/* Contact Button */}
        <a
          href="#contact"
          onClick={() => setActiveTab("Contact")}
          className="bg-white text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter"
        >
          Work
        </a>
      </motion.nav>
    </>
  );
};

export default Navbar;
