import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Briefcase, TrendingUp, ArrowUpRight, MapPin, X } from "lucide-react";

const experiences = [
  {
    type: "Internship",
    title: "Developer Trainee",
    org: "Source Integreta",
    periodStart: "Sep 2025",
    periodEnd: "Dec 2025",
    location: "Noida International Airport",
    description:
      "Worked on the Smart Trolley system project, developing and integrating hardware and software components, ensuring seamless interaction between sensors, microcontrollers, and cloud systems.",
    highlights: [
      "Developed and integrated Smart Trolley system components, implementing core logic in Python for data handling and system-level operations.",
      "Designed and implemented an Android application in Kotlin/Android Studio for real-time interaction with sensors and displaying system data.",
      "Researched, evaluated, and selected sensors based on accuracy, communication protocols, and operational range requirements.",
      "Implemented reliable networking workflows for communication between multiple system components using IoT protocols.",
      "Integrated cloud storage pipelines for storing, retrieving, and analyzing sensor data remotely.",
      "Created detailed documentation covering system architecture, integration processes, and design considerations for maintainability.",
      "Conducted testing and validation of hardware-software interactions, debugging real-time sensor anomalies, and optimizing performance.",
    ],
    techStack: ["Python", "Kotlin", "Android Studio", "Sensors", "Microcontrollers", "Networking", "Cloud"],
    icon: Briefcase,
    gradient: "from-blue-500 to-cyan-400",
    certificate: {
      title: "Smart Trolley System Project Completion",
      image: "/Experience Letter.jpg",
      link: "https://drive.google.com/file/d/1sdzpGwsWih0OITQ59eSSFEX2SkpAouUM/view?usp=sharing",
    },
  },
  {
    type: "Project",
    title: "Blast Furnace Prediction",
    org: "Steel Plant RINL",
    periodStart: "Jul 2024",
    periodEnd: "Sep 2024",
    location: "Visakhapatnam",
    description:
      "Developed machine learning models to predict critical blast furnace outputs every 30 minutes, enabling real-time monitoring and performance optimization.",
    highlights: [
      "Implemented Transformer-based, CNN+LSTM, and XGBoost models to predict outputs like iron, carbon, manganese, chromium, silicon, copper, molybdenum, and tungsten.",
      "Visualized model predictions using Matplotlib for actionable insights.",
      "Enhanced furnace efficiency and product quality by providing predictive analytics for process adjustments.",
      "Analyzed historical furnace data to train and validate ML models.",
      "Produced detailed reports and dashboards for plant engineers to track key performance indicators.",
      "Optimized model performance for real-time deployment on production systems.",
    ],
    techStack: ["Python", "TensorFlow", "XGBoost", "Matplotlib", "Machine Learning", "Time-Series Prediction"],
    icon: TrendingUp,
    gradient: "from-orange-500 to-red-500",
    certificate: {
      title: "Blast Furnace Prediction Certificate",
      image: "/certificate-placeholder.jpg",
      link: "https://your-certificate-link.com",
    },
  },
  {
    type: "Internship",
    title: "Space Forecasting Intern",
    org: "Teachnook",
    periodStart: "Jun 2023",
    periodEnd: "Jul 2023",
    location: "Greater Noida",
    description:
      "Worked on a WiFi-controlled robotic car with autonomous navigation and environment mapping capabilities.",
    highlights: [
      "Developed a robotic car using ESP32, ultrasonic sensors, and L298N motor driver for obstacle detection and autonomous navigation.",
      "Implemented remote control functionality via smartphone for real-time manual navigation.",
      "Integrated MPU6050 and LIDAR sensors for precise spatial awareness and stabilization.",
      "Created a digital room mapping system to visualize the environment using SLAM algorithms.",
      "Calibrated sensors and optimized navigation algorithms for smooth operation and collision avoidance.",
      "Tested and debugged hardware-software interaction to ensure reliable performance.",
    ],
    techStack: ["ESP32", "Ultrasonic Sensors", "L298N", "MPU6050", "LIDAR", "SLAM", "WiFi", "Robotics"],
    icon: Briefcase,
    gradient: "from-emerald-500 to-teal-400",
    certificate: {
      title: "Space Forecasting Internship Completion",
      image: "/TEACHNOOK(Certificate).jpg",
      link: "https://drive.google.com/file/d/1NL6sS9e5x8lhl-ceysNRlus1TtW2gDTU/view?usp=sharing",
    },
  },
];

function ExperienceCard({ exp, index, setActiveIndex, setSelectedCert }: any) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 65%", "end 45%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.85, 1], [0.45, 1, 1, 0.45]);
  const y = useTransform(scrollYProgress, [0, 0.25, 1], [28, 0, -18]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.15 && latest < 0.9) setActiveIndex(index);
  });

  const Icon = exp.icon;

  return (
    <article ref={cardRef} className="pb-10">
      <motion.div
        style={{ opacity, y }}
        className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07111f]/85 p-5 shadow-2xl backdrop-blur-2xl md:p-7"
      >
        <div className={`absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${exp.gradient} opacity-20 blur-3xl`} />

        <div className="relative z-10">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${exp.gradient}`}>
                <Icon className="h-7 w-7 text-white" />
              </div>

              <div>
                <span className="mb-2 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                  {exp.type}
                </span>

                <h3 className="text-2xl font-bold text-foreground md:text-4xl">
                  {exp.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-secondary md:text-base">
                  {exp.org}
                </p>
              </div>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs text-secondary md:text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              {exp.location}
            </div>
          </div>

          <p className="mb-5 text-sm leading-7 text-secondary md:text-base">
            {exp.description}
          </p>

          <div className="mb-5 grid gap-3">
            {exp.highlights.map((item: string, i: number) => (
              <div
                key={i}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-secondary"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {exp.techStack.map((tech: string, i: number) => (
              <span
                key={i}
                className="rounded-xl border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          {exp.certificate && (
            <button
              onClick={() => setSelectedCert(exp.certificate)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-foreground hover:text-primary"
            >
              View Certificate
              <ArrowUpRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </motion.div>
    </article>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative bg-background px-5 py-20 md:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[35%] h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <header className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.35em] text-primary">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Experience built through{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              real execution
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:h-[calc(100vh-7rem)]">
            <div className="relative h-full">
              <div className="absolute left-[135px] top-0 h-full w-[4px] rounded-full bg-white/10" />

              <motion.div
                style={{ height: lineHeight }}
                className="absolute left-[135px] top-0 z-10 w-[4px] rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_30px_rgba(59,130,246,0.9)]"
              />

              <div className="relative flex h-full flex-col justify-between py-3">
                {experiences.map((exp, index) => {
                  const active = activeIndex === index;

                  return (
                    <motion.div
                      key={index}
                      animate={{
                        opacity: active ? 1 : 0.35,
                        scale: active ? 1 : 0.94,
                      }}
                      transition={{ duration: 0.35 }}
                      className="relative flex items-center"
                    >
                      <motion.div
                        animate={{ scale: active ? 1.3 : 1 }}
                        className={`absolute left-[124px] z-20 h-7 w-7 rounded-full border-[5px] ${
                          active
                            ? "border-background bg-cyan-400 shadow-[0_0_35px_rgba(34,211,238,1)]"
                            : "border-background bg-white/35"
                        }`}
                      />

                      <div
                        className={`w-[115px] rounded-2xl border px-3 py-3 text-right transition-all ${
                          active
                            ? "border-cyan-400/40 bg-cyan-500/10"
                            : "border-white/10 bg-white/[0.035]"
                        }`}
                      >
                        <p className={`text-sm font-bold ${active ? "text-cyan-300" : "text-white/50"}`}>
                          {exp.periodStart}
                        </p>

                        <div className="my-2 h-px w-full bg-white/10" />

                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                          to
                        </p>

                        <p className={`mt-2 text-sm font-bold ${active ? "text-white" : "text-white/50"}`}>
                          {exp.periodEnd}
                        </p>
                      </div>

                      <div className="ml-12 max-w-[130px]">
                        <p className={`text-sm font-bold leading-5 ${active ? "text-white" : "text-white/40"}`}>
                          {exp.title}
                        </p>
                        <p className={`mt-1 text-xs ${active ? "text-cyan-300" : "text-white/30"}`}>
                          {exp.org}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </aside>

          <main className="min-w-0">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                exp={exp}
                index={index}
                setActiveIndex={setActiveIndex}
                setSelectedCert={setSelectedCert}
              />
            ))}
          </main>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-[2rem] border border-white/10 bg-[#07111f] p-5 shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 p-2 text-white/70 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="mb-5 pr-12 text-xl font-bold text-foreground md:text-2xl">
                {selectedCert.title}
              </h3>

              <div className="flex h-[55vh] items-center justify-center rounded-3xl border border-white/10 bg-black/30 p-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-full max-w-full rounded-xl object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}