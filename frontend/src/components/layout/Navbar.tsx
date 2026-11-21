
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Menu,
  X,
  Globe,
  ArrowUpRight,
  HardHat,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const navigation = [
  { path: "/", en: "Home", bn: "হোম" },
  { path: "/problem", en: "The Problem", bn: "সমস্যা" },
  { path: "/solution", en: "Our Solution", bn: "সমাধান" },
  { path: "/impact", en: "Our Impact", bn: "প্রভাব" },
  { path: "/team", en: "Our Team", bn: "আমাদের দল" },
  { path: "/roadmap", en: "Roadmap", bn: "ভবিষ্যৎ পরিকল্পনা" },
  { path: "/contact", en: "Contact", bn: "যোগাযোগ" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="container-main flex h-[76px] items-center justify-between gap-5">

        <Link to="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-shromik-navy text-shromik-amber">
            <HardHat size={23} strokeWidth={2.4} />
          </div>

          <div>
            <span className="block text-xl font-black tracking-tight text-shromik-navy">
              SHROMIK<span className="text-shromik-amber">.</span>
            </span>
            <span className="block text-[9px] font-semibold tracking-[2px] text-slate-500">
              WORKFORCE NETWORK
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-link relative py-2 text-[12px] font-bold ${
                  isActive
                    ? "text-shromik-navy"
                    : "text-slate-500 hover:text-shromik-amber"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t(item.en, item.bn)}
                  {isActive && (
                    <motion.span
                      layoutId="active-navigation"
                      className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-shromik-amber"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 400, damping: 30 }
                      }
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <button
            onClick={toggleLanguage}
            aria-label="Switch language"
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-shromik-navy hover:border-shromik-amber"
          >
            <Globe size={15} />
            {language === "en" ? "বাংলা" : "English"}
          </button>

          <Link
            to="/login"
            className="text-sm font-bold text-shromik-navy hover:text-shromik-amber"
          >
            {t("Login", "লগইন")}
          </Link>

          <Link
            to="/signup"
            className="flex items-center gap-2 rounded-lg bg-shromik-navy px-4 py-3 text-sm font-bold text-white transition hover:bg-shromik-amber hover:text-shromik-navy"
          >
            {t("Get Started", "শুরু করুন")}
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white xl:hidden"
          >
            <nav className="container-main flex flex-col gap-1 py-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-bold ${
                      isActive
                        ? "bg-amber-50 text-shromik-navy"
                        : "text-slate-600"
                    }`
                  }
                >
                  {t(item.en, item.bn)}
                </NavLink>
              ))}

              <div className="my-2 border-t border-slate-200" />

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-3 text-left text-sm font-bold"
              >
                <Globe size={17} />
                {language === "en" ? "বাংলা" : "English"}
              </button>

              <Link
                to="/login"
                className="rounded-lg px-4 py-3 text-sm font-bold"
              >
                {t("Login", "লগইন")}
              </Link>

              <Link
                to="/signup"
                className="rounded-lg bg-shromik-navy px-4 py-3 text-center text-sm font-bold text-white"
              >
                {t("Create Account", "অ্যাকাউন্ট তৈরি করুন")}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
