import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeContext";
import { themes, getInitialTheme } from "@/config/themes";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const defaultTheme = getInitialTheme();
const defaultColors = themes[defaultTheme];

export const metadata: Metadata = {
  title: "Anytime Chemicals | Innovating Chemicals, Empowering Industries",
  description:
    "Leading chemical manufacturing company delivering premium industrial solutions with innovation and reliability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} min-h-screen antialiased`}
        style={{
          "--bg": defaultColors.bg,
          "--bg-secondary": defaultColors.bgSecondary,
          "--bg-card": defaultColors.bgCard,
          "--text": defaultColors.text,
          "--text-heading": defaultColors.textHeading,
          "--accent": defaultColors.accent,
          "--accent-hover": defaultColors.accentHover,
        } as React.CSSProperties}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}