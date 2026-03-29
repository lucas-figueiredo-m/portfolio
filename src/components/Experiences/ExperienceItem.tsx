import React from "react";

type ExperienceItemProps = {
  from: string;
  to: string;
  title: string;
  description: string;
};

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
};

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  from,
  to,
  title,
  description,
}) => {
  const fromText = formatDate(from);
  const toText = formatDate(to);

  return (
    <div
      className={[
        "group flex flex-col sm:flex-row gap-1 sm:gap-8",
        "p-4 -mx-4 rounded-lg",
        "border-l-2 border-transparent",
        "transition-all duration-300 ease-in-out",
        "hover:bg-surface/50 hover:border-l-2 hover:border-accent",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      ].join(" ")}
      tabIndex={0}
      role="article"
    >
      <span className="text-sm text-text-tertiary font-mono tabular-nums min-w-[140px] pt-1 shrink-0">
        {`${fromText} — ${toText}`}
      </span>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary mt-1">{description}</p>
      </div>
    </div>
  );
};
