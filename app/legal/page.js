import Hero from '@/components/sections/Hero';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Image from 'next/image';
import { legalContent } from '@/content/legal';
import styles from './page.module.css';

export const metadata = {
  title: legalContent.meta.title,
  description: legalContent.meta.description,
};

export default function LegalPage() {
  const { hero, sidebar, sections, legalContact } = legalContent;

  return (
    <>
      <Hero
        badge={hero.badge}
        headline={hero.headline}
        subheadline={hero.subheadline}
        variant="centered"
      />

      <SectionWrapper background="white">
        <div className={styles.layout}>
          {/* Sidebar Navigation */}
          <aside className={styles.sidebar}>
            <nav>
              <h3 className={styles.sidebarTitle}>On This Page</h3>
              <ul className={styles.sidebarLinks}>
                {sidebar.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className={styles.sidebarLink}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className={styles.content}>
            {sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.legalSection}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <p className={styles.lastUpdated}>{section.lastUpdated}</p>
                {section.content.map((block, i) => (
                  <div key={i} className={styles.block}>
                    <h3 className={styles.blockSubtitle}>{block.subtitle}</h3>
                    {block.body && (
                      <p className={styles.blockBody}>{block.body}</p>
                    )}
                    {block.items && (
                      <ul className={styles.blockList}>
                        {block.items.map((item, j) => (
                          <li key={j} className={styles.blockListItem}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Legal Contact */}
      <SectionWrapper background="dark">
        <div className={styles.contactGrid}>
          <div className={styles.contactContent}>
            <h2 className={styles.contactHeading}>{legalContact.heading}</h2>
            <p className={styles.contactBody}>{legalContact.body}</p>
            <a href={`mailto:${legalContact.email}`} className={styles.contactEmail}>
              {legalContact.email}
            </a>
            <p className={styles.contactAddress}>{legalContact.address}</p>
          </div>
          {legalContact.image && (
            <div className={styles.contactImageWrapper}>
              <Image
                src={legalContact.image}
                alt="Legal Contact"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className={styles.contactImage}
              />
            </div>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
