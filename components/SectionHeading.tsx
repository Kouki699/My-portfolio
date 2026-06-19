type SectionHeadingProps = {
  label: string;
  title: string;
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

  return (
    <div>
      <p className={isDark ? "section-label text-blue-200" : "section-label"}>
        {label}
      </p>
      <h2 className={isDark ? "section-title text-white" : "section-title"}>
        {title}
      </h2>
      {lead ? (
        <p className={isDark ? "section-lead text-white/72" : "section-lead"}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
