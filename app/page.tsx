import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, PackageSearch, PlaneTakeoff, Truck, Warehouse } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Global Vendor Pickup", icon: Globe2, copy: "Coordinated pickup from domestic and international manufacturers." },
  { title: "International Freight Coordination", icon: PlaneTakeoff, copy: "Air, ocean, and ground freight managed end-to-end into Miami." },
  { title: "Miami Warehousing", icon: Warehouse, copy: "Secure FF&E storage with project-based inventory visibility." },
  { title: "Shipment Consolidation", icon: PackageSearch, copy: "Organized receiving, labeling, and staging for multi-vendor projects." },
  { title: "Final Mile Delivery", icon: Truck, copy: "White-glove delivery to hospitality jobsites on tight timelines." },
  { title: "Hospitality Project Logistics", icon: Truck, copy: "Dedicated coordination built for restaurants, hotels, universities, and developers." }
];

const steps = [
  {
    title: "Client Orders FF&E",
    detail:
      "Restaurants, hotels, and developers purchase furniture, lighting, equipment, and décor from vendors worldwide."
  },
  { title: "Vendor Pickup", detail: "AMA coordinates pickup from manufacturers and suppliers." },
  { title: "Shipping to Miami", detail: "Cargo moves via air, ocean, or ground freight." },
  { title: "Warehouse Consolidation", detail: "Shipments are received and organized in Miami until the project is ready." },
  { title: "Final Jobsite Delivery", detail: "Cargo is delivered to the restaurant, hotel, university, or hospitality development." }
];

const industries = [
  "Restaurants",
  "Hotels",
  "Resorts",
  "Hospitality Groups",
  "Interior Designers",
  "Developers",
  "Universities"
];

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid-overlay" aria-hidden />

      {/* --- HERO SECTION START --- */}
      <section className="section-padding relative overflow-hidden min-h-[90vh] flex items-center pt-32">

        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/miami-port-bg.png"
            alt="Miami Port Container Ships"
            className="absolute h-full w-[125%] max-w-none object-cover opacity-60 -left-[20%]"
            style={{ objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" aria-hidden />
        </div>

        <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/70">Hospitality FF&E Logistics</p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight drop-shadow-lg">
              Hospitality FF&E Logistics & Project Freight
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl drop-shadow-md">
              Vendor pickup, international shipping, Miami warehousing, consolidation, and final delivery for hospitality projects.
              Built for restaurants, hotels, universities, developers, and interior designers opening in Florida.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* CLEANED UP: Only one primary button now */}
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-10">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 max-w-xl mt-8">
              <div className="glass p-4 rounded-2xl card-hover bg-background/40">
                <p className="text-white font-semibold text-lg">Miami HQ</p>
                <p>Strategic warehousing and final-mile network covering South Florida.</p>
              </div>
              <div className="glass p-4 rounded-2xl card-hover bg-background/40">
                <p className="text-white font-semibold text-lg">Project Ready</p>
                <p>Built to coordinate multi-vendor hospitality projects without delays.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-glow blur-3xl opacity-50" aria-hidden />
            <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden bg-background/20 backdrop-blur-md">
              <div className="absolute inset-0 bg-grid opacity-40" style={{ backgroundSize: "120px 120px" }} aria-hidden />
              <div className="relative space-y-6">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">Logistics Management</p>
                <h3 className="text-2xl font-semibold text-white">Centralized FF&E Visibility</h3>
                <p className="text-slate-300 text-sm">
                  Every shipment is coordinated through AMA: vendor pickup, international freight, Miami receiving, consolidation, and final mile delivery to opening day.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {services.slice(0, 4).map((service) => (
                    <div key={service.title} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <p className="text-white font-medium">{service.title}</p>
                      <p className="text-slate-400 text-xs mt-1">{service.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- HERO SECTION END --- */}

      <section className="section-padding">
        <div className="container space-y-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Seamless logistics for hospitality FF&E"
            subtitle="Premium coordination across every freight leg with careful handling of furniture, fixtures, and project cargo."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="glass p-6 rounded-2xl card-hover h-full flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <service.icon className="h-5 w-5 text-cyan-300" />
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">{service.copy}</p>
                <div className="flex items-center gap-2 text-cyan-200 text-xs uppercase tracking-[0.25em]">
                  <span>Coordinated</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container space-y-10">
          <SectionHeading
            eyebrow="Process"
            title="How AMA moves hospitality projects"
            subtitle="Clear milestones keep schedules on track from purchase orders to opening day."
          />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/70 via-blue-500/40 to-transparent" aria-hidden />
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="relative pl-16 glass rounded-2xl p-6 card-hover">
                  <div className="absolute left-4 top-6 h-3 w-3 rounded-full bg-cyan-400 shadow-glow" />
                  <div className="absolute left-2 top-4 text-xs text-slate-400">0{index + 1}</div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container space-y-8">
          <SectionHeading
            eyebrow="Industries"
            title="Purpose-built for hospitality openings"
            subtitle="Coordinating diverse vendor networks across foodservice, lodging, university, and design programs."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              /* CLEANED UP: Arrow icon removed from here */
              <div key={item} className="glass p-5 rounded-2xl flex items-center justify-center text-center card-hover">
                <p className="text-white font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Founder"
              title="Built by logistics experience"
              subtitle="Adrian Montesinos founded AMA after witnessing fragile hospitality shipments mishandled, damaged, or delayed."
            />
            <p className="text-slate-300 leading-relaxed">
              After six years in logistics, Adrian created AMA Transport Logistics to provide a better experience built around reliability, coordination, and care for critical project cargo. Hospitality openings depend on undamaged FF&E arriving together and on time—AMA was built to make that happen.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
          <div className="glass rounded-3xl p-8 border border-white/10 card-hover">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80 mb-4">Why it matters</p>
            <p className="text-lg text-white font-semibold mb-4">"Hospitality projects fail when freight coordination fails."</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Multi-vendor FF&E programs require a single coordination hub that tracks every shipment, receives and labels inventory in Miami, consolidates loads, and schedules final mile delivery precisely when jobsites can receive. AMA removes the guesswork so openings stay on schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container glass rounded-3xl p-10 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" style={{ backgroundSize: "120px 120px" }} aria-hidden />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Ready to ship</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Coordinate your next hospitality opening with AMA</h3>
              <p className="text-slate-300">Tell us about your vendors, timelines, and jobsite requirements—our team will design the freight plan.</p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
