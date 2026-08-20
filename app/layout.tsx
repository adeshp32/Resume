import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Deshpande | Software Engineer",
  description:
    "Portfolio and resume of Aditya Deshpande, a software engineer and computer science student at Arizona State University.",
  authors: [{ name: "Aditya Deshpande" }],
  keywords: [
    "Aditya Deshpande",
    "software engineer",
    "frontend engineer",
    "React",
    "TypeScript",
    "Angular",
    "Node.js",
    "generative AI",
    "AI-assisted development",
    "prompt engineering",
    "Arizona State University",
  ],
  robots: { index: true, follow: true },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#171616",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
