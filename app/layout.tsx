import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "افتتاح جامعة بنغازي | University of Benghazi Opening",
  description: "الافتتاح الرسمي للمرافق الجديدة بجامعة بنغازي.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/images/uob-logo.png",
    shortcut: "/images/uob-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
