import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Check } from "lucide-react";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach | Eram Holdings Limited" },
      {
        name: "description",
        content:
          "A participatory, evidence-based approach combining research, stakeholder engagement, practical training and strategic partnerships.",
      },
      { property: "og:title", content: "Our Approach | Eram Holdings Limited" },
      {
        property: "og:description",
        content: "Participatory, context-specific and evidence-based governance consulting.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/approach" },
      { name: "twitter:title", content: "Our Approach | Eram Holdings Limited" },
      {
        name: "twitter:description",
        content: "Participatory, context-specific and evidence-based governance consulting.",
      },
    ],
    links: [{ rel: "canonical", href: "/approach" }],
  }),
  component: Approach,
});

const reasons = [
  "Experienced multidisciplinary professionals",
  "Practical and results-oriented training methodologies",
  "Strong understanding of governance and electoral systems",
  "Tailor-made solutions for public and private institutions",
  "Commitment to neutrality, professionalism and ethical practice",
  "Extensive stakeholder engagement experience",
  "High-quality research and policy support",
];

function Approach() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title="Participatory, context-specific and grounded in evidence"
        intro="We combine research, stakeholder engagement, practical training and strategic partnerships on every assignment."
      />

      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="font-display text-2xl leading-snug">
          Effective advocacy and capacity-building programmes are most successful when they are
          context-specific, inclusive and supported by sound research.
        </p>
        <p className="mt-6 text-muted-foreground">
          Every assignment is tailored to the unique needs of our clients while adhering to the
          highest professional and ethical standards. We design with the people affected, test our
          assumptions with data, and hand over capability that outlasts the engagement.
        </p>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="rule-label text-primary">Why choose us</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Seven reasons institutions partner with us</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="flex gap-3 rounded-sm bg-card p-5 text-sm">
                <Check className="mt-0.5 shrink-0 text-primary" size={18} />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="rule-label text-primary">Our commitment</p>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Eram Holdings Limited is committed to promoting peaceful democratic processes,
          strengthening institutional capacity, and empowering citizens through knowledge, dialogue
          and advocacy. We strive to contribute to societies where elections are credible, conflicts
          are resolved peacefully, and governance is transparent, accountable and inclusive.
        </p>
      </section>
    </>
  );
}
