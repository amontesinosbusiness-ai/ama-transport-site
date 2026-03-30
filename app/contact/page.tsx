"use client";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  return (
    <div className="section-padding space-y-12">
      <div className="container space-y-6">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your project"
          subtitle="Share your vendor list, delivery windows, and jobsite requirements. We'll coordinate the freight plan."
        />
      </div>

      <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <form
          className="glass rounded-3xl p-8 border border-white/10 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus("loading");
            setError("");
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);

            const payload = {
              name: data.get("name")?.toString() || "",
              email: data.get("email")?.toString() || "",
              phone: data.get("phone")?.toString() || "",
              company: data.get("company")?.toString() || "",
              message: data.get("message")?.toString() || ""
            };

            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload)
            });

            if (res.ok) {
              setStatus("success");
              form.reset();
            } else {
              const body = await res.json();
              setError(body?.error || "Something went wrong.");
              setStatus("error");
            }
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Name
              <input
                required
                className="rounded-xl bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-cyan-300"
                type="text"
                placeholder="Your full name"
                name="name"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Email
              <input
                required
                className="rounded-xl bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-cyan-300"
                type="email"
                placeholder="you@company.com"
                name="email"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Company
              <input
                className="rounded-xl bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-cyan-300"
                type="text"
                placeholder="Company or organization"
                name="company"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Phone
              <input
                className="rounded-xl bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-cyan-300"
                type="text"
                placeholder="(555) 555-5555"
                name="phone"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-slate-200">
            Project Details & Message
            <textarea
              className="rounded-xl bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-cyan-300 min-h-[140px]"
              placeholder="Share your vendor list, delivery windows, jobsite requirements, and FF&E program."
              name="message"
            />
          </label>
          <div className="flex gap-3 flex-wrap items-center">
            <Button type="submit" size="lg" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Request a Quote"}
            </Button>
            <Button type="button" variant="outline" size="lg">Schedule a Call</Button>
            {status === "success" ? <span className="text-cyan-200 text-sm">Thanks—AMA will reach out shortly.</span> : null}
            {status === "error" ? <span className="text-red-300 text-sm">{error}</span> : null}
          </div>
        </form>

        <div className="space-y-4">
          <div className="glass rounded-3xl p-8 border border-white/10 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Contact</p>
            <p className="flex items-center gap-2 text-slate-200"><Mail size={18} /> info@AMATransportLogistics.com</p>
            <p className="flex items-center gap-2 text-slate-200"><span className="font-semibold">Phone:</span> (786) 516-1416</p>
            <p className="flex items-center gap-2 text-slate-200"><MapPin size={18} /> 7701 NW 46th St, Miami, Florida 33166</p>
            <p className="text-slate-300 text-sm">We respond within one business day with next steps and timelines.</p>
          </div>
          <div className="glass rounded-3xl p-8 border border-white/10 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">What to include</p>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Vendor list and pickup locations</li>
              <li>Target opening date and install dates</li>
              <li>Special handling requirements</li>
              <li>Jobsite delivery constraints</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
