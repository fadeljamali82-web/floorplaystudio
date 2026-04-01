"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Ideal Partner", href: "/ideal-partner" },
    { label: "How You Earn", href: "/earnings" },
    { label: "Why FloorPlay", href: "/why-floorplay" },
    { label: "Apply", href: "/apply" },
];

export default function SiteHeader() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <Link href="/" className={styles.brand} aria-label="FloorPlay home">
                        <span className={styles.brandMark} />
                        <span className={styles.brandText}>FloorPlay™</span>
                    </Link>

                    <nav className={styles.desktopNav} aria-label="Primary">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`${styles.desktopLink} ${isActive(item.href) ? styles.active : ""}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.desktopActions}>
                        <Link href="/apply" className={styles.primaryCta}>
                            Apply Now
                        </Link>
                    </div>

                    <button
                        type="button"
                        className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            <div
                className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ""}`}
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
            />

            <aside
                id="mobile-menu"
                className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ""}`}
                aria-label="Mobile navigation"
            >
                <div className={styles.mobileTop}>
                    <div className={styles.mobileBrandWrap}>
                        <span className={styles.brandMark} />
                        <span className={styles.brandText}>FloorPlay™</span>
                    </div>

                    <button
                        type="button"
                        className={styles.mobileClose}
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}
                    >
                        ×
                    </button>
                </div>

                <div className={styles.mobileContent}>
                    <div className={styles.mobileEyebrow}>Navigation</div>

                    <nav className={styles.mobileNav}>
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`${styles.mobileLink} ${isActive(item.href) ? styles.mobileActive : ""}`}
                            >
                                <span>{item.label}</span>
                                <span className={styles.mobileArrow}>↗</span>
                            </Link>
                        ))}
                    </nav>

                    <div className={styles.mobileNote}>
                        A premium retail system built for controlled placement, partner simplicity, and scalable growth.
                    </div>

                    <Link href="/apply" className={styles.mobileCta}>
                        Apply for a Location
                    </Link>
                </div>
            </aside>
        </>
    );
}