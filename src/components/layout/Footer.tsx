import Section from "../ui/Section";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <Section className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.svg" alt="SKED Club Logo" className="h-7 w-auto" />
          </a>
          <p className="text-base text-neutral-600">
            Building city circles for remote work. © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex items-center gap-6 text-base">
          <a
            href="https://www.instagram.com/sked.club"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/skedclub/"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </Section>
    </footer>
  );
}
