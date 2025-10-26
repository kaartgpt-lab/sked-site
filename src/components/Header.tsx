import React from "react";

const Header: React.FC = () => (
  <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
      {/* Logo Section */}
      <a href="#" className="flex items-center gap-2">
        <img src="/logo.png" alt="SKED Club Logo" className="h-7 w-auto" />
        <span className="hidden font-semibold text-neutral-800 sm:inline">
          SKED Club
        </span>
      </a>

      {/* Navigation */}
      <nav className="hidden items-center gap-6 text-sm md:flex">
        <a href="#about" className="hover:opacity-70">
          About
        </a>
        <a href="#membership" className="hover:opacity-70">
          Membership
        </a>
        <a href="#cities" className="hover:opacity-70">
          Cities
        </a>
        <a href="#app" className="hover:opacity-70">
          App
        </a>
        <a href="#join" className="hover:opacity-70">
          Join
        </a>
      </nav>

      {/* CTA Button */}
      <a
        href="#join"
        className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
      >
        Join Alpha
      </a>
    </div>
  </header>
);

export default Header;
