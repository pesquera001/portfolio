import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const blogPosts = [
  {
    slug: "defense-sector-pe-complexities",
    title: "Navigating Complexities in Defense Sector Private Equity Deals",
    subtitle: "A deep dive into regulatory hurdles, emerging technologies, and strategic value creation unique to defense investments.",
    content: `# Navigating Complexities in Defense Sector Private Equity Deals\n\nA deep dive into regulatory hurdles, emerging technologies, and strategic value creation unique to defense investments.`
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
