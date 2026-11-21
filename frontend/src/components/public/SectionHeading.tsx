
interface Props {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  light = false,
}: Props) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-4 text-xs font-black uppercase tracking-[3px] text-amber-600">
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-black tracking-tight sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-shromik-navy"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>

      <p className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
        light ? "text-slate-300" : "text-slate-500"
      }`}>
        {description}
      </p>
    </div>
  );
}
