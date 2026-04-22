import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Work — Ana Vitória Luz" },
      {
        name: "description",
        content:
          "Selected project cases led end-to-end: scope, stakeholders, timeline, and delivery.",
      },
      { property: "og:title", content: "Work — Ana Vitória Luz" },
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
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow">Selected Work</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Projects, led <em className="italic text-accent">end-to-end</em>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A selection of projects led from scope and stakeholders to timeline
              and final delivery.
            </p>
            <div className="mt-16">
              {projects.map((project, idx) => (
                <ProjectCard key={project.slug} project={project} index={idx} />
              ))}
              <div className="border-t border-[var(--hairline)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
