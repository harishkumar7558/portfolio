import { profile, stats } from "@/data/portfolio";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      <span className="text-pink-500">{suffix}</span>
    </span>
  );
}

export default function About() {
  const skills = ["React.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Redux Toolkit", "Node.js", "Express", "PostgreSQL", "MongoDB", "MSSql"];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gray-50 min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Big Typography */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-bold text-black mb-6 uppercase tracking-widest text-sm">
            <span className="text-pink-500">01 /</span> About me
          </p>
          <h2 className="text-[12vw] md:text-[5vw] font-black leading-none uppercase tracking-tighter mb-6">
            Design <br/> Meets <br/> <span className="text-transparent [-webkit-text-stroke:2px_#1a1a1a]">Logic.</span>
          </h2>
        </motion.div>

        {/* Right: Text & Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-lg text-gray-600"
        >
          <p>
            I'm a <span className="font-semibold text-black">{profile.role}</span> at{" "}
            <span className="font-semibold text-black">{profile.company}</span>, turning complex ERP requirements
            into fast, intuitive interfaces. From AI-powered document workflows to CRM quote engines and
            animated marketing sites, I write clean, maintainable React that scales.
          </p>
          <p>
            I care about performance as much as pixels: code splitting, lazy loading, memoisation and
            automated CI/CD on Netlify and Vercel are part of how I ship every day.
          </p>

          <div className="pt-6">
            <h3 className="font-bold text-black mb-4 uppercase tracking-widest text-sm">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Stats */}
      <div className="max-w-6xl w-full mx-auto mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group border-r border-b border-gray-200 p-6 md:p-8 hover:bg-[#1a1a1a] transition-colors duration-500"
          >
            <div className="text-5xl md:text-7xl font-black tracking-tighter text-[#1a1a1a] group-hover:text-white transition-colors">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-3 text-xs md:text-sm uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
