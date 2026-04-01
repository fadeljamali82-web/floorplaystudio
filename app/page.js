import Image from "next/image";
import Link from "next/link";

const HOME_CONTENT = {
  hero: {
    eyebrow: "Consignment-first retail placement",
    title: "Turn Your Floor Space Into Monthly Revenue",
    description:
      "FloorPlay™ installs a ready-to-sell rug display inside your store — with no upfront inventory purchase required from you.",
    primaryCta: {
      label: "Apply for a Location",
      href: "/apply",
    },
    secondaryCta: {
      label: "See How It Works",
      href: "/how-it-works",
    },
    image: "/images/home/hero.jpg",
    stats: [
      { label: "Upfront inventory purchase", value: "No" },
      { label: "Managed by FloorPlay™", value: "Yes" },
      { label: "Built for premium stores", value: "Yes" },
    ],
  },

  systemIntro: {
    title: "This Isn’t Just a Rug Brand. It’s a Retail System.",
    description:
      "FloorPlay™ places curated rug displays inside partner stores. We provide the product, the presentation, and the replenishment structure. You provide the floor space and earn from each sale.",
    cards: [
      {
        title: "No upfront inventory purchase",
        text: "Partners do not buy inventory before the display goes live.",
      },
      {
        title: "FloorPlay™ retains ownership",
        text: "We keep control of the inventory placed in-store.",
      },
      {
        title: "Shared revenue model",
        text: "Revenue is shared when products sell from your location.",
      },
      {
        title: "Managed presentation",
        text: "We manage pricing, branding, and replenishment.",
      },
    ],
  },

  benefits: {
    title: "Why Stores Love FloorPlay™",
    items: [
      {
        title: "Lower friction",
        text: "The model removes the usual inventory burden for partner stores.",
      },
      {
        title: "Passive revenue",
        text: "Unused floor space can become an additional income opportunity.",
      },
      {
        title: "Better presentation",
        text: "A curated display adds visual value to the retail environment.",
      },
      {
        title: "Simple hosting",
        text: "The concept is easy for stores to host and easy for shoppers to understand.",
      },
      {
        title: "Managed by FloorPlay™",
        text: "We maintain consistency in assortment, pricing, branding, and replenishment.",
      },
      {
        title: "Built for real stores",
        text: "Designed for boutiques, salons, barbershops, smoke shops, and lifestyle retail.",
      },
    ],
  },

  product: {
    eyebrow: "Product appeal",
    title: "Designed to Sell on Sight",
    description:
      "FloorPlay™ rugs are designed to be visually striking, highly displayable, and easy for customers to understand in-store.",
    image: "/images/home/product-feature.jpg",
    features: [
      "4K digitally printed",
      "Machine washable",
      "Non-slip backing",
      "1.5 cm thickness",
      "Multiple sizes",
      "Standard and signature irregular shape options",
    ],
  },

  revenue: {
    title: "One Small Area. Real Revenue Potential.",
    description:
      "A compact, well-placed display can turn underused floor space into a meaningful monthly revenue stream. FloorPlay™ is designed to help partner stores monetize traffic they already have.",
    callout: "No guaranteed returns. Performance depends on traffic, presentation, assortment, and customer fit.",
    highlight: "Managed, premium, low-friction retail placement.",
  },

  partners: {
    title: "Who We Partner With",
    items: [
      "Boutiques",
      "Barbershops",
      "Salons",
      "Smoke Shops",
      "Clothing Stores",
      "Lifestyle Retail",
    ],
  },

  finalCta: {
    title: "Let Your Store Earn More Without Doing More",
    description:
      "If you have floor space, foot traffic, and the right environment, FloorPlay™ could be a strong fit.",
    primary: {
      label: "Apply Now",
      href: "/apply",
    },
    secondary: {
      label: "Why FloorPlay™",
      href: "/why-floorplay",
    },
  },
};

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading__title">{title}</h2>
      {description ? (
        <p className="section-heading__description">{description}</p>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const { hero, systemIntro, benefits, product, revenue, partners, finalCta } =
    HOME_CONTENT;

  return (
    <>
      <main className="home-page">
        <section className="hero-shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">{hero.eyebrow}</p>
              <h1 className="hero-title">{hero.title}</h1>
              <p className="hero-description">{hero.description}</p>

              <div className="hero-actions">
                <Link href={hero.primaryCta.href} className="btn btn--primary">
                  {hero.primaryCta.label}
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="btn btn--secondary"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>

              <div className="hero-stat-row">
                {hero.stats.map((item) => (
                  <div key={item.label} className="hero-stat-card">
                    <span className="hero-stat-card__value">{item.value}</span>
                    <span className="hero-stat-card__label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual__frame">
                <Image
                  src={hero.image}
                  alt="Premium FloorPlay retail display inside a modern store"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="cover-image"
                />
              </div>
              <div className="hero-visual__panel">
                <span className="hero-visual__panel-label">FloorPlay™ model</span>
                <p className="hero-visual__panel-text">
                  Product, presentation, pricing, and replenishment managed by
                  FloorPlay™.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--system">
          <div className="content-wrap">
            <SectionHeading
              eyebrow="Retail model"
              title={systemIntro.title}
              description={systemIntro.description}
            />

            <div className="system-grid">
              {systemIntro.cards.map((card) => (
                <article key={card.title} className="info-card">
                  <div className="info-card__icon" />
                  <h3 className="info-card__title">{card.title}</h3>
                  <p className="info-card__text">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="content-wrap">
            <SectionHeading
              eyebrow="Partner value"
              title={benefits.title}
              description="The model is designed to look polished in-store while staying simple for qualified partners to host."
            />

            <div className="benefit-grid">
              {benefits.items.map((item) => (
                <article key={item.title} className="benefit-card">
                  <h3 className="benefit-card__title">{item.title}</h3>
                  <p className="benefit-card__text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--product">
          <div className="content-wrap">
            <div className="product-grid">
              <div className="product-media">
                <div className="product-media__frame">
                  <Image
                    src={product.image}
                    alt="Close-up of a FloorPlay rug in a premium styled retail presentation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="cover-image"
                  />
                </div>
                <div className="product-media__badge">
                  <span>Premium display-ready product</span>
                </div>
              </div>

              <div className="product-copy">
                <SectionHeading
                  eyebrow={product.eyebrow}
                  title={product.title}
                  description={product.description}
                />

                <ul className="feature-list">
                  {product.features.map((feature) => (
                    <li key={feature} className="feature-list__item">
                      <span className="feature-list__dot" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark">
          <div className="content-wrap">
            <div className="revenue-grid">
              <div className="revenue-copy">
                <p className="section-heading__eyebrow">Revenue logic</p>
                <h2 className="revenue-title">{revenue.title}</h2>
                <p className="revenue-description">{revenue.description}</p>
                <p className="revenue-note">{revenue.callout}</p>
              </div>

              <div className="revenue-panel">
                <div className="revenue-panel__top">
                  <span className="revenue-panel__label">FloorPlay™ fit</span>
                  <strong className="revenue-panel__highlight">
                    {revenue.highlight}
                  </strong>
                </div>

                <div className="revenue-panel__items">
                  <div className="revenue-panel__item">
                    <span className="revenue-panel__item-title">
                      Inventory ownership
                    </span>
                    <span className="revenue-panel__item-value">FloorPlay™</span>
                  </div>
                  <div className="revenue-panel__item">
                    <span className="revenue-panel__item-title">
                      Upfront inventory purchase
                    </span>
                    <span className="revenue-panel__item-value">Not required</span>
                  </div>
                  <div className="revenue-panel__item">
                    <span className="revenue-panel__item-title">
                      Revenue structure
                    </span>
                    <span className="revenue-panel__item-value">Shared model</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="content-wrap">
            <SectionHeading
              eyebrow="Best-fit categories"
              title={partners.title}
              description="FloorPlay™ works best in environments where customers browse, wait, or naturally engage with products."
              align="center"
            />

            <div className="partner-row">
              {partners.items.map((item) => (
                <div key={item} className="partner-pill">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final-cta">
          <div className="content-wrap">
            <div className="final-cta">
              <div className="final-cta__copy">
                <p className="section-heading__eyebrow">Next step</p>
                <h2 className="final-cta__title">{finalCta.title}</h2>
                <p className="final-cta__description">{finalCta.description}</p>
              </div>

              <div className="final-cta__actions">
                <Link href={finalCta.primary.href} className="btn btn--primary">
                  {finalCta.primary.label}
                </Link>
                <Link href={finalCta.secondary.href} className="btn btn--secondary">
                  {finalCta.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        :global(body) {
          background: #f6f3ed;
          color: #141414;
        }

        .home-page {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(255, 216, 77, 0.18), transparent 28%),
            radial-gradient(circle at top right, rgba(0, 0, 0, 0.03), transparent 25%),
            #f6f3ed;
        }

        .content-wrap {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        .section {
          position: relative;
          padding: 84px 0;
        }

        .hero-shell {
          padding: 32px 0 56px;
        }

        .hero-grid {
          width: min(1280px, calc(100% - 40px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.04fr 0.96fr;
          gap: 32px;
          align-items: stretch;
        }

        .hero-copy,
        .hero-visual {
          min-width: 0;
        }

        .hero-copy {
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(20, 20, 20, 0.08);
          border-radius: 32px;
          padding: 44px;
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(10px);
        }

        .hero-eyebrow,
        .section-heading__eyebrow {
          margin: 0 0 14px;
          font-size: 12px;
          line-height: 1.2;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          color: #9c8300;
        }

        .hero-title {
          margin: 0;
          max-width: 12ch;
          font-size: clamp(42px, 6.5vw, 76px);
          line-height: 0.96;
          letter-spacing: -0.05em;
          font-weight: 800;
          color: #161616;
        }

        .hero-description {
          margin: 22px 0 0;
          max-width: 60ch;
          font-size: clamp(16px, 1.8vw, 19px);
          line-height: 1.7;
          color: rgba(20, 20, 20, 0.78);
        }

        .hero-actions,
        .final-cta__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
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

        .btn--primary {
          background: #d6b10f;
          color: #121212;
          box-shadow: 0 12px 24px rgba(214, 177, 15, 0.22);
        }

        .btn--primary:hover {
          background: #e1bc16;
          box-shadow: 0 16px 28px rgba(214, 177, 15, 0.3);
        }

        .btn--secondary {
          border: 1px solid rgba(20, 20, 20, 0.12);
          background: rgba(255, 255, 255, 0.85);
          color: #161616;
        }

        .btn--secondary:hover {
          border-color: rgba(20, 20, 20, 0.22);
          background: #ffffff;
        }

        .hero-stat-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 34px;
        }

        .hero-stat-card {
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(20, 20, 20, 0.08);
          border-radius: 22px;
          padding: 18px 16px;
        }

        .hero-stat-card__value {
          display: block;
          font-size: 26px;
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 800;
          color: #141414;
        }

        .hero-stat-card__label {
          display: block;
          margin-top: 8px;
          font-size: 13px;
          line-height: 1.5;
          color: rgba(20, 20, 20, 0.66);
        }

        .hero-visual {
          position: relative;
          display: grid;
          grid-template-rows: 1fr auto;
          gap: 16px;
        }

        .hero-visual__frame,
        .product-media__frame {
          position: relative;
          min-height: 560px;
          overflow: hidden;
          border-radius: 32px;
          background: #e9e4d9;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.08);
        }

        .cover-image {
          object-fit: cover;
        }

        .hero-visual__panel {
          align-self: end;
          margin-left: auto;
          width: min(86%, 380px);
          padding: 18px 20px;
          border-radius: 24px;
          background: rgba(18, 18, 18, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.16);
        }

        .hero-visual__panel-label {
          display: block;
          margin-bottom: 8px;
          font-size: 11px;
          line-height: 1.2;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 216, 77, 0.92);
          font-weight: 700;
        }

        .hero-visual__panel-text {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.84);
        }

        .section-heading {
          max-width: 760px;
          margin-bottom: 32px;
        }

        .section-heading--center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .section-heading__title {
          margin: 0;
          font-size: clamp(32px, 4.6vw, 54px);
          line-height: 1.02;
          letter-spacing: -0.045em;
          font-weight: 800;
          color: #161616;
        }

        .section-heading__description {
          margin: 18px 0 0;
          max-width: 62ch;
          font-size: 17px;
          line-height: 1.75;
          color: rgba(20, 20, 20, 0.72);
        }

        .system-grid,
        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .info-card,
        .benefit-card {
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(20, 20, 20, 0.08);
          border-radius: 26px;
          padding: 24px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.04);
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            border-color 220ms ease;
        }

        .info-card:hover,
        .benefit-card:hover,
        .partner-pill:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
          border-color: rgba(20, 20, 20, 0.12);
        }

        .info-card__icon {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: #d6b10f;
          box-shadow: 0 0 0 8px rgba(214, 177, 15, 0.12);
          margin-bottom: 18px;
        }

        .info-card__title,
        .benefit-card__title {
          margin: 0;
          font-size: 20px;
          line-height: 1.2;
          letter-spacing: -0.03em;
          font-weight: 700;
          color: #161616;
        }

        .info-card__text,
        .benefit-card__text {
          margin: 12px 0 0;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(20, 20, 20, 0.72);
        }

        .benefit-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .section--product {
          padding-top: 24px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: 0.96fr 1.04fr;
          gap: 36px;
          align-items: center;
        }

        .product-media {
          position: relative;
        }

        .product-media__frame {
          min-height: 520px;
        }

        .product-media__badge {
          position: absolute;
          right: 18px;
          bottom: 18px;
          display: inline-flex;
          align-items: center;
          min-height: 46px;
          padding: 0 16px;
          border-radius: 999px;
          background: rgba(18, 18, 18, 0.9);
          color: #f8f4eb;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.16);
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 28px 0 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 18px;
        }

        .feature-list__item {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 56px;
          padding: 0 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(20, 20, 20, 0.08);
          font-size: 15px;
          line-height: 1.4;
          color: #161616;
        }

        .feature-list__dot {
          flex: 0 0 auto;
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: #d6b10f;
        }

        .section--dark {
          color: #f6f3ed;
        }

        .section--dark .content-wrap {
          border-radius: 36px;
          background:
            linear-gradient(135deg, rgba(255, 216, 77, 0.08), transparent 40%),
            #151515;
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 42px;
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18);
        }

        .revenue-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 26px;
          align-items: stretch;
        }

        .revenue-title {
          margin: 0;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.04;
          letter-spacing: -0.04em;
          font-weight: 800;
          color: #ffffff;
        }

        .revenue-description {
          margin: 18px 0 0;
          font-size: 17px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.78);
        }

        .revenue-note {
          margin: 18px 0 0;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255, 216, 77, 0.86);
        }

        .revenue-panel {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 18px;
          padding: 24px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .revenue-panel__label {
          display: block;
          font-size: 11px;
          line-height: 1.2;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 216, 77, 0.88);
          font-weight: 700;
        }

        .revenue-panel__highlight {
          display: block;
          margin-top: 10px;
          font-size: 28px;
          line-height: 1.15;
          letter-spacing: -0.04em;
          color: #ffffff;
        }

        .revenue-panel__items {
          display: grid;
          gap: 12px;
        }

        .revenue-panel__item {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .revenue-panel__item:first-child {
          border-top: none;
          padding-top: 0;
        }

        .revenue-panel__item-title {
          font-size: 14px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.68);
        }

        .revenue-panel__item-value {
          font-size: 14px;
          line-height: 1.5;
          color: #ffffff;
          font-weight: 700;
          text-align: right;
        }

        .partner-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 32px;
        }

        .partner-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 0 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(20, 20, 20, 0.08);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.04);
          font-size: 14px;
          font-weight: 700;
          color: #161616;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            border-color 220ms ease;
        }

        .section--final-cta {
          padding-top: 24px;
          padding-bottom: 96px;
        }

        .final-cta {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 28px;
          align-items: center;
          padding: 34px;
          border-radius: 34px;
          background: linear-gradient(180deg, #f1cd3b, #d6b10f);
          box-shadow: 0 24px 50px rgba(214, 177, 15, 0.24);
        }

        .final-cta__title {
          margin: 0;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.02;
          letter-spacing: -0.04em;
          font-weight: 800;
          color: #141414;
        }

        .final-cta__description {
          margin: 16px 0 0;
          max-width: 58ch;
          font-size: 16px;
          line-height: 1.75;
          color: rgba(20, 20, 20, 0.8);
        }

        .section--final-cta :global(.btn--primary) {
          background: #141414;
          color: #f8f4eb;
          box-shadow: 0 12px 24px rgba(20, 20, 20, 0.2);
        }

        .section--final-cta :global(.btn--primary:hover) {
          background: #000000;
        }

        .section--final-cta :global(.btn--secondary) {
          background: rgba(255, 255, 255, 0.4);
          border-color: rgba(20, 20, 20, 0.14);
        }

        @media (max-width: 1180px) {
          .hero-grid,
          .product-grid,
          .revenue-grid,
          .final-cta {
            grid-template-columns: 1fr;
          }

          .hero-visual__frame,
          .product-media__frame {
            min-height: 460px;
          }

          .system-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .benefit-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .final-cta__actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 820px) {
          .section {
            padding: 68px 0;
          }

          .hero-shell {
            padding-top: 20px;
          }

          .hero-grid,
          .content-wrap {
            width: min(100% - 24px, 1200px);
          }

          .hero-copy {
            padding: 28px;
            border-radius: 28px;
          }

          .hero-title {
            max-width: 100%;
            font-size: clamp(38px, 11vw, 56px);
          }

          .hero-stat-row,
          .feature-list,
          .system-grid,
          .benefit-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual__frame,
          .product-media__frame {
            min-height: 360px;
            border-radius: 28px;
          }

          .section--dark .content-wrap,
          .final-cta {
            padding: 28px;
            border-radius: 28px;
          }

          .product-media__badge {
            position: static;
            margin-top: 14px;
          }
        }

        @media (max-width: 560px) {
          .hero-actions,
          .final-cta__actions {
            flex-direction: column;
            align-items: stretch;
          }

          .btn {
            width: 100%;
          }

          .hero-stat-card {
            padding: 16px;
          }

          .hero-visual__panel {
            width: 100%;
            margin-left: 0;
          }
        }
      `}</style>
    </>
  );
}