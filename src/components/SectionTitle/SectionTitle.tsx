import React from "react";

type SectionTitleProps = {
  title: string | React.ReactNode;
  label?: string;
  description?: string | React.ReactNode;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  label,
  description,
}) => {
  return (
    <div className="w-full flex flex-col items-start gap-3">
      {label && (
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-secondary">{description}</p>
      )}
    </div>
  );
};
