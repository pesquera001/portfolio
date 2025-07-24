import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-deep-navy-blue text-white font-sans">
      {/* Cinematic animated overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-br from-black via-deep-navy-blue to-black opacity-80"
        />
      </div>
      <div className="relative z-10 w-full max-w-5xl px-8 grid grid-cols-1 place-items-center" style={{paddingTop: '8vh', paddingBottom: '8vh'}}>
        <motion.h1
          className="text-5xl md:text-7xl font-normal tracking-tight leading-tight mb-6 text-white font-sans text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Aidan Pesquera
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-normal text-metallic-silver mb-8 text-center font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Researcher at the Intersection of Private Markets and Defense.
        </motion.h2>
        {/* Buttons removed as requested */}
      </div>
    </section>
  );
}
