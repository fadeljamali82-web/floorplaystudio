import Card from '@/components/ui/Card';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './FeatureGrid.module.css';

export default function FeatureGrid({
  heading,
  subheading,
  items,
  columns = 4,
  cardVariant = 'bordered',
  background = 'white',
}) {
  return (
    <SectionWrapper background={background}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{heading}</h2>
        {subheading && <p className={styles.subheading}>{subheading}</p>}
      </div>
      <div className={styles.grid} style={{ '--columns': columns }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.cardWrapper}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <Card
              icon={item.icon}
              title={item.title}
              description={item.description}
              image={item.image}
              imageAlt={item.title}
              variant={cardVariant}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
