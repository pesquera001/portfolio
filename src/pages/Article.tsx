import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const blogPosts = [
  {
    slug: "defense-sector-pe-complexities",
    title: "Navigating Complexities in Defense Sector Private Equity Deals",
    subtitle: "Private equity investing in the defense sector presents a unique blend of opportunity and challenge. The convergence of national security concerns, rapidly evolving technologies, and regulatory scrutiny demands a specialized approach to sourcing, diligence, and value creation.",
    content: `Private equity investing in the defense sector presents a unique blend of opportunity and challenge. The convergence of national security concerns, rapidly evolving technologies, and regulatory scrutiny demands a specialized approach to sourcing, diligence, and value creation. As defense budgets continue to rise globally—with the U.S. alone allocating over $886 billion for defense in FY2024 (Congressional Budget Office, 2023)—investors are increasingly drawn to the sector's resilience and innovation potential.

A Cross-Industry Analogy: Pharmaceutical and Infrastructure Investing
The complexities in defense sector investing bear notable resemblance to heavily regulated industries like pharmaceuticals and infrastructure financing. Both sectors wrestle with intense regulatory oversight, long development or approval cycles, and politicized budgetary environments. For instance, pharmaceutical firms undergo multi-year clinical trials with uncertain outcomes and shifting FDA regulations, much like defense firms navigate prolonged procurement processes and export controls. Similarly, infrastructure projects require managing multi-stakeholder approvals and political risk over decades. This analogy underscores the need for private equity firms to deploy patient capital, build multidisciplinary expertise, and incorporate regulatory strategy early in the investment lifecycle.

Regulatory Complexity and Compliance Overhead
Defense-related investments trigger heightened regulatory scrutiny under frameworks like the Committee on Foreign Investment in the United States (CFIUS), International Traffic in Arms Regulations (ITAR), and the Defense Federal Acquisition Regulation Supplement (DFARS). CFIUS, in particular, has expanded its purview under FIRRMA, reviewing not only ownership but also non-controlling interests and access to sensitive technologies (U.S. Department of Treasury, 2023). Compliance isn't optional; lapses can result in criminal liability and severe reputational harm. Robust upfront diligence—particularly around ownership structures, IP provenance, and supply chain resilience—is critical. Investors often need to work with outside counsel, ex-regulatory officials, and cyber experts to ensure no blind spots exist prior to deal close.

Technology Disruption and Dual-Use Diligence
Emerging technologies—from hypersonics to AI-enabled ISR platforms—blur the lines between commercial and military applications. Private equity firms must assess both commercial scalability and defense procurement timelines, which can span years and depend heavily on politics, shifting threat assessments, and lobbying efficacy. Companies with dual-use technologies also face export control complications. For example, a drone startup selling both to the DoD and foreign commercial customers may inadvertently fall under complex multi-jurisdictional rules. Smart investors build compliance into the product roadmap and pricing strategy from Day 1, aligning legal, engineering, and business teams in a closed loop.

Strategic Value Creation: Beyond EBITDA
Traditional financial engineering is rarely sufficient in the defense vertical. Value creation in this space often hinges on strategic realignment, program capture optimization, and government relationship management. For example, Bain Capital's investment in Blue Canyon Technologies emphasized long-term contract pipeline visibility and IP monetization strategies rather than immediate EBITDA margin expansion. High-margin opportunities often stem from sole-source contracts, classified program access, or technological differentiation with limited commercial equivalents. Building trust with DoD program offices, maintaining cleared facilities, and hiring former program managers can be just as critical as optimizing working capital.

Cross-Border Investment Complexity
Foreign limited partners (LPs) in a PE fund can trigger additional scrutiny if their identity isn’t sufficiently walled off from sensitive assets. General partners must carefully structure entities and maintain firewalls to prevent downstream national security concerns. For example, even passive LP involvement from adversarial countries can draw unwanted attention. Investors must preempt these concerns with transparent disclosures and structured compliance mechanisms.

Conclusion
The defense sector demands not only capital but also domain fluency and regulatory foresight. Investors able to integrate legal, technological, and operational perspectives—while navigating shifting geopolitical fault lines—will be best positioned to generate outsized returns in this increasingly strategic sector.`
  },
  {
    slug: "operational-excellence-defense-pe",
    title: "Operational Excellence in PE: Driving Value in High-Tech Defense Portfolio Companies",
    subtitle: "Exploring frameworks to optimize operations, improve governance, and accelerate growth in defense-focused portfolio firms.",
    content: `# Operational Excellence in PE\n\nExploring frameworks to optimize operations, improve governance, and accelerate growth in defense-focused portfolio firms.`
  },
  {
    slug: "distressed-asset-investing-strategies",
    title: "Distressed Asset Investing: Key Strategies for Navigating Volatile Markets",
    subtitle: "An analysis of valuation challenges, restructuring tactics, and risk management in distressed fund portfolios.",
    content: `# Distressed Asset Investing\n\nAn analysis of valuation challenges, restructuring tactics, and risk management in distressed fund portfolios.`
  },
  {
    slug: "asset-traps-distressed-funds",
    title: "Asset Traps: Why Distressed Funds Fail to Exit",
    subtitle: "Niche, but high-value. Explores common pitfalls in distressed/special situations — like getting stuck in bankruptcy purgatory or misjudging control rights — and how smart operators structure around them.",
    content: `# Asset Traps: Why Distressed Funds Fail to Exit\n\nNiche, but high-value. Explores common pitfalls in distressed/special situations — like getting stuck in bankruptcy purgatory or misjudging control rights — and how smart operators structure around them.`
  }
];

const Article: React.FC = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#232a32] font-sans text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-normal mb-4">404 – Blog Post Not Found</h1>
        <Link to="/editorial" className="text-cobalt-blue underline font-mono">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#232a32] font-sans text-white py-24 px-4 md:px-0">
      <div className="max-w-3xl mx-auto">
        <Link to="/editorial" className="text-cobalt-blue underline font-mono mb-8 inline-block">← Back to Blog</Link>
        <h1 className="text-4xl md:text-5xl font-normal font-sans text-white mb-4">{post.title}</h1>
        <p className="font-mono text-lg text-metallic-silver mb-8">{post.subtitle}</p>
        <div className="prose prose-invert prose-lg max-w-none font-mono text-white">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Article;
