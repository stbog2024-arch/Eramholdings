import { createFileRoute, Link } from "@tanstack/react-router";
import { Vote, HandshakeIcon, GraduationCap, LineChart, Megaphone } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Eram Holdings Limited" },
      {
        name: "description",
        content:
          "Electoral governance, peacebuilding and conflict resolution, training and capacity development, research and policy analysis, advocacy and public engagement.",
      },
      { property: "og:title", content: "Our Services | Eram Holdings Limited" },
      {
        property: "og:description",
        content:
          "Five practice areas spanning elections, peacebuilding, training, research and advocacy.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Vote,
    title: "Electoral Governance",
    items: [
      "Election preparedness and capacity building",
      "Election observation and monitoring",
      "Electoral stakeholder engagement",
      "Electoral dispute prevention and management",
      "Voter education and civic awareness",
      "Technical support to electoral management bodies",
    ],
  },
  {
    icon: HandshakeIcon,
    title: "Peacebuilding and Conflict Resolution",
    items: [
      "Conflict prevention and early warning systems",
      "Peace dialogue facilitation",
      "Community mediation",
      "Social cohesion programmes",
      "Youth and women peace initiatives",
      "Post-election reconciliation programmes",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training and Capacity Development",
    items: [
      "Democratic governance",
      "Leadership and governance",
      "Peacebuilding",
      "Civic education",
      "Policy advocacy",
      "Strategic communication",
      "Community engagement",
      "Organisational development",
      "Monitoring and evaluation",
    ],
  },
  {
    icon: LineChart,
    title: "Research and Policy Analysis",
    items: [
      "Governance assessments",
      "Electoral research",
      "Public policy analysis",
      "Conflict mapping",
      "Stakeholder analysis",
      "Baseline and impact studies",
      "Knowledge products and publications",
    ],
  },
  {
    icon: Megaphone,
    title: "Advocacy and Public Engagement",
    items: [
      "Policy advocacy campaigns",
      "Citizen engagement forums",
      "Public participation facilitation",
      "Legislative and governance dialogue",
      "Strategic communications",
      "Multi-stakeholder partnerships",
    ],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Practical, evidence-based support across the governance cycle"
        intro="Every assignment is tailored to the unique needs of our clients while adhering to the highest professional and ethical standards."
      />

      <section className="mx-auto max-w-6xl space-y-14 px-5 py-20">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="grid gap-8 border-b border-border pb-14 last:border-0 last:pb-0 md:grid-cols-[1fr_1.4fr]"
          >
            <div>
              <span className="font-display text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-3 flex items-start gap-3">
                <s.icon className="mt-1 shrink-0 text-primary" size={24} />
                <h2 className="text-2xl md:text-3xl">{s.title}</h2>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-2xl md:text-3xl">
            Need a tailored programme for your institution?
          </h2>
          <Link
            to="/contact"
            className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Request a proposal
          </Link>
        </div>
      </section>
    </>
  );
}
