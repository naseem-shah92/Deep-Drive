import React, { useState } from 'react';
import { EXPEDITIONS } from '../data/diveData';
import { VerticalBrandmark, Logomark } from './BrandLogo';
import { Send, Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2, Shield, Anchor } from 'lucide-react';

interface ContactFooterSectionProps {
  initialExpedition?: string;
  initialDate?: string;
  rentalSummaryText?: string;
}

export const ContactFooterSection: React.FC<ContactFooterSectionProps> = ({
  initialExpedition = '',
  initialDate = '',
  rentalSummaryText = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    certification: 'Advanced',
    expedition: initialExpedition || EXPEDITIONS[0].title,
    preferredDate: initialDate,
    groupSize: '2 Divers',
    message: rentalSummaryText || '',
    honeypot: '', // anti-spam
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard bot

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate luxury concierge dispatch with rising bubble animation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <footer id="contact" className="relative bg-[#050E1D] pt-24 pb-12 border-t border-[#00A5B4]/20 overflow-hidden">
      {/* Subtle animated water ripple line across the top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A5B4]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] text-[#00A5B4] uppercase">
            <span className="w-6 h-[1px] bg-[#00A5B4]" />
            <span>EXPEDITION CONCIERGE & DIRECT DISPATCH</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[0.15em] text-white uppercase">
            Plan Your Deep Dive Expedition
          </h2>
          <p className="mt-3 text-sm font-light text-[#DCE6E9]/80 max-w-2xl leading-relaxed">
            Every voyage is bespoke. Our Master Expedition Leaders will customize your itinerary, vessel charter, gas blending, and private marine biologist guides.
          </p>
        </div>

        {/* 2-Column Layout: Form (7 cols) + Contact / Map (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 glass-panel rounded-lg p-6 sm:p-10 border border-[#00A5B4]/30 relative">
            {isSubmitted ? (
              <div className="py-16 text-center flex flex-col items-center">
                {/* Rising bubble success animation */}
                <div className="w-16 h-16 rounded-full bg-[#00A5B4]/20 border border-[#00A5B4] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,165,180,0.5)] animate-bounce">
                  <CheckCircle2 className="w-8 h-8 text-[#00A5B4]" />
                </div>
                <h3 className="text-2xl font-light text-white uppercase tracking-wide">
                  Expedition Request Received
                </h3>
                <p className="mt-3 text-sm font-light text-[#DCE6E9]/80 max-w-md mx-auto leading-relaxed">
                  Our Chief Expedition Leader will review tidal charts and vessel availability. Expect a personalized expedition prospectus within 12 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      certification: 'Advanced',
                      expedition: EXPEDITIONS[0].title,
                      preferredDate: '',
                      groupSize: '2 Divers',
                      message: '',
                      honeypot: '',
                    });
                  }}
                  className="mt-8 px-6 py-2.5 text-xs font-mono uppercase tracking-widest text-[#00A5B4] border border-[#00A5B4]/40 rounded hover:bg-[#00A5B4]/10 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field for bot spam */}
                <input
                  type="text"
                  name="user_system_trap"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono tracking-widest text-[#DCE6E9]/70 uppercase block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Thomas Howard"
                      className="w-full bg-[#050E1D] border border-white/10 rounded p-3 text-xs text-white placeholder-white/20 focus:border-[#00A5B4] focus:outline-none transition-colors"
                    />
                    {errors.name && (
                      <span className="text-[10px] text-rose-400 mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-widest text-[#DCE6E9]/70 uppercase block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. t.howard@ocean.org"
                      className="w-full bg-[#050E1D] border border-white/10 rounded p-3 text-xs text-white placeholder-white/20 focus:border-[#00A5B4] focus:outline-none transition-colors"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-rose-400 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono tracking-widest text-[#DCE6E9]/70 uppercase block mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+61 400 123 456"
                      className="w-full bg-[#050E1D] border border-white/10 rounded p-3 text-xs text-white placeholder-white/20 focus:border-[#00A5B4] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-widest text-[#DCE6E9]/70 uppercase block mb-1">
                      Diver Certification
                    </label>
                    <select
                      value={formData.certification}
                      onChange={(e) => setFormData({ ...formData, certification: e.target.value })}
                      className="w-full bg-[#050E1D] border border-white/10 rounded p-3 text-xs text-white focus:border-[#00A5B4] focus:outline-none transition-colors"
                    >
                      <option value="Non-Certified">Non-Certified (Discover Scuba)</option>
                      <option value="Open Water">PADI / SSI Open Water (18m)</option>
                      <option value="Advanced">Advanced Open Water (30m)</option>
                      <option value="Rescue / Divemaster">Rescue / Divemaster</option>
                      <option value="Technical CCR">Technical Trimix / CCR Rebreather</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono tracking-widest text-[#DCE6E9]/70 uppercase block mb-1">
                      Expedition of Interest
                    </label>
                    <select
                      value={formData.expedition}
                      onChange={(e) => setFormData({ ...formData, expedition: e.target.value })}
                      className="w-full bg-[#050E1D] border border-white/10 rounded p-3 text-xs text-white focus:border-[#00A5B4] focus:outline-none transition-colors"
                    >
                      {EXPEDITIONS.map((exp) => (
                        <option key={exp.id} value={exp.title}>
                          {exp.title} (${exp.priceAUD.toLocaleString()} AUD)
                        </option>
                      ))}
                      <option value="Private Custom Vessel Charter">Private Custom Vessel Charter</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-widest text-[#DCE6E9]/70 uppercase block mb-1">
                      Preferred Dates / Window
                    </label>
                    <input
                      type="text"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      placeholder="e.g. November 2026 or Flexible"
                      className="w-full bg-[#050E1D] border border-white/10 rounded p-3 text-xs text-white placeholder-white/20 focus:border-[#00A5B4] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-widest text-[#DCE6E9]/70 uppercase block mb-1">
                    Special Requests, Gear Preferences & Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify rental equipment requirements, private cabin preferences, dietary requirements, or camera dry lab access..."
                    className="w-full bg-[#050E1D] border border-white/10 rounded p-3 text-xs text-white placeholder-white/20 focus:border-[#00A5B4] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs font-mono tracking-[0.25em] text-white uppercase bg-[#00A5B4] hover:bg-[#00A5B4]/85 rounded shadow-[0_0_25px_rgba(0,165,180,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Dispatching Request...</span>
                  ) : (
                    <>
                      <span>Transmit Expedition Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Nautical Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-lg p-6 sm:p-8 border border-[#00A5B4]/30 space-y-6">
              <h3 className="text-lg font-light tracking-wide text-white uppercase">
                Base Operations & Concierge
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#00A5B4] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#DCE6E9]/60 font-mono block text-[10px] uppercase">
                      Operational Headquarters
                    </span>
                    <span className="text-white">
                      Marlin Marina, Berth 14, Cairns, Queensland 4870, Australia
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#00A5B4] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#DCE6E9]/60 font-mono block text-[10px] uppercase">
                      Expedition Operations
                    </span>
                    <a href="tel:+61740510000" className="text-white hover:text-[#00A5B4] font-mono">
                      +61 (0) 7 4051 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#00A5B4] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#DCE6E9]/60 font-mono block text-[10px] uppercase">
                      Direct Concierge
                    </span>
                    <a href="mailto:expeditions@deepdiveaustralia.com" className="text-white hover:text-[#00A5B4] font-mono">
                      expeditions@deepdiveaustralia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#00A5B4] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#DCE6E9]/60 font-mono block text-[10px] uppercase">
                      Concierge Hours
                    </span>
                    <span className="text-white">
                      06:00 – 22:00 AEST (24/7 Satellite Watch for Active Vessels)
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Button */}
              <a
                href="https://wa.me/61400123456"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-colors flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Concierge</span>
              </a>
            </div>

            {/* Dark Styled Nautical Chart Map Box */}
            <div className="rounded-lg overflow-hidden border border-[#00A5B4]/20 relative h-56 bg-[#00233F]/70 flex flex-col justify-between p-5">
              {/* Bathymetric contour line SVG decoration */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,50 Q150,20 300,80 T600,40" fill="none" stroke="#00A5B4" strokeWidth="1" />
                <path d="M0,100 Q200,60 400,120 T800,80" fill="none" stroke="#00A5B4" strokeWidth="1" />
                <path d="M0,160 Q120,130 350,170 T700,140" fill="none" stroke="#D4AF6A" strokeWidth="0.8" />
              </svg>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#00A5B4] tracking-widest uppercase">
                  NAUTICAL CHART SECTOR 4
                </span>
                <span className="text-[10px] font-mono text-white/50">WGS 84 DATUM</span>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-3 h-3 rounded-full bg-[#00A5B4] mx-auto animate-ping" />
                <div className="text-xs font-mono text-white mt-1">CAIRNS EXPEDITION ANCHORAGE</div>
                <div className="text-[10px] font-mono text-[#DCE6E9]/60">16° 55.1&apos; S · 145° 46.8&apos; E</div>
              </div>

              <div className="relative z-10 text-[10px] font-mono text-[#D4AF6A] text-right">
                CHART AUS 830 DEPTH: 14M LWS
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer Lockup */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-xs font-light text-[#DCE6E9]/70">
          {/* Left: Logomark + Tagline */}
          <div className="flex items-center gap-4">
            <Logomark size={42} />
            <div>
              <span className="text-sm font-light tracking-[0.2em] text-white uppercase block">
                DEEP DIVE AUSTRALIA
              </span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#00A5B4] uppercase">
                EXPLORE THE DEPTHS
              </span>
            </div>
          </div>

          {/* Center: Vertical Squid Wordmark as requested in brand sheet */}
          <div className="hidden lg:block py-2">
            <VerticalBrandmark />
          </div>

          {/* Right: Copyright and Safety accreditations */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right text-[11px] font-mono text-[#DCE6E9]/60 space-y-1">
            <div className="flex items-center gap-3 text-white/80">
              <a href="#expeditions" className="hover:text-[#00A5B4]">Expeditions</a>
              <span>·</span>
              <a href="#conditions" className="hover:text-[#00A5B4]">Conditions</a>
              <span>·</span>
              <a href="#fleet" className="hover:text-[#00A5B4]">Fleet</a>
              <span>·</span>
              <a href="#equipment" className="hover:text-[#00A5B4]">Equipment</a>
              <span>·</span>
              <a href="#logbook" className="hover:text-[#00A5B4]">Logbook</a>
            </div>
            <span>© {new Date().getFullYear()} Deep Dive Australia Pty Ltd. All rights reserved.</span>
            <span className="text-[#D4AF6A]">GBRMPA Commercial Permit Approved · DAN Asia-Pacific Member #4829</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
