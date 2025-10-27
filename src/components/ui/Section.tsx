import React from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, className, children }) => (
  <section
    id={id}
    className={`relative w-full px-2 sm:px-4 lg:px-6 ${className || ""}`}
  >
    <div className="mx-auto w-full max-w-7xl">{children}</div>
  </section>
);

export default Section;
