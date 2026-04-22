import { Link } from "@tanstack/react-router";
import type { ProjectCase } from "@/data/projects";

export function ProjectCard({ project }: { project: ProjectCase }) {
  return (
    <article className="group flex flex-col justify-between rounded-lg border border-[var(--hairline)] bg-card p-7 transition-all hover:border-foreground/30 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]">
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
          Case Study
        </p>
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>
      </div>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
      >
        View Case
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="transition-transform group-hover:translate-x-0.5"
        >
          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </article>
  );
}
