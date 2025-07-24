import { motion } from "framer-motion";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link to={createPageUrl("Solutions")}> {/* Research & Projects */}
            <Button className="bg-cobalt-blue hover:bg-bright-blue text-steel-gray font-normal px-10 py-4 flex items-center gap-2 border-0 shadow-none">
              Explore Research & Projects
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link to={createPageUrl("Projects")}> {/* Projects */}
            <Button className="border border-metallic-silver text-metallic-silver hover:bg-bright-blue hover:text-steel-gray font-normal px-10 py-4">
              View My Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
