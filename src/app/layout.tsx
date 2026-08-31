import type { Metadata } from "next";
import { Anton, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdman.net"),
  title: {
    default: "Portfolio",
    template: "%s · ABDMAN",
  },
  description:
    "Portfolio of Abd-Alrahman Baniomar (AbdMan) — a software engineering building Flutter mobile apps and React web apps.",
  keywords: [
    "Abd-Alrahman Baniomar",
    "AbdMan",
    "Flutter developer",
    "React developer",
    "mobile developer",
    "web developer",
    "Jordan",
  ],
  openGraph: {
    title: "AbdMan — Mobile & Web Developer",
    description:
      "Flutter mobile apps, React web apps, and products that ship. Portfolio of Abd-Alrahman Baniomar.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}