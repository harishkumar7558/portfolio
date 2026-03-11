import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-white flex flex-col items-center justify-center text-center">
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
          Available for freelance opportunities. Let's build something beautiful together.
        </p>
        <Button className="bg-[#1a1a1a] hover:bg-black text-white rounded-none px-10 py-8 text-lg uppercase tracking-widest transition-colors">
          Get in touch
        </Button>
      </motion.div>

      {/* Footer Links */}
      <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8 text-sm font-medium text-gray-500">
        <p>© {new Date().getFullYear()} Harish Kumar. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/harish-kumar-61b49327b" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="https://github.com/harishkumar7558" className="hover:text-black transition-colors">GitHub</a>
          {/* <a href="#" className="hover:text-black transition-colors">Twitter</a> */}
        </div>
      </div>
    </section>
  );
}