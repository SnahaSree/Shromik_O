
import { motion, useReducedMotion } from "framer-motion";
import {
  Flag,
  Users,
  MapPinned,
  TrendingUp,
  Globe,
} from "lucide-react";
import CTASection from "../../components/public/CTASection";

const milestones = [
  {
    year: "YEAR 01",
    title: "Foundation",
    icon: Flag,
    description: "Build the platform, validate workforce needs and establish initial partnerships.",
    items: ["Platform development", "Worker and contractor onboarding", "Initial pilot preparation"],
  },
  {
    year: "YEAR 02",
    title: "Regional Growth",
    icon: Users,
    description: "Expand participation and improve the hiring experience.",
    items: ["Regional partnerships", "Improved verification", "Workforce engagement"],
  },
  {
    year: "YEAR 03",
    title: "Technology Expansion",
    icon: TrendingUp,
    description: "Introduce deeper analytics and intelligent workforce tools.",
    items: ["AI-assisted job matching", "Workforce analytics", "Digital experience improvements"],
  },
  {
    year: "YEAR 04",
    title: "National Reach",
    icon: MapPinned,
    description: "Work toward wider geographical coverage across Bangladesh.",
    items: ["Additional district coverage", "More institutional partnerships", "Operational scaling"],
  },
  {
    year: "YEAR 05",
    title: "Ecosystem Maturity",
    icon: Globe,
    description: "Develop a sustainable workforce ecosystem with broader opportunities.",
    items: ["Advanced workforce infrastructure", "Long-term partnerships", "Sustainable operations"],
  },
];

export default function Roadmap() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="bg-shromik-dark px-5 py-24 text-white">
        <div className="container-main text-center">
          <p className="text-xs font-black tracking-[3px] text-shromik-amber">
            OUR JOURNEY AHEAD
          </p>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            Five years.
            <span className="text-shromik-amber"> One mission.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
            A long-term vision for a more connected construction
            workforce ecosystem.
          </p>
        </div>
      </section>

      <section className="section-padding bg-shromik-light">
        <div className="container-main max-w-4xl">
          <div className="relative">
            <div className="absolute bottom-0 left-[19px] top-0 w-1 rounded-full bg-amber-200 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((item, index) => {
                const Icon = item.icon;
                const right = index % 2 !== 0;

                return (
                  <motion.div
                    key={item.year}
                    initial={reduceMotion ? false : { opacity: 0, x: right ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`relative pl-16 md:w-1/2 md:pl-0 ${
                      right ? "md:ml-auto md:pr-0 md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <div className="absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-shromik-light bg-shromik-amber text-shromik-navy md:left-auto md:right-[-20px]">
                      {right && " "}
                      <Icon size={18} />
                    </div>

                    {right && (
                      <div className="hidden md:block">
                        <div className="absolute left-[-20px] top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-shromik-light bg-shromik-amber text-shromik-navy">
                          <Icon size={18} />
                        </div>
                      </div>
                    )}

                    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                      <span className="text-xs font-black tracking-widest text-amber-700">
                        {item.year}
                      </span>

                      <h3 className="mt-3 text-2xl font-black text-shromik-navy">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-500">
                        {item.description}
                      </p>

                      <ul className="mt-6 space-y-3">
                        {item.items.map((point) => (
                          <li key={point} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                            <span className="h-2 w-2 rounded-full bg-shromik-amber" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <p className="mt-12 text-center text-xs text-slate-500">
            Proposed strategic milestones. Timelines and targets are subject to validation and execution.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
