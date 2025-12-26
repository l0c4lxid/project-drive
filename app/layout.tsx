import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-terminal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Drive",
  description: "A Google Drive-inspired workspace for project portfolios.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
