"use client";

import { useLang } from "./i18n";

const GAME_URL = "https://github.com/caioross";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:py-32">
        <span className="inline-block rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan">
          {t.heroBadge}
        </span>
        <h1 className="mt-6 bg-gradient-to-r from-cyan via-mist to-violet bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-7xl">
          {t.heroTitle}
        </h1>
        <p className="mt-4 font-mono text-lg text-cyan sm:text-xl">{t.heroTagline}</p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist/75 sm:text-lg">
          {t.heroSub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pipeline"
            className="rounded-full bg-cyan px-7 py-3 font-semibold text-void shadow-lg shadow-cyan/25 transition hover:opacity-90"
          >
            {t.heroCtaPrimary}
          </a>
          <a
            href={GAME_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-mist/30 px-7 py-3 font-semibold text-mist transition hover:border-cyan hover:text-cyan"
          >
            {t.heroCtaSecondary}
          </a>
        </div>
        <div className="relative mx-auto mt-14 h-3 max-w-md overflow-hidden rounded-full bg-panel">
          <div className="absolute inset-y-0 w-1/3 animate-sweep rounded-full bg-gradient-to-r from-transparent via-cyan to-transparent" />
        </div>
      </div>
    </section>
  );
}

export function Pipeline() {
  const { t } = useLang();
  return (
    <section id="pipeline" className="border-t border-cyan/10 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-bold text-mist sm:text-4xl">
          {t.pipelineTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-mist/70">{t.pipelineLead}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-cyan/20 bg-panel/60 p-7 transition hover:border-cyan/60"
            >
              <span className="font-mono text-5xl font-black text-cyan/30">{s.n}</span>
              <h3 className="mt-3 text-xl font-bold text-mist">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-mist/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const { t } = useLang();
  return (
    <section id="features" className="border-t border-cyan/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-mist sm:text-4xl">
          {t.featuresTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-mist/70">{t.featuresLead}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-violet/20 bg-panel/40 p-6 text-center transition hover:border-violet/60"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-violet/15 text-3xl">
                {f.icon}
              </div>
              <h3 className="mt-4 font-bold text-mist">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="border-t border-cyan/10 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-mist sm:text-4xl">{t.stackTitle}</h2>
          <p className="mt-3 text-mist/70">{t.stackLead}</p>
          <ul className="mt-6 space-y-3">
            {t.stackItems.map((s) => (
              <li key={s} className="flex items-start gap-3 text-mist/85">
                <span className="mt-1 text-cyan">▹</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-cyan/20 bg-panel/60 p-6">
          <h3 className="text-lg font-bold text-mist">{t.perfTitle}</h3>
          <ul className="mt-4 space-y-3">
            {t.perfItems.map((q) => (
              <li key={q} className="flex items-start gap-3 text-mist/85">
                <span className="mt-0.5 text-violet">✦</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  const { t } = useLang();
  return (
    <section id="cta" className="border-t border-cyan/10 py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-mist sm:text-4xl">{t.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl text-mist/75">{t.ctaLead}</p>
        <a
          href={GAME_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-cyan to-violet px-8 py-3 font-semibold text-void transition hover:opacity-90"
        >
          {t.ctaButton}
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-cyan/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-mist/50">
        <p>{t.footerNote}</p>
        <p className="mt-1">
          © {new Date().getFullYear()} Caio · {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
