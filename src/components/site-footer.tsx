import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-medium">Ana Vitória Luz</p>
          <p className="text-xs text-muted-foreground">Project Manager · Technology & Innovation</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-foreground">About</Link>
          <Link to="/projects" className="hover:text-foreground">Projects</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ana Vitória Luz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
