
import { Link } from "react-router-dom";
import { ArrowRight, HardHat } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-shromik-navy px-5 py-20">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container-main text-center"
      >
        <HardHat className="mx-auto mb-6 text-shromik-amber" size={42} />

        <h2 className="text-3xl font-black text-white md:text-5xl">
          {t("Build a better workforce.", "গড়ে তুলুন আরও ভালো কর্মসংস্থান।")}
          <br />
          <span className="text-shromik-amber">
            {t("Build with Shromik.", "গড়ুন শ্রমিকের সাথে।")}
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-300">
          {t(
            "Join a growing ecosystem built around fair opportunities, trusted hiring and dignified work.",
            "ন্যায্য সুযোগ, বিশ্বস্ত নিয়োগ এবং মর্যাদাপূর্ণ কাজের একটি নতুন ব্যবস্থায় যুক্ত হোন।"
          )}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 rounded-lg bg-shromik-amber px-7 py-4 font-bold text-shromik-navy transition hover:bg-yellow-300"
          >
            {t("Join Shromik", "শ্রমিকে যোগ দিন")}
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-shromik-navy"
          >
            {t("Partner With Us", "আমাদের সাথে যুক্ত হোন")}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
