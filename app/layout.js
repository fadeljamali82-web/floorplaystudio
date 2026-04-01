import "./globals.css";
import "./animations.css";
import Link from "next/link";

export const metadata = {
  title: "FloorPlay™ | Premium Retail Placement",
  description:
    "FloorPlay™ installs curated, ready-to-sell rug displays inside partner stores through a consignment-first retail placement model.",
};

const navItems = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Earnings", href: "/earnings" },
  { label: "Why FloorPlay™", href: "/why-floorplay" },
  { label: "Ideal Partner", href: "/ideal-partner" },
];

const resourceItems = [
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Legal", href: "/legal" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="site-header__inner">
              <Link href="/" className="site-logo" aria-label="FloorPlay home">
                FloorPlay™
              </Link>

              <nav className="site-nav" aria-label="Main navigation">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="site-nav__link">
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link href="/apply" className="site-button site-button--primary">
                Apply
              </Link>
            </div>
          </header>

          <div className="page-content">{children}</div>

          <footer className="site-footer">
            <div className="site-footer__inner">
              <div className="site-footer__brand">
                <Link href="/" className="site-footer__logo">
                  FloorPlay™
                </Link>
                <p className="site-footer__text">
                  Premium retail placement through design-driven rug displays.
                </p>
              </div>

              <div className="site-footer__column">
                <h3 className="site-footer__heading">Navigation</h3>
                <div className="site-footer__links">
                  <Link href="/">Home</Link>
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/apply">Apply</Link>
                </div>
              </div>

              <div className="site-footer__column">
                <h3 className="site-footer__heading">Resources</h3>
                <div className="site-footer__links">
                  {resourceItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="site-footer__column">
                <h3 className="site-footer__heading">Contact</h3>
                <div className="site-footer__contact">
                  <p>FloorPlay™</p>
                  <p>7701 Southern Dr Unit C14</p>
                  <p>Springfield, VA 22150</p>
                  <a href="mailto:floorplay-studio@gmail.com">
                    floorplay-studio@gmail.com
                  </a>
                  <a href="tel:2024397419">202-439-7419</a>
                </div>
              </div>
            </div>

            <div className="site-footer__bottom">
              <p>© FloorPlay™. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}