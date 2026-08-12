import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import training from "@/assets/training.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Eram Holdings Limited | Governance Consultants in Kenya" },
      {
        name: "description",
        content:
          "Learn about Eram Holdings Limited: our vision, mission and core values in electoral governance, peacebuilding and civic education across Kenya.",
      },
      { property: "og:title", content: "About Eram Holdings Limited" },
      {
        property: "og:description",
        content: "Our vision, mission and core values in governance and peacebuilding.",
      },
    ],
  }),
  component: About,
});

const values = [
  "Integrity",
  "Professionalism",
  "Inclusivity",
  "Accountability",
  "Innovation",
  "Excellence",
  "Respect for Diversity",
  "Partnership and Collaboration",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Kenyan consulting firm for democratic governance and peace"
        intro="Eram Holdings Limited specialises in electoral governance, civic education, peacebuilding, leadership development, research, advocacy and institutional capacity strengthening."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div className="space-y-5 text-muted-foreground">
            <p>
              We work with governments, independent commissions, civil society organisations,
              development partners, educational institutions, community organisations and the
              private sector to promote democratic governance, peaceful coexistence and inclusive
              participation.
            </p>
            <p>
              Our work is driven by the belief that sustainable peace and democratic development are
              built through informed citizens, strong institutions and meaningful stakeholder
              engagement. We combine research, training, policy advocacy, dialogue facilitation and
              technical advisory services to deliver practical and measurable outcomes.
            </p>
          </div>
          <img
            src={training}
            alt="Training workshop facilitated by Eram Holdings"
            width={1200}
            height={800}
            loading="lazy"
            className="rounded-sm object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
          <div className="rounded-sm bg-card p-8">
            <p className="rule-label text-primary">Vision</p>
            <p className="mt-4 font-display text-2xl leading-snug">
              To be a leading regional institution advancing democratic governance, peaceful
              societies and informed citizen participation.
            </p>
          </div>
          <div className="rounded-sm bg-card p-8">
            <p className="rule-label text-primary">Mission</p>
            <p className="mt-4 font-display text-2xl leading-snug">
              To strengthen democratic institutions and communities through high-quality training,
              research, advocacy and peacebuilding initiatives that promote inclusive governance,
              electoral integrity and sustainable development.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="rule-label text-primary">Core values</p>
        <h2 className="mt-4 text-3xl md:text-4xl">What guides every assignment</h2>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <li key={v} className="bg-card p-6">
              <span className="font-display text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-medium">{v}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
