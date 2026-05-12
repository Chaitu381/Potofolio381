import { motion } from "framer-motion";

type Variant =
  | "hero"
  | "about"
  | "skills"
  | "education"
  | "experience"
  | "projects"
  | "contact";

type Props = {
  variant?: Variant;
};

export default function SpaceBackground({ variant = "about" }: Props) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <BaseSpace />

      <Stars
        intensity={
          variant === "hero"
            ? 0.48
            : variant === "contact"
            ? 0.58
            : 0.4
        }
      />

      {variant === "hero" && <HeroMoonScene />}
      {variant === "about" && <AboutSaturnScene />}
      {variant === "skills" && <SkillsOrbitScene />}
      {variant === "education" && <EducationCometScene />}
      {variant === "experience" && <ExperienceTimelineScene />}
      {variant === "projects" && <ProjectsAsteroidScene />}
      {variant === "contact" && <ContactNebulaScene />}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.56)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#02040a] to-transparent" />
      <div className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-[#02040a]/70 to-transparent" />
    </div>
  );
}

/* ---------------- BASE ---------------- */

function BaseSpace() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#02040a_0%,#070b14_45%,#03050a_100%)]" />

      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:72px_72px]" />
    </>
  );
}

function Stars({ intensity }: { intensity: number }) {
  return (
    <>
      <motion.div
        animate={{ opacity: [intensity * 0.65, intensity, intensity * 0.65] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.95) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <motion.div
        animate={{
          y: [0, -24, 0],
          opacity: [intensity * 0.35, intensity * 0.7, intensity * 0.35],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(96,165,250,0.95) 1px, transparent 1px)",
          backgroundSize: "82px 82px",
          backgroundPosition: "25px 35px",
        }}
      />

      <motion.div
        animate={{ x: [0, 28, 0], opacity: [0.12, 0.28, 0.12] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(216,180,254,0.9) 1px, transparent 1px)",
          backgroundSize: "128px 128px",
          backgroundPosition: "70px 20px",
        }}
      />
    </>
  );
}

/* ---------------- HERO ---------------- */

function HeroMoonScene() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.26),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(148,163,184,0.18),transparent_30%)]" />

      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[7%] top-[12%] h-80 w-80 rounded-full opacity-40 blur-[1px]"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #f8fafc, #9ca3af 42%, #374151 65%, transparent 70%)",
          boxShadow: "0 0 100px rgba(147,197,253,0.25)",
        }}
      />

      <FloatingRock className="left-[8%] top-[24%] h-3 w-24" duration={14} />
      <FloatingRock className="bottom-[25%] right-[20%] h-2 w-20" duration={16} />
    </>
  );
}

/* ---------------- ABOUT ---------------- */

function AboutSaturnScene() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_78%_45%,rgba(168,85,247,0.24),transparent_36%)]" />

      <div className="absolute right-[2%] top-[10%] h-[540px] w-[540px] rounded-full bg-violet-500/14 blur-[95px]" />

      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5%] top-[9%] h-[330px] w-[330px] rounded-full opacity-75"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #f8fafc 0%, #cbd5e1 20%, #64748b 48%, #1e293b 73%, transparent 76%)",
          boxShadow: "0 0 95px rgba(147,197,253,0.32)",
        }}
      >
        <div className="absolute left-[-42%] top-[47%] h-12 w-[185%] -rotate-12 rounded-full border border-blue-200/45" />
        <div className="absolute left-[-36%] top-[50%] h-7 w-[170%] -rotate-12 rounded-full border border-violet-300/35" />
        <div className="absolute left-[-48%] top-[45%] h-16 w-[195%] -rotate-12 rounded-full border border-white/10" />
      </motion.div>

      <Particles count={16} color="bg-blue-200/65" />
    </>
  );
}

/* ---------------- SKILLS ---------------- */

function SkillsOrbitScene() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_78%_25%,rgba(59,130,246,0.24),transparent_34%),radial-gradient(circle_at_50%_85%,rgba(168,85,247,0.18),transparent_36%)]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute left-[50%] top-[48%] h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
        className="absolute left-[50%] top-[48%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20"
      />

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.58, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[35%] top-[25%] h-[420px] w-[420px] rounded-full bg-cyan-400/18 blur-[120px]"
      />

      <Particles count={22} color="bg-cyan-200/70" />
    </>
  );
}

/* ---------------- EDUCATION ---------------- */

function EducationCometScene() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_70%_50%,rgba(20,184,166,0.16),transparent_34%)]" />

      <Comet className="right-[10%] top-[16%] h-2 w-56" duration={18} />
      <Comet className="left-[12%] bottom-[24%] h-1.5 w-40" duration={14} />

      <motion.div
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:60px_60px]"
      />
    </>
  );
}

/* ---------------- EXPERIENCE ---------------- */

function ExperienceTimelineScene() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_82%_65%,rgba(14,165,233,0.18),transparent_36%),radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.16),transparent_38%)]" />

      <motion.div
        animate={{ height: ["20%", "72%", "20%"], opacity: [0.22, 0.55, 0.22] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[18%] top-[14%] w-px bg-gradient-to-b from-transparent via-blue-300/70 to-transparent"
      />

      <motion.div
        animate={{ x: [0, 22, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] h-[520px] w-[520px] rounded-full bg-blue-500/16 blur-[130px]"
      />

      <motion.div
        animate={{ x: [0, -22, 0], opacity: [0.24, 0.55, 0.24] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[4%] bottom-[6%] h-[560px] w-[560px] rounded-full bg-indigo-500/16 blur-[140px]"
      />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0.9, 0.3] }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-2 w-2 rounded-full bg-blue-200/80 shadow-[0_0_20px_rgba(147,197,253,0.7)]"
          style={{
            left: `${18 + i * 10}%`,
            top: `${22 + (i % 3) * 18}%`,
          }}
        />
      ))}
    </>
  );
}

/* ---------------- PROJECTS ---------------- */

function ProjectsAsteroidScene() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.24),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.22),transparent_34%)]" />

      <FloatingRock className="left-[8%] top-[18%] h-3 w-24 rotate-12" duration={10} />
      <FloatingRock className="right-[10%] top-[22%] h-2 w-20 -rotate-12" duration={12} />
      <FloatingRock className="left-[24%] bottom-[24%] h-2 w-16 rotate-45" duration={14} />
      <FloatingRock className="right-[18%] bottom-[26%] h-3 w-28 -rotate-45" duration={16} />

      <svg className="absolute inset-0 h-full w-full opacity-25">
        <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#60a5fa" />
        <line x1="50%" y1="50%" x2="80%" y2="35%" stroke="#8b5cf6" />
        <line x1="50%" y1="50%" x2="70%" y2="75%" stroke="#38bdf8" />
      </svg>
    </>
  );
}

/* ---------------- CONTACT ---------------- */

function ContactNebulaScene() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(59,130,246,0.38),transparent_34%),radial-gradient(circle_at_82%_30%,rgba(168,85,247,0.34),transparent_35%),radial-gradient(circle_at_50%_85%,rgba(34,211,238,0.22),transparent_38%)]" />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 22, 0],
          y: [0, -18, 0],
          opacity: [0.52, 0.85, 0.52],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-[2%] h-[680px] w-[680px] rounded-full bg-blue-500/30 blur-[125px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.14, 1],
          x: [0, -28, 0],
          y: [0, 24, 0],
          opacity: [0.45, 0.78, 0.45],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-12%] bottom-[-8%] h-[720px] w-[720px] rounded-full bg-violet-500/30 blur-[145px]"
      />

      <Comet className="right-[12%] top-[12%] h-1.5 w-56" duration={16} />
      <Comet className="left-[10%] bottom-[24%] h-1 w-44" duration={20} />

      <Particles count={22} color="bg-blue-200/75" />
    </>
  );
}

/* ---------------- HELPERS ---------------- */

function FloatingRock({
  className,
  duration,
}: {
  className: string;
  duration: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, 22, 0], x: [0, 12, 0], rotate: [0, 6, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute rounded-full bg-white/20 blur-sm ${className}`}
    />
  );
}

function Comet({ className, duration }: { className: string; duration: number }) {
  return (
    <motion.div
      animate={{ x: [-180, 80, -180], y: [0, 95, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute -rotate-45 rounded-full bg-gradient-to-r from-transparent via-cyan-200/70 to-white/95 blur-[1px] ${className}`}
    />
  );
}

function Particles({
  count,
  color,
}: {
  count: number;
  color: string;
}) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -26, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [1, 1.7, 1],
          }}
          transition={{
            duration: 3.5 + i * 0.16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute h-1.5 w-1.5 rounded-full ${color}`}
          style={{
            left: `${7 + i * 4.2}%`,
            top: `${16 + (i % 7) * 10}%`,
          }}
        />
      ))}
    </>
  );
} 