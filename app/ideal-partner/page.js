"use client";

import { useEffect } from "react";
import Link from "next/link";

const PAGE_CONTENT = {
  hero: {
    eyebrow: "Ideal partner",
    title: "The Right Locations Make the FloorPlay™ Model Stronger.",
    description:
      "FloorPlay™ is built for clean, high-visibility retail environments where the product feels natural, elevated, and commercially aligned. We are not looking for every store. We are looking for the right fit.",
    primaryCta: {
      label: "Apply for a Location",
      href: "/apply",
    },
    secondaryCta: {
      label: "How It Works",
      href: "/how-it-works",
    },
  },

  partnerTraits: [
    {
      title: "Strong natural foot traffic",
      text: "The best locations already attract consistent customer flow without depending on FloorPlay™ to create the traffic from scratch.",
    },
    {
      title: "A clean visual environment",
      text: "Presentation matters. The space should feel organized, polished, and appropriate for a curated design-driven product.",
    },
    {
      title: "The right customer profile",
      text: "We look for stores where customers respond well to impulse-friendly products with lifestyle, design, and home relevance.",
    },
    {
      title: "Available display opportunity",
      text: "The ideal partner has usable floor or display space that can support a controlled, visually strong placement.",
    },
  ],

  fitBullets: [
    "Boutiques and style-driven retail stores",
    "Barbershops and salons with premium presentation",
    "Lifestyle stores and curated gift environments",
    "High-traffic neighborhood retail with strong browsing behavior",
    "Operators who value presentation, structure, and consistency",
  ],

  notIdealBullets: [
    "Cluttered or visually chaotic environments",
    "Spaces with weak customer visibility",
    "Locations expecting FloorPlay™ to function like random clearance product",
    "Operators unwilling to maintain basic presentation standards",
    "Stores that are not aligned with a premium branded retail system",
  ],

  comparisonRows: [
    {
      label: "Traffic quality",
      ideal: "Consistent browsing and visible customer flow",
      notIdeal: "Low engagement or weak walk-in visibility",
    },
    {
      label: "Store presentation",
      ideal: "Clean, organized, premium-feeling environment",
      notIdeal: "Cluttered, crowded, or poorly maintained layout",
    },
    {
      label: "Product fit",
      ideal: "Lifestyle-oriented, design-aware customer base",
      notIdeal: "No natural relevance to the product category",
    },
    {
      label: "Partnership mindset",
      ideal: "Open to a controlled branded system",
      notIdeal: "Treats the display like generic extra inventory",
    },
  ],
};

export default function IdealPartnerPage() {
  const { hero, partnerTraits, fitBullets, notIdealBullets, comparisonRows } =
    PAGE_CONTENT;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll(".fade-up");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="ideal-partner-page">
        <section className="hero fade-up">
          <div className="wrap hero-shell">
            <div className="hero-copy">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1>{hero.title}</h1>
              <p className="hero-text">{hero.description}</p>

              <div className="actions">
                <Link href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </Link>
                <Link href={hero.secondaryCta.href} className="btn btn-secondary">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="hero-stat-card">
              <span className="stat-label">Best partner profile</span>

              <div className="stat-stack">
                <div className="stat-row">
                  <span>Store type</span>
                  <strong>Clean retail environment</strong>
                </div>
                <div className="stat-row">
                  <span>Customer flow</span>
                  <strong>Visible and consistent</strong>
                </div>
                <div className="stat-row">
                  <span>Partnership fit</span>
                  <strong>Aligned with premium presentation</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">What we look for</p>
              <h2>The Best Partners Strengthen the Experience, Not Just the Placement.</h2>
              <p>
                FloorPlay™ performs best in stores where the product feels naturally
                integrated into the environment. The right location improves trust,
                visibility, and conversion without diluting the brand.
              </p>
            </div>

            <div className="trait-grid">
              {partnerTraits.map((trait) => (
                <article key={trait.title} className="trait-card">
                  <div className="trait-dot" />
                  <h3>{trait.title}</h3>
                  <p>{trait.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap split-grid">
            <div className="panel">
              <p className="eyebrow">Strong fit</p>
              <h2>Who the Model Is Designed For</h2>
              <p className="section-copy">
                We are looking for locations that understand presentation, welcome
                branded structure, and already serve customers who respond well to
                thoughtfully merchandised products.
              </p>

              <ul className="bullet-list">
                {fitBullets.map((item) => (
                  <li key={item}>
                    <span className="bullet-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel panel-soft">
              <p className="eyebrow">Not ideal</p>
              <h2>Where the Model Is Less Likely to Perform Well</h2>
              <p className="section-copy">
                Not every location is the right fit. A poor environment can weaken the
                presentation, reduce customer trust, and create friction around how the
                system is meant to operate.
              </p>

              <ul className="bullet-list bullet-list-soft">
                {notIdealBullets.map((item) => (
                  <li key={item}>
                    <span className="bullet-dot bullet-dot-soft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap dark-box">
            <div className="dark-head">
              <p className="eyebrow dark-eyebrow">Quick comparison</p>
              <h2 className="dark-title">Ideal Fit vs. Weak Fit</h2>
              <p className="dark-copy">
                This page is not about volume for the sake of volume. It is about placing
                the system where the brand, the customer, and the store environment all
                work together.
              </p>
            </div>

            <div className="comparison-table">
              <div className="comparison-row comparison-row--head">
                <span>Category</span>
                <span>Ideal fit</span>
                <span>Weak fit</span>
              </div>

              {comparisonRows.map((row) => (
                <div key={row.label} className="comparison-row">
                  <span>{row.label}</span>
                  <span>{row.ideal}</span>
                  <span>{row.notIdeal}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap closing-box">
            <div>
              <p className="eyebrow closing-eyebrow">Next step</p>
              <h2>We Would Rather Place in the Right Store Than in More Stores.</h2>
              <p>
                FloorPlay™ is designed for qualified locations that can support the
                visual standard, customer flow, and commercial logic behind the model.
              </p>
            </div>

            <div className="actions closing-actions">
              <Link href="/apply" className="btn btn-dark">
                Apply Now
              </Link>
              <Link href="/earnings" className="btn btn-light-solid">
                See How You Earn
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .ideal-partner-page {
          background:
            radial-gradient(circle at top left, rgba(255, 216, 77, 0.11), transparent 24%),
            radial-gradient(circle at 100% 0%, rgba(0, 0, 0, 0.05), transparent 20%),
            linear-gradient(180deg, #f8f5ee 0%, #f3efe7 100%);
          color: #151515;
        }

        .wrap {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        .section {
          padding: 92px 0;
        }

        .hero {
          padding: 30px 0 56px;
        }

        .hero-shell {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 32px;
          align-items: stretch;
        }

        .hero-copy,
        .hero-stat-card,
        .trait-card,
        .panel {
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(21, 21, 21, 0.08);
          border-radius: 34px;
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(10px);
        }

        .hero-copy {
          padding: 48px;
        }

        .hero-stat-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .eyebrow {
          margin: 0 0 14px;
          font-size: 12px;
          line-height: 1.2;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 800;
          color: #9b8100;
        }

        .hero h1,
        .section h2,
        .closing-box h2 {
          margin: 0;
          font-size: clamp(34px, 5vw, 64px);
          line-height: 0.98;
          letter-spacing: -0.05em;
          font-weight: 800;
          color: #141414;
          text-wrap: balance;
        }

        .hero-text,
        .section-head p,
        .section-copy,
        .closing-box p,
        .dark-copy {
          margin: 18px 0 0;
          font-size: 17px;
          line-height: 1.75;
          color: rgba(21, 21, 21, 0.74);
          max-width: 68ch;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 0 22px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            background-color 220ms ease,
            border-color 220ms ease,
            color 220ms ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: #d7b111;
          color: #111111;
          box-shadow: 0 14px 30px rgba(215, 177, 17, 0.24);
        }

        .btn-primary:hover {
          background: #e4be18;
        }

        .btn-secondary,
        .btn-light-solid {
          background: rgba(255, 255, 255, 0.86);
          color: #151515;
          border: 1px solid rgba(21, 21, 21, 0.12);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
        }

        .btn-dark {
          background: #141414;
          color: #f8f4eb;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
        }

        .stat-label {
          display: block;
          font-size: 11px;
          line-height: 1.2;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(21, 21, 21, 0.52);
          font-weight: 700;
          margin-bottom: 22px;
        }

        .stat-stack {
          display: grid;
          gap: 14px;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 0;
          border-top: 1px solid rgba(21, 21, 21, 0.08);
          color: rgba(21, 21, 21, 0.72);
        }

        .stat-row:first-child {
          border-top: none;
          padding-top: 0;
        }

        .stat-row strong {
          color: #141414;
        }

        .section-head {
          max-width: 780px;
          margin-bottom: 36px;
        }

        .trait-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .trait-card {
          padding: 26px;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            border-color 220ms ease;
        }

        .trait-card:hover,
        .panel:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
        }

        .trait-dot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: #d7b111;
          box-shadow: 0 0 0 8px rgba(215, 177, 17, 0.12);
          margin-bottom: 18px;
        }

        .trait-card h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.2;
          letter-spacing: -0.03em;
          font-weight: 700;
          color: #151515;
        }

        .trait-card p {
          margin: 12px 0 0;
          font-size: 15px;
          line-height: 1.72;
          color: rgba(21, 21, 21, 0.72);
        }

        .split-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .panel {
          padding: 30px;
        }

        .panel-soft {
          background: rgba(255, 255, 255, 0.64);
        }

        .bullet-list {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          display: grid;
          gap: 14px;
        }

        .bullet-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 58px;
          padding: 0 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(21, 21, 21, 0.08);
          font-size: 15px;
          line-height: 1.5;
        }

        .bullet-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: #d7b111;
          flex: 0 0 auto;
        }

        .bullet-list-soft li {
          background: rgba(255, 255, 255, 0.7);
        }

        .bullet-dot-soft {
          background: #7b7b7b;
        }

        .dark-box {
          border-radius: 38px;
          background:
            linear-gradient(135deg, rgba(255, 216, 77, 0.08), transparent 40%),
            #151515;
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 44px;
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18);
        }

        .dark-head {
          max-width: 760px;
          margin-bottom: 28px;
        }

        .dark-eyebrow {
          color: rgba(255, 216, 77, 0.92);
        }

        .dark-title {
          color: #ffffff !important;
        }

        .dark-copy {
          color: rgba(255, 255, 255, 0.78);
        }

        .comparison-table {
          display: grid;
          gap: 10px;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 0.8fr 1fr 1fr;
          gap: 16px;
          align-items: start;
          padding: 18px 20px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.82);
        }

        .comparison-row--head {
          background: transparent;
          border: none;
          padding: 0 4px 12px;
          color: rgba(255, 216, 77, 0.86);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .closing-box {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 28px;
          align-items: center;
          padding: 36px;
          border-radius: 36px;
          background: linear-gradient(180deg, #f1cd3b, #d7b111);
          box-shadow: 0 24px 50px rgba(215, 177, 17, 0.24);
        }

        .closing-eyebrow {
          color: rgba(21, 21, 21, 0.62);
        }

        .closing-actions {
          margin-top: 0;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 800ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .fade-up.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1180px) {
          .hero-shell,
          .trait-grid,
          .split-grid,
          .closing-box {
            grid-template-columns: 1fr;
          }

          .trait-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .closing-actions {
            margin-top: 8px;
          }
        }

        @media (max-width: 920px) {
          .comparison-row {
            grid-template-columns: 1fr;
          }

          .comparison-row--head {
            display: none;
          }
        }

        @media (max-width: 820px) {
          .section {
            padding: 68px 0;
          }

          .hero {
            padding-top: 20px;
          }

          .wrap {
            width: min(100% - 24px, 1200px);
          }

          .hero-copy,
          .hero-stat-card,
          .trait-card,
          .panel,
          .dark-box,
          .closing-box {
            padding: 28px;
            border-radius: 28px;
          }

          .hero h1,
          .section h2,
          .closing-box h2 {
            font-size: clamp(34px, 11vw, 56px);
            max-width: 100%;
          }

          .trait-grid {
            grid-template-columns: 1fr;
          }

          .stat-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }

        @media (max-width: 560px) {
          .actions {
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}