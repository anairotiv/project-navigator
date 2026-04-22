import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ana Vitória Luz — Project Manager" },
      {
        name: "description",
        content:
          "Project Manager with a background in technology and innovation. End-to-end delivery, stakeholder management, and structured execution.",
      },
      { property: "og:title", content: "Ana Vitória Luz — Project Manager" },
      {
        property: "og:description",
        content:
          "End-to-end project leadership, stakeholder management, and structured delivery in dynamic, resource-constrained environments.",
      },
    ],
  }),
  component: Index,
});

const skills = [
  "End-to-End Project Management",
  "Stakeholder Management",
  "Agile Methodologies (Scrum, Kanban)",
  "Jira (workflows & automations)",
  "Confluence",
  "Scope, Timeline & Delivery",
  "Client Communication",
];

const howIWork = [
  "Structuring scope and priorities",
  "Organizing timelines and deliverables",
  "Clear and direct stakeholder communication",
  "Fast adaptation to changes",
  "Focus on delivering results even in complex scenarios",
];

const clients = [
  "Partage Malls",
  "Zurich Airport",
  "HMASP",
  "Wolf Vision",
  "Perini Business Park",
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent">
            <span className="h-px w-8 bg-accent" />
            Project Manager
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Ana Vitória Luz
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Project Manager with a background in technology and innovation,
            experienced in leading end-to-end projects, managing stakeholders,
            and ensuring structured delivery in dynamic and resource-constrained
            environments.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-[var(--hairline)] bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3 md:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-accent">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">From engineering to leadership</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-2">
            <p>
              I started my career in technology as a developer and quickly transitioned into project
              management, where I found my strength in connecting strategy, execution, and people.
            </p>
            <p>
              Over time, I evolved from an intern to managing projects with full ownership, including
              scope definition, timeline management, stakeholder communication, and delivery.
            </p>
            <p>
              I have experience working in dynamic environments with small teams, where I was
              responsible for structuring processes, managing client relationships, and ensuring
              project success even under complex conditions.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-accent">Selected Work</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden text-sm font-medium text-foreground hover:text-accent md:inline"
            >
              All projects →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3 md:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-accent">Skills</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Core capabilities</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Built across years of hands-on delivery in complex environments.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-2 md:col-span-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-card px-5 py-4 text-sm font-medium text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="border-b border-[var(--hairline)] bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3 md:py-28">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-accent">Approach</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">How I work</h2>
          </div>
          <div className="md:col-span-2">
            <ol className="space-y-px overflow-hidden rounded-lg border border-[var(--hairline)] bg-[var(--hairline)]">
              {howIWork.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-start gap-4 bg-card px-6 py-5"
                >
                  <span className="mt-0.5 font-mono text-xs text-accent">
                    0{idx + 1}
                  </span>
                  <span className="text-sm text-foreground md:text-base">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* EXPERIENCE HIGHLIGHT */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="rounded-2xl border border-[var(--hairline)] bg-card p-10 md:p-14">
            <p className="text-xs font-medium uppercase tracking-wider text-accent">Career growth</p>
            <p className="mt-4 max-w-3xl text-2xl font-medium leading-relaxed tracking-tight text-foreground md:text-3xl">
              "Started as an intern and rapidly progressed to managing projects, taking ownership of
              delivery, communication, and process organization."
            </p>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-accent">
            Projects & Clients
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-3 md:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-24 items-center justify-center bg-card px-4 text-center text-sm font-medium tracking-tight text-muted-foreground transition-colors hover:text-foreground"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Have a project that needs structure and delivery?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            Let's talk about how I can help lead it from scope to delivery.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
