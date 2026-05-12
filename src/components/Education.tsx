import { useState, useRef } from "react";
import SpaceBackground from "@/components/SpaceBackground";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  ChevronDown,
  ArrowUpRight,
  BookOpen,
  Award,
  X,
  Calendar,
} from "lucide-react";

const education = [
  {
    period: "2021 – 2025",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Bennett University",
    outcomes: [
      "Specialized in IoT & Robotics engineering solutions, designing end-to-end systems.",
      "Built 19+ production-grade projects from ideation to deployment, including computer vision and edge-computing applications.",
      "Completed 10+ certifications in IoT, Robotics, AI, and Machine Learning.",
      "Strong foundation in core CS topics: DBMS, Operating Systems, Computer Networking, Data Structures & Algorithms.",
      "Participated in hackathons and coding competitions, developing real-world solutions under tight deadlines.",
      "Worked on time-series prediction, cloud integration, and embedded system projects, demonstrating practical engineering skills.",
      "Collaborated in team projects, applying version control, agile practices, and CI/CD pipelines.",
      "Explored emerging areas such as reinforcement learning, AI-driven IoT, and automation.",
    ],
  },
  {
    period: "2019 – 2021",
    degree: "Higher Secondary Education – Science (MPC)",
    institution: "Sri Prakash Vidyaniketan",
    outcomes: [
      "Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry.",
      "Built a strong foundation in analytical and problem-solving skills essential for engineering.",
      "Scored 86% in JEE Mains, demonstrating strong analytical and problem-solving skills.",
    ],
  },
  {
    period: "2019",
    degree: "Secondary Education – State Board",
    institution: "Ravindra Bharathi",
    outcomes: [
      "Completed secondary education with a strong foundation in core subjects.",
      "Studied Mathematics, Science, and English.",
      "Developed analytical thinking and problem-solving skills.",
      "Built the base for higher studies in science and engineering.",
    ],
  },
];

const certifications = [
  {
    title: "An Introduction to Programming the Internet of Things (IoT)",
    issuer: "University of California",
    icon: <img src="/the-university-of-california.png" alt="UC Logo" className="h-full w-full object-contain" />,
    desc: "Foundational knowledge in programming and developing applications for IoT, including device communication, data handling, and IoT system design.",
    image: "/ProgrammingforInternetOfThings.jpg",
    link: "https://coursera.org/share/5efe64af6bcb858ef747e42380f1ab61",
  },
  {
    title: "AWS Fundamentals",
    issuer: "AWS",
    icon: <img src="/aws.png" alt="AWS Logo" className="h-full w-full object-contain" />,
    desc: "Foundational knowledge of AWS cloud concepts, core services, deployment, and basic architecture best practices.",
    image: "/AWS.jpg",
    link: "https://coursera.org/share/f92adcf40c4cb0b78e33f635e838e40b",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    icon: <img src="/Google.webp" alt="Google Logo" className="h-full w-full object-contain" />,
    desc: "Covers cybersecurity fundamentals including network security, threat analysis, cryptography, and digital protection practices.",
    image: "/Foundations of Cybersecurity.jpg",
    link: "https://coursera.org/share/b8b34b4a322d8f8371e77a0c5ca28425",
  },
  {
    title: "AI and Climate Change",
    issuer: "DeepLearning.AI",
    icon: <img src="/DeepLearnig.AI.jpg" alt="DeepLearning.AI Logo" className="h-full w-full object-contain" />,
    desc: "Explores how AI can address climate change through modeling, prediction, and data-driven environmental solutions.",
    image: "/DeepLearning.AI.jpg",
    link: "https://coursera.org/share/908f352ad3fff96ba9829534e3c0646a",
  },
  {
    title: "Machine Learning: Regression",
    issuer: "University of Washington",
    icon: <img src="/University_of_Washington.png" alt="University of Washington Logo" className="h-full w-full object-contain" />,
    desc: "Focuses on regression techniques in machine learning for predicting continuous outcomes using supervised learning.",
    image: "/UniversityOfWashington.jpg",
    link: "https://coursera.org/share/96dc9bd798aff521036f14ec3536570c",
  },
  {
    title: "Introduction to High-Performance and Parallel Computing",
    issuer: "University of Colorado Boulder",
    icon: <img src="/university-of-colorado-boulder.png" alt="University of Colorado Boulder Logo" className="h-full w-full object-contain" />,
    desc: "Covers parallel computing fundamentals and algorithms designed for multi-core and distributed systems.",
    image: "/Introduction to High-Performance and Parallel Computing.jpg",
    link: "https://coursera.org/share/d868fc0fee7c5fe3c9e8fdf2d0cd8c4e",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    icon: <img src="/Google.webp" alt="Google Logo" className="h-full w-full object-contain" />,
    desc: "Covers computer networking fundamentals, data transmission, protocols, and modern network architecture.",
    image: "/The Bits and Bytes of Computer Networking.jpg",
    link: "https://coursera.org/share/5c277ae9621162a6f5d553208763cde7",
  },
  {
    title: "Fundamentals of Network Communication",
    issuer: "University of Colorado Boulder",
    icon: <img src="/university-of-colorado-boulder.png" alt="University of Colorado Boulder Logo" className="h-full w-full object-contain" />,
    desc: "Provides foundational understanding of data transmission, protocols, and reliable digital communication.",
    image: "/Fundamentals of Network Communication.jpg",
    link: "https://coursera.org/share/d7c7b4e1f6974062e8dd4db438dd6933",
  },
];

const Education = () => {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#08090d] px-6 py-28 text-white"
    >
      <SpaceBackground variant="education" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
          Education
        </p>

        <h2 className="mb-16 text-4xl font-bold tracking-tight md:text-6xl">
          Learning Journey
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* LEFT TIMELINE */}
          <div className="lg:col-span-3" ref={timelineRef}>
            <div className="relative">
              {/* Base Line */}
              <div className="absolute left-6 top-0 bottom-0 w-[3px] rounded-full bg-white/10" />

              {/* Animated Progress Line */}
              <motion.div
                style={{ height: lineHeight }}
                className="absolute left-6 top-0 w-[3px] rounded-full bg-gradient-to-b from-blue-400 via-violet-400 to-cyan-300 shadow-[0_0_24px_rgba(59,130,246,0.8)]"
              />

              <div className="space-y-8">
                {education.map((item, i) => {
                  const isOpen = expanded === i;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: i * 0.12 }}
                      className="relative pl-20"
                    >
                      {/* Dot */}
                      <button
                        onClick={() => setExpanded(isOpen ? null : i)}
                        className={`absolute left-[13px] top-6 z-10 grid h-7 w-7 place-items-center rounded-full border transition ${
                          isOpen
                            ? "border-blue-300 bg-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.9)]"
                            : "border-blue-400/50 bg-[#08090d] shadow-[0_0_18px_rgba(59,130,246,0.25)]"
                        }`}
                        aria-label={`Expand ${item.degree}`}
                      >
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            isOpen ? "bg-white" : "bg-blue-400"
                          }`}
                        />
                      </button>

                      {/* Date Badge */}
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-300">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.period}
                      </div>

                      <button
                        onClick={() => setExpanded(isOpen ? null : i)}
                        className={`group w-full overflow-hidden rounded-[2rem] border p-6 text-left backdrop-blur-2xl transition-all ${
                          isOpen
                            ? "border-blue-400/30 bg-blue-400/[0.08] shadow-[0_0_55px_rgba(59,130,246,0.12)]"
                            : "border-white/10 bg-[#0b0f17]/80 hover:border-blue-400/25 hover:bg-white/[0.065]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-6">
                          <div className="flex gap-4">
                            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.06]">
                              <GraduationCap className="h-7 w-7 text-blue-300" />
                            </div>

                            <div>
                              <h3 className="text-xl font-bold text-white">
                                {item.degree}
                              </h3>
                              <p className="mt-1 text-sm text-slate-500">
                                {item.institution}
                              </p>
                            </div>
                          </div>

                          <div
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-400 transition ${
                              isOpen ? "rotate-180 text-blue-300" : ""
                            }`}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </div>
                        </div>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.35 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-6 grid gap-3">
                                {item.outcomes.map((outcome, j) => (
                                  <motion.div
                                    key={j}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: j * 0.04 }}
                                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 text-sm leading-6 text-slate-300"
                                  >
                                    <BookOpen className="mt-1 h-4 w-4 shrink-0 text-blue-300" />
                                    <span>{outcome}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT CERTIFICATIONS */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_0_55px_rgba(59,130,246,0.1)] backdrop-blur-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
                    Certifications
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    Credential Stack
                  </h3>
                </div>

                <div className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                  {certifications.length} verified
                </div>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setSelectedCert(cert)}
                    whileHover={{ y: -4, scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] p-4 transition-all hover:border-blue-400/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.16)]"
                  >
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white p-1 shadow-lg">
                        {cert.icon}
                      </div>

                      <div className="min-w-0">
                        <p className="line-clamp-2 text-sm font-semibold text-white">
                          {cert.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-400 transition group-hover:border-blue-400/30 group-hover:text-blue-300">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#0d1117] p-5 shadow-[0_0_60px_rgba(59,130,246,0.12)]"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, y: 24 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 24 }}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
                      Certificate
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      {selectedCert.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {selectedCert.issuer}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {selectedCert.image.endsWith(".pdf") ? (
                  <div className="mb-4 flex flex-col gap-3">
                    <iframe
                      src={selectedCert.image}
                      className="h-[55vh] w-full rounded-2xl border border-white/10 bg-black"
                    />
                    <a
                      href={selectedCert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:underline"
                    >
                      Open full certificate →
                    </a>
                  </div>
                ) : (
                  <div className="mb-4 flex h-[42vh] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-2">
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
                    />
                  </div>
                )}

                <p className="mb-3 text-sm leading-6 text-slate-300">
                  {selectedCert.desc}
                </p>

                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300 hover:bg-blue-400/15"
                >
                  View Certificate
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Education;