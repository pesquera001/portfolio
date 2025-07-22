import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, Code, TrendingUp, Shield } from "lucide-react";

function PreviewCard({ area, index }: { area: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group"
    >
      <Link to={area.path} className="block bg-white h-full border border-metallic-silver/20 hover:border-cobalt-blue/50 transition-all duration-300 hover:shadow-lg">
        <div className="relative h-full flex flex-col overflow-hidden">
          {/* Image with overlay */}
          <div className="aspect-[16/10] relative overflow-hidden">
            <img 
              src={area.image} 
              alt={area.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{borderRadius: 0}} />
            <div className="absolute inset-0 bg-light-steel-gray/70 group-hover:bg-light-steel-gray/50 transition-colors duration-300" style={{borderRadius: 0}}></div>
            <div className="absolute top-4 left-4">
              <area.icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="p-10 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold text-steel-gray mb-2 font-sans uppercase tracking-tight">
              {area.title}
            </h3>
            <p className="text-sm font-bold text-cobalt-blue mb-4 uppercase tracking-wider font-sans">
              {area.subtitle}
            </p>
            <p className="text-steel-gray leading-relaxed mb-8 flex-grow font-sans">
              {area.description}
            </p>
            <div className="flex items-center gap-2 text-cobalt-blue font-bold group-hover:gap-3 transition-all duration-300 font-sans">
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
      title: "Investment Theses",
      subtitle: "Private Equity & Portfolio Management",
      description: "Comprehensive fund strategies, diligence processes, and performance analysis across multiple investment vehicles.",
      icon: TrendingUp,
      path: createPageUrl("Theses"),
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop"
    },
    {
      title: "Technical Solutions",
      subtitle: "Quantitative Analysis & Automation",
      description: "Advanced algorithms, financial models, and technical implementations for investment analysis and operational efficiency.",
      icon: Code,
      path: createPageUrl("Solutions"),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Defense & Security",
      subtitle: "Strategic Analysis & Technologies",
      description: "Insights into defense technologies, security frameworks, and strategic assessments for national security applications.",
      icon: Shield,
      path: createPageUrl("About"),
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
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
          <div className="w-24 h-1 bg-cobalt-blue mx-auto mb-10"></div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-steel-gray mb-8 tracking-tight font-sans uppercase">
            Core Competencies
          </h2>
          <p className="text-2xl text-metallic-silver max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Specialized expertise in finance, technology, and defense sectors with quantitative analysis capabilities.
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
