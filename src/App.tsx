import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { CustomCursor } from './components/common/CustomCursor';
import { DepthGauge } from './components/common/DepthGauge';
import { Preloader } from './components/common/Preloader';
import { HeroSection } from './components/hero/HeroSection';
import { ExpeditionsSection } from './components/expeditions/ExpeditionsSection';
import { ExpeditionModal } from './components/expeditions/ExpeditionModal';
import { ConditionsCalendarSection } from './components/conditions/ConditionsCalendarSection';
import { SafetyFleetSection } from './components/safety/SafetyFleetSection';
import { EquipmentSection } from './components/equipment/EquipmentSection';
import { LogbookGallerySection } from './components/logbook/LogbookGallerySection';
import { ContactFooterSection } from './components/contact/ContactFooterSection';
import { Expedition } from './types/expedition';
import { GearItem } from './types/gear';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedExpedition, setSelectedExpedition] = useState<Expedition | null>(null);

  // Pre-filled state for the Contact / VIP Booking form
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
    const summary = `Requested Equipment Kit (Total: $${totalAUD.toLocaleString()} AUD):\n${gearList}\n\nPlease prepare this kit for my arrival.`;
    setContactRentalSummary(summary);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#070D18] text-[#E2E8F0] font-sans selection:bg-[#E5C890]/25 selection:text-white">
      {/* Editorial Entrance Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Understated Custom Cursor */}
      <CustomCursor />

      {/* Vertical Ocean Depth Gauge HUD (0m to 150m) */}
      <DepthGauge />

      {/* Navigation Header */}
      <Navbar onBookClick={scrollToContact} />

      {/* Main Experience Flow */}
      <main>
        {/* Section 1: Hero with Torch / Flood / UV Biolum Modes */}
        <HeroSection
          onExploreClick={scrollToExpeditions}
          onPlanClick={scrollToContact}
        />

        {/* Section 2: Signature Expeditions Editorial Cards */}
        <ExpeditionsSection onSelectExpedition={setSelectedExpedition} />

        {/* Section 3: Live Oceanic Telemetry & Calendar */}
        <ConditionsCalendarSection onReserveTrip={handleReserveTrip} />

        {/* Section 4: Safety Protocols & Blue Water Fleet */}
        <SafetyFleetSection />

        {/* Section 5: Precision Life Support Gear & Calculator */}
        <EquipmentSection onSendRentalRequest={handleSendRentalRequest} />

        {/* Section 6: Authentic Field Journal Logbook & Lightbox */}
        <LogbookGallerySection />

        {/* Section 7: VIP Concierge Booking Dossier & Footer */}
        <ContactFooterSection
          initialExpedition={contactInitialExpedition}
          initialDate={contactInitialDate}
          rentalSummaryText={contactRentalSummary}
        />
      </main>

      {/* Expedition Itinerary Modal */}
      <ExpeditionModal
        expedition={selectedExpedition}
        onClose={() => setSelectedExpedition(null)}
        onRequestExpedition={handleRequestExpedition}
      />
    </div>
  );
}
