import { motion } from "framer-motion";
import Button from "../ui/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute left-1/4 top-1/3 w-1/2 h-1/3 bg-cobalt-blue blur-3xl opacity-60"
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl px-8 grid grid-cols-1 place-items-center" style={{paddingTop: '8vh', paddingBottom: '8vh'}}>
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight mb-10 text-white uppercase font-display"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Finance Professional<br />
          <span className="block text-cobalt-blue font-extrabold mt-2 font-display">& Technical Analyst</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-2xl mx-auto text-2xl md:text-3xl text-metallic-silver leading-relaxed mb-12 font-sans font-medium"
        >
          Focused on private equity, management consulting, and defense technologies.<br />
          Delivering quantitative solutions and strategic investment analysis.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link to={createPageUrl("Theses")}> {/* Use createPageUrl for route */}
            <Button className="bg-cobalt-blue hover:bg-cobalt-blue-alt text-white font-bold px-10 py-4 flex items-center gap-2 border-0 shadow-none rounded-none">
              View Investment Theses
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link to={createPageUrl("Solutions")}> {/* Use createPageUrl for route */}
            <Button className="border border-metallic-silver text-metallic-silver hover:bg-white hover:text-steel-gray font-bold px-10 py-4 rounded-none">
              Technical Solutions
            </Button>
          </Link>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-metallic-silver animate-bounce" />
      </motion.div>
    </section>
  );
}
