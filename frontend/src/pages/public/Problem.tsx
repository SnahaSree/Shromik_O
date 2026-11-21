
import { ShieldAlert, Wallet, FileWarning } from "lucide-react";
import SectionHeading from "../../components/public/SectionHeading";
import StatCard from "../../components/public/StatCard";
import CTASection from "../../components/public/CTASection";

const challenges = [
  {
    icon: Wallet,
    title: "Uncertain Payments",
    description: "Workers can struggle with unclear wage agreements, delayed payments and limited documentation.",
  },
  {
    icon: ShieldAlert,
    title: "Workplace Safety",
    description: "Construction sites can expose workers to falls, electrical hazards and unsafe working conditions.",
  },
  {
    icon: FileWarning,
    title: "Limited Protection",
    description: "Workers may have difficulty accessing information about compensation, benefits and support.",
  },
];

export default function Problem() {
  return (
    <>
      <section className="bg-shromik-dark px-5 py-24 text-white">
        <div className="container-main">
          <p className="mb-5 text-xs font-black tracking-[3px] text-shromik-amber">
            UNDERSTANDING THE CHALLENGE
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            The people who
            <span className="text-shromik-amber"> build our cities </span>
            deserve better.
          </h1>
          <p className="mt-7 max-w-2xl leading-8 text-slate-300">
            Construction workers are essential to Bangladesh's development.
            Yet employment transparency, workplace safety and social
            protection remain important challenges.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="WORKPLACE SAFETY"
            title="The numbers demand"
            highlight="attention."
            description="Published newspaper and field-monitoring reports reveal serious construction workplace safety concerns."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <StatCard
              value={149}
              label="Construction worker deaths"
              description="Reported in Bangladesh during 2023 by OSHE Foundation."
            />
            <StatCard
              value={72}
              label="Construction worker injuries"
              description="Reported in Bangladesh during 2023 by OSHE Foundation."
            />
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            Source: OSHE Foundation workplace accident survey, reported
            by UNB on 29 December 2023. Newspaper and field-source
            monitoring; actual incidents may differ.
          </p>

          <a
            href="https://unb.com.bd/category/Bangladesh/oshe-records-1432-workplace-deaths-in-2023/128266"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-bold text-amber-700 underline"
          >
            Read the published report
          </a>
        </div>
      </section>

      <section className="section-padding bg-shromik-light">
        <div className="container-main">
          <SectionHeading
            eyebrow="STRUCTURAL CHALLENGES"
            title="More than just"
            highlight="finding a job."
            description="The challenges affect workers throughout the employment journey."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {challenges.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8"
                >
                  <Icon className="mb-6 text-amber-600" size={34} />
                  <h3 className="text-xl font-black text-shromik-navy">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
