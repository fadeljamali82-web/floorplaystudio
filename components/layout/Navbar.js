'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/content/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href={navigation.logo.href} className={styles.logo}>
          <span className={styles.logoMark} aria-hidden="true" />
          <span className={styles.logoText}>{navigation.logo.text}</span>
        </Link>

        <div className={styles.desktopLinks}>
          <div className={styles.linkCluster}>
            {navigation.mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href={navigation.ctaLink.href} className={styles.ctaButton}>
            {navigation.ctaLink.label}
          </Link>
        </div>

        <button
          type="button"
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
          id="mobile-navigation"
        >
          <div className={styles.mobileMenuBackdrop} onClick={() => setIsOpen(false)} />

          <div className={styles.mobilePanel}>
            <div className={styles.mobilePanelTop}>
              <Link href={navigation.logo.href} className={styles.mobileLogo}>
                <span className={styles.logoMark} aria-hidden="true" />
                <span className={styles.logoText}>{navigation.logo.text}</span>
              </Link>
            </div>

            <div className={styles.mobileLinks}>
              {navigation.mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ''}`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                </Link>
              ))}

              <Link href={navigation.ctaLink.href} className={styles.mobileCta}>
                {navigation.ctaLink.label}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}