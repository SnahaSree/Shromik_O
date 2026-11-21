
import { useState} from "react";
import { motion } from "framer-motion";
import {
  UserRound, Building2, UserPlus, Search,
  ClipboardCheck, MessageSquare, CheckCircle2,
} from "lucide-react";
import SectionHeading from "../../components/public/SectionHeading";
import CTASection from "../../components/public/CTASection";

const flows = {
  worker: {
    title: "Your next opportunity starts here.",
    description: "A worker can create a profile, discover jobs and manage applications.",
    steps: [
      ["01", "Create your profile", "Add your skills, location and experience."],
      ["02", "Discover jobs", "Browse opportunities matching your abilities."],
      ["03", "Apply for work", "Submit applications and follow their progress."],
      ["04", "Build your reputation", "Collect feedback and experience records."],
    ],
  },
  contractor: {
    title: "Find the right people for your project.",
    description: "Contractors can publish job openings and organize recruitment.",
    steps: [
      ["01", "Create your account", "Register your contractor profile."],
      ["02", "Publish a job", "Describe skills, location, wages and requirements."],
      ["03", "Review applicants", "Explore worker profiles and applications."],
      ["04", "Manage recruitment", "Update hiring status and provide feedback."],
    ],
  },
};

export default function Solution() {
  const [active, setActive] = useState<"worker" | "contractor">("worker");
  const [channel, setChannel] = useState<"app" | "ussd">("app");
  const data = flows[active];

  return (
    <>
      <section className="bg-shromik-dark px-5 py-24 text-white">
        <div className="container-main text-center">
          <p className="mb-5 text-xs font-black tracking-[3px] text-shromik-amber">
            ONE PLATFORM. TWO EXPERIENCES.
          </p>
          <h1 className="text-5xl font-black md:text-7xl">
            How Shromik <span className="text-shromik-amber">works.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            A connected workforce platform designed for both
            construction workers and contractors.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="CHOOSE YOUR EXPERIENCE"
            title="Designed for"
            highlight="both sides."
            description="Explore how each user interacts with Shromik."
          />

          <div className="mx-auto mb-12 flex max-w-md rounded-xl bg-slate-100 p-1.5">
            <button
              onClick={() => setActive("worker")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-4 text-sm font-bold transition ${
                active === "worker"
                  ? "bg-shromik-navy text-white shadow"
                  : "text-slate-600"
              }`}
            >
              <UserRound size={18} /> For Labor
            </button>

            <button
              onClick={() => setActive("contractor")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-4 text-sm font-bold transition ${
                active === "contractor"
                  ? "bg-shromik-navy text-white shadow"
                  : "text-slate-600"
              }`}
            >
              <Building2 size={18} /> For Contractors
            </button>
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <div>
              <h3 className="text-3xl font-black text-shromik-navy">
                {data.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-500">
                {data.description}
              </p>

              <div className="mt-9 space-y-6">
                {data.steps.map(([number, title, description]) => (
                  <div key={number} className="flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 font-black text-amber-700">
                      {number}
                    </span>
                    <div>
                      <h4 className="font-bold text-shromik-navy">
                        {title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

                <div className="mb-8 flex justify-center gap-3">
  <button
    onClick={() => setChannel("app")}
    className={`rounded-lg px-5 py-3 text-sm font-bold ${
      channel === "app"
        ? "bg-amber-500 text-slate-950"
        : "bg-slate-100 text-slate-600"
    }`}
  >
    Smartphone App
  </button>

  <button
    onClick={() => setChannel("ussd")}
    className={`rounded-lg px-5 py-3 text-sm font-bold ${
      channel === "ussd"
        ? "bg-amber-500 text-slate-950"
        : "bg-slate-100 text-slate-600"
    }`}
  >
    Button Phone / USSD
  </button>
</div>

            <div className="rounded-3xl bg-shromik-navy p-6 text-white sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold tracking-widest text-shromik-amber">
                    SHROMIK APP
                  </p>
                  <h3 className="mt-2 text-xl font-black">
                    {active === "worker" ? "Worker Dashboard" : "Contractor Dashboard"}
                  </h3>
                </div>
                {active === "worker"
                  ? <UserRound className="text-shromik-amber" size={32} />
                  : <Building2 className="text-shromik-amber" size={32} />
                }
              </div>

              <div className="mt-7 rounded-xl bg-white p-5 text-shromik-navy">
                <p className="text-xs font-bold text-slate-400">
                  {active === "worker" ? "YOUR WORKSPACE" : "PROJECT WORKSPACE"}
                </p>
                <h4 className="mt-2 text-xl font-black">
                  {active === "worker" ? "Welcome, Worker" : "Manage Your Hiring"}
                </h4>

                <div className="mt-6 space-y-3">
                  {(
  active === "worker"
    ? [
        { icon: Search, label: "Browse available jobs" },
        { icon: ClipboardCheck, label: "Track applications" },
        { icon: MessageSquare, label: "Manage feedback" },
      ]
    : [
        { icon: UserPlus, label: "Find skilled workers" },
        { icon: ClipboardCheck, label: "Manage job applications" },
        { icon: MessageSquare, label: "Review communication" },
      ]
).map(({ icon: Icon, label }, index) => (
  <div
    key={index}
    className="flex items-center gap-3 rounded-lg bg-slate-50 p-4"
  >
    <Icon size={20} className="text-amber-600" />
    <span className="text-sm font-semibold">{label}</span>
    <CheckCircle2 className="ml-auto text-green-600" size={17} />
  </div>
))}
                </div>
              </div>

              <p className="mt-5 text-center text-xs text-slate-400">
                Illustrative interface preview — not a live account.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
