import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const INTERN_EMAIL = "info@eramholdings.co.ke";

const areas = [
  "Electoral Governance",
  "Peacebuilding",
  "Training & Capacity Building",
  "Research & Policy",
  "Advocacy & Communications",
];

export function InternFormDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const name = get("name").slice(0, 100);
    const email = get("email").slice(0, 255);
    const phone = get("phone").slice(0, 40);
    const institution = get("institution").slice(0, 150);
    const area = get("area");
    const availability = get("availability").slice(0, 100);
    const motivation = get("motivation").slice(0, 1000);

    if (!name || !email || !motivation) {
      setError("Please fill in your name, email and motivation.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Institution / Course: ${institution}`,
      `Area of interest: ${area}`,
      `Availability: ${availability}`,
      "",
      "Motivation:",
      motivation,
    ].join("\n");

    window.location.href = `mailto:${INTERN_EMAIL}?subject=${encodeURIComponent(
      `Internship application — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Work with us</DialogTitle>
          <DialogDescription>
            Apply for an internship with Eram Holdings Limited. We will get back to you by email.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="mt-2 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="intern-name">Full name *</Label>
              <Input id="intern-name" name="name" maxLength={100} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="intern-email">Email *</Label>
              <Input id="intern-email" name="email" type="email" maxLength={255} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="intern-phone">Phone</Label>
              <Input id="intern-phone" name="phone" maxLength={40} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="intern-institution">Institution / course</Label>
              <Input id="intern-institution" name="institution" maxLength={150} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="intern-area">Area of interest</Label>
              <select
                id="intern-area"
                name="area"
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
                defaultValue={areas[0]}
              >
                {areas.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="intern-availability">Availability</Label>
              <Input id="intern-availability" name="availability" placeholder="e.g. Jan – Apr 2027" maxLength={100} />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="intern-motivation">Why do you want to intern with us? *</Label>
            <Textarea id="intern-motivation" name="motivation" rows={4} maxLength={1000} required />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" className="w-full">
            Submit application
          </Button>
          <p className="text-xs text-muted-foreground">
            This opens your email app with the application pre-filled. Attach your CV before sending.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
