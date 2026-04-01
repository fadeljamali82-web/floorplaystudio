import "./globals.css";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "FloorPlay™",
  description: "A premium retail placement system for design-driven rugs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}