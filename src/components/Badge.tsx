import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-gray-700 backdrop-blur">
    {children}
  </span>
);

export default Badge;
