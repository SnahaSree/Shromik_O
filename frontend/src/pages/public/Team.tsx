
import { motion, useReducedMotion } from "framer-motion";
import { Link, Mail, UserRound } from "lucide-react";
import SectionHeading from "../../components/public/SectionHeading";
import CTASection from "../../components/public/CTASection";

const team = [
  {
    role: "Founder & CEO",
    name: "Founder profile",
    description: "Responsible for the vision, strategy and direction of Shromik.",
    category: "Leadership",
  },
  {
    role: "Chief Technology Officer",
    name: "CTO profile",
    description: "Leads engineering, product architecture and technology.",
    category: "Technology",
  },
  {
    role: "Operations Lead",
    name: "Operations profile",
    description: "Focuses on workforce operations and platform execution.",
    category: "Operations",
  },
  {
    role: "Strategic Advisor",
    name: "Advisor profile",
    description: "Supports strategy and responsible organizational development.",
    category: "Advisory",
  },
];

export default function Team() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="bg-shromik-dark px-5 py-24 text-white">
        <div className="container-main text-center">
          <p className="text-xs font-black tracking-[3px] text-shromik-amber">
            PEOPLE BEHIND THE MISSION
          </p>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            Built by people.
            <span className="text-shromik-amber"> For people.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
            A team committed to building a more accessible and transparent
            construction workforce ecosystem.
          </p>
        </div>
      </section>

      <section className="section-padding bg-shromik-light">
        <div className="container-main">
          <SectionHeading
            eyebrow="OUR PEOPLE"
            title="Meet the"
            highlight="team."
            description="Replace the sample profiles below with verified team member and advisor information."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person, index) => (
              <motion.div
                key={person.role}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="flex h-64 items-center justify-center bg-shromik-navy transition group-hover:bg-slate-800">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-shromik-amber bg-white/10 text-shromik-amber">
                    <UserRound size={55} />
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-700">
                    {person.category}
                  </span>

                  <h3 className="mt-3 text-lg font-black text-shromik-navy">
                    {person.name}
                  </h3>

                  <p className="mt-1 text-xs font-bold text-amber-700">
                    {person.role}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {person.description}
                  </p>

                  <div className="mt-5 flex gap-3 border-t border-slate-100 pt-4">
                    <a
                      href="mailto:info@shromik.example"
                      aria-label="Contact team"
                      className="rounded-lg bg-slate-100 p-2 text-shromik-navy hover:bg-amber-100"
                    >
                      <Mail size={17} />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="rounded-lg bg-slate-100 p-2 text-shromik-navy hover:bg-amber-100"
                    >
                      <Link size={17} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
