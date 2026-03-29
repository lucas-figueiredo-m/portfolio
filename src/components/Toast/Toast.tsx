import React from "react";

type ToastProps = {
  icon: React.ReactNode;
  color: string;
  label: string;
};

export const Toast: React.FC<ToastProps> = ({ icon, label, color }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <span style={{ color }} className="[&>svg]:w-6 [&>svg]:h-6 shrink-0">
        {icon}
      </span>
      <p className="text-sm text-text-primary">{label}</p>
    </div>
  );
};
