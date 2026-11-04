import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './components/HeroSection';
import { ExpeditionsSection } from './components/ExpeditionsSection';
import { ExpeditionModal } from './components/ExpeditionModal';
import { ConditionsCalendarSection } from './components/ConditionsCalendarSection';
import { SafetyFleetSection } from './components/SafetyFleetSection';
import { EquipmentSection } from './components/EquipmentSection';
import { LogbookGallerySection } from './components/LogbookGallerySection';
import { ContactFooterSection } from './components/ContactFooterSection';
import { Preloader } from './components/Preloader';
import { Expedition, GearItem } from './data/diveData';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedExpedition, setSelectedExpedition] = useState<Expedition | null>(null);

  // Pre-filled state for the Contact / Booking form
  const [contactInitialExpedition, setContactInitialExpedition] = useState<string>('');
  const [contactInitialDate, setContactInitialDate] = useState<string>('');
  const [contactRentalSummary, setContactRentalSummary] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExpeditions = () => {
    const el = document.getElementById('expeditions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestExpedition = (expedition: Expedition) => {
    setSelectedExpedition(null);
    setContactInitialExpedition(expedition.title);
    scrollToContact();
  };

  const handleReserveTrip = (tripTitle: string, dateStr: string) => {
    setContactInitialExpedition(tripTitle);
    setContactInitialDate(dateStr);
    scrollToContact();
  };

  const handleSendRentalRequest = (
    items: { item: GearItem; days: number }[],
    totalAUD: number
  ) => {
    const gearList = items
      .map((i) => `• ${i.item.name} (${i.days} days: $${i.item.dailyAUD * i.days} AUD)`)
      .join('\n');
    const summary = `Requested Rental Equipment (Total: $${totalAUD.toLocaleString()} AUD):\n${gearList}\n\nPlease prepare and calibrate this kit for my expedition.`;
    setContactRentalSummary(summary);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#050E1D] text-[#DCE6E9] font-sans selection:bg-[#00A5B4]/30 selection:text-white">
      {/* Preloader with pulsing logomark bubble */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Torch Beam Cursor (desktop only) */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navbar onBookClick={scrollToContact} />

      {/* Main Page Sections */}
      <main>
        {/* SECTION 1: Cinematic Hero with Mouse-Driven Flashlight Reveal */}
        <HeroSection
          onExploreClick={scrollToExpeditions}
          onPlanClick={scrollToContact}
        />

        {/* SECTION 2: Featured Expeditions & Signature Dives */}
        <ExpeditionsSection onSelectExpedition={setSelectedExpedition} />

        {/* SECTION 3: Real-Time Conditions & Interactive Dive Calendar */}
        <ConditionsCalendarSection onReserveTrip={handleReserveTrip} />

        {/* SECTION 4: Safety Standards, Fleet Breakdown & Depth Gauge */}
        <SafetyFleetSection />

        {/* SECTION 5: Precision Gear & Interactive Rental Calculator */}
        <EquipmentSection onSendRentalRequest={handleSendRentalRequest} />

        {/* SECTION 6: Interactive Gallery & Authentic Logbook */}
        <LogbookGallerySection />

        {/* SECTION 7: Direct Concierge Inquiries & Global Footer */}
        <ContactFooterSection
          initialExpedition={contactInitialExpedition}
          initialDate={contactInitialDate}
          rentalSummaryText={contactRentalSummary}
        />
      </main>

      {/* Detailed Expedition Modal */}
      <ExpeditionModal
        expedition={selectedExpedition}
        onClose={() => setSelectedExpedition(null)}
        onRequestExpedition={handleRequestExpedition}
      />
    </div>
  );
}
