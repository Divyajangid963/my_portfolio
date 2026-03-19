import { motion } from "framer-motion";

const projects = [
  {
    title: "Hireute",
    desc: "Job platform with modern UI, API integration and seamless user experience for job search and application management.",
    tech: ["React", "TypeScript", "Tailwind", "API"],
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Rangin Mashora",
    desc: "Creative web platform with visually rich UI, responsive design and smooth user interaction.",
    tech: ["React", "CSS", "JavaScript"],
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Runner",
    desc: "Dynamic application with real-time data handling, performance optimization and responsive UI.",
    tech: ["React", "API", "Tailwind"],
    accent: "from-pink-500 to-orange-500",
  },
  {
    title: "Medvita",
    desc: "Healthcare-based web application with clean UI, structured data handling and user-friendly interface.",
    tech: ["React", "TypeScript", "API"],
    accent: "from-blue-500 to-indigo-500",
  },
];

const Projects = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-center tracking-tighter"
          >
            Selected <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-[2px] bg-cyan-400"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-3xl glass-card overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.accent} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />
              
              <div className="relative z-10">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-2 block">
                  Project {index + 1}
                </span>
                
                <h3 className="text-white text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-sm">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-gray-300 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-4 rounded-2xl bg-white text-black font-bold tracking-tight hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    View Project
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-4 rounded-2xl border border-white/10 text-white font-bold tracking-tight hover:bg-white/5 backdrop-blur-md"
                  >
                    Source Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
