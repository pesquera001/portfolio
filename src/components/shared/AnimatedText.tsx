import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedText({ texts, el: Wrapper = "p", className }: { texts: string[]; el?: any; className?: string }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Wrapper className={className}>{texts[index]}</Wrapper>
      </motion.div>
    </AnimatePresence>
  );
} 