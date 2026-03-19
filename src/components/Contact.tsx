import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-40 px-6 relative">
      <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
        {/* 🎆 Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-purple-500/5 -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Let's Start a <br />
            <span className="text-gradient">Conversation</span>
          </h2>
          
          <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's build something extraordinary together.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 rounded-full bg-white text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Get In Touch
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-md transition-all duration-300"
            >
              View Resume
            </motion.button>
          </div>

          <div className="mt-20 flex justify-center gap-10">
            {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
              <a 
                key={platform}
                href="#" 
                className="text-gray-500 hover:text-cyan-400 font-medium tracking-widest uppercase text-xs transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="mt-20 text-center text-gray-600 text-sm">
        <p>© 2024 Divya. Built with passion and code.</p>
      </footer>
    </section>
  );
};

export default Contact;
