import Hero from '@/components/sections/Hero';
import SplitContent from '@/components/sections/SplitContent';
import FeatureGrid from '@/components/sections/FeatureGrid';
import TextBlock from '@/components/sections/TextBlock';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { whyFloorplayContent } from '@/content/whyFloorplay';
import styles from './page.module.css';

export const metadata = {
  title: whyFloorplayContent.meta.title,
  description: whyFloorplayContent.meta.description,
};

export default function WhyFloorplayPage() {
  const { hero, comparison, productQuality, repeatability, idealFit, ctaSection } = whyFloorplayContent;

  return (
    <>
      <Hero
        badge={hero.badge}
        headline={hero.headline}
        subheadline={hero.subheadline}
        heroImage={hero.heroImage}
        variant="default"
      />

      {/* Comparison Section */}
      <SectionWrapper background="white">
        <h2 className={styles.sectionHeading}>{comparison.heading}</h2>
        <p className={styles.sectionBody}>{comparison.body}</p>
        <div className={styles.comparisonGrid}>
          {comparison.columns.map((col, i) => (
            <div key={i} className={`${styles.comparisonColumn} ${i === 1 ? styles.highlight : ''}`}>
              <span className={styles.comparisonIcon}>{col.icon}</span>
              <h3 className={styles.comparisonTitle}>{col.title}</h3>
              <ul className={styles.comparisonList}>
                {col.items.map((item, j) => (
                  <li key={j} className={styles.comparisonItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <FeatureGrid
        heading={productQuality.heading}
        subheading={productQuality.body}
        items={productQuality.cards}
        columns={3}
        cardVariant="dark"
        background="light"
      />

      <SplitContent
        heading={repeatability.heading}
        body={repeatability.body}
        image={repeatability.image}
        background="white"
      />

      {/* Ideal Fit Section */}
      <SectionWrapper background="light">
        <h2 className={styles.sectionHeading}>{idealFit.heading}</h2>
        <p className={styles.sectionBody}>{idealFit.body}</p>
        <div className={styles.idealFitGrid}>
          {idealFit.columns.map((col, i) => (
            <div key={i} className={styles.idealFitCard}>
              <span className={styles.idealFitNumber}>{col.number}</span>
              <h3 className={styles.idealFitTitle}>{col.title}</h3>
              <p className={styles.idealFitDescription}>{col.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <TextBlock
        heading={ctaSection.heading}
        subheading={ctaSection.subheading}
        ctaPrimary={ctaSection.ctaPrimary}
        ctaSecondary={ctaSection.ctaSecondary}
        background="dark"
      />
    </>
  );
}
