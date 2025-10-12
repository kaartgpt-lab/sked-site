import { InstagramIcon, LinkedInIcon } from "./Icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-sm md:text-base font-semibold tracking-wide text-zinc-900">
          <span className="mr-2 font-bold">SKED CLUB</span>
          <span className="px-2 py-1 rounded-md bg-orange-100 text-orange-700 text-xs align-middle">
            Alpha live now
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Instagram"
            className="p-2 rounded-full hover:bg-zinc-100"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:bg-zinc-100"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
