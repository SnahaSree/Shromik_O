
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Users,
  BriefcaseBusiness,
  
  CheckCircle2,
  HardHat,
} from "lucide-react";

import SectionHeading from "../../components/public/SectionHeading";
import StatCard from "../../components/public/StatCard";
import CTASection from "../../components/public/CTASection";
import { useLanguage } from "../../context/LanguageContext";

const features = [
  {
    icon: Users,
    title: "Verified Workforce",
    bn: "যাচাইকৃত কর্মী",
    description: "Connect with workers through structured profiles and skill information.",
    descBn: "সুশৃঙ্খল প্রোফাইল এবং দক্ষতার তথ্যের মাধ্যমে কর্মীদের খুঁজুন।",
  },
  {
    icon: BriefcaseBusiness,
    title: "Smart Job Matching",
    bn: "স্মার্ট চাকরি খোঁজা",
    description: "Discover opportunities that match skills, location and experience.",
    descBn: "দক্ষতা, অবস্থান এবং অভিজ্ঞতার সাথে মিলিয়ে কাজ খুঁজুন।",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Hiring",
    bn: "স্বচ্ছ নিয়োগ",
    description: "Bring clearer job details, communication and feedback into hiring.",
    descBn: "নিয়োগে কাজের তথ্য, যোগাযোগ এবং মতামতকে আরও স্বচ্ছ করুন।",
  },
];

export default function Home() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-shromik-dark text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=85"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-shromik-dark via-shromik-dark/95 to-shromik-dark/50" />
        </div>

        <div className="container-main grid min-h-[650px] items-center gap-12 py-24 lg:grid-cols-2">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold text-amber-300">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              BANGLADESH'S WORKFORCE ECOSYSTEM
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              {t("Work with", "কাজের সাথে")}
              <br />
              <span className="text-shromik-amber">
                {t("Dignity.", "মর্যাদা।")}
              </span>
              <br />
              {t("Build with", "গড়ুন")}
              <br />
              {t("Trust.", "বিশ্বাসের সাথে।")}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300">
              {t(
                "Shromik connects construction workers and contractors through trusted hiring, transparent opportunities and a more organized workforce.",
                "শ্রমিক বিশ্বস্ত নিয়োগ, স্বচ্ছ সুযোগ এবং সুশৃঙ্খল কর্মসংস্থানের মাধ্যমে নির্মাণ শ্রমিক ও ঠিকাদারদের সংযুক্ত করে।"
              )}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-shromik-amber px-7 py-4 font-bold text-shromik-navy transition hover:bg-yellow-300"
              >
                {t("Get Started", "শুরু করুন")}
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/solution"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-shromik-navy"
              >
                {t("Explore Solution", "সমাধান দেখুন")}
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-7 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-shromik-amber" size={18} />
                Worker-first
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-shromik-amber" size={18} />
                Transparent
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-shromik-amber" size={18} />
                Bangladesh-focused
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-3xl bg-shromik-amber/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-3 shadow-glow backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1000&q=85"
                alt="Construction professionals working at a building site"
                className="h-[380px] w-full rounded-2xl object-cover sm:h-[460px]"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-shromik-dark/90 p-5 backdrop-blur-lg">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-shromik-amber p-3 text-shromik-navy">
                    <HardHat size={26} />
                  </div>
                  <div>
                    <p className="font-bold text-white">A stronger workforce</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Connecting opportunity with skilled people.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container-main">
          <SectionHeading
            eyebrow="OUR MISSION"
            title="Opportunity should be"
            highlight="accessible to everyone."
            description="We are building a more connected construction workforce ecosystem for Bangladesh."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              value={2}
              suffix=""
              label="Sides connected"
              description="Workers and contractors in one ecosystem."
            />
            <StatCard
              value={7}
              suffix=""
              label="Public platform pages"
              description="Information, impact and partnership."
            />
            <StatCard
              value={2}
              suffix=""
              label="Languages"
              description="English and Bangla accessibility."
            />
            <StatCard
              value={1}
              suffix=""
              label="Shared mission"
              description="More dignified construction employment."
            />
          </div>
          <p className="mt-5 text-center text-xs text-slate-400">
            These figures describe platform scope, not verified workforce or pilot outcomes.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding bg-shromik-light">
        <div className="container-main">
          <SectionHeading
            eyebrow="WHY SHROMIK"
            title="A better way to"
            highlight="work together."
            description="We are designing a digital infrastructure that makes construction hiring more organized, transparent and accessible."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl"
                >
                  <div className="mb-7 inline-flex rounded-xl bg-amber-50 p-4 text-amber-600 transition group-hover:bg-shromik-amber group-hover:text-shromik-navy">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-black text-shromik-navy">
                    {t(feature.title, feature.bn)}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {t(feature.description, feature.descBn)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="Three steps."
            highlight="One ecosystem."
            description="A simple journey designed for both sides of construction employment."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["01", "Create a profile", "Workers and contractors join with relevant information."],
              ["02", "Connect and discover", "Find skilled workers or relevant job opportunities."],
              ["03", "Work and build trust", "Manage applications, hiring and feedback."],
            ].map(([number, title, description]) => (
              <div key={number} className="relative rounded-2xl bg-shromik-navy p-8 text-white">
                <span className="text-5xl font-black text-shromik-amber/40">
                  {number}
                </span>
                <h3 className="mt-7 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
