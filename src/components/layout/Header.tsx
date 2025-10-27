export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="SKED Club Logo" className="h-7 w-auto" />
        </a>
        <nav className="hidden items-center gap-6 text-base md:flex">
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
        <a
          href="#join"
          className="rounded-full bg-neutral-900 px-5 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md"
        >
          Join Alpha
        </a>
      </div>
    </header>
  );
}
