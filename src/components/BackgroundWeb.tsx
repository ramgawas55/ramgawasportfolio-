"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundWeb() {
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.5]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: drift, opacity: glow }}
        className="absolute inset-0 web-grid"
      />
      <div className="absolute inset-0 scanlines opacity-30" />
      <motion.div
        style={{ opacity: glow }}
        className="absolute -left-48 top-24 h-72 w-72 rounded-full bg-[#ff2d55]/20 blur-3xl"
      />
      <motion.div
        style={{ opacity: glow }}
        className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#4dff8a]/20 blur-3xl"
      />
    </div>
  );
}
