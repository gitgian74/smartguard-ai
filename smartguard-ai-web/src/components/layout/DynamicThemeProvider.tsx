"use client";
import { useEffect } from "react";
import { fetchSiteSettings } from "@/lib/api";

export default function DynamicThemeProvider() {
  useEffect(() => {
    fetchSiteSettings().then(settings => {
      if (settings) {
        const root = document.documentElement;
        root.style.setProperty('--primary-bg', settings.primary_bg);
        root.style.setProperty('--primary-text', settings.primary_text);
        root.style.setProperty('--secondary-text', settings.secondary_text);
        root.style.setProperty('--accent', settings.accent);
        root.style.setProperty('--button-bg', settings.button_bg);
        root.style.setProperty('--button-text', settings.button_text);
      }
    });
  }, []);
  return null;
} 