import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-terminal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Drive | Syaid Andhika",
  description: "Project Drive portfolio dashboard by Syaid Andhika.",
  metadataBase: new URL("https://project-drive.vercel.app"),
  openGraph: {
    title: "Project Drive | Syaid Andhika",
    description: "Project Drive portfolio dashboard by Syaid Andhika.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Drive | Syaid Andhika",
    description: "Project Drive portfolio dashboard by Syaid Andhika.",
  },
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
