import { useEffect, useMemo, useState } from "react";
import SpaceBackground from "@/components/SpaceBackground";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Copy,
  ExternalLink,
  Github,
  KeyRound,
  Layers3,
  Lightbulb,
  LockKeyhole,
  MonitorPlay,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Wrench,
  X,
  Zap,
} from "lucide-react";

type ProjectCategory = "AI / ML" | "Full Stack" | "IoT" | "FrontEnd" | "Robotics";

interface Credential {
  label: string;
  username: string;
  password: string;
}

interface Project {
  title: string;
  subtitle: string;
  skills?: string[];
  category: ProjectCategory;
  categories: ProjectCategory[];
  problem: string;
  approach: string;
  result: string;
  learned: string;
  stack: string[];
  metrics: string[];
  gradient: string;
  glow: string;
  span: string;
  icon: React.ElementType;
  github?: string;
  demo?: string;
  credentials?: Credential[];
}

const projects: Project[] = [
  {
    title: "BeThere",
    subtitle: "AI Facial Attendance System",
    category: "AI / ML",
    categories: ["AI / ML", "Full Stack", "IoT", "FrontEnd"],
    skills: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "AI/ML",
      "React.js",
      "PostgreSQL",
      "Raspberry Pi",
    ],
    problem:
      "Manual classroom attendance is slow, unreliable, and easy to manipulate, especially when CCTV footage is low-quality or captured from distance.",
    approach:
      "Built a computer-vision pipeline using face detection, enhancement, embedding comparison, and attendance logic with a 60% presence rule.",
    result:
      "Created an automated attendance workflow that can process classroom images and reduce manual work for teachers.",
    learned:
      "Real-world AI is not just model accuracy. Lighting, blur, face angle, frame quality, and false matches matter more than theory.",
    stack: ["Python", "OpenCV", "RetinaFace", "DeepFace", "ESRGAN", "CodeFormer","React.js","PostgreSQL","RaspberryPi"],
    metrics: ["Computer Vision", "Face Verification", "Edge Pipeline"],
    gradient: "from-blue-500/25 via-cyan-400/10 to-violet-500/25",
    glow: "shadow-blue-500/20",
    span: "lg:col-span-3",
    icon: BrainCircuit,
    github: "https://github.com/Chaitu381/mqttndance-see.git",
    demo: "https://betherechaitu381.vercel.app/",
    credentials: [
      {
        label: "Admin Login",
        username: "me381@gmail.com",
        password: "Chaitu@381",
      },
      {
        label: "Teacher Login",
        username: "teacher@gmail.com",
        password: "Teacher123",
      },
      {
        label: "Student Login",
        username: "student@gmail.com",
        password: "Student123",
      },
    ],
  },
  {
    title: "StayOps",
    subtitle: "PG / Hostel Management Platform",
    category: "Full Stack",
    categories: ["Full Stack", "FrontEnd"],
    skills: [
      "React.js",
      "Spring Boot",
      "PostgreSQL",
      "Full Stack",
      "Tailwind CSS",
    ],
    problem:
      "PG owners manage rooms, beds, students, payments, and occupancy manually, which causes confusion and data inconsistency.",
    approach:
      "Designed a role-based full-stack system with room setup, bed allocation, student records, payment status, and admin workflows.",
    result:
      "Built a structured product foundation for PG operations with cleaner visibility over students, beds, and payment status.",
    learned:
      "A business product needs more than UI: audit history, backups, security, receipts, and reliable deployment matter.",
    stack: ["React", "Spring Boot", "PostgreSQL", "Tailwind", "Render", "Vercel"],
    metrics: ["RBAC", "Room Mapping", "Payment Status"],
    gradient: "from-emerald-500/25 via-teal-400/10 to-blue-500/25",
    glow: "shadow-emerald-500/20",
    span: "lg:col-span-3",
    icon: Layers3,
    github: "https://github.com/Chaitu381/StayOps.git",
    demo: "https://stayops-fengari.vercel.app/login",
    credentials: [
      {
        label: "Super Admin",
        username: "superadmin",
        password: "super123",
      },
      {
        label: "Admin",
        username: "admin",
        password: "admin123",
      },
    ],
  },
  {
    title: "Personal Portfolio Website",
    subtitle: "Developer Portfolio & Project Showcase",
    category: "FrontEnd",
    categories: ["FrontEnd"],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend Development",
      "UI Design",
      "Web Design",
      "Animations",
    ],
    problem:
      "Developers need a professional online presence to showcase projects, technical skills, achievements, and experience in a structured and visually appealing way.",
    approach:
      "Designed and developed a fully responsive personal portfolio website using HTML, CSS, and JavaScript with sections for projects, skills, education, and contact information.",
    result:
      "Created a clean and interactive portfolio platform that presents technical work, project details, and personal branding in a professional format.",
    learned:
      "I learned how to design responsive user interfaces, improve visual hierarchy, structure frontend layouts effectively, and create better user experiences through animations and interaction design.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
    metrics: [
      "Portfolio Design",
      "Responsive UI",
      "Frontend Development",
    ],
    gradient: "from-violet-500/25 via-fuchsia-400/10 to-blue-500/25",
    glow: "shadow-violet-500/20",
    span: "lg:col-span-2",
    icon: Code2,
    github: "https://github.com/Chaitu381/Potofolio.git",
    demo: "https://chaitu381potofolio.netlify.app/",
  },
  {
    title: "KT Vision Technologies Website",
    subtitle: "Corporate Training & Career Platform",
    category: "FrontEnd",
    categories: ["FrontEnd"],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend Development",
      "Corporate Website",
      "UI Design",
      "Landing Page Design",
    ],
    problem:
      "Training institutes often struggle to present their programs, mentorship opportunities, and placement-focused services through a modern and professional online presence.",
    approach:
      "Designed and developed a responsive company website for KT Vision Technologies using HTML, CSS, and JavaScript with a focus on clean UI, accessibility, and structured content presentation.",
    result:
      "Created a professional web presence that clearly communicates the company’s training programs, mentorship approach, and career-focused mission for students and job seekers.",
    learned:
      "I learned the importance of responsive design, structured layouts, visual hierarchy, and creating user-friendly interfaces that represent a professional brand effectively.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
    metrics: [
      "Corporate Website",
      "Responsive UI",
      "Frontend Development",
    ],
    gradient: "from-indigo-500/25 via-blue-400/10 to-cyan-500/25",
    glow: "shadow-cyan-500/20",
    span: "lg:col-span-2",
    icon: Code2,
    github: "https://github.com/Chaitu381/KT_Vision_Technologies.PVT.LTD.git",
    demo: "https://kt-vision-technologies-pvt-ltd.vercel.app/",
  },
  {
    title: "Code Connect",
    subtitle: "Real-time Collaborative Coding Platform",
    category: "Full Stack",
    categories: ["Full Stack","FrontEnd"],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JavaScript",
      "Real-time Communication",
      "Full Stack Development",
    ],
    problem:
      "Traditional coding practice is often isolated, making collaboration, peer learning, and real-time problem solving difficult for students and developers.",
    approach:
      "Developed a collaborative coding platform where multiple users can connect, write, edit, and discuss code together in a shared real-time environment.",
    result:
      "Created an interactive coding workspace that improves teamwork, learning, and code-sharing efficiency through synchronized collaboration.",
    learned:
      "I learned that real-time applications require careful handling of synchronization, shared state management, low-latency communication, and user experience consistency.",
    stack: [
      "React.js",
      "Node.js",
      "Socket.IO",
      "JavaScript",
      "MongoDB",
    ],
    metrics: [
      "Real-time Collaboration",
      "Code Sharing",
      "Live Synchronization",
    ],
    gradient: "from-indigo-500/25 via-blue-400/10 to-cyan-500/25",
    glow: "shadow-cyan-500/20",
    span: "lg:col-span-2",
    icon: Code2,
    github: "https://github.com/Chaitu381/CodeConnect.git",
    demo: "https://codeconnectchaitu381.vercel.app/",
  },
  {
    title: "Smart Lighting System",
    subtitle: "IoT Energy Automation",
    category: "IoT",
    categories: ["IoT"],
    skills: [
      "IoT",
      "Raspberry Pi",
      "Python",
      "Sensor Integration",
      "Automation",
      "Computer Vision",
      "Embedded Systems",
      "GPIO",
    ],
    problem:
      "Lighting systems waste power when rooms are empty or when natural light is already enough.",
    approach:
      "Used Raspberry Pi, camera-based occupancy detection, ultrasonic sensing, and LDR input to control lighting intelligently.",
    result:
      "Designed an adaptive automation system that responds to occupancy and environmental light conditions.",
    learned:
      "IoT projects fail when sensors are treated separately. The real skill is combining imperfect signals into reliable decisions.",
    stack: ["Raspberry Pi", "Python", "Camera", "LDR", "Ultrasonic Sensor"],
    metrics: ["Sensor Fusion", "Automation", "Edge Control"],
    gradient: "from-yellow-500/25 via-orange-400/10 to-red-500/25",
    glow: "shadow-orange-500/20",
    span: "lg:col-span-2",
    icon: Zap,
    github: "https://github.com/Chaitu381/Home_Autoamtion.git",
  },
  {
    title: "Slot Booking Platform",
    subtitle: "Real-time Booking Web App",
    category: "Full Stack",
    categories: ["Full Stack"],
    skills: [
      "React.js",
      "Firebase",
      "JavaScript",
      "Realtime Database",
      "Frontend Development",
      "Responsive Design",
      "Booking System",
      "UI Development",
    ],
    problem:
      "Shared resources often face booking conflicts when multiple users try to reserve the same slot.",
    approach:
      "Built a real-time booking interface with synchronized data updates and clean user flow.",
    result:
      "Created a smoother slot reservation experience with better visibility and fewer manual conflicts.",
    learned:
      "Real-time apps need careful state handling, optimistic UI, and conflict prevention logic.",
    stack: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    metrics: ["Realtime DB", "Booking Flow", "Responsive UI"],
    gradient: "from-pink-500/25 via-purple-400/10 to-blue-500/25",
    glow: "shadow-purple-500/20",
    span: "lg:col-span-2",
    icon: MonitorPlay,
    github: "https://github.com/Chaitu381/SlotBookingApp",
    demo: "https://slotbookingappjqchaitu381.vercel.app/",
  },
  {
    title: "Sign Language Recognition System",
    subtitle: "AI-based Gesture Recognition",
    category: "AI / ML",
    categories: ["AI / ML"],
    skills: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Computer Vision",
      "AI/ML",
      "Gesture Recognition",
      "Deep Learning",
      "Real-time Detection",
    ],
    problem:
      "Communication between sign language users and non-sign language users can be difficult in everyday interactions due to the lack of accessible translation tools.",
    approach:
      "Developed a computer-vision based system that captures hand gestures through a camera and processes them using machine learning techniques to recognize sign language patterns.",
    result:
      "Created a gesture recognition workflow capable of identifying sign language inputs and improving interaction accessibility through real-time visual interpretation.",
    learned:
      "I learned the challenges of gesture recognition, including lighting conditions, hand positioning, background noise, and the importance of accurate preprocessing for reliable predictions.",
    stack: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Computer Vision",
      "NumPy",
    ],
    metrics: [
      "Gesture Recognition",
      "Real-time Detection",
      "Accessibility AI",
    ],
    gradient: "from-green-500/25 via-emerald-400/10 to-cyan-500/25",
    glow: "shadow-emerald-500/20",
    span: "lg:col-span-2",
    icon: BrainCircuit,
    github: "https://github.com/Chaitu381/Sign_Language.git",
  },
  {
    title: "Driver Drowsiness Detection System",
    subtitle: "AI-based Fatigue Monitoring",
    category: "AI / ML",
    categories: ["AI / ML"],
    skills: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Computer Vision",
      "AI/ML",
      "Face Detection",
      "Real-time Monitoring",
      "Safety Systems",
    ],
    problem:
      "Driver fatigue is one of the major causes of road accidents, especially during long-distance or late-night driving where reduced attention can lead to dangerous situations.",
    approach:
      "Developed a computer-vision based monitoring system that tracks eye movement, blinking patterns, and facial behavior through a camera to detect signs of driver drowsiness in real time.",
    result:
      "Created a real-time fatigue detection workflow capable of identifying drowsiness symptoms and triggering warning alerts to improve driving safety.",
    learned:
      "I learned that real-time AI systems require efficient frame processing, stable facial landmark detection, and careful handling of lighting conditions, camera angles, and false detections.",
    stack: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Computer Vision",
      "Face Detection",
    ],
    metrics: [
      "Real-time Detection",
      "Fatigue Monitoring",
      "Safety AI",
    ],
    gradient: "from-red-500/25 via-orange-400/10 to-yellow-500/25",
    glow: "shadow-orange-500/20",
    span: "lg:col-span-2",
    icon: BrainCircuit,
    github: "https://github.com/Chaitu381/Driver_Drowsiness_Detection.git",
  },
  {
    title: "Object Avoiding WiFi Car",
    subtitle: "IoT-based Space Measurement Robot",
    category: "IoT",
    categories: ["IoT", "Robotics"],
    skills: [
      "IoT",
      "Robotics",
      "Arduino",
      "ESP8266",
      "Ultrasonic Sensor",
      "Embedded Systems",
      "WiFi Control",
      "Obstacle Avoidance",
    ],
    problem:
      "Measuring empty spaces manually is time-consuming and can be inaccurate, especially when the goal is to understand room dimensions for future automation or layout planning.",
    approach:
      "Built a WiFi-controlled robotic car with object avoidance capability using sensors to move around an empty area, detect obstacles, and collect distance-based measurements for estimating space dimensions.",
    result:
      "Created a prototype that can navigate through an empty space, avoid obstacles, and support basic dimension measurement for future room automation use cases.",
    learned:
      "I learned how sensor-based navigation, obstacle avoidance, wireless control, and distance measurement can be combined to build a practical robotics system for real-world spatial analysis.",
    stack: [
      "Arduino",
      "ESP8266",
      "Ultrasonic Sensor",
      "Motor Driver",
      "DC Motors",
      "WiFi Control",
    ],
    metrics: [
      "Object Avoidance",
      "Space Measurement",
      "WiFi Robotics",
    ],
    gradient: "from-cyan-500/25 via-blue-400/10 to-emerald-500/25",
    glow: "shadow-cyan-500/20",
    span: "lg:col-span-2",
    icon: Zap,
    github: "https://github.com/Chaitu381/-Object_Avoiding_WiFi_Car.git",
  },
  {
    title: "Temp_Humi_Firebase",
    subtitle: "IoT Temperature & Humidity Monitoring System",
    category: "IoT",
    categories: ["IoT"],
    skills: [
      "IoT",
      "ESP8266",
      "Firebase",
      "DHT11 Sensor",
      "Cloud Integration",
      "Embedded Systems",
      "Real-time Monitoring",
      "WiFi Communication",
    ],
    problem:
      "Monitoring environmental conditions manually is inefficient, especially when temperature and humidity data need to be tracked continuously and accessed remotely.",
    approach:
      "Developed an IoT-based monitoring system that collects real-time temperature and humidity data from sensors and uploads the readings to Firebase for cloud-based storage and live monitoring.",
    result:
      "Created a connected monitoring workflow capable of displaying real-time environmental data remotely through Firebase integration.",
    learned:
      "I learned how IoT devices communicate with cloud platforms, handle real-time sensor updates, and manage reliable data transfer between hardware and backend services.",
    stack: [
      "ESP8266",
      "DHT11",
      "Firebase",
      "Arduino IDE",
      "WiFi",
      "Embedded C",
    ],
    metrics: [
      "Real-time Monitoring",
      "Cloud Integration",
      "Sensor Data",
    ],
    gradient: "from-sky-500/25 via-cyan-400/10 to-blue-500/25",
    glow: "shadow-cyan-500/20",
    span: "lg:col-span-2",
    icon: Zap,
    github: "https://github.com/Chaitu381/Temp_Humi_Firebase.git",
  },
];

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "AI / ML",
  "Full Stack",
  "IoT",
  "FrontEnd",
  "Robotics",
];

const modalContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const modalItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] =
    useState<"All" | ProjectCategory>("All");
  const [showCredentials, setShowCredentials] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  const openProject = (project: Project) => {
    setSelected(project);
    setShowCredentials(false);
    setCopiedText("");
  };
  useEffect(() => {
    const handleOpenProject = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      const projectTitle = customEvent.detail;

      const matchedProject = projects.find(
        (project) => project.title === projectTitle
      );

      if (matchedProject) {
        openProject(matchedProject);
      }
    };

    window.addEventListener("open-project-modal", handleOpenProject);

    return () => {
      window.removeEventListener("open-project-modal", handleOpenProject);
    };
  }, []);

  const closeProject = () => {
    setSelected(null);
    setShowCredentials(false);
    setCopiedText("");
  };

  const copyText = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(""), 1400);
    } catch {
      setCopiedText("");
    }
  };

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-28">
      <SpaceBackground variant="projects" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(168,85,247,0.16),transparent_30%),linear-gradient(to_bottom,transparent,rgba(2,6,23,0.72))]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              Selected Projects
            </div>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Engineering work that feels like{" "}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                real products
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              A curated set of AI, full-stack, IoT, and data projects focused on
              practical problem-solving, clean architecture, and production-style
              execution.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-blue-400/60 bg-blue-500/15 text-blue-200 shadow-lg shadow-blue-500/20"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 gap-5 lg:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.button
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 32, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.96 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.55,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  whileHover={{ y: -7 }}
                  onClick={() => openProject(project)}
                  className={`${project.span} group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 text-left shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:bg-slate-900/75`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-45 transition-opacity duration-500 group-hover:opacity-80`}
                  />

                  <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-blue-400/20" />

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-6 right-6 opacity-10"
                  >
                    <Icon className="h-24 w-24 text-white" />
                  </motion.div>

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-lg backdrop-blur-xl">
                        <Icon className="h-5 w-5 text-blue-200" />
                      </div>

                      <div className="flex flex-wrap justify-end gap-2">
                        {project.categories.map((cat) => (
                          <span
                            key={cat}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-medium text-slate-300"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                      {project.subtitle}
                    </p>

                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-100">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                      {project.problem}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-black/25 px-2 py-1 font-mono text-[10px] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}

                        {project.stack.length > 4 && (
                          <span className="rounded-lg bg-black/25 px-2 py-1 font-mono text-[10px] text-slate-400">
                            +{project.stack.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex shrink-0 items-center gap-2 text-xs font-medium text-blue-200 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        View case study
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 34 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 34 }}
              transition={{ duration: 0.36, ease: [0.25, 0.4, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#050914] shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${selected.gradient} opacity-70`}
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.22),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(168,85,247,0.18),transparent_32%),linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.88))]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:38px_38px]" />

              <div className="relative z-10 max-h-[88vh] overflow-y-auto p-5 md:p-7">
                <motion.div
                  variants={modalContentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    variants={modalItemVariants}
                    className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl md:p-8"
                  >
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

                    <div className="relative flex items-start justify-between gap-5">
                      <div className="flex items-start gap-4">
                        <div className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] md:grid">
                          <selected.icon className="h-6 w-6 text-blue-200" />
                        </div>

                        <div>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-blue-300">
                            {selected.subtitle}
                          </p>

                          <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                            {selected.title}
                          </h3>

                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            <span className="rounded-full border border-blue-300/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
                              {selected.category}
                            </span>

                            {selected.metrics.map((metric) => (
                              <span
                                key={metric}
                                className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-slate-300"
                              >
                                {metric}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={closeProject}
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-300 transition hover:bg-white/[0.12] hover:text-white"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={modalItemVariants}
                    className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"
                  >
                    <div className="rounded-[2rem] border border-white/10 bg-black/25 p-5 backdrop-blur-2xl">
                      <p className="mb-4 text-sm font-semibold text-white">
                        Tech Stack
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {selected.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-xl border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 font-mono text-xs text-blue-200 transition hover:border-blue-300/40 hover:bg-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`grid gap-3 rounded-[2rem] border border-white/10 bg-black/25 p-4 backdrop-blur-2xl ${
                        selected.credentials
                          ? "grid-cols-1 sm:grid-cols-3"
                          : "grid-cols-1 sm:grid-cols-2"
                      }`}
                    >
                      {selected.github && (
                        <a
                          href={selected.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.12] hover:text-white"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      )}

                      {selected.demo && (
                        <a
                          href={selected.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}

                      {selected.credentials && (
                        <button
                          onClick={() => setShowCredentials((prev) => !prev)}
                          className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                            showCredentials
                              ? "border-blue-300/50 bg-blue-500/20 text-blue-100"
                              : "border-blue-400/20 bg-blue-500/10 text-blue-200 hover:border-blue-300/40 hover:bg-blue-500/20"
                          }`}
                        >
                          <KeyRound className="h-4 w-4" />
                          Credentials
                        </button>
                      )}
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {showCredentials && selected.credentials && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.28 }}
                        className="mt-5 overflow-hidden rounded-[2rem] border border-blue-400/20 bg-[#07111f]/95 shadow-[0_22px_70px_rgba(37,99,235,0.2)] backdrop-blur-2xl"
                      >
                        <div className="flex items-start justify-between gap-5 border-b border-white/10 px-5 py-4">
                          <div className="flex items-start gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                              <LockKeyhole className="h-5 w-5 text-blue-200" />
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-white">
                                Demo Credentials
                              </p>
                              <p className="mt-1 text-xs leading-5 text-slate-400">
                                Use these accounts only for portfolio demo
                                access.
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => setShowCredentials(false)}
                            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-300 transition hover:bg-white/[0.1] hover:text-white"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="grid gap-4 p-5 md:grid-cols-2">
                          {selected.credentials.map((credential, index) => (
                            <div
                              key={credential.label}
                              className="rounded-2xl border border-white/10 bg-black/25 p-4"
                            >
                              <p className="mb-4 text-sm font-semibold text-blue-200">
                                {credential.label}
                              </p>

                              <div className="space-y-3">
                                <div>
                                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                                    Username
                                  </p>

                                  <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                                    <span className="break-all font-mono text-sm text-white">
                                      {credential.username}
                                    </span>

                                    <button
                                      onClick={() =>
                                        copyText(
                                          credential.username,
                                          `${index}-username`
                                        )
                                      }
                                      className="text-slate-400 transition hover:text-white"
                                    >
                                      <Copy className="h-4 w-4" />
                                    </button>
                                  </div>

                                  {copiedText === `${index}-username` && (
                                    <p className="mt-1 text-xs text-emerald-300">
                                      Username copied
                                    </p>
                                  )}
                                </div>

                                <div>
                                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                                    Password
                                  </p>

                                  <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                                    <span className="break-all font-mono text-sm text-white">
                                      {credential.password}
                                    </span>

                                    <button
                                      onClick={() =>
                                        copyText(
                                          credential.password,
                                          `${index}-password`
                                        )
                                      }
                                      className="text-slate-400 transition hover:text-white"
                                    >
                                      <Copy className="h-4 w-4" />
                                    </button>
                                  </div>

                                  {copiedText === `${index}-password` && (
                                    <p className="mt-1 text-xs text-emerald-300">
                                      Password copied
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    {[
                      {
                        icon: Target,
                        label: "Problem",
                        text: selected.problem,
                        color: "text-red-300",
                        glow: "from-red-500/10",
                      },
                      {
                        icon: Wrench,
                        label: "Technical Approach",
                        text: selected.approach,
                        color: "text-blue-300",
                        glow: "from-blue-500/10",
                      },
                      {
                        icon: Trophy,
                        label: "Outcome",
                        text: selected.result,
                        color: "text-amber-300",
                        glow: "from-amber-500/10",
                      },
                      {
                        icon: Lightbulb,
                        label: "Learning",
                        text: selected.learned,
                        color: "text-emerald-300",
                        glow: "from-emerald-500/10",
                      },
                    ].map((item) => (
                      <motion.div
                        key={item.label}
                        variants={modalItemVariants}
                        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 p-5 backdrop-blur-2xl transition hover:border-white/20"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.glow} to-transparent opacity-80`}
                        />

                        <div className="relative z-10">
                          <div className="mb-3 flex items-center gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
                              <item.icon className={`h-5 w-5 ${item.color}`} />
                            </div>

                            <h4 className="text-sm font-semibold text-white">
                              {item.label}
                            </h4>
                          </div>

                          <p className="text-sm leading-7 text-slate-400">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;