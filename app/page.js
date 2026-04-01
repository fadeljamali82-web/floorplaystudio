"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

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
    supportCardTitle: "Managed by FloorPlay™",
    supportCardText:
      "Product, presentation, pricing, and replenishment stay controlled by FloorPlay™.",
    stats: [
      { value: "No", label: "Upfront inventory purchase" },
      { value: "Yes", label: "Managed by FloorPlay™" },
      { value: "Yes", label: "Built for premium stores" },
    ],
  },

  intro: {
    eyebrow: "Retail model",
    title: "This Isn’t Just a Rug Brand. It’s a Retail System.",
    description:
      "FloorPlay™ places curated rug displays inside partner stores. We provide the product, the presentation, and the replenishment structure. You provide the floor space and earn from each sale.",
    cards: [
      {
        title: "No upfront inventory purchase",
        text: "Partners do not buy inventory before the display goes live.",
      },
      {
        title: "Inventory stays controlled",
        text: "FloorPlay™ retains ownership of the inventory placed in store.",
      },
      {
        title: "Revenue is shared",
        text: "Partners earn when products sell from their location.",
      },
      {
        title: "Presentation is managed",
        text: "Pricing, branding, and replenishment stay consistent under FloorPlay™.",
      },
    ],
  },

  benefits: {
    eyebrow: "Partner value",
    title: "Why Stores Love FloorPlay™",
    description:
      "The model is designed to look polished in-store while staying simple for qualified partners to host.",
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
    image: "/images/home/display-setup.jpg",
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
    eyebrow: "Revenue logic",
    title: "One Small Area. Real Revenue Potential.",
    description:
      "A compact, well-placed display can turn underused floor space into a meaningful monthly revenue stream. FloorPlay™ is designed to help partner stores monetize traffic they already have.",
    note: "No guaranteed returns. Performance depends on traffic, presentation, assortment, and customer fit.",
    panelTitle: "FloorPlay™ fit",
    panelHighlight: "Managed, premium, low-friction retail placement.",
    rows: [
      { title: "Inventory ownership", value: "FloorPlay™" },
      { title: "Upfront inventory purchase", value: "Not required" },
      { title: "Revenue structure", value: "Shared model" },
    ],
  },

  partnerTypes: {
    eyebrow: "Best-fit categories",
    title: "Who We Partner With",
    description:
      "FloorPlay™ works best in environments where customers browse, wait, or naturally engage with products.",
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
    eyebrow: "Next step",
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

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`${styles.sectionHeading} ${center ? styles.centered : ""} fadeUp`}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.sectionTitle}>{title}</h2>
      {description ? <p className={styles.sectionDescription}>{description}</p> : null}
    </div>
  );
}

export default function HomePage() {
  const { hero, intro, benefits, product, revenue, partnerTypes, finalCta } =
    HOME_CONTENT;

  useEffect(() => {
    const elements = document.querySelectorAll(".fadeUp, .fadeIn, .scaleIn, .stagger");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <section className={`${styles.heroSection} fadeUp`}>
        <div className={styles.heroWrap}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{hero.eyebrow}</p>
              <h1 className={styles.heroTitle}>{hero.title}</h1>
              <p className={styles.heroDescription}>{hero.description}</p>

              <div className={styles.heroActions}>
                <Link
                  href={hero.primaryCta.href}
                  className={`${styles.button} ${styles.buttonPrimary}`}
                >
                  {hero.primaryCta.label}
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className={`${styles.button} ${styles.buttonSecondary}`}
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>

              <div className={`${styles.heroStats} stagger`}>
                {hero.stats.map((item) => (
                  <div key={item.label} className={`${styles.heroStatCard} hoverLift`}>
                    <span className={styles.heroStatValue}>{item.value}</span>
                    <span className={styles.heroStatLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${styles.heroVisual} fadeIn`}>
              <div className={styles.heroImageFrame}>
                <Image
                  src={hero.image}
                  alt="FloorPlay premium in-store rug display"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`${styles.coverImage} heroImage active`}
                />
              </div>

              <div className={`${styles.heroSupportCard} scaleIn hoverLift`}>
                <span className={styles.heroSupportLabel}>{hero.supportCardTitle}</span>
                <p className={styles.heroSupportText}>{hero.supportCardText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.description}
          />

          <div className={`${styles.infoGrid} stagger`}>
            {intro.cards.map((card) => (
              <article key={card.title} className={`${styles.infoCard} hoverLift`}>
                <div className={styles.infoCardDot} />
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow={benefits.eyebrow}
            title={benefits.title}
            description={benefits.description}
          />

          <div className={`${styles.benefitGrid} stagger`}>
            {benefits.items.map((item) => (
              <article key={item.title} className={`${styles.benefitCard} hoverLift`}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.productSection}`}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            <div className={`${styles.productMedia} fadeUp`}>
              <div className={styles.productImageFrame}>
                <Image
                  src={product.image}
                  alt="FloorPlay premium product presentation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className={`${styles.coverImage} heroImage active`}
                />
              </div>
              <div className={`${styles.productBadge} scaleIn`}>
                Premium display-ready product
              </div>
            </div>

            <div className={styles.productCopy}>
              <SectionHeading
                eyebrow={product.eyebrow}
                title={product.title}
                description={product.description}
              />

              <ul className={`${styles.featureList} stagger`}>
                {product.features.map((feature) => (
                  <li key={feature} className={`${styles.featureItem} hoverLift`}>
                    <span className={styles.featureDot} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.container}>
          <div className={`${styles.darkPanel} fadeUp`}>
            <div className={styles.revenueGrid}>
              <div>
                <p className={styles.darkEyebrow}>{revenue.eyebrow}</p>
                <h2 className={styles.darkTitle}>{revenue.title}</h2>
                <p className={styles.darkDescription}>{revenue.description}</p>
                <p className={styles.darkNote}>{revenue.note}</p>
              </div>

              <div className={`${styles.revenueCard} scaleIn hoverLift`}>
                <span className={styles.revenueCardLabel}>{revenue.panelTitle}</span>
                <strong className={styles.revenueCardHighlight}>
                  {revenue.panelHighlight}
                </strong>

                <div className={styles.revenueRows}>
                  {revenue.rows.map((row) => (
                    <div key={row.title} className={styles.revenueRow}>
                      <span className={styles.revenueRowTitle}>{row.title}</span>
                      <span className={styles.revenueRowValue}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow={partnerTypes.eyebrow}
            title={partnerTypes.title}
            description={partnerTypes.description}
            center
          />

          <div className={`${styles.partnerRow} stagger`}>
            {partnerTypes.items.map((item) => (
              <div key={item} className={`${styles.partnerPill} hoverLift`}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.finalSection}`}>
        <div className={styles.container}>
          <div className={`${styles.finalCta} fadeUp`}>
            <div>
              <p className={styles.finalEyebrow}>{finalCta.eyebrow}</p>
              <h2 className={styles.finalTitle}>{finalCta.title}</h2>
              <p className={styles.finalDescription}>{finalCta.description}</p>
            </div>

            <div className={styles.finalActions}>
              <Link
                href={finalCta.primary.href}
                className={`${styles.button} ${styles.finalPrimary}`}
              >
                {finalCta.primary.label}
              </Link>
              <Link
                href={finalCta.secondary.href}
                className={`${styles.button} ${styles.finalSecondary}`}
              >
                {finalCta.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}