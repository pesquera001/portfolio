import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, Code, TrendingUp, Shield, ChevronDown, ChevronRight } from "lucide-react";

function PreviewCard({ area, index }: { area: any; index: number }) {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group"
    >
      <Link to={area.path} className="block bg-white h-full border border-metallic-silver/20 hover:border-bright-blue transition-all duration-300 hover:shadow-lg">
        <div className="relative h-full flex flex-col overflow-hidden">
          {/* Image with overlay */}
          <div className="aspect-[16/10] relative overflow-hidden">
            <img 
              src={area.image} 
              alt={area.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{borderRadius: 0}} />
            <div className="absolute top-4 left-4">
              <area.icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="p-10 flex-grow flex flex-col">
            <h3 className="text-2xl font-normal text-steel-gray mb-2 font-sans uppercase tracking-tight">
              {area.title}
            </h3>
            <p className="text-sm font-bold text-bright-blue mb-4 uppercase tracking-wider font-mono">
              {area.subtitle}
            </p>
            <p className="text-steel-gray leading-relaxed mb-8 flex-grow font-mono">
              {area.description}
            </p>
            {/* Instructions toggle */}
            {area.instructions && (
              <div className="mb-4">
                <button
                  type="button"
                  className="flex items-center gap-2 text-bright-blue font-mono text-sm focus:outline-none"
                  onClick={e => { e.preventDefault(); setShowInstructions(v => !v); }}
                >
                  {showInstructions ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  Usage
                </button>
                {showInstructions && (
                  <div className="mt-3 p-4 bg-[#232a32] border border-metallic-silver/20 font-mono text-steel-gray text-sm" style={{borderRadius: 0}}>
                    {area.instructions}
                  </div>
                )}
              </div>
            )}
            <div className="flex items-center gap-2 text-bright-blue font-bold group-hover:gap-3 transition-all duration-300 font-sans">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ContentPreview() {
  const contentAreas = [
    {
      title: "LBO Architecture Engine",
      subtitle: "Excel VBA LBO Model Generator",
      description: "An Excel VBA tool that generates leveraged buyout models with detailed debt schedules, tax calculations, and cash flow projections. Inputs are customizable via a form to produce five-year financial forecasts and equity IRR estimates.",
      icon: Code,
      path: createPageUrl("Solutions"),
      image: "/Photo 1.png",
      instructions: null,
    },
    {
      title: "Private Market Intelligence",
      subtitle: "Private company sourcing & signal detection",
      description: "Developing a software platform that streamlines tracking, sourcing, and profiling of private companies—enabling faster signal detection for acquisition potential. Focused on real-time data sourcing and strategic filtering for industry relevance and growth velocity.",
      icon: TrendingUp,
      path: createPageUrl("Projects"),
      image: "/Photo 2.png",
      instructions: null
    },
    {
      title: "Dual-Use Defense Applications Study",
      subtitle: "Mapping commercial & defense tech transitions",
      description: "Researching technologies with both commercial and defense utility, particularly those that can be adapted for surge capacity during wartime or national emergencies. The goal is to map transition pathways from early-stage commercial use to scalable defense readiness.",
      icon: Shield,
      path: createPageUrl("Projects"),
      image: "/Photo 3.png",
      instructions: null
    }
  ];

  return (
    <section className="py-32 bg-white border-t border-b border-border-gray">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <div className="w-24 h-1 bg-bright-blue mx-auto mb-10"></div>
          <h2 className="text-5xl md:text-6xl font-normal text-steel-gray mb-8 tracking-tight font-sans">
            Strategic Research & Tools
          </h2>
          <p className="text-2xl text-metallic-silver max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Specialized research in finance, technology, and defense sectors.
          </p>
        </motion.div>
        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {contentAreas.map((area, index) => (
            <PreviewCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
