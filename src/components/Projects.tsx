import { motion } from "framer-motion";

const projects = [
  {
    title: "Hireute",
    desc: "A comprehensive job platform built for scale. Featuring advanced filtering, real-time application tracking, and an intuitive dashboard for both recruiters and job seekers.",
    tech: ["React", "TypeScript", "Tailwind", "Node.js"],
    accent: "from-cyan-500 to-blue-600",
    index: "01"
  },
  {
    title: "Rangin Mashora",
    desc: "A high-end creative storytelling platform. Focused on immersive user interactions, custom animations, and a visually stunning design system that breaks the browser's limits.",
    tech: ["React", "Framer Motion", "GSAP"],
    accent: "from-purple-500 to-pink-500",
    index: "02"
  },
  {
    title: "Runner",
    desc: "Performance-centric data visualization engine. Handling real-time analytics with sub-second latency and providing actionable insights through a custom-built charting library.",
    tech: ["TypeScript", "D3.js", "Zustand"],
    accent: "from-pink-500 to-orange-500",
    index: "03"
  },
  {
    title: "Medvita",
    desc: "Next-generation healthcare management suite. Simplifying complex patient data workflows with a focus on security, accessibility, and surgical precision in UI/UX.",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    accent: "from-blue-500 to-indigo-500",
    index: "04"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🏷️ Section Header */}
        <div className="mb-24 md:mb-40">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold text-white tracking-tighter"
          >
            SELECTED <span className="text-gradient">WORK</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-lg md:text-xl mt-4 font-light tracking-wide"
          >
            A collection of engineering-heavy solutions and creative experiments.
          </motion.p>
        </div>

        {/* 🍱 Projects List */}
        <div className="flex flex-col gap-32 md:gap-64">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center group"
            >
              {/* 📷 Visual Side */}
              <div className={`${index % 2 === 1 ? 'lg:order-last' : ''} relative`}>
                <motion.div 
                  whileHover={{ scale: 0.98 }}
                  className={`aspect-[16/10] rounded-[2rem] bg-gradient-to-br ${project.accent} relative overflow-hidden glass border border-white/10 shadow-2xl`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                  
                  {/* Abstract UI Elements inside "image" */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[70%] h-[70%] glass-card rounded-2xl flex flex-col p-6 gap-3">
                      <div className="w-full h-4 bg-white/10 rounded-full" />
                      <div className="w-2/3 h-4 bg-white/10 rounded-full" />
                      <div className="mt-auto flex gap-2">
                        <div className="w-12 h-12 rounded-full bg-white/20" />
                        <div className="w-12 h-12 rounded-full bg-white/20" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Float Number */}
                <span className="absolute -top-12 -left-8 text-[10rem] md:text-[14rem] font-bold text-white/5 select-none pointer-events-none tracking-tighter italic">
                  {project.index}
                </span>
              </div>

              {/* 📝 Text Side */}
              <div className="flex flex-col space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="h-[1px] w-12 bg-gray-600" />
                    <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">Case Study</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-lg md:text-2xl leading-relaxed max-w-xl font-light">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-gray-400 text-xs md:text-sm font-medium backdrop-blur-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8 pt-6">
                  <a 
                    href="#" 
                    className="text-white font-bold text-lg border-b-2 border-cyan-400/50 hover:border-cyan-400 transition-all pb-1 group-hover:px-2"
                  >
                    Explore Details
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 font-medium hover:text-white transition-colors"
                  >
                    View Source
                  </a>
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
