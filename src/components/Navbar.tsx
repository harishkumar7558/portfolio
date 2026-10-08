import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full flex justify-between items-center py-6 px-6 md:px-12 z-50 mix-blend-difference text-white"
      >
        <div className="text-3xl font-black tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          Harish<span className="text-pink-500">.</span>
        </div>
        <nav className="hidden md:flex gap-8 ml-15 text-sm font-medium">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-pink-500 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild className="rounded-none bg-white text-black hover:bg-gray-200 hidden lg:inline-flex">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </Button>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] text-white flex flex-col justify-center px-6 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="text-[14vw] leading-[1] font-black uppercase tracking-tighter hover:text-pink-500 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <a href={`mailto:${profile.email}`} className="mt-10 text-sm text-gray-400 break-all">
              {profile.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
