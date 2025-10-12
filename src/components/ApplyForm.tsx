import { useState } from "react";
import { StackSection } from "./Sections";

export default function ApplyForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setDone(true);
    setLoading(false);
  }

  return (
    <StackSection bg="bg-zinc-50">
      <div id="apply" className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
          Apply for membership
        </h2>
        <p className="mt-2 text-zinc-700">
          Tell us about you and your city. We’re opening limited slots
          city‑by‑city.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-white border rounded-md p-6 space-y-4"
        >
          {!done ? (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">First name</label>
                  <input
                    required
                    placeholder="Sarthak"
                    className="mt-1 w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Last name</label>
                  <input
                    required
                    placeholder="Tiwari"
                    className="mt-1 w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@sked.club"
                    className="mt-1 w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">WhatsApp number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91‑XXXXXXXXXX"
                    className="mt-1 w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">City</label>
                  <input
                    required
                    placeholder="Kanpur"
                    className="mt-1 w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">What do you do?</label>
                  <input
                    placeholder="Founder, freelancer, SWE, designer…"
                    className="mt-1 w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  placeholder="How do you plan to use Sked? Favorite cafés to suggest?"
                  className="mt-1 w-full border rounded-md px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 font-medium disabled:opacity-70"
              >
                {loading ? "Submitting…" : "Apply now"}
              </button>
              <p className="text-xs text-zinc-500 text-center">
                By continuing you agree to our Terms & Privacy.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-green-700"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Application received
              </h3>
              <p className="mt-1 text-sm text-zinc-600">
                We’ll reach out on email/WhatsApp as your city opens more slots.
              </p>
              <a
                href="#communities"
                className="inline-flex items-center mt-4 text-sm font-medium text-orange-700 hover:text-orange-800"
              >
                Back to communities
              </a>
            </div>
          )}
        </form>
      </div>
    </StackSection>
  );
}
