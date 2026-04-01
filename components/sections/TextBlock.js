import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './TextBlock.module.css';

export default function TextBlock({
  heading,
  subheading,
  ctaPrimary,
  ctaSecondary,
  background = 'dark',
  centered = true,
}) {
  return (
    <SectionWrapper background={background}>
      <div className={`${styles.content} ${centered ? styles.centered : ''}`}>
        <h2 className={styles.heading}>{heading}</h2>
        {subheading && <p className={styles.subheading}>{subheading}</p>}
        {(ctaPrimary || ctaSecondary) && (
          <div className={styles.actions}>
            {ctaPrimary && (
              <Button href={ctaPrimary.href} variant="primary" size="large">
                {ctaPrimary.text}
              </Button>
            )}
            {ctaSecondary && (
              <Button href={ctaSecondary.href} variant="outline" size="large">
                {ctaSecondary.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
