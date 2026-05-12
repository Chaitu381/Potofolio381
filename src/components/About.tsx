import { motion, useInView, AnimatePresence } from "framer-motion";
import SpaceBackground from "@/components/SpaceBackground";
import {
  Cpu,
  Brain,
  Wifi,
  ArrowUpRight,
  Presentation,
  Award,
  X,
  Database,
  Server,
  Monitor,
  Layers,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "19+", label: "Projects Built" },
  { value: "98%", label: "Recognition Accuracy" },
  { value: "40%", label: "Energy Reduction" },
];

const proofImages = [
  {
    title: "Project Showcase",
    image: "/showcase.jpeg",
    icon: Presentation,
    desc: "Real-world project demonstration with working systems and technical presentation.",
  },
  {
    title: "Engineering Demo",
    image: "/Chaitu_Pic.jpg",
    icon: Cpu,
    desc: "Hands-on implementation of software, hardware, AI, and automation systems.",
  },
  {
    title: "Achievement",
    image: "/achievement.jpg",
    icon: Award,
    desc: "Certifications, recognition, and proof of continuous technical learning.",
  },
];

const skillClusters = [
  {
    title: "Backend Engineering",
    icon: Server,
    skills: ["Java", "Python", "SQL", "PLSQL", "Firebase", "Flask"],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: ["React", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind"],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    skills: [
      "DeepFace",
      "Scikit-Learn",
      "ESRGAN",
      "CodeFormer",
      "OpenCV",
      "Pandas",
      "TensorFlow",
    ],
  },
  {
    title: "IoT & Robotics",
    icon: Wifi,
    skills: [
      "IoT",
      "Raspberry Pi",
      "Sensors",
      "ESP8266",
      "Arduino",
      "Networking",
    ],
  },
  {
    title: "Core CS",
    icon: Database,
    skills: ["DBMS", "Operating System", "Computer Networks", "DSA"],
  },
  {
    title: "Product Building",
    icon: Layers,
    skills: ["SaaS", "Dashboards", "Automation", "System Design"],
  },
];

const skillProjectsMap: Record<
  string,
  { title: string; subtitle: string; desc: string; tags: string[] }[]
> = {
  Python: [
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "Computer-vision based attendance system using face detection, enhancement, and verification.",
      tags: ["AI/ML", "OpenCV", "DeepFace"],
    },
    {
      title: "Driver Drowsiness Detection System",
      subtitle: "AI-based Fatigue Monitoring",
      desc: "Real-time driver monitoring system for detecting fatigue and alerting users.",
      tags: ["OpenCV", "Face Detection", "Safety AI"],
    },
    {
      title: "Sign Language Recognition System",
      subtitle: "AI-based Gesture Recognition",
      desc: "Gesture recognition system for identifying sign language inputs using computer vision.",
      tags: ["TensorFlow", "OpenCV", "Gesture AI"],
    },
  ],
  Flask:[
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "Computer-vision based attendance system using face detection, enhancement, and verification.",
      tags: ["AI/ML", "OpenCV", "DeepFace"],
    },
  ],
  Java: [
    {
      title: "StayOps",
      subtitle: "PG / Hostel Management Platform",
      desc: "Role-based hostel management product with student, room, bed, and payment workflows.",
      tags: ["Spring Boot", "Backend", "RBAC"],
    },
  ],

  SQL: [
    {
      title: "StayOps",
      subtitle: "PG / Hostel Management Platform",
      desc: "Database-backed PG management system with structured room, bed, and student data.",
      tags: ["PostgreSQL", "Schema Design", "Data"],
    },
  ],

  PLSQL: [
    {
      title: "StayOps",
      subtitle: "PG / Hostel Management Platform",
      desc: "Database-backed PG management system with structured room, bed, and student data.",
      tags: ["PostgreSQL", "Schema Design", "Data"],
    },
  ],

  Firebase: [
    {
      title: "Slot Booking Platform",
      subtitle: "Real-time Booking Web App",
      desc: "Realtime slot booking platform with synchronized reservation updates.",
      tags: ["Firebase", "Realtime DB", "Booking"],
    },
    {
      title: "Temp_Humi_Firebase",
      subtitle: "IoT Temperature & Humidity Monitoring",
      desc: "IoT sensor monitoring project with Firebase cloud integration.",
      tags: ["IoT", "Firebase", "Cloud"],
    },
  ],

  HTML: [
    {
      title: "Personal Portfolio Website",
      subtitle: "Developer Portfolio & Project Showcase",
      desc: "Personal portfolio built using HTML, CSS, and JavaScript.",
      tags: ["Frontend", "Portfolio", "Responsive"],
    },
    {
      title: "KT Vision Technologies Website",
      subtitle: "Corporate Training & Career Platform",
      desc: "Company website designed for KT Vision Technologies using frontend technologies.",
      tags: ["Frontend", "Corporate UI", "Website"],
    },
  ],

  CSS: [
    {
      title: "Personal Portfolio Website",
      subtitle: "Developer Portfolio & Project Showcase",
      desc: "Responsive frontend portfolio with visual hierarchy and clean layout.",
      tags: ["UI Design", "Responsive", "Frontend"],
    },
    {
      title: "KT Vision Technologies Website",
      subtitle: "Corporate Training & Career Platform",
      desc: "Professional company website with clean sections and modern styling.",
      tags: ["Web Design", "CSS", "Brand UI"],
    },
  ],

  JavaScript: [
    {
      title: "Personal Portfolio Website",
      subtitle: "Developer Portfolio & Project Showcase",
      desc: "Interactive personal portfolio built with HTML, CSS, and JavaScript.",
      tags: ["Frontend", "Interaction", "Portfolio"],
    },
    {
      title: "Code Connect",
      subtitle: "Real-time Collaborative Coding Platform",
      desc: "Collaborative coding platform with real-time code sharing and communication.",
      tags: ["Socket.IO", "Node.js", "Realtime"],
    },
  ],

  React: [
    {
      title: "StayOps",
      subtitle: "PG / Hostel Management Platform",
      desc: "Full-stack PG management platform with clean role-based frontend workflows.",
      tags: ["React", "Tailwind", "SaaS"],
    },
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "AI attendance product frontend connected with facial attendance workflows.",
      tags: ["React", "AI", "Dashboard"],
    },
    {
      title: "Slot Booking Platform",
      subtitle: "Real-time Booking Web App",
      desc: "Responsive booking interface with live data updates.",
      tags: ["React", "Firebase", "UI"],
    },
  ],

  Tailwind: [
    {
      title: "StayOps",
      subtitle: "PG / Hostel Management Platform",
      desc: "Modern PG management interface built with a clean Tailwind-based UI.",
      tags: ["Tailwind", "Dashboard", "UI"],
    },
  ],

  DeepFace: [
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "Face verification pipeline for identifying students from classroom images.",
      tags: ["DeepFace", "Verification", "AI"],
    },
  ],

  ESRGAN: [
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "Image enhancement pipeline for improving low-resolution classroom face crops.",
      tags: ["ESRGAN", "Enhancement", "CV"],
    },
  ],

  CodeFormer: [
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "Face restoration pipeline used after enhancement for better recognition quality.",
      tags: ["CodeFormer", "Restoration", "AI"],
    },
  ],
  Pandas:[
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "Computer-vision based attendance system using face detection, enhancement, and verification.",
      tags: ["AI/ML", "OpenCV", "DeepFace"],
    },
  ],
  Networking:[
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "Computer-vision based attendance system using face detection, enhancement, and verification.",
      tags: ["AI/ML", "OpenCV", "DeepFace"],
    },
    {
      title: "Smart Lighting System",
      subtitle: "IoT Energy Automation",
      desc: "Smart lighting automation using sensors, camera input, and Raspberry Pi.",
      tags: ["IoT", "Automation", "Sensors"],
    },
    {
      title: "Object Avoiding WiFi Car",
      subtitle: "IoT-based Space Measurement Robot",
      desc: "WiFi-controlled robot for obstacle avoidance and empty-space dimension measurement.",
      tags: ["Robotics", "WiFi", "Sensors"],
    },
    {
      title: "Temp_Humi_Firebase",
      subtitle: "IoT Temperature & Humidity Monitoring",
      desc: "Sensor-based environment monitoring system with Firebase cloud storage.",
      tags: ["ESP8266", "Firebase", "DHT11"],
    },
  ],

  OpenCV: [
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "Computer vision pipeline for face processing and attendance automation.",
      tags: ["OpenCV", "Face AI", "Vision"],
    },
    {
      title: "Driver Drowsiness Detection System",
      subtitle: "AI-based Fatigue Monitoring",
      desc: "Real-time vision system for detecting drowsiness through facial behavior.",
      tags: ["OpenCV", "Monitoring", "Safety"],
    },
    {
      title: "Sign Language Recognition System",
      subtitle: "AI-based Gesture Recognition",
      desc: "Gesture recognition workflow using camera-based hand movement processing.",
      tags: ["OpenCV", "Gesture", "Accessibility"],
    },
  ],

  TensorFlow: [
    {
      title: "Sign Language Recognition System",
      subtitle: "AI-based Gesture Recognition",
      desc: "Deep learning based gesture recognition for sign language interpretation.",
      tags: ["TensorFlow", "AI/ML", "Gesture"],
    },
    {
      title: "Driver Drowsiness Detection System",
      subtitle: "AI-based Fatigue Monitoring",
      desc: "Fatigue monitoring system using AI-based visual detection.",
      tags: ["TensorFlow", "Detection", "Safety AI"],
    },
  ],

  IoT: [
    {
      title: "Smart Lighting System",
      subtitle: "IoT Energy Automation",
      desc: "Smart lighting automation using sensors, camera input, and Raspberry Pi.",
      tags: ["IoT", "Automation", "Sensors"],
    },
    {
      title: "Object Avoiding WiFi Car",
      subtitle: "IoT-based Space Measurement Robot",
      desc: "WiFi-controlled robot for obstacle avoidance and empty-space dimension measurement.",
      tags: ["Robotics", "WiFi", "Sensors"],
    },
    {
      title: "Temp_Humi_Firebase",
      subtitle: "IoT Temperature & Humidity Monitoring",
      desc: "Sensor-based environment monitoring system with Firebase cloud storage.",
      tags: ["ESP8266", "Firebase", "DHT11"],
    },
  ],

  "Raspberry Pi": [
    {
      title: "Smart Lighting System",
      subtitle: "IoT Energy Automation",
      desc: "Edge automation system using Raspberry Pi and sensor-based decision making.",
      tags: ["Raspberry Pi", "GPIO", "Automation"],
    },
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "Edge-based classroom image capture and attendance processing workflow.",
      tags: ["Raspberry Pi", "AI", "Edge"],
    },
  ],

  ESP8266: [
    {
      title: "Object Avoiding WiFi Car",
      subtitle: "IoT-based Space Measurement Robot",
      desc: "WiFi-enabled robotic prototype for spatial measurement and obstacle avoidance.",
      tags: ["ESP8266", "Robot", "WiFi"],
    },
    {
      title: "Temp_Humi_Firebase",
      subtitle: "IoT Temperature & Humidity Monitoring",
      desc: "ESP8266-based sensor system connected with Firebase.",
      tags: ["ESP8266", "Firebase", "IoT"],
    },
  ],

  Arduino: [
    {
      title: "Object Avoiding WiFi Car",
      subtitle: "IoT-based Space Measurement Robot",
      desc: "Robotic car prototype using motor control and obstacle avoidance logic.",
      tags: ["Arduino", "Robotics", "Sensors"],
    },
  ],

  Sensors: [
    {
      title: "Smart Lighting System",
      subtitle: "IoT Energy Automation",
      desc: "Sensor fusion system using LDR, ultrasonic sensing, and camera input.",
      tags: ["LDR", "Ultrasonic", "Automation"],
    },
    {
      title: "Object Avoiding WiFi Car",
      subtitle: "IoT-based Space Measurement Robot",
      desc: "Distance-based sensing for obstacle avoidance and measurement.",
      tags: ["Ultrasonic", "Robot", "Measurement"],
    },
    {
      title: "Temp_Humi_Firebase",
      subtitle: "IoT Temperature & Humidity Monitoring",
      desc: "Temperature and humidity sensor data sent to Firebase.",
      tags: ["DHT11", "Monitoring", "Firebase"],
    },
  ],

  Automation: [
    {
      title: "Smart Lighting System",
      subtitle: "IoT Energy Automation",
      desc: "Automated lighting control based on occupancy and brightness.",
      tags: ["Automation", "IoT", "Energy"],
    },
    {
      title: "StayOps",
      subtitle: "PG / Hostel Management Platform",
      desc: "Operational automation for rooms, beds, students, and payments.",
      tags: ["SaaS", "Workflow", "Admin"],
    },
  ],

  Dashboards: [
    {
      title: "StayOps",
      subtitle: "PG / Hostel Management Platform",
      desc: "Admin dashboard for PG room, student, bed, and payment visibility.",
      tags: ["Dashboard", "React", "SaaS"],
    },
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "Attendance dashboard for viewing AI-based attendance results.",
      tags: ["Dashboard", "AI", "Attendance"],
    },
  ],

  SaaS: [
    {
      title: "StayOps",
      subtitle: "PG / Hostel Management Platform",
      desc: "Business-focused hostel management system built like a SaaS product.",
      tags: ["SaaS", "RBAC", "Product"],
    },
  ],

  "System Design": [
    {
      title: "StayOps",
      subtitle: "PG / Hostel Management Platform",
      desc: "Structured system with roles, room hierarchy, bed allocation, and workflows.",
      tags: ["Architecture", "RBAC", "Backend"],
    },
    {
      title: "BeThere",
      subtitle: "AI Facial Attendance System",
      desc: "AI system pipeline combining capture, enhancement, recognition, and attendance logic.",
      tags: ["Pipeline", "AI", "Edge"],
    },
  ],
};

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  const [activeProof, setActiveProof] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProof((prev) => (prev + 1) % proofImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const ActiveProofIcon = proofImages[activeProof].icon;

  const relatedProjects = selectedSkill
    ? skillProjectsMap[selectedSkill] || []
    : [];

  const openProjectModal = (projectTitle: string) => {
    setSelectedSkill(null);

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("open-project-modal", {
          detail: projectTitle,
        })
      );

      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#08090d] px-6 py-28 text-white"
    >
      <SpaceBackground variant="about" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
          About Me
        </p>

        <h2 className="mb-16 text-4xl font-bold tracking-tight md:text-6xl">
          What I actually do
        </h2>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="space-y-6 text-slate-300">
              <p className="text-xl leading-9 text-slate-100">
                I don’t just write code — I engineer systems that operate in the
                real world.
              </p>

              <p className="leading-8">
                From facial recognition running on low-resolution CCTV feeds to
                IoT systems that autonomously manage energy consumption, my work
                connects software, hardware, and machine learning into practical
                products.
              </p>

              <p className="leading-8">
                As a final-year Computer Science student, I focus on building
                useful systems: AI attendance, hostel management SaaS,
                industrial prediction models, and edge-computing automation.
              </p>
            </div>

            <div ref={statsRef} className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"
                >
                  <p className="text-3xl font-bold text-blue-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:-mt-20">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-r from-blue-500/15 via-violet-500/15 to-white/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Real-world validation
                  </p>
                  <p className="text-xs text-slate-500">
                    Recognition, showcase, demos, and project proof
                  </p>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-blue-300">
                  Builder Proof
                </div>
              </div>

              <div className="relative h-[430px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-black">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={proofImages[activeProof].title}
                    initial={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <img
                      src={proofImages[activeProof].image}
                      alt={proofImages[activeProof].title}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.08] backdrop-blur-xl">
                        <ActiveProofIcon className="h-5 w-5 text-blue-300" />
                      </div>

                      <p className="text-2xl font-bold text-white">
                        {proofImages[activeProof].title}
                      </p>

                      <p className="mt-2 max-w-md text-sm text-slate-300">
                        {proofImages[activeProof].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  {proofImages.map((item, index) => (
                    <button
                      key={item.title}
                      onClick={() => setActiveProof(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeProof === index
                          ? "w-8 bg-blue-400"
                          : "w-2.5 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Show ${item.title}`}
                    />
                  ))}
                </div>

                <p className="text-xs text-slate-500">
                  {activeProof + 1} / {proofImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="skills" className="mt-28">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              Technical Universe
            </p>

            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
              Skills that power my systems
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              AI, full-stack engineering, IoT, databases, networking, and
              real-world systems development.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[#070a0f]/80 p-8 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.12),transparent_28%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] opacity-20 [background-size:42px_42px]" />

            <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {skillClusters.map((cluster, index) => {
                const Icon = cluster.icon;

                return (
                  <motion.div
                    key={cluster.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/30"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="mb-5 flex items-center gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-blue-400/10">
                          <Icon className="h-5 w-5 text-blue-300" />
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-white">
                            {cluster.title}
                          </h4>

                          <p className="text-xs text-slate-500">
                            Click a highlighted skill to view related projects
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {cluster.skills.map((skill) => {
                          const clickable = !!skillProjectsMap[skill];

                          return (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => {
                                if (clickable) setSelectedSkill(skill);
                              }}
                              className={`rounded-xl border px-4 py-2 text-sm transition ${
                                clickable
                                  ? "border-blue-400/30 bg-blue-400/10 text-blue-300 hover:scale-105 hover:bg-blue-400/20"
                                  : "cursor-default border-white/10 bg-white/[0.03] text-slate-400"
                              }`}
                            >
                              {skill}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 px-4 backdrop-blur-xl"
              onClick={() => setSelectedSkill(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f]/95 shadow-[0_25px_100px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.92, y: 24, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.92, y: 24, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between gap-5 border-b border-white/10 px-6 py-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-blue-300">
                      Related Projects
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-white">
                      {selectedSkill}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      Projects where this skill is used practically.
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-300 transition hover:bg-white/[0.1] hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid max-h-[65vh] gap-4 overflow-y-auto p-6 md:grid-cols-2">
                  {relatedProjects.length > 0 ? (
                    relatedProjects.map((project) => (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => openProjectModal(project.title)}
                        className="group rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10"
                      >
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                              {project.subtitle}
                            </p>

                            <h4 className="text-xl font-bold text-white">
                              {project.title}
                            </h4>
                          </div>

                          <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-blue-200" />
                        </div>

                        <p className="line-clamp-3 text-sm leading-6 text-slate-400">
                          {project.desc}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </button>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400">
                      This skill is part of my technical foundation and supports
                      multiple projects.
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;