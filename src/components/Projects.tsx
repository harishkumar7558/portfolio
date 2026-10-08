import { projects, type Project, type ProjectCategory } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { useState } from "react";

const filters: ("All" | ProjectCategory)[] = ["All", "Enterprise", "Websites", "Backend"];

function LivePreview({ url, title }: { url: string; title: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <iframe
        src={url}
        title={`${title} live preview`}
        loading="lazy"
        tabIndex={-1}
        sandbox="allow-scripts allow-same-origin"
        className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-25 pointer-events-none border-0 bg-white"
      />
    </div>
  );
}

function TypeVisual({ project, index }: { project: Project; index: number }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 bg-[#141414] bg-[linear-gradient(#ffffff0a_1px,transparent_1px),linear-gradient(90deg,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2 pt-10">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="px-3 py-1 border border-gray-600 rounded-full text-xs text-gray-300 bg-[#141414]">
              {s}
            </span>
          ))}
        </div>
        <span className="text-6xl font-black tracking-tighter text-transparent [-webkit-text-stroke:1.5px_#6b6b6b] group-hover:[-webkit-text-stroke:1.5px_#ec4899] transition-all duration-700">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[13vw] md:text-[7vw] leading-[0.8] font-black uppercase tracking-tighter text-white/90 group-hover:translate-x-2 transition-transform duration-700">
        {project.title.split(" ").map((w, i) => (
          <span key={w} className={i % 2 ? "block text-transparent [-webkit-text-stroke:1.5px_#ffffff]" : "block"}>
            {w}
          </span>
        ))}
      </span>
    </div>
  );
}

function ViewLive({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-white text-black rounded-full text-sm font-bold uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-colors"
    >
      View live <ArrowUpRight className="w-4 h-4" />
    </a>
  );
}

function Label({ project }: { project: Project }) {
  return (
    <p className="text-gray-400 text-sm uppercase tracking-widest mb-1">
      {project.category}
      {project.client && <span className="text-pink-500"> · {project.client}</span>}
    </p>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const visual = (
    <>
      {project.live ? <LivePreview url={project.live} title={project.title} /> : <TypeVisual project={project} index={index} />}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700" />
      <span className="absolute top-4 left-4 bg-[#0a0a0a]/80 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest flex items-center gap-2">
        {project.live ? (
          <>
            <span className="h-2 w-2 rounded-full bg-green-400" /> Live on {project.host}
          </>
        ) : (
          <>
            <Lock className="w-3 h-3" /> Internal product
          </>
        )}
      </span>
    </>
  );
  const frame = "block relative overflow-hidden bg-gray-900 h-[320px] md:h-[400px] w-full mb-4";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {project.live ? (
        <a href={project.live} target="_blank" rel="noreferrer" className={frame}>
          {visual}
          <div className="absolute top-4 right-4 bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </a>
      ) : (
        <div className={frame}>{visual}</div>
      )}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <Label project={project} />
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="mt-2 text-gray-400 max-w-md">{project.summary}</p>
        </div>
        {project.live && <ViewLive url={project.live} />}
      </div>
    </motion.article>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group grid grid-cols-[auto_1fr] md:grid-cols-[4rem_1.2fr_1.5fr_auto] items-center gap-4 md:gap-8 py-6 border-b border-gray-800"
    >
      <span className="text-sm text-gray-500 md:pl-2 self-start md:self-center pt-2 md:pt-0">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h4 className="text-xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-pink-500 transition-colors">{project.title}</h4>
        <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
          {project.category}
          {project.client && <span className="text-pink-500"> · {project.client}</span>}
        </p>
        <p className="md:hidden mt-3 text-gray-400">{project.summary}</p>
      </div>
      <div className="hidden md:block">
        <p className="text-gray-400">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="px-3 py-1 border border-gray-800 rounded-full text-xs text-gray-500">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="col-start-2 md:col-start-auto md:mr-2">
        {project.live ? (
          <ViewLive url={project.live} />
        ) : (
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-600">
            <Lock className="w-3 h-3" /> Overview
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);
  const featured = visible.filter((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white min-h-screen">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-gray-800 pb-8"
        >
          <div>
            <p className="font-bold mb-6 uppercase tracking-widest text-sm">
              <span className="text-pink-500">03 /</span> Projects
            </p>
            <h2 className="text-[12vw] md:text-[6vw] leading-[0.85] font-black uppercase tracking-tighter">
              Selected <span className="text-transparent [-webkit-text-stroke:2px_#ffffff]">Works</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  filter === f ? "bg-white text-black border-white" : "border-gray-700 text-gray-300 hover:border-white"
                }`}
              >
                {f}
                <span className="ml-2 text-xs opacity-60">
                  {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 mb-20">
            <AnimatePresence mode="popLayout">
              {featured.map((project, index) => (
                <FeaturedCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </div>
        )}

        {rest.length > 0 && (
          <>
            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">More from the archive</h3>
            <div className="border-t border-gray-800">
              <AnimatePresence mode="popLayout">
                {rest.map((project, index) => (
                  <ProjectRow key={project.title} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
