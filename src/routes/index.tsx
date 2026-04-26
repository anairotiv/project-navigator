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
  "End-to-End Project Ownership",
  "Stakeholder Alignment & Communication",
  "Process Structuring & Optimization",
  "Agile Delivery — Scrum & Kanban",
  "Jira — Workflow Design & Automations",
  "Scope, Timeline & Delivery",
  "Scope, Prioritization & Delivery",
  "Cross-functional Collaboration (Tech, Design, Product, Business)"
];

const howIWork = [
  { k: "Structure", v: "Bringing clarity to scope, priorities and success criteria." },
  { k: "Cadence", v: "Creating execution rhythm through structured timelines and deliverables." },
  { k: "Communication", v: "Driving stakeholder alignment and decision-making." },
  { k: "Adaptation", v: "Re-planning quickly in response to change while maintaining direction." },
  { k: "Delivery", v: "Driving projects to completion under complexity and constraints." },
];

const clients = [
  "Partage Malls",
  "Zurich Airport",
  "HMASP",
  "Wolf Vision",
  "Perini Business Park",
  "Abcasa Fair"
];

function Index() {
  return (
    <>
      {/* HERO — editorial, asymmetric */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-32 md:pt-28">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-6 bg-foreground/40" />
                Project Manager · Tech & Innovation
              </p>
              <h1 className="mt-8 font-serif text-5xl font-light leading-[1.02] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]">
                Ana Vitória <em className="italic font-normal text-accent">Luz</em>
              </h1>
              <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I lead end-to-end project delivery in fast-paced environments, owning scope, timelines, stakeholders and execution.
              I specialize in bringing structure to complex, resource-constrained projects — aligning teams, managing client communication and ensuring delivery under pressure.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <span className="border-b border-foreground pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                    View selected work
                  </span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Or get in touch
                </Link>
              </div>
            </div>

            <aside className="md:col-span-5 md:pt-2">
              <div className="space-y-8 md:border-l md:border-[var(--hairline)] md:pl-10">
                <div>
                  <p className="eyebrow">Currently</p>
                  <p className="mt-2 text-sm text-foreground">
                    Leading delivery across innovation, retail and aviation projects.
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Based in</p>
                  <p className="mt-2 text-sm text-foreground">São Paulo, Brazil</p>
                </div>
                <div>
                  <p className="eyebrow">Tools of trade</p>
                  <p className="mt-2 text-sm text-foreground">
                    Jira · Confluence · Scrum · Kanban · Trello · Notion · Project Libre 
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ABOUT — editorial paragraph */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">§ 01 — About</p>
            </div>
            <div className="md:col-span-9">
              <p className="font-serif text-2xl font-light leading-snug tracking-tight text-foreground md:text-[2rem] md:leading-[1.25]">
                I specialize in structuring complex projects
                aligning{" "}
                <em className="italic text-accent">strategy, execution and people</em>.
                Working closely with technical and cross-functional teams, I translate requirements into clear execution, keeping projects moving forward with clarity and direction.
              </p>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I operate in dynamic, fast-paced environments, organizing processes, managing client relationships and ensuring delivery — even under complex conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS — list-style editorial */}
      <section id="projects" className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">§ 02 — Selected Work</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-4xl font-light tracking-tight md:text-5xl">
                Projects led <em className="italic text-accent">end-to-end</em>
              </h2>
              <p className="mt-5 max-w-xl text-base text-muted-foreground">
                A selection of engagements where I owned scope, stakeholders and delivery.
              </p>

              <div className="mt-14">
                {projects.map((project, idx) => (
                  <ProjectCard key={project.slug} project={project} index={idx} />
                ))}
                <div className="border-t border-[var(--hairline)]" />
              </div>

              <Link
                to="/projects"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <span className="border-b border-foreground pb-0.5">All projects</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">§ 03 — Skills</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-4xl font-light tracking-tight md:text-5xl">
                Core capabilities
              </h2>
              <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2">
                {skills.map((skill, i) => (
                  <li
                    key={skill}
                    className="flex items-baseline gap-4 border-t border-[var(--hairline)] py-4 last:border-b sm:[&:nth-last-child(-n+2)]:border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-r-[var(--hairline)] sm:[&:nth-child(odd)]:pr-6 sm:[&:nth-child(even)]:pl-6"
                  >
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">§ 04 — Approach</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-4xl font-light tracking-tight md:text-5xl">
                How I work
              </h2>
              <dl className="mt-12 divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
                {howIWork.map((item) => (
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
      {/* PULL QUOTE */}
      <section className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center md:px-10 md:py-36">
          <p className="eyebrow">Background</p>
          <blockquote className="mt-8 font-serif text-3xl font-light leading-[1.2] tracking-tight text-foreground md:text-5xl">
          Background in technology, leadership and innovation{" "}
            <em className="italic text-accent">combining academic experience in Information Systems with international and interdisciplinary programs.</em> 
            
          </blockquote>
        </div>
      </section>

    

      {/* CONTACT CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">§ 05 — Contact</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight md:text-6xl">
                Have a project that needs{" "}
                <em className="italic text-accent">structure</em> and delivery?
              </h2>
              <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                Let's talk about how I can help lead it from scope to delivery.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <span className="border-b border-foreground pb-0.5">Get in touch</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
