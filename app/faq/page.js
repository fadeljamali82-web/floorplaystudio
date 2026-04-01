'use client';

import Hero from '@/components/sections/Hero';
import Accordion from '@/components/ui/Accordion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { faqContent } from '@/content/faq';
import styles from './page.module.css';

export default function FAQPage() {
  const { hero, categories, ctaSection } = faqContent;

  return (
    <>
      <Hero
        badge={hero.badge}
        headline={hero.headline}
        subheadline={hero.subheadline}
        variant="centered"
      />

      <SectionWrapper background="white">
        <div className={styles.faqContainer}>
          {categories.map((category, i) => (
            <div key={i} className={styles.faqCategory}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <Accordion items={category.questions} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="light">
        <div className={styles.ctaGrid}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>{ctaSection.heading}</h2>
            <p className={styles.ctaSubheading}>{ctaSection.subheading}</p>
            <div className={styles.ctaActions}>
              <Button href={ctaSection.ctaPrimary.href} variant="primary" size="large">
                {ctaSection.ctaPrimary.text}
              </Button>
              <Button href={ctaSection.ctaSecondary.href} variant="outline" size="large">
                {ctaSection.ctaSecondary.text}
              </Button>
            </div>
          </div>
          {ctaSection.image && (
            <div className={styles.ctaImageWrapper}>
              <Image
                src={ctaSection.image}
                alt="FloorPlay™ Support"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className={styles.ctaImage}
              />
            </div>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
