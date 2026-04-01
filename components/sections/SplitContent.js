import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './SplitContent.module.css';

export default function SplitContent({
  heading,
  body,
  image,
  imageAlt,
  ctaText,
  ctaHref,
  reverse = false,
  background = 'white',
  children,
}) {
  return (
    <SectionWrapper background={background}>
      <div className={`${styles.grid} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.body}>{body}</p>
          {ctaText && ctaHref && (
            <Button href={ctaHref} variant="ghost">{ctaText}</Button>
          )}
          {children}
        </div>
        {image && (
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={imageAlt || heading}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
