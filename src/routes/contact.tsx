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
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Let's talk about your project
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Whether you need someone to structure a new initiative from scratch or take ownership of an
          ongoing project, I'm available to lead delivery from start to finish.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-2">
          <a
            href="mailto:hello@anavitorialuz.com"
            className="group flex flex-col gap-3 bg-card p-8 transition-colors hover:bg-secondary/50"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-accent">Email</p>
            <p className="text-lg font-medium text-foreground transition-colors group-hover:text-accent">
              hello@anavitorialuz.com
            </p>
            <p className="text-sm text-muted-foreground">
              Best for project briefs and detailed discussions.
            </p>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 bg-card p-8 transition-colors hover:bg-secondary/50"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-accent">LinkedIn</p>
            <p className="text-lg font-medium text-foreground transition-colors group-hover:text-accent">
              linkedin.com/in/anavitorialuz
            </p>
            <p className="text-sm text-muted-foreground">
              Connect for professional networking and updates.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
