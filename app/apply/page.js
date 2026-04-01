import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/ui/SectionWrapper';
import PartnerForm from '@/components/sections/PartnerForm';
import { applyContent } from '@/content/apply';
import styles from './page.module.css';

export const metadata = {
  title: applyContent.meta.title,
  description: applyContent.meta.description,
};

export default function ApplyPage() {
  const { hero, process, form, sidebarImage, bottomImage } = applyContent;

  return (
    <>
      <Hero
        badge={hero.badge}
        headline={hero.headline}
        subheadline={hero.subheadline}
        heroImage={hero.heroImage}
        variant="default"
      />

      {/* Process Steps */}
      <SectionWrapper background="white" spacing="compact">
        <div className={styles.processGrid}>
          <div>
            <h2 className={styles.processHeading}>{process.heading}</h2>
            <div className={styles.processSteps}>
              {process.steps.map((step, i) => (
                <div key={i} className={styles.processStep}>
                  <span className={styles.processNumber}>{step.number}</span>
                  <div>
                    <h3 className={styles.processTitle}>{step.title}</h3>
                    <p className={styles.processDescription}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {sidebarImage && (
            <div className={styles.sidebarImageWrapper}>
              <Image
                src={sidebarImage}
                alt="FloorPlay™ Partner Location"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className={styles.sidebarImage}
              />
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* Application Form */}
      <SectionWrapper background="light">
        <div className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2 className={styles.formHeading}>{form.heading}</h2>
          </div>
          <PartnerForm
            fields={form.fields}
            submitText={form.submitText}
            disclaimer={form.disclaimer}
          />
        </div>
      </SectionWrapper>

      {/* Bottom Image */}
      {bottomImage && (
        <SectionWrapper background="white" spacing="compact">
          <div className={styles.bottomImageWrapper}>
            <Image
              src={bottomImage}
              alt="FloorPlay™ Retail Location"
              fill
              sizes="100vw"
              className={styles.bottomImage}
            />
          </div>
        </SectionWrapper>
      )}
    </>
  );
}
