import { Link } from "@tanstack/react-router";
import type { ProjectCase } from "@/data/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: ProjectCase;
  index?: number;
}) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block border-t border-[var(--hairline)] py-8 transition-colors"
    >
      <div className="grid gap-4 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-1">
          <span className="font-mono text-xs text-muted-foreground">
            {String((index ?? 0) + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="md:col-span-7">
          <h3 className="font-serif text-2xl font-normal tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            {project.shortDescription}
          </p>
        </div>
        <div className="flex items-end justify-between md:col-span-4 md:items-start md:justify-end">
          <div className="flex flex-wrap gap-1.5 md:justify-end">
            {project.tools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[var(--hairline)] px-2.5 py-0.5 text-[11px] text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
          <span
            aria-hidden
            className="ml-4 text-foreground transition-transform group-hover:translate-x-1 md:ml-6"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
