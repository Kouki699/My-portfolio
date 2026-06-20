type SectionHeadingProps = {
  label: string;
  title: string | string[];
  lead?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  label,
  title,
  lead,
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const titleClass = isDark ? "section-title text-white" : "section-title";

  return (
    <div className="max-w-5xl">
      <p className={isDark ? "section-label text-blue-200" : "section-label"}>
        {label}
      </p>
      <h2 className={titleClass}>
        {Array.isArray(title)
          ? title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))
          : title}
      </h2>
      {lead ? (
        <p className={isDark ? "section-lead text-white/72" : "section-lead"}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
