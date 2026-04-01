import Link from 'next/link';
import { navigation } from '@/content/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const { footer } = navigation;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>FloorPlay™</Link>
            <p className={styles.tagline}>
              Consignment-first retail placement for premium rugs.
            </p>
          </div>

          {/* Navigation Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{footer.navigation.title}</h4>
            <ul className={styles.linkList}>
              {footer.navigation.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{footer.resources.title}</h4>
            <ul className={styles.linkList}>
              {footer.resources.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{footer.contact.title}</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactCompany}>{footer.contact.company}</p>
              <p className={styles.contactDetail}>{footer.contact.address}</p>
              <a href={`mailto:${footer.contact.email}`} className={styles.contactLink}>
                {footer.contact.email}
              </a>
              <a href={`tel:${footer.contact.phone}`} className={styles.contactLink}>
                {footer.contact.phone}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} FloorPlay™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
