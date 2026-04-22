import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ana Vitória Luz" },
      {
        name: "description",
        content:
          "From developer to Project Manager: end-to-end delivery, stakeholder management, and structured execution.",
      },
      { property: "og:title", content: "About — Ana Vitória Luz" },
      {
        property: "og:description",
        content:
          "Career path from technology and innovation into full-ownership project management.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">About</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          From engineering to leading delivery
        </h1>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
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

        <div className="mt-16 rounded-2xl border border-[var(--hairline)] bg-card p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-accent">Career growth</p>
          <p className="mt-3 text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
            Started as an intern and rapidly progressed to managing projects, taking ownership of
            delivery, communication, and process organization.
          </p>
        </div>
      </div>
    </section>
  );
}
