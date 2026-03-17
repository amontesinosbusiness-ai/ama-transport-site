import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="section-padding space-y-12">
      <div className="container space-y-6">
        <SectionHeading
          eyebrow="About"
          title="Built to protect every hospitality shipment"
          subtitle="AMA Transport Logistics was created to stop fragile FF&E from arriving damaged, delayed, or disorganized."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Adrian Montesinos founded AMA Transport Logistics after spending over six years in the logistics industry. During that time, he consistently saw one frustrating problem: important shipments—often fragile packages—arriving opened, damaged, torn apart, or mishandled by delivery drivers.
            </p>
            <p>
              For hospitality projects, this can cause major delays. Furniture, lighting fixtures, equipment, and custom décor pieces often arrive from multiple vendors across different countries, and when those items are damaged or delayed it can disrupt entire restaurant or hotel openings.
            </p>
            <p>
              After seeing this problem repeatedly, Adrian built AMA Transport Logistics with a clear mission: to create a logistics partner that treats every shipment with care and coordination.
            </p>
            <p>
              AMA focuses on organized vendor pickup, international freight coordination, careful cargo handling, Miami-based warehousing, and structured final delivery so that clients can focus on preparing their space for opening day.
            </p>
            <p>
              The goal of AMA Transport Logistics is simple: make the shipping process as easy, organized, and stress-free as possible so clients only have to focus on setting up their business and opening their doors.
            </p>
          </div>
          <div className="glass rounded-3xl p-8 border border-white/10 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Founder</p>
            <h3 className="text-2xl font-semibold text-white">Adrian Montesinos</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Miami-based logistics leader focused on FF&E freight reliability for hospitality projects across Florida.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-cyan-300/40 via-white/10 to-transparent" />
            <p className="text-slate-200 text-sm">
              "Every project deserves freight that arrives intact and on time. AMA exists to make that standard for hospitality openings."
            </p>
            <Button asChild>
              <Link href="/contact">Work with AMA</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container glass rounded-3xl p-10 border border-white/10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Mission</p>
          <h4 className="text-lg font-semibold text-white mt-2">Reliability first</h4>
          <p className="text-slate-300 text-sm mt-2">Protect every shipment with disciplined handling, documentation, and proactive communication.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Approach</p>
          <h4 className="text-lg font-semibold text-white mt-2">Control tower</h4>
          <p className="text-slate-300 text-sm mt-2">One centralized team coordinating vendors, carriers, warehousing, and jobsite deliveries.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Result</p>
          <h4 className="text-lg font-semibold text-white mt-2">On-time openings</h4>
          <p className="text-slate-300 text-sm mt-2">Projects open smoothly with consolidated FF&E arriving together and undamaged.</p>
        </div>
      </div>
    </div>
  );
}
