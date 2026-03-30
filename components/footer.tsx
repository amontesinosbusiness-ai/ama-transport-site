"use client";

import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="container py-12 grid gap-10 md:grid-cols-4 text-sm text-slate-200">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center shadow-glow">
              <Image
                src="/ama-logo.png"
                alt="AMA Transport Logistics"
                width={46}
                height={46}
                className="object-contain"
              />
            </div>
            <p className="text-lg font-semibold text-white">AMA Transport Logistics</p>
          </div>
          <p className="text-slate-400">
            Miami-based hospitality FF&E logistics and project freight partner for hotels, restaurants, universities, and developers.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Quick Links</p>
          <div className="flex flex-col gap-2 text-slate-300">
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Contact</p>
          <div className="space-y-2 text-slate-300">
            <a href="mailto:info@AMATransportLogistics.com" className="flex items-center gap-2 hover:text-cyan-300 transition-colors w-fit">
            <Mail size={16} /> info@AMATransportLogistics.com
            </a>

            <a href="tel:+17865161416" className="flex items-center gap-2 hover:text-cyan-300 transition-colors w-fit">
            <Phone size={16} /> (786) 516-1416
           </a>
            <p className="flex items-center gap-2"><MapPin size={16} /> 7701 NW 46th St, Miami, Florida 33166</p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white mb-3">Connect</p>
          <div className="flex gap-3 text-slate-300">
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} AMA Transport Logistics. All rights reserved.
      </div>
    </footer>
  );
}
