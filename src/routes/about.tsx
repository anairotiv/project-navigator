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
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow">About</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              From engineering to <em className="italic text-accent">leading delivery</em>
            </h1>

            <div className="mt-14 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I started my career in technology as a developer and quickly transitioned into project
                management, where I found my strength in connecting strategy, execution and people.
              </p>
              <p>
                Over time, I evolved from an intern to managing projects with full ownership —
                scope definition, timeline management, stakeholder communication and delivery.
              </p>
              <p>
                I have experience working in dynamic environments with small teams, where I was
                responsible for structuring processes, managing client relationships, and ensuring
                project success even under complex conditions.
              </p>
            </div>

            <div className="mt-16 border-t border-[var(--hairline)] pt-10">
              <p className="eyebrow">Career growth</p>
              <p className="mt-4 max-w-3xl font-serif text-2xl font-light leading-snug tracking-tight text-foreground md:text-3xl">
                Started as an intern and rapidly progressed to{" "}
                <em className="italic text-accent">managing projects</em> —
                taking ownership of delivery, communication and process organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
