import React from 'react';
import { BookingForm } from './BookingForm';
import { MapPin, Mail, Phone, Shield } from 'lucide-react';

interface ContactFooterSectionProps {
  initialExpedition?: string;
  initialDate?: string;
  rentalSummaryText?: string;
}

export const ContactFooterSection: React.FC<ContactFooterSectionProps> = ({
  initialExpedition,
  initialDate,
  rentalSummaryText,
}) => {
  return (
    <footer id="contact" className="relative pt-32 pb-16 px-6 md:px-12 bg-[#050A13] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Top: Booking Form & Concierge Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#E5C890] uppercase mb-2">
                <span className="w-5 h-[1px] bg-[#E5C890]/60" />
                <span>Expedition Concierge</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-white tracking-tight">
                Plan Your Descent
              </h2>
              <p className="mt-4 text-sm font-light text-slate-300/80 leading-relaxed">
                Whether charting a private voyage to Ningaloo or organizing technical dropoff exploration in the Coral Sea, our maritime coordinators handle all logistics.
              </p>
            </div>

            {/* Direct Contacts */}
            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2.5 rounded-full bg-[#070D18] border border-white/10">
                  <MapPin className="w-4 h-4 text-[#E5C890]" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">HEADQUARTERS</span>
                  <span>Marlin Marina, 1 Spence St, Cairns QLD 4870, Australia</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2.5 rounded-full bg-[#070D18] border border-white/10">
                  <Mail className="w-4 h-4 text-[#E5C890]" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">DIRECT EXPEDITION DESK</span>
                  <span>concierge@deepdiveaustralia.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2.5 rounded-full bg-[#070D18] border border-white/10">
                  <Phone className="w-4 h-4 text-[#E5C890]" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">SATELLITE OPERATIONS</span>
                  <span>+61 7 4051 8890 (24/7 Operations)</span>
                </div>
              </div>
            </div>

            {/* Accreditations */}
            <div className="p-4 rounded-xl bg-[#070D18]/70 border border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E5C890]" />
                <span>DAN Platinum Safety Partner</span>
              </div>
              <span>GBRMPA Permit 2026</span>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7">
            <BookingForm
              initialExpedition={initialExpedition}
              initialDate={initialDate}
              rentalSummaryText={rentalSummaryText}
            />
          </div>
        </div>

        {/* Bottom Brand Bar & Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="text-white font-display text-base tracking-widest uppercase">Deep Dive Australia</span>
            <span className="text-white/20">&bull;</span>
            <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-6 uppercase tracking-wider text-[11px]">
            <a href="#hero" className="hover:text-white transition-colors">Surface</a>
            <a href="#expeditions" className="hover:text-white transition-colors">Expeditions</a>
            <a href="#conditions" className="hover:text-white transition-colors">Telemetry</a>
            <a href="#fleet" className="hover:text-white transition-colors">Fleet</a>
            <a href="#equipment" className="hover:text-white transition-colors">Equipment</a>
            <a href="#logbook" className="hover:text-white transition-colors">Logbook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
