/**
 * Design System Constants
 * Brand colors, spacing, and typography guidelines
 */

export const COLORS = {
  primary: "#8400F2",
  primaryLight: "#A020F0",
  primaryDark: "#6A00CC",
  
  secondary: "#3F2B50",

  dark: {
    bg: "#0F001B",
    surface: "#1A0D2E",
    border: "#2D1B4E",
  },

  light: {
    bg: "#FFFFFF",
    surface: "#F8F7FB",
    border: "#E5E0ED",
  },

  accent: {
    yellow: "#FFE091",
    lightYellow: "#FFF2CC",
  },

  text: {
    primary: "#000000",
    secondary: "#666666",
    light: "#FFFFFF",
    muted: "#999999",
  },

  status: {
    success: "#10B981",
    error: "#EF4444",
    warning: "#F59E0B",
  },
} as const;

export const SPACING = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "2.5rem", // 40px
  "3xl": "3rem", // 48px
  "4xl": "4rem", // 64px
} as const;

export const BORDER_RADIUS = {
  sm: "0.375rem", // 6px
  md: "0.75rem", // 12px
  lg: "1rem", // 16px
  xl: "1.5rem", // 24px
  "2xl": "2rem", // 32px
  full: "9999px",
} as const;

export const TYPOGRAPHY = {
  heading: {
    h1: {
      size: "3.5rem", // 56px
      weight: "700",
      lineHeight: "1.2",
    },
    h2: {
      size: "2.25rem", // 36px
      weight: "700",
      lineHeight: "1.3",
    },
    h3: {
      size: "1.875rem", // 30px
      weight: "600",
      lineHeight: "1.4",
    },
  },
  body: {
    lg: {
      size: "1.125rem", // 18px
      weight: "400",
      lineHeight: "1.6",
    },
    base: {
      size: "1rem", // 16px
      weight: "400",
      lineHeight: "1.5",
    },
    sm: {
      size: "0.875rem", // 14px
      weight: "400",
      lineHeight: "1.5",
    },
  },
} as const;

export const SHADOWS = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
} as const;

export const TRANSITIONS = {
  fast: "150ms ease-in-out",
  normal: "300ms ease-in-out",
  slow: "500ms ease-in-out",
} as const;
