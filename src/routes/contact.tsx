import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ana Vitória Luz" },
      {
        name: "description",
        content:
          "Get in touch with Ana Vitória Luz — Project Manager. Available for end-to-end project leadership.",
      },
      { property: "og:title", content: "Contact — Ana Vitória Luz" },
      {
        property: "og:description",
        content: "Reach out via LinkedIn or email for project leadership opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow">Contact</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Let's talk about your <em className="italic text-accent">project</em>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Project management · structure · delivery
            </p>

            <ul className="mt-16 divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
              <li>
                <a
                  href="mailto:anavitoriasln@gmail.com"
                  className="group grid gap-2 py-7 md:grid-cols-12 md:gap-8"
                >
                  <span className="eyebrow md:col-span-3 md:pt-2">Email</span>
                  <span className="md:col-span-7">
                    <span className="font-serif text-2xl font-light tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
                      anavitoriasln@gmail.com
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      Best for project briefs and detailed discussions.
                    </span>
                  </span>
                  <span className="text-foreground md:col-span-2 md:text-right md:text-2xl">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ana-vitoria-luz-546201219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-2 py-7 md:grid-cols-12 md:gap-8"
                >
                  <span className="eyebrow md:col-span-3 md:pt-2">LinkedIn</span>
                  <span className="md:col-span-7">
                    <span className="font-serif text-2xl font-light tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
                      linkedin.com/in/anavitorialuz
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      Connect for professional networking and updates.
                    </span>
                  </span>
                  <span className="text-foreground md:col-span-2 md:text-right md:text-2xl">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
