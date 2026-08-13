import { createFileRoute, Link } from "@tanstack/react-router";
import { Vote, HandshakeIcon, GraduationCap, LineChart, Megaphone, ArrowRight } from "lucide-react";
import { HeroSlides } from "@/components/HeroSlides";
import hero from "@/assets/hero-elections.jpg";
import peace from "@/assets/peacebuilding.jpg";
import training from "@/assets/training.jpg";
import nairobi from "@/assets/nairobi.jpg";

const heroSlides = [
  { src: hero, alt: "Kenyan voters queuing at a polling station" },
  { src: peace, alt: "Community peace dialogue under a tree" },
  { src: training, alt: "Training workshop facilitated by Eram Holdings" },
  { src: nairobi, alt: "Nairobi skyline at dusk" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eram Holdings Limited | Electoral Governance & Peacebuilding, Kenya" },
      {
        name: "description",
        content:
          "Eram Holdings Limited strengthens democratic institutions in Kenya through electoral governance, peacebuilding, training, research and advocacy.",
      },
      { property: "og:title", content: "Eram Holdings Limited | Governance & Peacebuilding" },
      {
        property: "og:description",
        content:
          "Consulting in electoral governance, civic education, peacebuilding, leadership development, research and advocacy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Eram Holdings Limited | Governance & Peacebuilding" },
      {
        name: "twitter:description",
        content:
          "Consulting in electoral governance, civic education, peacebuilding, research and advocacy in Kenya.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Vote, title: "Electoral Governance", text: "Preparedness, observation, dispute prevention and voter education." },
  { icon: HandshakeIcon, title: "Peacebuilding", text: "Early warning, dialogue facilitation, mediation and social cohesion." },
  { icon: GraduationCap, title: "Training", text: "Customised programmes in governance, leadership and civic education." },
  { icon: LineChart, title: "Research & Policy", text: "Governance assessments, conflict mapping and impact studies." },
  { icon: Megaphone, title: "Advocacy", text: "Policy campaigns, citizen forums and public participation." },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
        <img
          src={hero}
          alt="Kenyan voters queuing at a polling station"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-40">
          <p className="rule-label text-primary-foreground/70">Nairobi, Kenya</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.1] md:text-6xl">
            Credible elections. Peaceful communities. Accountable institutions.
          </h1>
          <p className="mt-6 max-w-xl text-base text-primary-foreground/80 md:text-lg">
            Eram Holdings Limited is a Kenyan consulting firm specialising in electoral governance,
            civic education, peacebuilding, leadership development, research and advocacy.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-sm bg-primary-foreground px-5 py-3 text-sm font-medium text-ink"
            >
              Explore our services <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-primary-foreground/40 px-5 py-3 text-sm font-medium"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <img
            src={peace}
            alt="Community peace dialogue under a tree"
            width={1200}
            height={800}
            loading="lazy"
            className="rounded-sm object-cover"
          />
          <div>
            <p className="rule-label text-primary">Who we are</p>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Sustainable peace is built by informed citizens and strong institutions
            </h2>
            <p className="mt-5 text-muted-foreground">
              We work with governments, independent commissions, civil society organisations,
              development partners, educational institutions, community organisations and the
              private sector to promote democratic governance, peaceful coexistence and inclusive
              participation.
            </p>
            <p className="mt-4 text-muted-foreground">
              We combine research, training, policy advocacy, dialogue facilitation and technical
              advisory services to deliver practical and measurable outcomes.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
              More about us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="rule-label text-primary">What we do</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Five practice areas</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="bg-card p-7">
                <s.icon className="text-primary" size={26} />
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
            <Link
              to="/services"
              className="flex items-center justify-between gap-2 bg-primary p-7 text-primary-foreground"
            >
              <span className="text-lg">All services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="rule-label text-primary">Vision</p>
            <p className="mt-4 font-display text-2xl leading-snug">
              To be a leading regional institution advancing democratic governance, peaceful
              societies and informed citizen participation.
            </p>
          </div>
          <div>
            <p className="rule-label text-primary">Mission</p>
            <p className="mt-4 font-display text-2xl leading-snug">
              To strengthen democratic institutions and communities through high-quality training,
              research, advocacy and peacebuilding initiatives.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
