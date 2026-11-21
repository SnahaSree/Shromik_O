
import { useState, type ChangeEvent } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Handshake,
} from "lucide-react";
import SectionHeading from "../../components/public/SectionHeading";
import CTASection from "../../components/public/CTASection";

export default function Contact() {
  const [formType, setFormType] = useState<"contact" | "partnership">("contact");

  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

const update = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

  return (
    <>
      <section className="bg-shromik-dark px-5 py-24 text-white">
        <div className="container-main text-center">
          <p className="text-xs font-black tracking-[3px] text-shromik-amber">
            LET'S CONNECT
          </p>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            Let's build
            <span className="text-shromik-amber"> together.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
            Have a question, partnership idea or opportunity?
            We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-shromik-light">
        <div className="container-main">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Start a"
            highlight="conversation."
            description="Reach out to discuss workforce opportunities and partnerships."
          />

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              {[
                [Mail, "Email", "Add your official Shromik email"],
                [Phone, "Phone", "Add your official contact number"],
                [MapPin, "Location", "Bangladesh"],
                [Handshake, "Partnerships", "Let's explore collaboration"],
              ].map(([Icon, title, value]: any) => (
                <div key={title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                  <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-shromik-navy">{title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:col-span-3">
              <div className="mb-7 flex flex-wrap gap-3">
                <button
                  onClick={() => setFormType("contact")}
                  className={`rounded-lg px-5 py-3 text-sm font-bold ${
                    formType === "contact"
                      ? "bg-shromik-navy text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  General Inquiry
                </button>

                <button
                  onClick={() => setFormType("partnership")}
                  className={`rounded-lg px-5 py-3 text-sm font-bold ${
                    formType === "partnership"
                      ? "bg-shromik-navy text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  Partnership
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-shromik-navy">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                    maxLength={100}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-shromik-navy">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    required
                    maxLength={254}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  />
                </div>

                {formType === "partnership" && (
                  <div>
                    <label htmlFor="organization" className="mb-2 block text-sm font-bold text-shromik-navy">
                      Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      value={form.organization}
                      onChange={update}
                      required
                      maxLength={150}
                      placeholder="Organization name"
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-amber-500"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-bold text-shromik-navy">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={update}
                    required
                    maxLength={150}
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-shromik-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={update}
                    required
                    maxLength={3000}
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full resize-y rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled
                  className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-shromik-navy px-6 py-4 font-bold text-white opacity-60"
                >
                  <Send size={17} />
                  Backend integration coming in Phase 4
                </button>

                <p className="text-xs leading-5 text-slate-400">
                  Frontend preview only. This form does not transmit or save your information yet.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
