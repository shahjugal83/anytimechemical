export const themeConfig = {
  hideThemeSelector: true,
  defaultTheme: "classic",
} as const;

export type ThemeName = "sophisticated" | "professional" | "classic";