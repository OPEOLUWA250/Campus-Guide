import type { Metadata } from "next";
import { work_sans, sora } from "@/app/font";
import { Providers } from "@/lib/context/Providers";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Suspense } from "react";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Campus Guide",
  description:
    "A platform that provides easy navigation within Univerisity Campus for students and visitors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <head>
        <link
          href="https://unpkg.com/mapillary-js@4.1.2/dist/mapillary.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${work_sans.variable} ${sora.variable}`}>
        <Providers>
          <Suspense>
            <div className="w-screen">{children}</div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
