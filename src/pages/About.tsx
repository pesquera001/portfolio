import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#232a32] font-sans">
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-8">
          <motion.h1
            className="text-4xl md:text-5xl font-normal text-white mb-8 font-sans"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Aidan Pesquera
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-normal text-cobalt-blue mb-6 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Researcher at the Intersection of Private Markets and Defense.
          </motion.h2>
          <motion.p
            className="mb-8 text-lg text-white font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Senior at Arizona State University, studying Business Administration and Economics. Focused on strategic planning, defense innovation, and business advisory—building a portfolio that bridges analytical rigor with real-world insight across private capital and national security domains.
          </motion.p>
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-normal text-cobalt-blue mb-4 font-sans">What Drives Me</h2>
            <p className="mb-4 font-mono text-white">
              I’m driven by a deep interest in operational value creation, particularly within the context of acquired companies. My work centers on understanding how businesses can be systematically optimized—through cost efficiencies, organizational redesign, and enhanced information architecture—to unlock scalable, sustainable performance.

              My passion lies in research, optimization, and execution—designing systems, models, and frameworks that help capital allocators and operators make smarter, faster decisions in high-stakes environments. I focus on identifying companies with potential for scale and operational enhancement, analyzing how they can be improved post-acquisition through better systems, strategy, and structure.
            </p>
          </motion.div>
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl font-normal text-cobalt-blue mb-4 font-sans">Current Projects</h2>
            <ul className="list-disc pl-6 space-y-2 font-mono text-white">
              <li><span className="font-bold">Private Company Intelligence System:</span> Developing a software platform that streamlines tracking, sourcing, and profiling of private companies—enabling faster signal detection for acquisition potential. Focused on real-time data sourcing and strategic filtering for industry relevance and growth velocity.</li>
              <li><span className="font-bold">Dual-Use Defense Applications Study:</span> Researching technologies with both commercial and defense utility, particularly those that can be adapted for surge capacity during wartime or national emergencies. The goal is to map transition pathways from early-stage commercial use to scalable defense readiness.</li>
            </ul>
          </motion.div>
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-normal text-cobalt-blue mb-4 font-sans">Where I’m Headed</h2>
            <p className="mb-4 font-mono text-white">
              I’m seeking internships in private equity, management consulting, or defense advisory—roles that sit at the crossroads of strategy, capital, and execution.
            </p>
            <p className="mb-4 font-mono text-white">
              My goal is to deepen my exposure to high-leverage environments where complex decisions are made under constraints—whether that’s evaluating acquisition targets, driving operational turnarounds, or shaping defense-industrial strategy.
            </p>
            <p className="font-mono text-white">
              Ultimately, I’m working toward a career that blends analytical rigor, strategic insight, and operational impact—in service of both private markets and national interests.
            </p>
          </motion.div>
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl font-normal text-cobalt-blue mb-4 font-sans">Let’s Connect</h2>
            <p className="mb-4 font-mono text-white">
              If you’re working in PE, strategy, or defense and have advice, opportunities, or even a reading list to share — I’d love to connect.
            </p>
            <div className="flex flex-col gap-2 font-mono">
              <a href="mailto:aidan.pesquera@gmail.com" className="underline text-bright-blue">aidan.pesquera@gmail.com</a>
              <a href="https://www.linkedin.com/in/apesquera" className="underline text-bright-blue">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
