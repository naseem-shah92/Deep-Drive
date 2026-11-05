import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface BookingFormProps {
  initialExpedition?: string;
  initialDate?: string;
  rentalSummaryText?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialExpedition = '',
  initialDate = '',
  rentalSummaryText = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [expedition, setExpedition] = useState(initialExpedition);
  const [dates, setDates] = useState(initialDate);
  const [diversCount, setDiversCount] = useState('2');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialExpedition) setExpedition(initialExpedition);
    if (initialDate) setDates(initialDate);
    if (rentalSummaryText) {
      setSpecialRequests((prev) => (prev ? `${prev}\n\n${rentalSummaryText}` : rentalSummaryText));
    }
  }, [initialExpedition, initialDate, rentalSummaryText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-panel-luxury rounded-2xl p-8 sm:p-12 border border-white/15 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#070D18] border border-[#E5C890] mx-auto flex items-center justify-center shadow-lg">
          <CheckCircle2 className="w-8 h-8 text-[#E5C890]" />
        </div>
        <span className="text-xs font-mono tracking-widest text-[#E5C890] uppercase block">
          Inquiry Transmitted
        </span>
        <h3 className="font-display text-3xl font-light text-white">
          Thank you, {fullName || 'Explorer'}
        </h3>
        <p className="text-sm font-light text-slate-300 max-w-md mx-auto leading-relaxed">
          Your private expedition dossier has been routed to our Lead Maritime Coordinator. We will be in contact within 12 hours with customized vessel berths and tidal clearances.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono tracking-wider uppercase text-white hover:border-white transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel-luxury rounded-2xl p-7 sm:p-10 border border-white/10 space-y-6">
      <div className="border-b border-white/10 pb-4">
        <h4 className="font-display text-2xl font-light text-white">
          Private Expedition Inquiries
        </h4>
        <p className="text-xs font-light text-slate-400 mt-1">
          Direct liaison with our master guides. Every voyage is limited to private cadres.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Captain James Vance"
            className="w-full px-4 py-3 rounded-xl bg-[#070D18]/80 border border-white/10 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#E5C890]"
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="james@oceanics.com"
            className="w-full px-4 py-3 rounded-xl bg-[#070D18]/80 border border-white/10 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#E5C890]"
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-1.5">
            Direct Phone / WhatsApp
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+61 400 123 456"
            className="w-full px-4 py-3 rounded-xl bg-[#070D18]/80 border border-white/10 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#E5C890]"
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-1.5">
            Voyage of Interest
          </label>
          <input
            type="text"
            value={expedition}
            onChange={(e) => setExpedition(e.target.value)}
            placeholder="e.g. Ningaloo Megafauna Drift"
            className="w-full px-4 py-3 rounded-xl bg-[#070D18]/80 border border-white/10 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#E5C890]"
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-1.5">
            Target Dates or Month
          </label>
          <input
            type="text"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            placeholder="e.g. November 2026"
            className="w-full px-4 py-3 rounded-xl bg-[#070D18]/80 border border-white/10 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#E5C890]"
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-1.5">
            Cadre Size
          </label>
          <select
            value={diversCount}
            onChange={(e) => setDiversCount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#070D18] border border-white/10 text-white text-xs focus:outline-none focus:border-[#E5C890]"
          >
            <option value="1">Solo Diver (Private 1:1 Master Guide)</option>
            <option value="2">2 Divers (Pair)</option>
            <option value="4">4 Divers (Half Charter)</option>
            <option value="6">6 Divers (Full Vessel Charter)</option>
            <option value="8+">8+ Divers (Private Custom Superyacht)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-1.5">
          Equipment & Bespoke Requests
        </label>
        <textarea
          rows={3}
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Nitrox gas requirements, camera setup support, private flight transfers..."
          className="w-full px-4 py-3 rounded-xl bg-[#070D18]/80 border border-white/10 text-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#E5C890]"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-full text-xs font-mono tracking-[0.2em] uppercase font-medium text-slate-950 bg-white hover:bg-[#F4EBD9] transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/40"
      >
        <Send className="w-4 h-4" />
        <span>Submit Concierge Dossier</span>
      </button>
    </form>
  );
};
