import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Building2, UtensilsCrossed, Hotel, School, Briefcase, Palette } from "lucide-react";
import Link from "next/link";

const industries = [
  { title: "Restaurants", icon: UtensilsCrossed, detail: "Coordinating booths, kitchen equipment, seating, and décor from multiple vendors." },
  { title: "Hotels & Resorts", icon: Hotel, detail: "Guestroom casegoods, lighting, soft goods, and amenity FF&E delivered together." },
  { title: "Hospitality Developers", icon: Building2, detail: "Centralized logistics for large-scale openings with strict timelines." },
  { title: "Interior Designers", icon: Palette, detail: "White-glove handling for custom pieces, art, and designer fixtures." },
  { title: "Procurement Firms", icon: Briefcase, detail: "Inventory receiving, labeling, and reporting that keeps procurement teams informed." },
  { title: "Universities", icon: School, detail: "Campus projects needing coordinated deliveries across buildings and phases." }
];

export default function IndustriesPage() {
  return (
    <div className="section-padding space-y-14">
      <div className="container space-y-6">
        <SectionHeading
          eyebrow="Industries"
          title="Serving the hospitality world"
          subtitle="AMA acts as the logistics hub connecting global vendors to Florida projects across foodservice, lodging, education, and design."
        />
        <div className="glass rounded-2xl p-6 text-slate-300 text-sm md:text-base">
          Hospitality programs often involve many vendors and installation phases. AMA consolidates inbound freight, stores FF&E securely in Miami, and schedules precise deliveries so openings stay on track.
        </div>
      </div>

      <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <div key={industry.title} className="glass p-6 rounded-2xl card-hover h-full flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <industry.icon className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-semibold text-white">{industry.title}</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed flex-1">{industry.detail}</p>
            <p className="text-xs text-cyan-200 uppercase tracking-[0.25em]">Logistics synchronized</p>
          </div>
        ))}
      </div>

      <div className="container glass rounded-3xl p-10 border border-white/10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Why AMA</p>
          <h3 className="text-2xl font-semibold text-white">One control tower for every vendor, freight mode, and jobsite requirement</h3>
          <p className="text-slate-300 text-sm md:text-base">
            We coordinate pickups, documentation, consolidation, and timed deliveries so your teams focus on building, not chasing shipments.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/contact">Schedule a Call</Link>
        </Button>
      </div>
    </div>
  );
}
