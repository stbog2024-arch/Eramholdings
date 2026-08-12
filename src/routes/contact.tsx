import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Inbox } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Eram Holdings Limited | Nairobi, Kenya" },
      {
        name: "description",
        content:
          "Reach Eram Holdings Limited at Baywater Court, Suite 6, Ngong Road, Nairobi. Call 0735 728 682 or email eramholdings@outlook.com.",
      },
      { property: "og:title", content: "Contact Eram Holdings Limited" },
      {
        property: "og:description",
        content: "Baywater Court, Suite 6, Ngong Road, Nairobi, Kenya.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: "Contact Eram Holdings Limited" },
      {
        name: "twitter:description",
        content: "Baywater Court, Suite 6, Ngong Road, Nairobi, Kenya.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", organisation: "", message: "" });

  const mailto = `mailto:eramholdings@outlook.com?subject=${encodeURIComponent(
    `Enquiry from ${form.name || "website visitor"}`,
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.organisation}\n\n${form.message}`,
  )}`;

  const field =
    "mt-2 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-primary";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to our team"
        intro="Tell us about your programme, institution or upcoming electoral cycle and we will respond with a tailored proposal."
      />

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-7">
          {[
            {
              icon: MapPin,
              label: "Office",
              lines: [
                "Baywater Court, Suite 6, Ngong Road",
                "Opposite Nairobi Baptist Church",
                "Nairobi, Kenya",
              ],
            },
            { icon: Inbox, label: "Postal address", lines: ["P.O. Box 28629 – 00100, Nairobi"] },
            { icon: Phone, label: "Telephone", lines: ["0735 728 682"] },
            { icon: Mail, label: "Email", lines: ["eramholdings@outlook.com"] },
          ].map((b) => (
            <div key={b.label} className="flex gap-4">
              <b.icon className="mt-1 shrink-0 text-primary" size={20} />
              <div className="min-w-0">
                <p className="rule-label text-muted-foreground">{b.label}</p>
                {b.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm">
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <form
          className="rounded-sm border border-border bg-card p-7"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto;
          }}
        >
          <h2 className="text-2xl">Send us a message</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              Full name
              <input
                required
                className={field}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="block text-sm">
              Email
              <input
                required
                type="email"
                className={field}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
          </div>
          <label className="mt-5 block text-sm">
            Organisation
            <input
              className={field}
              value={form.organisation}
              onChange={(e) => setForm({ ...form, organisation: e.target.value })}
            />
          </label>
          <label className="mt-5 block text-sm">
            How can we help?
            <textarea
              required
              rows={5}
              className={field}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground sm:w-auto"
          >
            Send message
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Opens your email client addressed to eramholdings@outlook.com.
          </p>
        </form>
      </section>
    </>
  );
}
