import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Check, Copy, Download, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const details = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
    { icon: <MapPin className="w-5 h-5" />, label: "Based in", value: profile.location },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-white flex flex-col items-center justify-center text-center">

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-bold text-black mb-6 uppercase tracking-widest text-sm">
          <span className="text-pink-500">06 /</span> Contact
        </p>
        <h2 className="text-[10vw] leading-[0.8] font-black uppercase tracking-tighter text-[#1a1a1a] mb-8">
          Let's <br /> <span className="text-transparent [-webkit-text-stroke:2px_#1a1a1a]">Collaborate</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
          Available for freelance projects and full-time React roles. Let's build something beautiful together.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-[#1a1a1a] hover:bg-[#25D366] text-white rounded-none px-10 py-8 text-lg uppercase tracking-widest transition-colors">
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle className="w-5 h-5" /> Get in touch
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-none bg-white border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white px-10 py-8 text-lg uppercase tracking-widest transition-colors">
            <a href={profile.resume} download>
              <Download className="w-5 h-5" /> Résumé
            </a>
          </Button>
        </div>
      </motion.div>

      <div className="mt-20 w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-px bg-gray-200 border border-gray-200 text-left">
        {details.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-white p-6 flex items-start gap-4"
          >
            <span className="p-3 bg-[#1a1a1a] text-white rounded-full">{d.icon}</span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-gray-500">{d.label}</p>
              {d.href ? (
                <a href={d.href} {...(d.href.startsWith("http") && { target: "_blank", rel: "noreferrer" })} className="font-semibold [overflow-wrap:anywhere] hover:text-pink-500 transition-colors">{d.value}</a>
              ) : (
                <p className="font-semibold">{d.value}</p>
              )}
              {d.label === "Email" && (
                <button onClick={copyEmail} className="mt-1 flex items-center gap-1 text-xs text-gray-500 hover:text-black transition-colors">
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8 text-sm font-medium text-gray-500">
        <p>© {new Date().getFullYear()} Harish Kumar. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
          <a href="#home" className="hover:text-black transition-colors">Back to top ↑</a>
        </div>
      </div>
    </section>
  );
}
