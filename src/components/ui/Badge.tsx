import React from "react";

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-1 text-sm font-medium tracking-wide text-gray-700 backdrop-blur">
    {children}
  </span>
);

export default Badge;
