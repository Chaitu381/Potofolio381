import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="card-surface rounded-2xl p-10 md:p-16 text-center relative overflow-hidden gradient-border"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(280,80%,60%)]/5 pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-[hsl(280,80%,60%)]/20 flex items-center justify-center mx-auto mb-6"
            >
              <FileText className="w-8 h-8 text-foreground" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
            >
              Want the full picture?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-secondary max-w-md mx-auto mb-8"
            >
              Download my resume for a complete overview of education, skills, projects, and experience.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              href="#"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px hsl(217 91% 60% / 0.35), 0 0 60px hsl(280 80% 60% / 0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-sm bg-gradient-to-r from-primary to-[hsl(280,80%,60%)] text-primary-foreground animate-[pulse_3s_ease-in-out_infinite]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
