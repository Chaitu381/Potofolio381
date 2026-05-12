import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Flask", icon: "🧪" },
  { name: "Firebase", icon: "🔥" },
  { name: "Node.js", icon: "🟢" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "Linux", icon: "🐧" },
  { name: "Raspberry Pi", icon: "🫐" },
  { name: "OpenCV", icon: "👁️" },
  { name: "Scikit-Learn", icon: "🤖" },
  { name: "Pandas", icon: "🐼" },
  { name: "Next.js", icon: "▲" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.65,
    y: 30,
    filter: "blur(12px)",
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SkillsVisual = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#030712] px-6 py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[#030712]">
        {/* Strong base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.35),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_85%_55%,rgba(168,85,247,0.22),transparent_30%)]" />

        {/* Visible grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:58px_58px] opacity-35" />

        {/* Top shine */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-500/20 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
            Technical Stack
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Tools I Work With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">
            Technologies I use to build scalable products, AI systems,
            backend architectures, and interactive user experiences.
          </p>
        </motion.div>

        {/* SKILL GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                p-4
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-400/30
                hover:bg-white/[0.08]
                hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]
                aspect-square
                flex
                flex-col
                items-center
                justify-center
                gap-3
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-blue-400/20 blur-2xl" />
              </div>

              {/* Icon */}
              <div className="relative z-10 text-3xl transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              {/* Label */}
              <span className="relative z-10 text-center text-[11px] font-medium tracking-wide text-slate-300 group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

          <p className="mt-6 text-sm text-slate-500">
            Full-stack engineering • AI systems • IoT • Scalable backend
            development
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsVisual;