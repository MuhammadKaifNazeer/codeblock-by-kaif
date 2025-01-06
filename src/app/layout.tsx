import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeLoom - Seamless Code Presentation for Developers",
  description:
    "Discover CodeLoom, the ultimate React component for showcasing code snippets with advanced features like syntax highlighting, multi-tab views, line highlighting, and dark/light mode themes. Elevate your developer-focused apps and tutorials with ease.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "CodeLoom",
    "React code block component",
    "Code presentation",
    "Syntax highlighting",
    "Developer tools",
    "Frontend library",
    "React components",
    "Code snippets",
    "Dark mode code blocks",
    "Line highlighting",
    "Copy button for code",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  authors: [
    {
      name: "Muhammad Kaif Nazeer",
      url: "https://muhammadkaifnazeer.vercel.app/",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://codeloom.vercel.app/",
    title: "CodeLoom - Seamless Code Presentation for Developers",
    description:
      "Discover CodeLoom, the ultimate React component for showcasing code snippets with advanced features like syntax highlighting, multi-tab views, line highlighting, and dark/light mode themes. Elevate your developer-focused apps and tutorials with ease.",
    siteName: "CodeLoom",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeLoom - Seamless Code Presentation for Developers",
      },
    ],
  },
  alternates: {
    canonical: "https://codeloom.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
