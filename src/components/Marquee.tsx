import { marquee } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Marquee() {
  const row = [...marquee, ...marquee];

  return (
    <div className="relative bg-[#0a0a0a] text-white py-6 overflow-hidden border-y border-gray-800">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-3xl md:text-5xl font-black uppercase tracking-tighter">
            <span className={i % 2 ? "text-transparent [-webkit-text-stroke:1.5px_#ffffff]" : ""}>{item}</span>
            <span className="text-pink-500">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
