import React from "react";

type ExpertiseItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const ExpertiseItem: React.FC<ExpertiseItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-surface rounded-xl p-6 border border-border hover:border-accent/30 transition-colors duration-200">
      <div className="text-accent [&>svg]:w-7 [&>svg]:h-7 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
};
