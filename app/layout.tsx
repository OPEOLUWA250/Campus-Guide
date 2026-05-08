import type { Metadata } from "next";
import { sora, work_sans } from "@/app/font";
import { Providers } from "@/lib/context/Providers";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

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
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(work_sans.variable, sora.variable)}
    >
      <head>
        <link
          href="https://unpkg.com/mapillary-js@4.1.2/dist/mapillary.css"
          rel="stylesheet"
        />
      </head>
      <body className={cn(work_sans.className, "w-screen")}>
        <Providers>
          <Suspense>
            <div className="w-screen">{children}</div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}