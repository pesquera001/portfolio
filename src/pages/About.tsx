import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-steel-gray font-sans">
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-8">
          <motion.h1
            className="text-4xl md:text-5xl font-normal text-white mb-8 font-sans"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            researcher. strategist-in-training. builder of frameworks that simulate the real world of private equity and defense innovation.
          </motion.h1>
          <motion.p
            className="mb-8 text-lg text-metallic-silver font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            I’m a senior at Arizona State University studying Business Administration with a minor in Economics, with a growing focus on strategic research at the intersection of private capital, and strategic operations across defense and commercial domains. While I haven’t yet worked in the industry, I spend my time building simulations, reading internal decks and case studies, and reverse-engineering the processes that top firms use to make decisions.
          </motion.p>
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-normal text-cobalt-blue mb-4 font-sans">what drives me</h2>
            <p className="mb-4 font-mono text-steel-gray">
              I operate under a simple idea: Act like a professional before you become one.<br />That means I:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-mono text-steel-gray">
              <li>Build mock investment theses using real-world data</li>
              <li>Design diligence frameworks inspired by consulting playbooks</li>
              <li>Create operational models that simulate PE-owned company growth</li>
              <li>Read everything from KKR whitepapers to declassified DoD procurement memos</li>
              <li>Use tools like Python, Notion, Airtable, and GPT-4 to bring ideas to life</li>
            </ul>
            <p className="mt-4 font-mono text-steel-gray">
              My research is self-directed, but always tied to practical value creation — the kind of thinking used by operators and strategists in high-leverage environments.
            </p>
          </motion.div>
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl font-normal text-cobalt-blue mb-4 font-sans">current projects (in progress)</h2>
            <ul className="list-disc pl-6 space-y-2 font-mono text-steel-gray">
              <li>Mock Fund I: A simulated investment strategy focused on dual-use aerospace and supply chain infrastructure.</li>
              <li>Defense Tech Scoring Model: A framework to evaluate early-stage dual-use AI startups based on procurement viability and IP defensibility.</li>
              <li>Value Creation Tracker: A Notion-based dashboard to simulate cost-reduction initiatives post-acquisition.</li>
            </ul>
          </motion.div>
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-normal text-cobalt-blue mb-4 font-sans">where i’m headed</h2>
            <p className="mb-4 font-mono text-steel-gray">
              My goal is to work at the intersection of capital, operational design, and national strategy — whether that’s through private equity, consulting, or dual-use venture. I’m seeking internships, mentorships, or field-facing experiences that push me deeper into these environments.
            </p>
            <p className="font-mono text-steel-gray">
              I’m not chasing a title — I’m chasing insight, responsibility, and long-term leverage.
            </p>
          </motion.div>
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl font-normal text-cobalt-blue mb-4 font-sans">let’s connect</h2>
            <p className="mb-4 font-mono text-steel-gray">
              If you’re working in PE, strategy, or defense and have advice, opportunities, or even a reading list to share — I’d love to connect.
            </p>
            <div className="flex flex-col gap-2 font-mono">
              <a href="mailto:aidan@yourdomain.com" className="underline text-cobalt-blue">aidan@yourdomain.com</a>
              <a href="https://linkedin.com/in/aidanpesquera" className="underline text-cobalt-blue">LinkedIn</a>
              <a href="/resume.pdf" className="underline text-cobalt-blue">View Resume</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
