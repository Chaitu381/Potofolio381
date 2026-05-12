import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Moon,
  Sparkles,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Chaitu381", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/chaitanya-pilla-701731221/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:chaitu38192021@gmail.com", label: "Email" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#08090d]/75 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_0_30px_rgba(99,102,241,0.16)] backdrop-blur-xl">
              <Moon className="h-5 w-5 text-slate-200 transition group-hover:rotate-12" />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.9)]" />
            </div>

            <div className="leading-none">
              <p className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-base font-bold tracking-tight text-transparent">
                Chaitanya
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-slate-500">
                Systems Builder
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 backdrop-blur-xl md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition hover:text-white"
              >
                {item.label}
                <span className="absolute inset-0 -z-10 scale-90 rounded-full bg-white/[0.07] opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-slate-400 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}

            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.25)] transition hover:scale-[1.03]"
            >
              <Sparkles className="h-4 w-4" />
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-white backdrop-blur-xl md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed left-4 right-4 top-24 z-40 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d12]/90 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.14),transparent_35%)]" />

            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <div className="my-2 h-px bg-white/10" />

              <div className="flex items-center justify-between gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel={
                      link.label === "Email" ? undefined : "noopener noreferrer"
                    }
                    className="grid h-11 flex-1 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-slate-400 transition hover:bg-white/[0.08] hover:text-white"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white"
              >
                <Sparkles className="h-4 w-4" />
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;