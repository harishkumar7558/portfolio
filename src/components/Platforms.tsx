import { deployments } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

function VercelMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2 24 22H0z" />
    </svg>
  );
}

function NetlifyMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className} aria-hidden>
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" />
    </svg>
  );
}

const platforms = [
  {
    name: "GitHub",
    icon: <Github className="w-8 h-8" />,
    big: "30+",
    caption: "repositories",
    body: "ERP modules, client websites and backend experiments, versioned and reviewed in Git.",
    links: [] as { label: string; url: string }[],
  },
  {
    name: "Vercel",
    icon: <VercelMark className="w-7 h-7" />,
    big: "Edge",
    caption: "deployments",
    body: "Marketing sites shipped with instant previews on every push.",
    links: deployments.filter((d) => d.host === "Vercel").map((d) => ({ label: d.name, url: d.url })),
  },
  {
    name: "Netlify",
    icon: <NetlifyMark className="w-8 h-8" />,
    big: "CI/CD",
    caption: "with GitHub Actions",
    body: "Automated frontend pipelines that cut release cycles by 25%.",
    links: deployments.filter((d) => d.host === "Netlify").map((d) => ({ label: d.name, url: d.url })),
  },
];

export default function Platforms() {
  return (
    <section id="code" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-bold text-black mb-6 uppercase tracking-widest text-sm">
            <span className="text-pink-500">04 /</span> Code & deploys
          </p>
          <h2 className="text-[12vw] md:text-[6vw] font-black leading-[0.85] uppercase tracking-tighter text-[#1a1a1a]">
            Built, <br /> <span className="text-transparent [-webkit-text-stroke:2px_#1a1a1a]">Shipped.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-white p-8 flex flex-col hover:bg-[#1a1a1a] hover:text-white transition-colors duration-500"
            >
              <div className="flex items-center justify-between">
                {p.icon}
                <span className="text-xs uppercase tracking-widest text-gray-400">{p.name}</span>
              </div>
              <div className="mt-10 text-6xl font-black tracking-tighter">{p.big}</div>
              <p className="text-sm uppercase tracking-widest text-gray-500 group-hover:text-gray-400">{p.caption}</p>
              <p className="mt-6 text-gray-600 group-hover:text-gray-300 flex-1">{p.body}</p>
              {p.links.length > 0 && (
                <div className="mt-8 space-y-2">
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between border-t border-gray-200 group-hover:border-gray-700 pt-3 text-sm font-medium hover:text-pink-500 transition-colors"
                    >
                      <span>
                        <span className="text-xs uppercase tracking-widest text-gray-400 mr-2">View live</span>
                        {l.label}
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
