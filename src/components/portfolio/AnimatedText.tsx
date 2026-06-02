import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

function Char({ ch, start, end, progress }: { ch: string; start: number; end: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const display = ch === " " ? "\u00A0" : ch;
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{display}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {display}
      </motion.span>
    </span>
  );
}

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
      style={{ color: "#D7E2EA", fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
    >
      {chars.map((ch, i) => (
        <Char
          key={i}
          ch={ch}
          start={i / chars.length}
          end={i / chars.length + 1 / chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
