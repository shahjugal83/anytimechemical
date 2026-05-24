"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import { themeConfig, type ThemeName } from "@/config/theme";
import { themes, getInitialTheme } from "@/config/themes";

type Theme = ThemeName;

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "sophisticated",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function applyTheme(themeName: Theme) {
  document.documentElement.setAttribute("data-theme", themeName);
  const colors = themes[themeName];
  document.documentElement.style.setProperty("--bg", colors.bg);
  document.documentElement.style.setProperty("--bg-secondary", colors.bgSecondary);
  document.documentElement.style.setProperty("--bg-card", colors.bgCard);
  document.documentElement.style.setProperty("--text", colors.text);
  document.documentElement.style.setProperty("--text-heading", colors.textHeading);
  document.documentElement.style.setProperty("--accent", colors.accent);
  document.documentElement.style.setProperty("--accent-hover", colors.accentHover);
}

const STORAGE_KEY = "anytime-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  let currentTheme: Theme = getInitialTheme();

  if (!themeConfig.hideThemeSelector && typeof window !== "undefined") {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved && themes[saved]) {
      currentTheme = saved;
    }
  }

  useEffect(() => {
    applyTheme(currentTheme);
  }, []);

  const setTheme = (newTheme: Theme) => {
    if (themeConfig.hideThemeSelector) return;
    localStorage.setItem(STORAGE_KEY, newTheme);
    window.location.reload();
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}