import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, PlaneTakeoff, Ship, Truck, Warehouse, Layers, ClipboardList, PackageSearch } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Global Vendor Pickup",
    icon: Globe2,
    detail: "Coordinated pickups from domestic and international manufacturers with proactive scheduling and communication."
  },
  {
    title: "International Freight Coordination",
    icon: PlaneTakeoff,
    detail: "End-to-end routing across air, ocean, and ground freight into Miami with customs visibility."
  },
  {
    title: "Ocean Freight",
    icon: Ship,
    detail: "Full-container and LCL programs built for furniture and oversized FF&E shipments."
  },
  {
    title: "Air Freight",
    icon: PlaneTakeoff,
    detail: "Expedited air solutions when project schedules compress and openings approach."
  },
  {
    title: "Ground Freight",
    icon: Truck,
    detail: "Domestic trucking network for vendor pickups and regional deliveries."
  },
  {
    title: "Miami Warehousing",
    icon: Warehouse,
    detail: "Secure storage near the port and airport with FF&E handling standards."
  },
  {
    title: "Inventory Receiving",
    icon: ClipboardList,
    detail: "Detailed receiving, labeling, and exception reporting so procurement teams stay informed."
  },
  {
    title: "Shipment Consolidation",
    icon: Layers,
    detail: "Project-based staging, kitting, and consolidation across vendors for phased installs."
  },
  {
    title: "Final Mile Delivery",
    icon: Truck,
    detail: "Jobsite appointments, white-glove handling, and install coordination."
  },
  {
    title: "Hospitality Project Logistics",
    icon: PackageSearch,
    detail: "A single control tower for multi-vendor FF&E programs powering restaurant and hotel openings."
  }
];

export default function ServicesPage() {
  return (
    <div className="section-padding space-y-14">
      <div className="container space-y-6">
        <SectionHeading
          eyebrow="Services"
          title="Logistics built for hospitality FF&E"
          subtitle="From vendor pickup to final mile, every leg is coordinated through AMA so projects open on time."
        />
        <div className="glass p-6 rounded-2xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-300 text-sm md:text-base">
            Multi-vendor hospitality projects require precise freight planning. AMA manages customs-ready documentation, carrier scheduling, warehousing, consolidation, and jobsite delivery windows—so procurement and project teams always know the next milestone.
          </p>
          <Button asChild>
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>

      <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="glass rounded-2xl p-6 card-hover h-full flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <service.icon className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed flex-1">{service.detail}</p>
            <div className="flex items-center gap-2 text-cyan-200 text-xs uppercase tracking-[0.25em]">
              <span>Coordinated</span>
              <ArrowRight size={14} />
            </div>
          </div>
        ))}
      </div>

      <div className="container glass rounded-3xl p-10 border border-white/10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Hospitality focus</p>
            <h3 className="text-2xl font-semibold text-white">Specialized in FF&E logistics for complex, multi-vendor projects</h3>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl">
              AMA designs routing plans that keep opening schedules intact—handling multiple origins, varied packaging, fragile fixtures, and phased installation timelines while keeping all parties informed.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Call</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
