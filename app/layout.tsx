import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "../components/i18n";

const GA_ID = "G-PLACEHOLDER3";

export const metadata: Metadata = {
  title: "Animador de Imagens — Astral Forge",
  description:
    "Pipeline local que transforma cada arte de carta de Astral Forge em um vídeo curto em loop perfeito. Qwen2.5-VL roteiriza; LTX-Video gera. Sem nuvem.",
  keywords: [
    "Astral Forge",
    "image to video",
    "LTX-Video",
    "ComfyUI",
    "Qwen2.5-VL",
    "GGUF",
    "animação local",
    "loop",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="antialiased">
        {GA_ID.indexOf("PLACEHOLDER") === -1 && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
