export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold text-lg">SKED Club</div>
            <p className="mt-2 text-sm text-zinc-600 max-w-xs">Work from curated cafés with community, weekly sessions, and member perks. City‑by‑city rollout.</p>
          </div>
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>contact@sked.club</li>
              <li>+91 63768 25137</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Follow</div>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-zinc-100">
                <span className="text-sm">Instagram</span>
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-zinc-100">
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} Sked Club. All rights reserved.</div>
      </div>
    </footer>
  )
}