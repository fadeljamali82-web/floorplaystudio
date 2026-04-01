"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PAGE_CONTENT = {
  hero: {
    eyebrow: "How it works",
    title: "A Premium Retail Model That Stays Simple for the Store.",
    description:
      "FloorPlay™ installs a curated rug display inside qualified retail locations, manages the presentation, and keeps the model structured from setup through replenishment.",
    primaryCta: {
      label: "Apply for a Location",
      href: "/apply",
    },
    secondaryCta: {
      label: "View Ideal Partner",
      href: "/ideal-partner",
    },
    image: "/images/how-it-works/hero.jpg",
  },

  steps: [
    {
      number: "01",
      title: "We qualify the location",
      text: "We look for clean, high-visibility stores where the display feels natural, premium, and commercially appropriate.",
    },
    {
      number: "02",
      title: "We install the display",
      text: "FloorPlay™ places a ready-to-sell rug presentation inside the space with curated product, pricing structure, and visual consistency.",
    },
    {
      number: "03",
      title: "Customers shop in-store",
      text: "The store benefits from a stronger visual environment while customers discover and purchase rugs during normal foot traffic.",
    },
    {
      number: "04",
      title: "Revenue is shared",
      text: "Partners do not buy inventory upfront. Revenue is generated when rugs sell from the location and is shared under the agreed structure.",
    },
  ],

  partnerBullets: [
    "Available floor or display space",
    "A clean and visually appropriate retail environment",
    "Consistent customer visibility and browsing exposure",
    "Basic cooperation around display placement",
  ],

  revenueRows: [
    { title: "Inventory ownership", value: "FloorPlay™" },
    { title: "Upfront inventory purchase", value: "No" },
    { title: "Retail model", value: "Consignment-first" },
    { title: "Revenue structure", value: "Shared on sale" },
  ],
};

export default function HowItWorksPage() {
  const { hero, steps, partnerBullets, revenueRows } = PAGE_CONTENT;

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
      <main className="how-page">
        <section className="hero fade-up">
          <div className="wrap hero-grid">
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

            <div className="hero-image-shell">
              <div className="hero-image">
                <Image
                  src={hero.image}
                  alt="FloorPlay premium rug display inside a refined retail space"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="img"
                />
                <div className="hero-image-overlay" />
              </div>
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">System overview</p>
              <h2>How the FloorPlay™ Model Actually Runs</h2>
              <p>
                This is not wholesale inventory dumping and it is not a franchise.
                It is a controlled retail placement model designed to feel premium
                to the customer and lightweight for the partner.
              </p>
            </div>

            <div className="step-grid">
              {steps.map((step) => (
                <article key={step.number} className="step-card">
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap split-grid">
            <div className="panel">
              <p className="eyebrow">Partner role</p>
              <h2>The Store Provides the Space. FloorPlay™ Manages the Retail Logic.</h2>
              <p className="section-copy">
                Partners are not expected to become rug operators. The store hosts
                the display inside the right environment while FloorPlay™ maintains
                product consistency, presentation, and replenishment.
              </p>

              <ul className="bullet-list">
                {partnerBullets.map((item) => (
                  <li key={item}>
                    <span className="bullet-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="image-card">
              <Image
                src="/images/how-it-works/step-1.jpg"
                alt="FloorPlay retail display environment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="img"
              />
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap dark-box">
            <div className="split-grid dark-grid">
              <div>
                <p className="eyebrow dark-eyebrow">Revenue logic</p>
                <h2 className="dark-title">
                  No Upfront Inventory Purchase. Revenue Is Shared When Product Sells.
                </h2>
                <p className="dark-copy">
                  FloorPlay™ retains ownership of the inventory. The partner does
                  not carry the risk of purchasing stock upfront. Revenue is created
                  only when rugs sell from the location.
                </p>
                <p className="dark-note">
                  This keeps the model easier to say yes to, while allowing FloorPlay™
                  to maintain presentation, pricing, and brand consistency.
                </p>
              </div>

              <div className="dark-card">
                <span className="dark-card-label">Core structure</span>
                <div className="dark-rows">
                  {revenueRows.map((row) => (
                    <div key={row.title} className="dark-row">
                      <span>{row.title}</span>
                      <strong>{row.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section fade-up">
          <div className="wrap closing-box">
            <div>
              <p className="eyebrow closing-eyebrow">Next step</p>
              <h2>Simple for the Store. Scalable for FloorPlay™.</h2>
              <p>
                The model is built for qualified partners that want a stronger in-store
                experience and an additional revenue stream without taking on inventory risk.
              </p>
            </div>

            <div className="actions closing-actions">
              <Link href="/apply" className="btn btn-dark">
                Apply Now
              </Link>
              <Link href="/earnings" className="btn btn-light-solid">
                See Earnings
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        .how-page {
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

        .hero-grid,
        .split-grid {
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 32px;
          align-items: center;
        }

        .hero-copy,
        .panel {
          position: relative;
          background: rgba(255, 255, 255, 0.74);
          border: 1px solid rgba(21, 21, 21, 0.08);
          border-radius: 34px;
          padding: 48px;
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(10px);
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
        .closing-box p {
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

        .hero-image-shell {
          display: grid;
        }

        .hero-image,
        .image-card {
          position: relative;
          min-height: 600px;
          overflow: hidden;
          border-radius: 34px;
          background: #e8e2d6;
          box-shadow: 0 28px 75px rgba(0, 0, 0, 0.1);
        }

        .hero-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(0, 0, 0, 0.18), transparent 35%),
            linear-gradient(to right, rgba(255, 216, 77, 0.08), transparent 45%);
          pointer-events: none;
        }

        .img {
          object-fit: cover;
        }

        .section-head {
          max-width: 780px;
          margin-bottom: 36px;
        }

        .step-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .step-card {
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(21, 21, 21, 0.08);
          border-radius: 28px;
          padding: 26px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.04);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            border-color 220ms ease;
        }

        .step-card:hover,
        .bullet-list li:hover,
        .dark-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
        }

        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          background: rgba(215, 177, 17, 0.14);
          color: #7a6500;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          margin-bottom: 18px;
        }

        .step-card h3 {
          margin: 0;
          font-size: 21px;
          line-height: 1.15;
          letter-spacing: -0.03em;
          font-weight: 700;
          color: #151515;
        }

        .step-card p {
          margin: 12px 0 0;
          font-size: 15px;
          line-height: 1.72;
          color: rgba(21, 21, 21, 0.72);
        }

        .bullet-list {
          list-style: none;
          padding: 0;
          margin: 28px 0 0;
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
          transition:
            transform 220ms ease,
            box-shadow 220ms ease;
        }

        .bullet-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: #d7b111;
          flex: 0 0 auto;
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

        .dark-grid {
          align-items: stretch;
        }

        .dark-eyebrow {
          color: rgba(255, 216, 77, 0.92);
        }

        .dark-title {
          color: #ffffff !important;
        }

        .dark-copy {
          margin: 18px 0 0;
          font-size: 17px;
          line-height: 1.82;
          color: rgba(255, 255, 255, 0.78);
        }

        .dark-note {
          margin: 18px 0 0;
          font-size: 14px;
          line-height: 1.75;
          color: rgba(255, 216, 77, 0.84);
        }

        .dark-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 18px;
          padding: 26px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease;
        }

        .dark-card-label {
          display: block;
          font-size: 11px;
          line-height: 1.2;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 216, 77, 0.88);
          font-weight: 700;
        }

        .dark-rows {
          display: grid;
          gap: 12px;
        }

        .dark-row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.74);
        }

        .dark-row:first-child {
          border-top: none;
          padding-top: 0;
        }

        .dark-row strong {
          color: #ffffff;
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
          .hero-grid,
          .split-grid,
          .closing-box {
            grid-template-columns: 1fr;
          }

          .step-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .closing-actions {
            margin-top: 8px;
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

          .step-grid {
            grid-template-columns: 1fr;
          }

          .hero-image,
          .image-card {
            min-height: 360px;
            border-radius: 28px;
          }

          .dark-row {
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