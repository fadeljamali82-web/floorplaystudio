import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero({
  badge,
  headline,
  subheadline,
  heroImage,
  ctaPrimary,
  ctaSecondary,
  variant = 'default',
}) {
  return (
    <section className={`${styles.hero} ${styles[variant]}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {badge && <span className={styles.badge}>{badge}</span>}
          <h1 className={styles.headline}>
            {headline.split('\n').map((line, i) => (
              <span key={i} className={styles.headlineLine} style={{ animationDelay: `${i * 120}ms` }}>
                {line}
              </span>
            ))}
          </h1>
          {subheadline && (
            <p className={styles.subheadline}>{subheadline}</p>
          )}
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

        {heroImage && (
          <div className={styles.imageWrapper}>
            <Image
              src={heroImage}
              alt={headline.replace('\n', ' ')}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        )}
      </div>
    </section>
  );
}
