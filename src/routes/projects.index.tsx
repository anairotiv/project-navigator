import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Ana Vitória Luz" },
      {
        name: "description",
        content:
          "Selected project cases led end-to-end: scope, stakeholders, timeline, and delivery.",
      },
      { property: "og:title", content: "Projects — Ana Vitória Luz" },
      {
        property: "og:description",
        content:
          "End-to-end project leadership cases across innovation, retail, aviation, and corporate environments.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">Selected Work</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Projects</h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
          A selection of projects led end-to-end — from scope and stakeholders to timeline and final
          delivery.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
