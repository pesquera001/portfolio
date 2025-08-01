import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#232a32] font-sans text-white">
      <div className="max-w-6xl mx-auto px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-normal font-sans mb-4 tracking-tight" style={{fontFamily: 'Inter, sans-serif'}}>Projects</h1>
          <p className="text-lg text-metallic-silver max-w-2xl mx-auto font-mono mb-2">Bridging insights across private capital and national security strategy.</p>
        </motion.div>

        {/* Split Screen Projects */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-metallic-silver/20 p-8 flex flex-col justify-between shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group" style={{borderRadius:0}}
          >
            <div>
              <h2 className="text-2xl font-normal mb-3 font-sans text-black" style={{fontFamily: 'Inter, sans-serif'}}>Private Market Intelligence</h2>
              <p className="text-black font-sans mb-2">A software platform for sourcing and evaluating acquisition targets.</p>
              <p className="text-black font-sans mb-8">Developing a software platform that streamlines the tracking, sourcing, and profiling of private companies—enabling faster signal detection for acquisition potential. The tool focuses on real-time data sourcing and strategic filtering for industry relevance, operational patterns, and growth velocity.</p>
              <div className="mt-8"></div>
              <img src="/Photo 2.png" alt="Private Market Intelligence" className="w-full h-64 object-cover mb-6 bg-light-steel-gray border border-metallic-silver/20" style={{borderRadius:0}} />
            </div>
            {/* Visual removed as requested */}
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-metallic-silver/20 p-8 flex flex-col justify-between shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group" style={{borderRadius:0}}
          >
            <div>
              <h2 className="text-2xl font-normal mb-3 font-sans text-black" style={{fontFamily: 'Inter, sans-serif'}}>Dual-Use Defense Applications Study</h2>
              <p className="text-black font-sans mb-2">A research initiative mapping the commercialization and defense adaptation of emerging technologies.</p>
              <p className="text-black font-sans mb-8">Researching technologies with both commercial and defense utility, especially those that can be converted into surge production assets during wartime or national emergencies. The study aims to map transition pathways from early-stage commercial use to scalable defense readiness and procurement viability.</p>
              <img src="/Photo 3.png" alt="Dual-Use Defense Applications Study" className="w-full h-64 object-cover mb-6 bg-light-steel-gray border border-metallic-silver/20" style={{borderRadius:0}} />
            </div>
            {/* Visual removed as requested */}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a href="mailto:aidan.pesquera@gmail.com" className="inline-block px-8 py-4 bg-bright-blue text-steel-gray font-sans text-lg font-normal tracking-tight transition-colors hover:bg-white hover:text-bright-blue border-0" style={{borderRadius:0}}>
            Let’s Collaborate
          </a>
        </div>
      </div>
    </div>
  );
}
