import { useEffect, useState } from "react";
import SpaceBackground from "@/components/SpaceBackground";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  Download,
  ChevronDown,
  Play,
  Sparkles,
  Cpu,
  Eye,
  Building2,
  Hand,
  Car,
} from "lucide-react";

const roles = [
  "Full-Stack Product Developer",
  "Spring Boot & Java Engineer",
  "Python AI Systems Developer",
  "Frontend Application Developer",
  "IoT & Embedded Systems Engineer",
  "Computer Vision Engineer",
];

const headlineWords = [
  "I",
  "build",
  "intelligent",
  "systems,",
  "not",
  "just",
  "applications.",
];

const projects = [
  {
    title: "BeThere",
    subtitle: "AI Facial Attendance System",
    video: "/videos/BeThere.mp4",
    icon: Eye,
    tag: "Computer Vision",
    metric: "CCTV + AI Attendance",
  },
  {
    title: "StayOps",
    subtitle: "PG / Hostel Management SaaS",
    video: "/videos/StayOps.mp4",
    icon: Building2,
    tag: "Full-Stack SaaS",
    metric: "Rooms • Beds • Payments",
  },
  {
    title: "Sign Language",
    subtitle: "Gesture Recognition System",
    video: "/videos/Sign_Language.mp4",
    icon: Hand,
    tag: "AI Accessibility",
    metric: "Real-time Gesture Detection",
  },
  {
    title: "Driver Drowsiness",
    subtitle: "Road Safety Detection System",
    video: "/videos/driver-drowsiness.mp4",
    icon: Car,
    tag: "AI Safety",
    metric: "Eye Blink • Alert System",
  },
];

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.45 + i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const Hero = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const heroY = useTransform(scrollY, [0, 450], [0, 90]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    const projectTimer = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projects.length);
    }, 9000);

    return () => {
      clearInterval(roleTimer);
      clearInterval(projectTimer);
    };
  }, []);

  const activeProject = projects[projectIndex];
  const ActiveIcon = activeProject.icon;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08090d] px-6 text-white">
      {/* Space background */}
      <SpaceBackground variant="hero" />
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-14 py-24 lg:grid-cols-[1fr_0.9fr]"
      >
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-300 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
            Open to Opportunities
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.p
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.45 }}
              className="mb-5 text-base font-light text-slate-300 md:text-xl"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mb-7 text-5xl font-bold tracking-[-0.06em] text-white md:text-7xl lg:text-8xl"
          >
            Pilla Chaitanya
          </motion.h1>

          <div className="mb-6 flex max-w-3xl flex-wrap justify-center gap-x-3 gap-y-2 text-3xl font-light leading-tight tracking-[-0.04em] text-slate-300 md:text-5xl lg:justify-start lg:text-6xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word + i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className={
                  word === "intelligent" || word === "systems,"
                    ? "bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text font-semibold text-transparent"
                    : ""
                }
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.45 }}
            className="mx-auto mb-10 max-w-xl text-sm leading-7 text-slate-400 md:text-base lg:mx-0"
          >
            Bridging software and hardware through AI, IoT, and full-stack
            engineering to create real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.65 }}
            className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:scale-[1.03]"
            >
              Explore Portfolio
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-1" />
            </a>

            <a
              href="https://drive.google.com/file/d/1cyhF2golaOWp8anN3QmT-zMX_4hleUlP/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.1]"
            >
              <Download className="h-4 w-4" />
              View Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.85 }}
            className="mt-10 grid grid-cols-3 gap-3 text-left sm:max-w-md"
          >
            {[
              {
                value: "Spring Boot",
                label: "Scalable Backend Systems",
              },
              {
                value: "Computer Vision",
                label: "AI Recognition Pipelines",
              },
              {
                value: "Full Product Build",
                label: "UI • Backend • Deploy",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <p className="text-lg font-bold text-white">
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Project Video Showcase */}
        <div className="relative">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto max-w-xl"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-slate-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1117]/80 p-3 shadow-2xl backdrop-blur-2xl">
              <div className="mb-3 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.title}
                  initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
                  transition={{ duration: 0.55 }}
                  className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black"
                >
                  <video
                    src={activeProject.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="aspect-[16/10] w-full object-cover opacity-90"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-xs text-slate-200 backdrop-blur-xl">
                    <ActiveIcon className="h-4 w-4 text-blue-300" />
                    {activeProject.tag}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                      {activeProject.metric}
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      {activeProject.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-300">
                      {activeProject.subtitle}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {projects.map((project, i) => {
                  const Icon = project.icon;
                  const active = i === projectIndex;

                  return (
                    <button
                      key={project.title}
                      onClick={() => setProjectIndex(i)}
                      className={`rounded-2xl border p-3 text-left transition ${
                        active
                          ? "border-blue-400/40 bg-blue-400/10"
                          : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                      }`}
                    >
                      <Icon
                        className={`mb-2 h-4 w-4 ${
                          active ? "text-blue-300" : "text-slate-500"
                        }`}
                      />
                      <p
                        className={`truncate text-xs font-semibold ${
                          active ? "text-white" : "text-slate-400"
                        }`}
                      >
                        {project.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-slate-500" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08090d] to-transparent" />
    </section>
  );
};

export default Hero;