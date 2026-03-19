import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Bridging Design & <span className="text-gradient">Function</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-10 rounded-3xl relative"
        >
          <p className="text-gray-400 text-xl leading-relaxed mb-6">
            I am a frontend developer focused on building
            <span className="text-white font-medium"> scalable, responsive</span> and
            high-performance web applications.
          </p>
          <p className="text-gray-400 text-xl leading-relaxed">
            I work with modern technologies to create
            <span className="text-cyan-400 italic"> clean interfaces</span>, integrate
            complex APIs and deliver seamless user experiences that leave a lasting impression.
          </p>

          <div className="mt-10 flex gap-8">
            <div>
              <p className="text-3xl font-bold text-white">2</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Years Exp</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
