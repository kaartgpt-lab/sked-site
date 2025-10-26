import React, { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
}

const Pill: React.FC<PillProps> = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-neutral-900 text-white px-3 py-1 text-xs font-semibold tracking-wide">
    {children}
  </span>
);

export default Pill;
