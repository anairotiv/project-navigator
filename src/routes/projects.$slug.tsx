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
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-sm text-accent hover:underline">
        ← Back to projects
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProjectCasePage,
});

function Section({
  label,
  title,
  children,
}: {
  label?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[var(--hairline)] py-10 first:border-t-0 first:pt-0">
      {label && (
        <p className="text-xs font-medium uppercase tracking-wider text-accent">{label}</p>
      )}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <div className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
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
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            ← All projects
          </Link>
          <p className="mt-8 text-xs font-medium uppercase tracking-wider text-accent">
            Case Study
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {project.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {project.shortDescription}
          </p>
        </div>
      </header>

      {/* BODY */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
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

        <Section label="05" title="Complexity">
          <div className="rounded-lg border border-accent/20 bg-accent/5 p-6">
            <BulletList items={project.complexity} />
          </div>
        </Section>

        <Section label="06" title="Results">
          <BulletList items={project.results} />
        </Section>

        <Section label="07" title="Tools">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-[var(--hairline)] bg-card px-3 py-1.5 text-sm font-medium text-foreground"
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
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link
            to="/projects/$slug"
            params={{ slug: nextProject.slug }}
            className="group block rounded-xl border border-[var(--hairline)] bg-card p-8 transition-all hover:border-foreground/30"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-accent">
              Next case
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
              {nextProject.name} →
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {nextProject.shortDescription}
            </p>
          </Link>
        </div>
      </div>
    </article>
  );
}
