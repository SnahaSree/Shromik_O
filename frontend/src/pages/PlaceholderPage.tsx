
import { Link } from "react-router-dom";
import { ArrowRight, HardHat } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Props {
  title: string;
  subtitle: string;
}

export default function PlaceholderPage({ title, subtitle }: Props) {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-shromik-light px-5 py-20">
      <div className="max-w-2xl text-center">

        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-shromik-navy text-shromik-amber">
          <HardHat size={32} />
        </div>

        <p className="mb-4 text-xs font-black uppercase tracking-[3px] text-shromik-amber">
          SHROMIK WORKFORCE NETWORK
        </p>

        <h1 className="text-4xl font-black tracking-tight text-shromik-navy md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-lg leading-7 text-slate-500">
          {subtitle}
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-shromik-navy px-6 py-3 font-bold text-white transition hover:bg-shromik-amber hover:text-shromik-navy"
          >
            {t("Back to Home", "হোমে ফিরে যান")}
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
