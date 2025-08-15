'use client';

import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MarketChart from "./components/MerketChart";
import Section from "./components/Section";
import SocialLinks from "./components/SocialLinks";
import StripMetrics from "./components/StripMetrics";
import useReveal from "./lib/useReveal";

export default function Page() {
  useReveal();

  return (
    <>
      <header className="topbar">
        <div className="topbar__brand">SaturnusGo</div>
        <SocialLinks size="sm" />
      </header>

      <Hero />
      <StripMetrics />

      <Section
        id="value"
        kicker="Why now"
        title="Mobility is fragmented. Payments are blocked. Planning is manual."
        subtitle="SaturnusGo unifies rides, bookings, saved places, events and payments into one coherent flow — designed to be trusted from the first tap."
      >
        <FeatureCards />
      </Section>

      {/* УБРАЛИ липкий showcase → никаких пустых экранов */}
      <Section
        id="product"
        kicker="Product"
        title="One app. Every journey."
        subtitle="Ride-hailing • Hotel bookings • Saved collections • Weekend planning • Events • Wallet & cards • Loyalty & subscriptions."
      >
        <ul className="bullets">
          <li>Gesture-first UX with smooth, tactile animations.</li>
          <li>Calendar with overlap-guards, guest logic, and smart suggestions.</li>
          <li>Financial hub: transaction history, analytics, multi-period charts.</li>
          <li>Saved places & curated lists to drive repeat usage and monetization.</li>
        </ul>
      </Section>

      <Section
        id="market"
        kicker="Market"
        title="Large, growing and under-served beachheads"
        subtitle="LATAM (AR/BR), MENA (UAE/KSA), Europe — urban professionals and travelers with real friction in payments and fragmented services."
      >
        <div className="grid market">
          <div className="card"><h4>TAM</h4><p>Global urban mobility + travel bookings.</p><p className="metric">$2.1T+</p></div>
          <div className="card"><h4>SAM</h4><p>Emerging markets using mobile for rides/booking.</p><p className="metric">$185B</p></div>
          <div className="card"><h4>SOM (Yr 3)</h4><p>Conservative share from 3 beachheads.</p><p className="metric">$110M ARR</p><p className="hint">≈2.5M MAU • ~$44 ARPU</p></div>
        </div>

        {/* НОВЫЙ понятный заголовок перед графиками */}
        <h3 className="chart-head">Market Size Breakdown & 3-Year Outlook</h3>
        <MarketChart />
      </Section>

      <Section
        id="model"
        kicker="Business Model"
        title="Monetization designed to align with users"
        subtitle="Ride commissions, hotel booking margins, B2B featured listings, subscriptions (Pro & Flexible). No fees on balance top-ups."
      >
        <div className="grid model">
          <div className="pill">Ride commission (per trip)</div>
          <div className="pill">Hotel margins (suppliers/partners)</div>
          <div className="pill">Subscriptions (Pro / Flexible)</div>
          <div className="pill">Featured & Boosted Places (B2B)</div>
        </div>
      </Section>

      {/* CTA: скачать пичдек */}
      <Section
        id="cta"
        kicker="Investors"
        title="Download the pitch deck"
        subtitle="A focused PDF with problems, solution, market, model, and go-to-market — tuned for quick investor review."
      >
        <div className="cta-row">
          <a className="btn btn-primary" href="/SaturnusGo-pitch.pdf" download>
            Download Pitch Deck (PDF)
          </a>
          <div className="subnote">No email required. Updated frequently pre-launch.</div>
        </div>
      </Section>

      <Section id="follow" kicker="Follow" title="Stay in the loop" subtitle="Product updates, pre-launch progress, and investor notes.">
        <div className="follow-wrap"><SocialLinks size="lg" /></div>
      </Section>

      <Footer />
    </>
  );
}