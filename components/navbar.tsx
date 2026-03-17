"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/60 border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center shadow-glow">
            <Image
              src="/ama-logo.png"
              alt="AMA Transport Logistics"
              width={52}
              height={52}
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold">AMA Transport Logistics</p>
            <p className="text-xs text-slate-300">Hospitality FF&E Logistics</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-100">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href as Route}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="shadow-glow">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg border border-white/10 text-white"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden bg-black/80 backdrop-blur-lg border-b border-white/10 transition-all",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="container flex flex-col gap-4 py-4 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href as Route}
              className="text-slate-100"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
