// Hello World
import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "PRX LAB — ESSENCE ROYALLE × RAFAEL MOLINA × PRX",
  description:
    "Proposta de parceria: criação junto à Essence Royalle de uma linha de suplementação em gummies baseada em drops especiais e edições limitadas cocriadas e assinadas por jovens da Gen Z.",
  authors: [{ name: "Essence Royalle × Rafael Molina × PRX" }, { name: "ViraWeb", url: "https://viraweb.online" }],
  keywords: [
    "PRX LAB",
    "Essence Royalle",
    "Rafael Molina",
    "PRX",
    "Gummies",
    "Suplementação",
    "Geração Z",
    "Drops Colecionáveis",
    "Cocriação",
    "Edições Limitadas",
    "Saúde e Bem-Estar",
  ],
  openGraph: {
    title: "PRX LAB — ESSENCE ROYALLE × RAFAEL MOLINA × PRX",
    description:
      "A próxima geração não quer apenas consumir uma marca. Quer fazer parte dela. Linha de suplementação em gummies cocriada com a Gen Z.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "https://prx.app.br/brand/prx-app-icon.svg/",
    shortcut: "https://prx.app.br/brand/prx-app-icon.svg/",
    apple: "https://prx.app.br/brand/prx-app-icon.svg/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-white text-slate-900 selection:bg-[#C59B27] selection:text-white min-h-screen"
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
