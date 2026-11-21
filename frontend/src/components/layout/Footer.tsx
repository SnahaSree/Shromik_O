
import { Link } from "react-router-dom";
import { HardHat, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-shromik-dark text-white">
      <div className="container-main grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="rounded-xl bg-shromik-amber p-3 text-shromik-navy">
              <HardHat size={25} />
            </div>
            <span className="text-2xl font-black">
              SHROMIK<span className="text-shromik-amber">.</span>
            </span>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            {t(
              "Building a fairer construction workforce ecosystem through technology, transparency and opportunity.",
              "প্রযুক্তি, স্বচ্ছতা এবং সুযোগের মাধ্যমে নির্মাণ শ্রমিকদের জন্য একটি ন্যায্য কর্মসংস্থান ব্যবস্থা গড়ে তোলা।"
            )}
          </p>

          <p className="mt-6 font-bangla text-lg font-bold text-shromik-amber">
            বিশ্বস্ত নিয়োগ, মর্যাদার মজুর
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-shromik-amber">
            {t("Explore", "এক্সপ্লোর করুন")}
          </h3>

          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <Link to="/problem" className="hover:text-white">The Problem</Link>
            <Link to="/solution" className="hover:text-white">Our Solution</Link>
            <Link to="/impact" className="hover:text-white">Our Impact</Link>
            <Link to="/team" className="hover:text-white">Our Team</Link>
            <Link to="/roadmap" className="hover:text-white">Roadmap</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-shromik-amber">
            {t("Get Involved", "যুক্ত হোন")}
          </h3>

          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <Link to="/signup" className="hover:text-white">Join as Worker</Link>
            <Link to="/signup" className="hover:text-white">Join as Contractor</Link>
            <Link to="/contact" className="flex items-center gap-1 hover:text-white">
              Partnership <ArrowUpRight size={14} />
            </Link>
            <Link to="/login" className="hover:text-white">Login</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SHROMIK. All rights reserved.</p>
          <p>Made with purpose in Bangladesh 🇧🇩</p>
        </div>
      </div>
    </footer>
  );
}
