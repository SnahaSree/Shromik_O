
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import SectionHeading from "../../components/public/SectionHeading";
import StatCard from "../../components/public/StatCard";
import CTASection from "../../components/public/CTASection";

const workflowData = [
  { stage: "Profile", value: 100 },
  { stage: "Discovery", value: 85 },
  { stage: "Application", value: 65 },
  { stage: "Hiring", value: 45 },
];

export default function Impact() {
  const mapOptions = {
    center: [23.8, 90.4] as [number, number],
    zoom: 7,
    scrollWheelZoom: false,
    style: { height: "430px", width: "100%", borderRadius: "16px" },
  };

  return (
    <>
      <section className="bg-shromik-dark px-5 py-24 text-white">
        <div className="container-main">
          <p className="mb-5 text-xs font-black tracking-[3px] text-shromik-amber">
            MEASURING WHAT MATTERS
          </p>
          <h1 className="max-w-4xl text-5xl font-black md:text-7xl">
            Building an impact
            <span className="text-shromik-amber"> that matters.</span>
          </h1>
          <p className="mt-7 max-w-2xl leading-8 text-slate-300">
            Our ambition is to make employment more accessible,
            hiring more transparent and workforce management more organized.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="OUR IMPACT FRAMEWORK"
            title="Progress we intend"
            highlight="to measure."
            description="These are the indicators Shromik will track as real users and pilot projects are onboarded."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <StatCard
              value={2}
              label="Initial focus regions"
              description="Dhaka and Sylhet are proposed initial pilot locations, not confirmed completed pilots."
            />
            <StatCard
              value={2}
              label="User groups"
              description="Construction workers and contractors."
            />
            <StatCard
              value={4}
              label="Core impact indicators"
              description="Job access, hiring time, payment clarity and repeat engagement."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-shromik-light">
        <div className="container-main">
          <SectionHeading
            eyebrow="OUR GEOGRAPHIC FOCUS"
            title="Starting with"
            highlight="Dhaka and Sylhet."
            description="Illustrative locations for our proposed initial pilot planning."
          />

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <MapContainer {...mapOptions}>
              <TileLayer
                {...({
                  attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                } as any)}
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <CircleMarker
                center={[23.8103, 90.4125]}
                {...{ radius: 11 }}
                pathOptions={{ color: "#F59E0B", fillOpacity: 0.9 }}
              >
                <Popup>
                  <strong>Dhaka</strong>
                  <br />
                  Proposed pilot location
                </Popup>
              </CircleMarker>

              <CircleMarker
                center={[24.8949, 91.8687]}
                {...{ radius: 11 }}
                pathOptions={{ color: "#16A34A", fillOpacity: 0.9 }}
              >
                <Popup>
                  <strong>Sylhet</strong>
                  <br />
                  Proposed pilot location
                </Popup>
              </CircleMarker>
            </MapContainer>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Map markers indicate proposed planning locations only.
            They do not represent operational offices or completed pilots.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="WORKFORCE JOURNEY"
            title="A more organized"
            highlight="hiring journey."
            description="An illustrative funnel showing the stages we intend to measure. These values are not actual user or conversion data."
          />

          <div className="rounded-2xl border border-slate-200 p-5 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-black text-shromik-navy">
                Illustrative workflow
              </h3>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                Sample data
              </span>
            </div>

            <div className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={workflowData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="stage" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#F59E0B"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Normalized illustrative values, not measured conversion rates.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-shromik-navy text-white">
        <div className="container-main grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black tracking-[3px] text-shromik-amber">
              THE BIGGER PICTURE
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Contributing to a
              <span className="text-shromik-amber"> stronger economy.</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Better job matching, improved workforce visibility
              and more organized hiring can support construction
              productivity and inclusive economic participation.
            </p>
          </div>

          <div className="space-y-5">
            {[
              ["Employment access", "More discoverable opportunities for workers."],
              ["Hiring efficiency", "A more organized recruitment process."],
              ["Workforce records", "Better visibility into skills and experience."],
              ["Economic participation", "Supporting more inclusive labor markets."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-xl border border-white/10 p-5">
                <h3 className="font-bold text-shromik-amber">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
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
