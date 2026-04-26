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
                I have experience working in dynamic environments, where I was
                responsible for structuring processes, managing client relationships, and ensuring
                project success even under complex conditions.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
