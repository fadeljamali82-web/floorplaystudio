"use client";

import { useEffect } from "react";
import Link from "next/link";

const PAGE_CONTENT = {
  hero: {
    eyebrow: "Earnings",
    title: "Two Ways to Work With FloorPlay™.",
    description:
      "FloorPlay™ offers two commercial structures. The primary model is consignment-first, where qualified retail locations earn 20% of MSRP on each sale and collect the applicable taxes. For approved partners or agents, a second option allows inventory to be purchased upfront at 35% below MSRP.",
    primaryCta: {
      label: "Apply for a Location",
      href: "/apply",
    },
    secondaryCta: {
      label: "How It Works",
      href: "/how-it-works",
    },
  },

  models: [
    {
      label: "Primary model",
      title: "Consignment Model",
      subtitle: "Best for qualified store locations",
      text: "This is the main FloorPlay™ model. The store does not purchase inventory upfront. Rugs are placed inside the location, sold at MSRP, and the store earns 20% of the MSRP on each completed sale. The store is responsible for collecting and handling the applicable taxes. The remaining 80% goes back to FloorPlay™ as payment for the inventory and system.",
      bullets: [
        "No upfront inventory purchase",
        "Store earns 20% of MSRP per sale",
        "Store is responsible for collecting taxes",
        "80% goes back to FloorPlay™",
        "Best fit for curated retail placement",
      ],
      note: "This structure is designed to keep entry simple for the location while allowing FloorPlay™ to maintain product ownership, pricing control, and replenishment consistency.",
    },
    {
      label: "Secondary model",
      title: "Partner / Agent Purchase Model",
      subtitle: "Best for approved volume-oriented partners",
      text: "Approved partners or agents may buy inventory upfront at a price that is 35% below MSRP. In this structure, the partner purchases the rugs in advance and keeps the remaining margin when reselling at their chosen retail price, subject to the approved FloorPlay™ framework where applicable.",
      bullets: [
        "Inventory purchased upfront",
        "Buy at 35% below MSRP",
        "Designed for approved partners or agents",
        "Same product standards and presentation logic",
        "Better fit for direct resale operators",
      ],
      note: "Everything else remains aligned with the FloorPlay™ system, including product quality, display expectations, and brand consistency.",
    },
  ],

  pricingRows: [
    { size: "Small", msrp: "$80", consignment: "$16 to store / $64 to FloorPlay™", partner: "$52.00 upfront buy price" },
    { size: "Medium", msrp: "$120", consignment: "$24 to store / $96 to FloorPlay™", partner: "$78.00 upfront buy price" },
    { size: "Large", msrp: "$180", consignment: "$36 to store / $144 to FloorPlay™", partner: "$117.00 upfront buy price" },
  ],

  comparisonRows: [
    {
      label: "Upfront inventory cost",
      consignment: "No",
      partner: "Yes",
    },
    {
      label: "Store / partner earning logic",
      consignment: "20% of MSRP per sale",
      partner: "35% below MSRP buy price",
    },
    {
      label: "Tax responsibility",
      consignment: "Collected by the location",
      partner: "Handled through direct resale structure",
    },
    {
      label: "Inventory ownership before sale",
      consignment: "FloorPlay™",
      partner: "Partner / agent after purchase",
    },
    {
      label: "Best for",
      consignment: "Retail locations hosting the display",
      partner: "Approved partners or agents",
    },
  ],
};

export default function EarningsPage() {
  const { hero, models, pricingRows, comparisonRows } = PAGE_CONTENT;

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
      <main className="earnings-page">
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
              <span className="stat-label">Primary earning structure</span>
              <div className="stat-stack">
                <div className="stat-row">
                  <span>Location keeps</span>
                  <strong>20% of MSRP</strong>
                </div>
                <div className="stat-row">
                  <span>Taxes</span>
                  <strong>Collected by location</strong>
                </div>
                <div className="stat-row">
                  <span>Returned to FloorPlay™</span>
                  <strong>80%</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Commercial structure</p>
              <h2>Two Models. One Brand Standard.</h2>
              <p>
                FloorPlay™ can operate through a consignment-first store model or an
                approved upfront-purchase partner model. The consignment structure is
                the core model and should be treated as the default.
              </p>
            </div>

            <div className="model-grid">
              {models.map((model, index) => (
                <article
                  key={model.title}
                  className={`model-card ${index === 0 ? "model-card--featured" : ""}`}
                >
                  <div className="model-top">
                    <span className="model-label">{model.label}</span>
                    <p className="model-subtitle">{model.subtitle}</p>
                  </div>

                  <h3>{model.title}</h3>
                  <p className="model-text">{model.text}</p>

                  <ul className="bullet-list">
                    {model.bullets.map((item) => (
                      <li key={item}>
                        <span className="bullet-dot" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="model-note">{model.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap dark-box">
            <div className="dark-head">
              <p className="eyebrow dark-eyebrow">Example payout structure</p>
              <h2 className="dark-title">Sample Earnings by Size</h2>
              <p className="dark-copy">
                These examples are based on current MSRP reference pricing and show
                how each model works at the transaction level.
              </p>
            </div>

            <div className="pricing-table">
              <div className="pricing-row pricing-row--head">
                <span>Size</span>
                <span>MSRP</span>
                <span>Consignment model</span>
                <span>Partner / agent buy price</span>
              </div>

              {pricingRows.map((row) => (
                <div key={row.size} className="pricing-row">
                  <span>{row.size}</span>
                  <span>{row.msrp}</span>
                  <span>{row.consignment}</span>
                  <span>{row.partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap">
            <div className="section-head comparison-head">
              <p className="eyebrow">Side-by-side view</p>
              <h2>Model Comparison</h2>
              <p>
                The consignment model reduces friction for stores. The partner or
                agent purchase model is available for approved operators that prefer
                to buy inventory upfront.
              </p>
            </div>

            <div className="comparison-card">
              <div className="comparison-grid comparison-grid--head">
                <div>Category</div>
                <div>Consignment Model</div>
                <div>Partner / Agent Purchase Model</div>
              </div>

              {comparisonRows.map((row) => (
                <div key={row.label} className="comparison-grid">
                  <div className="comparison-label">{row.label}</div>
                  <div>{row.consignment}</div>
                  <div>{row.partner}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap closing-box">
            <div>
              <p className="eyebrow closing-eyebrow">Best fit</p>
              <h2>Most Locations Should Use the Consignment Model.</h2>
              <p>
                It keeps entry simple, avoids upfront inventory friction, and allows
                the store to participate in each sale while FloorPlay™ maintains
                product control and system consistency.
              </p>
            </div>

            <div className="actions closing-actions">
              <Link href="/apply" className="btn btn-dark">
                Apply Now
              </Link>
              <Link href="/ideal-partner" className="btn btn-light-solid">
                View Ideal Partner
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .earnings-page {
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
        .model-card,
        .comparison-card {
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

        .model-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .model-card {
          padding: 28px;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            border-color 220ms ease;
        }

        .model-card:hover,
        .comparison-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
        }

        .model-card--featured {
          border-color: rgba(215, 177, 17, 0.34);
          box-shadow:
            0 18px 60px rgba(0, 0, 0, 0.05),
            0 0 0 1px rgba(215, 177, 17, 0.16) inset;
        }

        .model-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 16px;
        }

        .model-label {
          display: inline-flex;
          align-items: center;
          min-height: 32px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(215, 177, 17, 0.14);
          color: #7a6500;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .model-subtitle {
          margin: 0;
          font-size: 13px;
          line-height: 1.5;
          color: rgba(21, 21, 21, 0.52);
          text-align: right;
        }

        .model-card h3 {
          margin: 0;
          font-size: 32px;
          line-height: 1.02;
          letter-spacing: -0.04em;
          font-weight: 800;
          color: #151515;
        }

        .model-text {
          margin: 16px 0 0;
          font-size: 16px;
          line-height: 1.75;
          color: rgba(21, 21, 21, 0.74);
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
          min-height: 56px;
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

        .model-note {
          margin: 20px 0 0;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(21, 21, 21, 0.56);
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

        .pricing-table {
          display: grid;
          gap: 10px;
        }

        .pricing-row {
          display: grid;
          grid-template-columns: 0.7fr 0.7fr 1.5fr 1.2fr;
          gap: 16px;
          align-items: start;
          padding: 18px 20px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.82);
        }

        .pricing-row--head {
          background: transparent;
          border: none;
          padding: 0 4px 12px;
          color: rgba(255, 216, 77, 0.86);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .comparison-head {
          margin-bottom: 28px;
        }

        .comparison-card {
          overflow: hidden;
          padding: 8px;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 0.9fr 1fr 1fr;
          gap: 16px;
          padding: 18px 20px;
          border-top: 1px solid rgba(21, 21, 21, 0.08);
          color: rgba(21, 21, 21, 0.74);
        }

        .comparison-grid--head {
          border-top: none;
          color: #151515;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .comparison-label {
          color: #141414;
          font-weight: 700;
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
          .model-grid,
          .closing-box {
            grid-template-columns: 1fr;
          }

          .closing-actions {
            margin-top: 8px;
          }
        }

        @media (max-width: 920px) {
          .pricing-row,
          .comparison-grid {
            grid-template-columns: 1fr;
          }

          .pricing-row--head,
          .comparison-grid--head {
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
          .model-card,
          .dark-box,
          .comparison-card,
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

          .model-top {
            flex-direction: column;
          }

          .model-subtitle {
            text-align: left;
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