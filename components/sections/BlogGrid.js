import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './BlogGrid.module.css';

function BlogCard({ post, featured = false }) {
  return (
    <Link href={post.slug} className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes={featured ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 33vw'}
          className={styles.image}
        />
        <span className={styles.category}>{post.category}</span>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>
        <time className={styles.cardDate}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
      </div>
    </Link>
  );
}

export default function BlogGrid({ heading, posts, variant = 'grid' }) {
  return (
    <SectionWrapper background="white">
      {heading && (
        <div className={styles.header}>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
      )}
      <div className={`${styles.grid} ${styles[variant]}`}>
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} featured={variant === 'featured' && index === 0} />
        ))}
      </div>
    </SectionWrapper>
  );
}
