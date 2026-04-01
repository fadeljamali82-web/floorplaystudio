"use client";

import { useEffect } from "react";
import Link from "next/link";

const PAGE_CONTENT = {
  hero: {
    eyebrow: "Why FloorPlay",
    title: "A Better Use of Floor Space. A More Controlled Way to Grow.",
    description:
      "FloorPlay™ is not built like a typical product brand. It is a structured retail placement system designed to turn underused store space into a stronger in-store experience and a recurring revenue opportunity.",
    primaryCta: {
      label: "Apply for a Location",
      href: "/apply",
    },
    secondaryCta: {
      label: "How It Works",
      href: "/how-it-works",
    },
  },

  pillars: [
    {
      title: "No upfront inventory burden",
      text: "The core consignment model removes the biggest point of friction for qualified locations by avoiding inventory buy-in at the start.",
    },
    {
      title: "Stronger visual presentation",
      text: "FloorPlay™ is designed to improve how a store feels, not just add product. The display should elevate the environment while remaining commercially effective.",
    },
    {
      title: "Controlled brand consistency",
      text: "Product standards, pricing structure, and display logic stay aligned so the system feels intentional instead of improvised from store to store.",
    },
    {
      title: "Scalable commercial logic",
      text: "Each location functions as a repeatable placement node within a broader network, making the model easier to expand without losing discipline.",
    },
  ],

  advantages: [
    "Turns underused floor space into a revenue opportunity",
    "Maintains premium presentation instead of clearance-style clutter",
    "Works within existing customer traffic rather than relying on new traffic creation",
    "Keeps the operational logic simple for the store partner",
    "Supports long-term rollout through consistent placement standards",
  ],

  comparisons: [
    {
      label: "Typical product approach",
      left: "Sells inventory to stores and leaves the rest to the operator",
      right: "FloorPlay™ installs a structured branded system",
    },
    {
      label: "Retail risk",
      left: "Store carries the burden of buying stock upfront",
      right: "Consignment-first model reduces startup friction",
    },
    {
      label: "Visual outcome",
      left: "Product can feel random, crowded, or disconnected",
      right: "Display is designed to feel curated and commercially intentional",
    },
    {
      label: "Growth logic",
      left: "Expansion depends on one-off selling",
      right: "Expansion works through repeatable location-based placements",
    },
  ],

  callouts: [
    {
      title: "For the location",
      text: "A cleaner way to participate in retail revenue without taking on the usual upfront inventory pressure.",
    },
    {
      title: "For the customer",
      text: "A more engaging in-store product discovery experience built around design, function, and strong presentation.",
    },
    {
      title: "For the brand",
      text: "A disciplined path to growth through consistency, placement quality, and controlled rollout standards.",
    },
  ],
};

export default function WhyFloorPlayPage() {
  const { hero, pillars, advantages, comparisons, callouts } = PAGE_CONTENT;

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
      <main className="why-page">
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
              <span className="stat-label">Why the model stands out</span>

              <div className="stat-stack">
                <div className="stat-row">
                  <span>Retail structure</span>
                  <strong>System, not random product</strong>
                </div>
                <div className="stat-row">
                  <span>Main advantage</span>
                  <strong>Lower partner friction</strong>
                </div>
                <div className="stat-row">
                  <span>Growth logic</span>
                  <strong>Repeatable placements</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Core strengths</p>
              <h2>Why the FloorPlay™ Model Works Better Than a Typical Product Drop.</h2>
              <p>
                The advantage is not just the rug. The advantage is the structure around
                it — how it is placed, how it is presented, and how the commercial logic
                is kept consistent across locations.
              </p>
            </div>

            <div className="pillar-grid">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="pillar-card">
                  <div className="pillar-dot" />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap split-grid">
            <div className="panel">
              <p className="eyebrow">Strategic advantage</p>
              <h2>Built to Reduce Friction Without Lowering the Standard.</h2>
              <p className="section-copy">
                FloorPlay™ is designed to keep the entry point easier for the partner
                while protecting the quality of the in-store experience. That balance is
                what gives the model long-term strength.
              </p>

              <ul className="bullet-list">
                {advantages.map((item) => (
                  <li key={item}>
                    <span className="bullet-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel panel-emphasis">
              <p className="eyebrow">Big picture</p>
              <h2>What Looks Like a Product Is Actually a Placement System.</h2>
              <p className="section-copy">
                FloorPlay™ uses existing store traffic, existing physical space, and a
                repeatable presentation model to build a more scalable retail network.
                That creates a stronger foundation than relying on one-off product sales
                alone.
              </p>

              <div className="mini-cards">
                {callouts.map((item) => (
                  <div key={item.title} className="mini-card">
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap dark-box">
            <div className="dark-head">
              <p className="eyebrow dark-eyebrow">Comparison</p>
              <h2 className="dark-title">Typical Product Brand vs. FloorPlay™</h2>
              <p className="dark-copy">
                FloorPlay™ should be understood as a controlled retail model, not simply
                as another product line competing for shelf space.
              </p>
            </div>

            <div className="comparison-table">
              <div className="comparison-row comparison-row--head">
                <span>Category</span>
                <span>Typical approach</span>
                <span>FloorPlay™</span>
              </div>

              {comparisons.map((row) => (
                <div key={row.label} className="comparison-row">
                  <span>{row.label}</span>
                  <span>{row.left}</span>
                  <span>{row.right}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap closing-box">
            <div>
              <p className="eyebrow closing-eyebrow">Next step</p>
              <h2>The Model Works Best Where Presentation and Discipline Matter.</h2>
              <p>
                FloorPlay™ is built for locations that value a premium environment, a
                controlled branded system, and a smarter way to turn floor space into
                ongoing opportunity.
              </p>
            </div>

            <div className="actions closing-actions">
              <Link href="/ideal-partner" className="btn btn-dark">
                View Ideal Partner
              </Link>
              <Link href="/earnings" className="btn btn-light-solid">
                See How You Earn
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .why-page {
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
        .pillar-card,
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

        .pillar-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .pillar-card {
          padding: 26px;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            border-color 220ms ease;
        }

        .pillar-card:hover,
        .panel:hover,
        .mini-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
        }

        .pillar-dot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: #d7b111;
          box-shadow: 0 0 0 8px rgba(215, 177, 17, 0.12);
          margin-bottom: 18px;
        }

        .pillar-card h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.2;
          letter-spacing: -0.03em;
          font-weight: 700;
          color: #151515;
        }

        .pillar-card p {
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

        .panel-emphasis {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.82),
            rgba(255, 255, 255, 0.68)
          );
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

        .mini-cards {
          display: grid;
          gap: 14px;
          margin-top: 24px;
        }

        .mini-card {
          padding: 18px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(21, 21, 21, 0.08);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease;
        }

        .mini-card strong {
          display: block;
          font-size: 15px;
          line-height: 1.3;
          color: #151515;
        }

        .mini-card p {
          margin: 8px 0 0;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(21, 21, 21, 0.68);
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
          .split-grid,
          .closing-box {
            grid-template-columns: 1fr;
          }

          .pillar-grid {
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
          .pillar-card,
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

          .pillar-grid {
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