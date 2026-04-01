import Image from 'next/image';
import styles from './Card.module.css';

export default function Card({
  title,
  description,
  icon,
  image,
  imageAlt,
  variant = 'default',
  className = '',
  children,
}) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`}>
      {image && (
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={imageAlt || title || ''}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.content}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
    </div>
  );
}
