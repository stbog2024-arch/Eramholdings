import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import nairobi from "@/assets/nairobi.jpg";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients | Eram Holdings Limited" },
      {
        name: "description",
        content:
          "We serve government ministries, electoral management bodies, county governments, development partners, civil society and corporate institutions.",
      },
      { property: "og:title", content: "Our Clients | Eram Holdings Limited" },
      {
        property: "og:description",
        content: "The institutions and communities we partner with across Kenya and the region.",
      },
    ],
  }),
  component: Clients,
});

const clients = [
  "Government Ministries and Agencies",
  "Electoral Management Bodies",
  "County Governments",
  "Development Partners",
  "Civil Society Organisations",
  "Faith-Based Organisations",
  "Academic Institutions",
  "Community-Based Organisations",
  "Regional and International Organisations",
  "Corporate Institutions",
];

function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Our clients"
        title="Partners across government, civil society and the private sector"
        intro="We work alongside institutions that shape governance, elections and community cohesion."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <li key={c} className="bg-card p-6 text-sm font-medium">
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
        <img
          src={nairobi}
          alt="Nairobi skyline at dusk"
          width={1600}
          height={700}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24">
          <h2 className="max-w-2xl text-3xl md:text-4xl">
            Let's build credible processes and peaceful communities together
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-sm bg-primary-foreground px-6 py-3 text-sm font-medium text-ink"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
