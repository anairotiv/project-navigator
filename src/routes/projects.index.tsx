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
          "Selected project cases, systems & process implementation, and AI & innovation initiatives led end-to-end.",
      },
      { property: "og:title", content: "Work — Ana Vitória Luz" },
      {
        property: "og:description",
        content:
          "End-to-end project leadership across innovation, retail, aviation, and corporate environments — including systems implementation and AI initiatives.",
      },
    ],
  }),
  component: ProjectsIndex,
});

const systems = [
  {
    k: "Jira & Confluence",
    v: "Owned the implementation and adoption of Jira and Confluence as the team’s core operational systems.",
  },
  {
    k: "Workflow Design",
    v: "Designed and optimized workflows and automations to improve efficiency and enforce consistency.",
  },
  {
    k: "Onboarding & Training",
    v: "Enabled teams through structured onboarding and training across tools, agile practices and documentation.",
  },
  {
    k: "Intranet Migration",
    v: "Led the migration and restructuring of the company intranet, improving accessibility and information flow.",
  },
  {
    k: "Process & Documentation",
    v: "Established internal processes and documentation standards, creating a scalable operational foundation.",
  },
];

const aiProjects = [
  {
    name: "OZHelp",
    purpose: "Led the development of an internal AI chatbot for employee support.",
    impact:
      "Reduced repetitive support requests and enabled instant, contextual answers — freeing internal teams for higher-value work.",
  },
  {
    name: "OZAssist",
    purpose: "Led the creation of an AI assistant for product-related questions.",
    impact:
      "Accelerated access to product knowledge, reducing time-to-answer and improving consistency across teams.",
  },
  {
    name: "OZConverter",
    purpose: "Led the development of a file conversion tool for map data.",
    impact:
      "Automated a manual pipeline, reducing delivery time and eliminating a recurring source of errors.",
  },
  {
    name: "OZCleanup",
    purpose: "Led data validation and digital twin consistency initiatives.",
    impact:
      "Ensured data integrity across systems, enabling reliable automation and reporting.",
  },
  {
    name: "OZMonitoring",
    purpose: "Led the development of a monitoring and visualization system.",
    impact:
      "Provided real-time visibility into infrastructure health, supporting faster diagnosis and proactive response.",
  },
  {
    name: "NetBox Integration",
    purpose: "Led the implementation of an infrastructure documentation system.",
    impact:
      "Centralized documentation into a single source of truth, improving engineering efficiency and reliability.",
  },
];

function ProjectsIndex() {
  return (
    <>
      {/* HEADER */}
      <section className="border-b border-[var(--hairline)]">
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
                A selection of projects led from scope and stakeholders to
                timeline and final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT CASES */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">§ 01 — Project Cases</p>
            </div>
            <div className="md:col-span-9">
              <div>
                {projects.map((project, idx) => (
                  <ProjectCard key={project.slug} project={project} index={idx} />
                ))}
                <div className="border-t border-[var(--hairline)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEMS & PROCESS */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">§ 02 — Systems & Process</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-4xl font-light tracking-tight md:text-5xl">
                Systems &{" "}
                <em className="italic text-accent">Processes </em>
              </h2>
              <p className="mt-5 max-w-xl text-base text-muted-foreground">
                Beyond delivery, I lead the structuring of the tools and
                processes teams rely on, turning operational chaos into a
                maintainable foundation.
              </p>
              <dl className="mt-12 divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
                {systems.map((item) => (
                  <div
                    key={item.k}
                    className="grid gap-2 py-6 md:grid-cols-12 md:gap-8 md:py-7"
                  >
                    <dt className="font-serif text-xl italic text-accent md:col-span-3 md:text-2xl">
                      {item.k}
                    </dt>
                    <dd className="text-base leading-relaxed text-foreground md:col-span-9 md:text-lg">
                      {item.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* AI & INNOVATION PROJECTS */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">§ 03 — AI & Innovation</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-4xl font-light tracking-tight md:text-5xl">
                AI & <em className="italic text-accent">innovation</em> projects
              </h2>
              <p className="mt-5 max-w-xl text-base text-muted-foreground">
                Internal initiatives where I helped drive automation, data
                consistency and operational intelligence across the company.
              </p>

              <ul className="mt-14 border-t border-[var(--hairline)]">
                {aiProjects.map((p, i) => (
                  <li
                    key={p.name}
                    className="grid gap-4 border-b border-[var(--hairline)] py-8 md:grid-cols-12 md:gap-8"
                  >
                    <div className="md:col-span-1">
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h3 className="font-serif text-2xl font-normal tracking-tight text-foreground md:text-3xl">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {p.purpose}
                      </p>
                    </div>
                    <div className="md:col-span-7">
                      <p className="eyebrow">Impact</p>
                      <p className="mt-2 text-base leading-relaxed text-foreground md:text-[17px]">
                        {p.impact}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
