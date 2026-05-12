import { useState } from "react";
import SpaceBackground from "@/components/SpaceBackground";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Sparkles,
  ArrowUpRight,
  Download,
  PhoneCall,
} from "lucide-react";

const contactLinks = [
  {
    label: "Phone No.",
    href: "tel:+916309909924",
    icon: PhoneCall,
    display: "+91 6309909924",
  },
  {
    label: "Email",
    href: "mailto:chaitu38192021@gmail.com",
    icon: Mail,
    display: "chaitu38192021@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Chaitu381",
    icon: Github,
    display: "github.com/Chaitu381",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chaitanya-pilla-701731221/",
    icon: Linkedin,
    display: "linkedin.com/in/chaitanya-pilla",
  },
  {
    label: "Location",
    href: "#",
    icon: MapPin,
    display: "Andhra Pradesh, India",
  },
];

const stars = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 4,
  duration: 2 + Math.random() * 3,
}));

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:chaitu38192021@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <SpaceBackground variant="contact" />

      <motion.div
        animate={{ y: [0, -24, 0], x: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-16 top-28 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]"
      />

      <motion.div
        animate={{ y: [0, 28, 0], x: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-20 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px]"
      />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.12)] backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" />
            Contact
          </div>

          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Let’s create something exceptional.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/55">
            Have a role, project, collaboration, or technical opportunity?
            Reach out directly.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form
            initial={{ opacity: 0, x: -34, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.25, 0.4, 0.25, 1] }}
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-gradient-to-br from-white/[0.10] via-white/[0.045] to-white/[0.025] p-6 shadow-2xl shadow-black/50 backdrop-blur-2xl md:p-8"
          >
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/90 to-transparent" />
            <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-blue-500/15 blur-[90px]" />
            <div className="absolute -bottom-24 left-10 h-60 w-60 rounded-full bg-purple-500/10 blur-[90px]" />

            <div className="relative mb-8 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Start a conversation
                </h3>
                <p className="mt-2 text-sm text-white/50">
                  Send a message directly from the portfolio.
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 sm:flex">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available
              </div>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium text-white/40">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-blue-400/70 focus:bg-black/45 focus:ring-4 focus:ring-blue-500/10"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-white/40">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-blue-400/70 focus:bg-black/45 focus:ring-4 focus:ring-blue-500/10"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="relative mt-4">
              <label className="mb-2 block text-xs font-medium text-white/40">
                Message
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-blue-400/70 focus:bg-black/45 focus:ring-4 focus:ring-blue-500/10"
                placeholder="Tell me about the role, project, or opportunity..."
              />
            </div>

            <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_45px_rgba(59,130,246,0.25)] transition-all duration-300"
              >
                <span className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.32),transparent)] transition-transform duration-1000 group-hover:translate-x-[120%]" />
                <Send className="relative h-4 w-4" />
                <span className="relative">Send Message</span>
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/1cyhF2golaOWp8anN3QmT-zMX_4hleUlP/view"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:shadow-[0_15px_45px_rgba(59,130,246,0.14)]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </motion.a>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 34, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.25, 0.4, 0.25, 1] }}
            className="grid gap-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-white/[0.02] p-5 backdrop-blur-2xl transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_18px_55px_rgba(59,130,246,0.16)]"
              >
                <div className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.09),transparent)] transition-transform duration-1000 group-hover:translate-x-[120%]" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
                      <link.icon className="h-5 w-5 text-white/55 transition-colors duration-300 group-hover:text-blue-300" />
                    </div>

                    <div>
                      <p className="text-xs text-white/35">{link.label}</p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {link.display}
                      </p>
                    </div>
                  </div>

                  {link.href !== "#" && (
                    <ArrowUpRight className="h-4 w-4 text-white/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300" />
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;