import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteMetadata } from '@/content/siteMetadata';

export const metadata = {
  title: {
    default: siteMetadata.defaultTitle,
    template: `%s — ${siteMetadata.siteName}`,
  },
  description: siteMetadata.defaultDescription,
  metadataBase: new URL(siteMetadata.siteUrl),
  openGraph: {
    title: siteMetadata.defaultTitle,
    description: siteMetadata.defaultDescription,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
