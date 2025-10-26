import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => (
  <section
    id={id}
    className={`relative w-full mx-auto px-2 sm:px-4 lg:px-6 py-12 md:py-20 min-h-[95vh] ${
      className || ""
    }`}
  >
    {children}
  </section>
);

export default Section;
