import { Link } from "@tanstack/react-router";
import icon from "@/assets/eram-icon.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={icon.url} alt="" className="h-10 w-auto" />
            <span className="font-display text-lg">Eram Holdings Limited</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            A Kenyan consulting firm advancing electoral governance, peacebuilding and inclusive
            democratic participation.
          </p>
        </div>

        <div>
          <p className="rule-label text-primary-foreground/50">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about", label: "About us" },
              { to: "/services", label: "Our services" },
              { to: "/approach", label: "Our approach" },
              { to: "/clients", label: "Our clients" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="rule-label text-primary-foreground/50">Contact</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/80">
            <p>Baywater Court, Suite 6, Ngong Road</p>
            <p>Opposite Nairobi Baptist Church, Nairobi, Kenya</p>
            <p>P.O. Box 28629 – 00100</p>
            <p>
              <a href="tel:+254735728682" className="hover:text-primary-foreground">
                0735 728 682
              </a>
            </p>
            <p>
              <a href="mailto:eramholdings@outlook.com" className="hover:text-primary-foreground">
                eramholdings@outlook.com
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Eram Holdings Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
