import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";
import "./media-v3.css";

export const metadata: Metadata = {
  title: "LUME NX — Studio Criativo com IA",
  description: "Sua imaginação em uma nova dimensão. Imagens, vídeos, áudio, edição e criação com IA em um só studio.",
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
