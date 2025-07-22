import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Code, TrendingUp, Shield, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const skills = [
    {
      category: "Finance & Investment",
      icon: TrendingUp,
      items: ["Private Equity", "Portfolio Management", "Financial Modeling", "Due Diligence", "Risk Assessment", "Quantitative Analysis"]
    },
    {
      category: "Technical & Quantitative",
      icon: Code,
      items: ["Python", "R", "SQL", "Financial Engineering", "Algorithmic Trading", "Data Analysis", "Automation", "API Integration"]
    },
    {
      category: "Defense & Security",
      icon: Shield,
      items: ["Strategic Analysis", "Defense Technologies", "Cybersecurity", "Operational Security", "Risk Management", "Threat Assessment"]
    },
    {
      category: "Management Consulting",
      icon: Briefcase,
      items: ["Strategic Planning", "Operations Optimization", "Market Analysis", "Process Improvement", "Stakeholder Management", "Executive Presentations"]
    }
  ];

  const experience = [
    {
      title: "Investment Analyst",
      company: "Private Equity Fund",
      period: "2021 - Present",
      description: "Lead investment analysis and due diligence for technology and defense sector investments. Developed proprietary models for portfolio optimization and risk assessment, generating consistent alpha across multiple funds."
    },
    {
      title: "Quantitative Analyst",
      company: "Asset Management Firm",
      period: "2019 - 2021",
      description: "Built algorithmic trading systems and risk management frameworks. Implemented automated portfolio rebalancing strategies that improved risk-adjusted returns by 18% while reducing operational overhead."
    },
    {
      title: "Defense Technology Consultant",
      company: "Defense Contractor",
      period: "2017 - 2019",
      description: "Provided strategic analysis on emerging defense technologies and cybersecurity frameworks. Evaluated operational security protocols and recommended technology adoption strategies for government clients."
    }
  ];

  const certifications = [
    "CFA Level II Candidate",
    "FRM (Financial Risk Manager)",
    "Security+ Certified",
    "Series 7 & 63 Licensed"
  ];

  return (
    <div className="min-h-screen bg-steel-gray font-sans">
      {/* Hero Section */}
      <section className="bg-light-steel-gray py-24">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-1 bg-cobalt-blue mx-auto mb-8"></div>
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight font-serif">
              Aidan Pesquera
            </h1>
            <p className="text-xl text-metallic-silver max-w-3xl mx-auto leading-relaxed">
              Finance professional and technical analyst focused on private equity, management consulting, and defense technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-12 border border-metallic-silver/20"
          >
            <h2 className="text-3xl font-semibold text-steel-gray mb-8 font-serif">
              Quantitative Precision. Strategic Execution.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-light-steel-gray leading-relaxed">
              <div>
                <p className="mb-6">
                  I specialize in the intersection of finance, technology, and defense, bringing quantitative rigor to investment decisions and strategic analysis. My expertise spans private equity, risk management, and defense technology evaluation.
                </p>
                <p>
                  With a strong foundation in financial modeling and technical analysis, I deliver data-driven insights that support complex investment decisions and operational strategies.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  My background includes developing automated trading systems, conducting due diligence on defense technologies, and building risk assessment frameworks for institutional investors.
                </p>
                <p>
                  I am actively pursuing opportunities in private equity, management consulting, and defense contracting where I can leverage my analytical skills and technical expertise.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-light-steel-gray py-24">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-20 h-1 bg-cobalt-blue mx-auto mb-8"></div>
            <h2 className="text-4xl font-light text-white mb-6 font-serif">
              Core Competencies
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 border border-metallic-silver/20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-cobalt-blue flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-steel-gray font-serif">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {skill.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="px-3 py-2 bg-light-steel-gray/10 text-light-steel-gray text-sm border border-metallic-silver/10 font-sans"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-20 h-1 bg-cobalt-blue mx-auto mb-8"></div>
            <h2 className="text-4xl font-light text-white mb-6 font-serif">
              Professional Experience
            </h2>
          </motion.div>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border-l-4 border-cobalt-blue"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-steel-gray font-serif">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-cobalt-blue font-medium bg-cobalt-blue/10 px-3 py-1 mt-2 md:mt-0 font-sans">
                    {exp.period}
                  </span>
                </div>
                <p className="text-cobalt-blue font-medium mb-4 font-sans">
                  {exp.company}
                </p>
                <p className="text-light-steel-gray leading-relaxed font-sans">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-light-steel-gray py-24">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-20 h-1 bg-cobalt-blue mx-auto mb-8"></div>
            <h2 className="text-4xl font-light text-white mb-6 font-serif">
              Certifications & Licenses
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 border border-metallic-silver/20 flex items-center gap-4"
              >
                <Award className="w-6 h-6 text-cobalt-blue flex-shrink-0" />
                <span className="text-steel-gray font-medium font-sans">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-12 border border-metallic-silver/20"
          >
            <h2 className="text-4xl font-light text-steel-gray mb-6 font-serif">
              Ready for New Opportunities
            </h2>
            <p className="text-light-steel-gray mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
              Seeking roles in private equity, management consulting, and defense contracting where I can apply my quantitative skills and strategic analysis expertise.
            </p>
            <Button className="bg-cobalt-blue hover:bg-cobalt-blue-alt text-white font-medium text-base px-8 py-3 flex items-center gap-2 mx-auto font-sans">
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
