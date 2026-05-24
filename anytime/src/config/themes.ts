import { themeConfig } from "@/config/theme";

export type ThemeName = "sophisticated" | "professional" | "classic";

export const themes: Record<ThemeName, Record<string, string>> = {
  sophisticated: {
    bg: "#0a1628",
    bgSecondary: "#0d1a30",
    bgCard: "#1a2a4a",
    text: "#c0c0c0",
    textHeading: "#ffffff",
    accent: "#d4af37",
    accentHover: "#e6c65a",
  },
  professional: {
    bg: "#1a1a1a",
    bgSecondary: "#242424",
    bgCard: "#2d2d2d",
    text: "#b8b8b8",
    textHeading: "#f0f0f0",
    accent: "#2ecc71",
    accentHover: "#58d68d",
  },
  classic: {
    bg: "#fafafa",
    bgSecondary: "#ffffff",
    bgCard: "#ffffff",
    text: "#444444",
    textHeading: "#0d1f2d",
    accent: "#b8860b",
    accentHover: "#d4a017",
  },
};

export function getInitialTheme(): ThemeName {
  if (themes[themeConfig.defaultTheme as ThemeName]) {
    return themeConfig.defaultTheme as ThemeName;
  }
  return "sophisticated";
}