"use client";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
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
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Email
              <input
                required
                className="rounded-xl bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-cyan-300"
                type="email"
                placeholder="you@company.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Company
              <input
                className="rounded-xl bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-cyan-300"
                type="text"
                placeholder="Company or organization"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Project Details
              <input
                className="rounded-xl bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-cyan-300"
                type="text"
                placeholder="Location, timeline, vendor count"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-slate-200">
            Message
            <textarea
              className="rounded-xl bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-cyan-300 min-h-[140px]"
              placeholder="Describe your FF&E program, timelines, and delivery needs."
            />
          </label>
          <div className="flex gap-3 flex-wrap items-center">
            <Button type="submit" size="lg">Request a Quote</Button>
            <Button type="button" variant="outline" size="lg">Schedule a Call</Button>
            {submitted ? <span className="text-cyan-200 text-sm">Thanks—AMA will reach out shortly.</span> : null}
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
