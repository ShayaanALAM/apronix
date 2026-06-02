import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");
  return (
    <p
      ref={ref}
      className="font-medium text-center leading-relaxed max-w-[560px] relative"
      style={{
        color: "#D7E2EA",
        fontSize: "clamp(1rem, 2vw, 1.35rem)",
      }}
    >
      {chars.map((ch, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        return (
          <span key={i} className="relative inline-block">
            <span className="opacity-0">{ch === " " ? "\u00A0" : ch}</span>
            <motion.span
              style={{ opacity }}
              className="absolute left-0 top-0"
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
