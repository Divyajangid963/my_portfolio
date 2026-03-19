import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = ["Hero", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-[1001] px-6 py-3 rounded-full glass border border-white/10 hidden md:block"
    >
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
