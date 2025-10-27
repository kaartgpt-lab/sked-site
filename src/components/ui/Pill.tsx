import React from "react";

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-1 text-sm font-semibold tracking-wide">
    {children}
  </span>
);

export default Pill;
