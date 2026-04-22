import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--hairline)] bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Let's build something
              <br />
              <em className="italic text-accent">structured</em> together.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="border-b border-foreground pb-0.5">Get in touch</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Index</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-foreground">Work</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="mailto:hello@anavitorialuz.com" className="text-muted-foreground hover:text-foreground">
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-[var(--hairline)] pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ana Vitória Luz</p>
          <p className="font-mono tracking-wider">São Paulo · Available for projects</p>
        </div>
      </div>
    </footer>
  );
}
