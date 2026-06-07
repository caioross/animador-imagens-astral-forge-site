"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

type Step = { n: string; title: string; desc: string };
type Feature = { icon: string; title: string; desc: string };

type Dict = {
  navPipeline: string;
  navFeatures: string;
  navStack: string;
  navGame: string;

  heroBadge: string;
  heroTitle: string;
  heroTagline: string;
  heroSub: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;

  pipelineTitle: string;
  pipelineLead: string;
  steps: Step[];

  featuresTitle: string;
  featuresLead: string;
  features: Feature[];

  stackTitle: string;
  stackLead: string;
  stackItems: string[];
  perfTitle: string;
  perfItems: string[];

  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;

  footerNote: string;
  footerRights: string;
};

const STR: Record<Lang, Dict> = {
  pt: {
    navPipeline: "Pipeline",
    navFeatures: "Destaques",
    navStack: "Tecnologia",
    navGame: "O jogo",

    heroBadge: "Ferramenta de produção · Astral Forge",
    heroTitle: "Animador de Imagens",
    heroTagline: "A arte parada vira movimento — em loop perfeito.",
    heroSub:
      "Pipeline local que transforma cada arte de carta de Astral Forge em um vídeo curto que repete sem corte visível. Uma IA de visão roteiriza a animação; o LTX-Video gera o clipe. Tudo na sua máquina.",
    heroCtaPrimary: "Ver o pipeline",
    heroCtaSecondary: "Conhecer o jogo",

    pipelineTitle: "Da imagem ao loop",
    pipelineLead:
      "Duas etapas, da arte parada ao vídeo de ~10s que volta ao início sem emenda.",
    steps: [
      {
        n: "01",
        title: "Roteirista",
        desc: "Um modelo de visão (Qwen2.5-VL-3B GGUF via llama.cpp) vê a imagem e escreve um roteiro de animação — o que se move, como e em que ritmo.",
      },
      {
        n: "02",
        title: "Vídeo (image-to-video)",
        desc: "O ComfyUI com LTX-Video 0.9.6 distilled (GGUF) recebe a imagem + o roteiro e gera o clipe em loop, com o 1º e o último frame iguais à arte original.",
      },
    ],

    featuresTitle: "O que torna especial",
    featuresLead: "Pensado para arte de jogo: fiel, leve e sem dependência de nuvem.",
    features: [
      { icon: "🔁", title: "Loop perfeito", desc: "Primeiro e último frame idênticos à imagem — repete eternamente sem corte visível." },
      { icon: "🎨", title: "Fiel à arte", desc: "Anima a partir da própria imagem (image-to-video); preserva a composição da carta." },
      { icon: "🔒", title: "100% local", desc: "Modelos GGUF na sua máquina. Nenhuma arte sai para a nuvem, sem custo por render." },
      { icon: "🪶", title: "Roda leve", desc: "Otimizado para 4GB de VRAM: lowvram, VAE em tiles e offload para a RAM." },
    ],

    stackTitle: "Tecnologia",
    stackLead: "Modelos GGUF locais orquestrados em Python sobre o ComfyUI.",
    stackItems: [
      "Python 3 + ComfyUI (API local)",
      "Qwen2.5-VL-3B (GGUF) via llama.cpp — o roteirista",
      "LTX-Video 0.9.6 distilled (GGUF) — image-to-video",
      "Resume por estado: pare e continue quando quiser",
    ],
    perfTitle: "Desempenho (RTX 3050 4GB)",
    perfItems: [
      "~2 min por vídeo de 10s (modo ping-pong)",
      "~25s por roteiro de imagem",
      "Saída 1:1 quadrada, pronta para a carta",
      "Tudo resumível: feche e continue depois",
    ],

    ctaTitle: "Parte do universo Astral Forge",
    ctaLead:
      "Um TCG com arte própria. O Animador dá vida a cada carta — sem render na nuvem.",
    ctaButton: "Ver Astral Forge",

    footerNote: "Animador de Imagens — ferramenta de produção de Astral Forge.",
    footerRights: "Todos os direitos reservados.",
  },
  en: {
    navPipeline: "Pipeline",
    navFeatures: "Highlights",
    navStack: "Tech",
    navGame: "The game",

    heroBadge: "Production tool · Astral Forge",
    heroTitle: "Image Animator",
    heroTagline: "Still art becomes motion — in a perfect loop.",
    heroSub:
      "A local pipeline that turns each Astral Forge card artwork into a short clip that repeats seamlessly. A vision AI scripts the animation; LTX-Video generates the clip. All on your machine.",
    heroCtaPrimary: "See the pipeline",
    heroCtaSecondary: "Discover the game",

    pipelineTitle: "From image to loop",
    pipelineLead:
      "Two stages, from still art to a ~10s video that returns to the start seamlessly.",
    steps: [
      {
        n: "01",
        title: "Scriptwriter",
        desc: "A vision model (Qwen2.5-VL-3B GGUF via llama.cpp) looks at the image and writes an animation script — what moves, how and at what pace.",
      },
      {
        n: "02",
        title: "Video (image-to-video)",
        desc: "ComfyUI with LTX-Video 0.9.6 distilled (GGUF) takes the image + script and renders a looping clip, with first and last frames matching the original art.",
      },
    ],

    featuresTitle: "What makes it special",
    featuresLead: "Built for game art: faithful, lightweight and cloud-free.",
    features: [
      { icon: "🔁", title: "Perfect loop", desc: "First and last frame identical to the image — repeats forever with no visible cut." },
      { icon: "🎨", title: "Faithful to the art", desc: "Animates from the image itself (image-to-video); preserves the card's composition." },
      { icon: "🔒", title: "100% local", desc: "GGUF models on your machine. No art leaves for the cloud, no per-render cost." },
      { icon: "🪶", title: "Runs light", desc: "Tuned for 4GB VRAM: lowvram, tiled VAE and RAM offload." },
    ],

    stackTitle: "Tech",
    stackLead: "Local GGUF models orchestrated in Python over ComfyUI.",
    stackItems: [
      "Python 3 + ComfyUI (local API)",
      "Qwen2.5-VL-3B (GGUF) via llama.cpp — the scriptwriter",
      "LTX-Video 0.9.6 distilled (GGUF) — image-to-video",
      "Stateful resume: stop and continue anytime",
    ],
    perfTitle: "Performance (RTX 3050 4GB)",
    perfItems: [
      "~2 min per 10s video (ping-pong mode)",
      "~25s per image script",
      "Square 1:1 output, ready for the card",
      "Fully resumable: close and continue later",
    ],

    ctaTitle: "Part of the Astral Forge universe",
    ctaLead:
      "A TCG with its own card art. The Animator brings every card to life — no cloud render.",
    ctaButton: "See Astral Forge",

    footerNote: "Image Animator — a production tool for Astral Forge.",
    footerRights: "All rights reserved.",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      window.localStorage.getItem("lang")) as Lang | null;
    if (stored === "pt" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: STR[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center rounded-full border border-cyan/40 bg-black/30 p-1 backdrop-blur">
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
          lang === "pt" ? "bg-cyan text-void" : "text-mist/70 hover:text-white"
        }`}
      >
        🇧🇷 PT
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
          lang === "en" ? "bg-cyan text-void" : "text-mist/70 hover:text-white"
        }`}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}
