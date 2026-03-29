import React from "react";

type ToastProps = {
  icon: React.ReactNode;
  color: string;
  label: string;
};

export const Toast: React.FC<ToastProps> = ({ icon, label, color }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-8">
      <span style={{ color }} className="[&>svg]:w-16 [&>svg]:h-16">
        {icon}
      </span>
      <h2 className="text-[0.95rem] text-white">{label}</h2>
    </div>
  );
};
