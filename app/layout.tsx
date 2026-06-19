import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://dealradarng.com"),
  title: {
    default: "Deal Radar NG",
    template: "%s | Deal Radar NG",
  },
  description:
    "Discover digital skills, remote work opportunities, affiliate products, relocation resources and online income programs from Expertnaire and Selar.",
  openGraph: {
    title: "Deal Radar NG",
    description:
      "Curated digital opportunities for Nigerians and Africans interested in remote work, digital skills and online income resources.",
    url: "https://dealradarng.com",
    siteName: "Deal Radar NG",
    images: ["/brand/banner-black.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deal Radar NG",
    description:
      "Curated digital opportunities from Expertnaire and Selar.",
    images: ["/brand/banner-black.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
