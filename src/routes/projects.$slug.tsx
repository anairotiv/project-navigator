import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    return {
      meta: project
        ? [
            { title: `${project.name} — Case Study | Ana Vitória Luz` },
            { name: "description", content: project.shortDescription },
            { property: "og:title", content: `${project.name} — Case Study` },
            { property: "og:description", content: project.shortDescription },
          ]
        : [{ title: "Case Study — Ana Vitória Luz" }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-4xl font-light">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-sm text-accent hover:underline">
        ← Back to projects
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-3xl font-light">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProjectCasePage,
});

function Section({
  label,
  title,
  children,
  highlight = false,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <section className="grid gap-6 border-t border-[var(--hairline)] py-12 md:grid-cols-12 md:gap-10 md:py-16">
      <div className="md:col-span-3">
        <p className="eyebrow">
          § {label}
        </p>
        <h2
          className={`mt-3 font-serif text-2xl font-light tracking-tight md:text-3xl ${
            highlight ? "italic text-accent" : ""
          }`}
        >
          {title}
        </h2>
      </div>
      <div className="text-base leading-relaxed text-foreground md:col-span-9 md:text-[17px]">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
      {items.map((item, i) => (
        <li key={item} className="flex gap-5 py-4">
          <span className="font-mono text-xs text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectCasePage() {
  const { project } = Route.useLoaderData();
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      {/* HEADER */}
      <header className="border-b border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            ← All projects
          </Link>

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow">Case Study · {String(currentIndex + 1).padStart(2, "0")}</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif text-5xl font-light leading-[1.02] tracking-tight md:text-7xl">
                {project.name}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {project.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="mx-auto max-w-6xl px-6 py-4 md:px-10 md:py-8">
        <Section label="01" title="Context">
          <p>{project.context}</p>
        </Section>

        <Section label="02" title="Challenge">
          <p>{project.challenge}</p>
        </Section>

        <Section label="03" title="My Role">
          <p>{project.myRole}</p>
        </Section>

        <Section label="04" title="Key Actions">
          <BulletList items={project.keyActions} />
        </Section>

        <Section label="05" title="Complexity" highlight>
          <BulletList items={project.complexity} />
        </Section>

        <Section label="06" title="Results">
          <BulletList items={project.results} />
        </Section>

        <Section label="07" title="Tools">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[var(--hairline)] px-3 py-1 text-sm text-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </Section>

        <Section label="08" title="Decisions Made">
          <BulletList items={project.decisions} />
        </Section>
      </div>

      {/* NEXT */}
      <div className="border-t border-[var(--hairline)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <Link
            to="/projects/$slug"
            params={{ slug: nextProject.slug }}
            className="group grid gap-4 md:grid-cols-12 md:gap-10"
          >
            <p className="eyebrow md:col-span-3">Next case</p>
            <div className="md:col-span-9">
              <p className="font-serif text-3xl font-light tracking-tight text-foreground transition-colors group-hover:text-accent md:text-5xl">
                {nextProject.name}{" "}
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
                {nextProject.shortDescription}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
