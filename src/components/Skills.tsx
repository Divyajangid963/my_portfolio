import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend",
    icon: "🌐",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "ReactJs",
      "Redux",
      "NextJs",
    ],
    color: "cyan",
  },
  {
    title: "Styling",
    icon: "🎨",
    skills: [
      "Tailwind CSS",
      "CSS Modules",
      "Bootstrap",
      "MUI",
      "Responsive Design",
    ],
    color: "purple",
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: ["Git", "GitHub", "REST APIs", "Vite", "Framer Motion"],
    color: "pink",
  },
];

const Skills = () => {
  return (
    <section className="relative py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 text-center tracking-tighter"
          >
            My <span className="text-gradient">Toolbox</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-[2px] bg-purple-500"
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-6 md:p-8 rounded-3xl glass-card relative overflow-hidden"
            >
              {/* ✨ Glow Effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${category.color}-500/20 blur-[80px] group-hover:bg-${category.color}-500/40 transition-colors duration-500`} />
              
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl mb-4 md:mb-6">{category.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                      className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-xl border border-white/5 bg-white/5 text-gray-300 backdrop-blur-md cursor-default transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
