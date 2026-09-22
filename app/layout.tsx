import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUME NX — Creative Studio",
  description: "Your imagination. A new dimension. Images, video and audio in one creative studio.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
