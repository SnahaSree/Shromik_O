
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  dark?: boolean;
}

export default function StatCard({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  dark = false,
}: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: reduceMotion ? 0 : 0.5 }}
      className={`rounded-2xl border p-7 ${
        dark
          ? "border-white/10 bg-white/5"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      <h3 className="text-4xl font-black tracking-tight text-shromik-amber">
        {prefix}
        {inView ? value.toLocaleString() : "0"}
        {suffix}
      </h3>

      <p
        className={`mt-4 font-bold ${
          dark ? "text-white" : "text-shromik-navy"
        }`}
      >
        {label}
      </p>

      <p
        className={`mt-2 text-sm leading-6 ${
          dark ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}
