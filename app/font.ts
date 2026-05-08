import { Sora, Work_Sans } from "next/font/google";

// Primary font - Work Sans
export const work_sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

// Secondary font - Sora
export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});