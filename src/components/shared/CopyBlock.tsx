import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CopyBlock({ content, language = "text" }: { content: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative group border border-metallic-silver/20">
      <div className="bg-[#232a32] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#232a32] border-b border-metallic-silver/20">
          <span className="font-mono text-xs font-medium text-light-steel-gray">
            {language.toUpperCase()}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-light-steel-gray/10 transition-colors duration-200 text-light-steel-gray hover:text-steel-gray border border-metallic-silver/20"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-1"
                >
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-medium">Copied</span>
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-1"
                >
                  <Copy className="w-4 h-4" />
                  <span className="text-xs font-medium">Copy</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        {/* Content */}
        <div className="p-0 bg-[#232a32]">
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            customStyle={{
              background: '#232a32',
              fontSize: '1rem',
              margin: 0,
              borderRadius: 0,
              padding: '1.5rem',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              overflow: 'visible',
            }}
            wrapLongLines={true}
            showLineNumbers={false}
          >
            {content}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
