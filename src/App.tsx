import { useEffect, useState } from "react";
import { CONFIG, whatsappLink } from "./config";
import { useReveal } from "./useReveal";

/* ----------------------------- Ícones simples ----------------------------- */
const WhatsIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.19 1.6 6.02L4 29l8.13-1.55a12 12 0 0 0 3.9.66h.01C22.68 28.11 28 22.71 28 16.07 28 8.4 22.68 3 16.04 3Zm7.02 17.1c-.29.82-1.7 1.57-2.36 1.63-.63.06-1.42.09-2.29-.14-.53-.14-1.2-.36-2.07-.73-3.64-1.57-6.01-5.23-6.19-5.47-.18-.24-1.48-1.97-1.48-3.76s.94-2.67 1.27-3.03c.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.29.71.99 2.45 1.08 2.63.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.86-.2 1.68Z" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/* -------------------------------- Botão CTA -------------------------------- */
function CtaButton({ label = "Falar no WhatsApp agora", block = false }: { label?: string; block?: boolean }) {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.03] hover:shadow-emerald-500/50 ${block ? "w-full" : ""}`}
    >
      <WhatsIcon className="h-6 w-6" />
      {label}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}

/* -------------------------------- Ticker ---------------------------------- */
function Ticker() {
  const items = [
    "BTC/USD ▲ 2.4%", "EUR/USD ▲ 0.8%", "GOLD ▲ 1.6%", "US30 ▲ 3.1%",
    "ETH/USD ▲ 4.2%", "NAS100 ▲ 2.9%", "GBP/USD ▲ 1.1%", "OIL ▲ 0.7%",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-black/40 py-3">
      <div className="ticker-track gap-10 px-5">
        {row.map((t, i) => (
          <span key={i} className="text-sm font-semibold tracking-wide text-emerald-300">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Nav / Header ------------------------------ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-2 text-lg font-black tracking-tight">
          <span className="text-2xl">🦈</span>
          <span>BOT <span className="text-shine">TUBARÃO</span></span>
        </div>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border border-emerald-400/40 px-5 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/10 sm:inline-flex"
        >
          <WhatsIcon className="h-4 w-4" /> Quero acesso
        </a>
      </div>
    </header>
  );
}

/* --------------------------------- HERO ----------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      {/* fundo decorativo */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[130px] animate-glow" />
      <div className="pointer-events-none absolute top-40 -right-20 h-[350px] w-[350px] rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full gold-border bg-amber-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
            🔥 Método dos grandes players revelado
          </div>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Lucre no mercado como os{" "}
            <span className="text-shine">grandes players</span> — com o{" "}
            <span className="whitespace-nowrap">Bot Tubarão 🦈</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate-300">
            Eu, <strong className="text-white">{CONFIG.nome}</strong>, descobri a
            forma como os grandes players do mercado financeiro lucram — e hoje{" "}
            <strong className="text-emerald-300">você vai lucrar isso, eu te dou certeza.</strong>
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaButton />
            <a href="#como" className="text-sm font-semibold text-slate-400 underline-offset-4 hover:text-white hover:underline">
              Ver como funciona ↓
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <div><span className="block text-2xl font-black text-white">+12.400</span>operações vencedoras</div>
            <div className="h-8 w-px bg-white/10" />
            <div><span className="block text-2xl font-black text-white">89%</span>de assertividade</div>
            <div className="h-8 w-px bg-white/10" />
            <div><span className="block text-2xl font-black text-white">24/7</span>operando por você</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-emerald-500/20 to-amber-400/20 blur-2xl" />
          <img
            src="/images/shark-hero.png"
            alt="Bot Tubarão"
            className="animate-float w-full rounded-[2rem] border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Problema/Dor ------------------------------ */
function Problem() {
  const pains = [
    "Você entra na operação e o mercado vira contra você segundos depois?",
    "Passa horas na frente do gráfico e ainda perde dinheiro?",
    "Sente que sempre existe alguém sabendo algo que você não sabe?",
    "Cansado de sinais furados e grupos que só prometem?",
  ];
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 text-center reveal">
      <h2 className="text-3xl font-black sm:text-4xl">A verdade que ninguém te conta 👇</h2>
      <p className="mx-auto mt-4 max-w-2xl text-slate-400">
        O mercado é movido por poucos. Enquanto o pequeno investidor perde, os
        grandes players já sabem para onde o preço vai.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {pains.map((p) => (
          <div key={p} className="glass rounded-2xl p-6 text-left text-slate-200">
            <span className="mb-2 block text-2xl">❌</span>
            {p}
          </div>
        ))}
      </div>
      <p className="mt-10 text-xl font-bold text-emerald-300">
        O Bot Tubarão foi criado para colocar VOCÊ do lado certo do mercado.
      </p>
    </section>
  );
}

/* ------------------------------- Como funciona ---------------------------- */
function How() {
  const steps = [
    { n: "01", t: "Você entra em contato", d: "Fala comigo no WhatsApp e eu libero seu acesso ao Bot Tubarão de forma simples e rápida." },
    { n: "02", t: "O Tubarão caça as oportunidades", d: "O robô analisa o mercado 24h por dia identificando os movimentos dos grandes players em tempo real." },
    { n: "03", t: "Você lucra no piloto automático", d: "Receba os melhores pontos de entrada e saída. Simples, direto e sem ficar preso ao gráfico." },
  ];
  return (
    <section id="como" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-14 text-center reveal">
        <span className="text-sm font-bold uppercase tracking-widest text-amber-300">Como funciona</span>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">3 passos para começar a lucrar</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.n} className="reveal glass rounded-3xl p-8" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="text-shine text-5xl font-black">{s.n}</div>
            <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
            <p className="mt-3 text-slate-400">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Benefícios ------------------------------ */
function Benefits() {
  const items = [
    { icon: "⚡", t: "Sinais em tempo real", d: "Entradas assertivas baseadas no fluxo dos grandes." },
    { icon: "🛡️", t: "Gestão de risco", d: "Proteja seu capital com estratégias inteligentes." },
    { icon: "🤖", t: "100% automático", d: "O bot trabalha por você enquanto você vive sua vida." },
    { icon: "📈", t: "Alta assertividade", d: "Método validado com milhares de operações vencedoras." },
    { icon: "🎓", t: "Suporte direto comigo", d: "Você fala diretamente com o Richard, sem robôs." },
    { icon: "💰", t: "Resultados reais", d: "Feito para quem quer lucrar de verdade, não promessas." },
  ];
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 text-center reveal">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-300">Vantagens</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Por que o Bot Tubarão é diferente 🦈</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={it.t} className="reveal glass group rounded-3xl p-7 transition hover:border-emerald-400/40" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-amber-400/20 text-3xl">
                {it.icon}
              </div>
              <h3 className="text-lg font-bold">{it.t}</h3>
              <p className="mt-2 text-slate-400">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Sobre ---------------------------------- */
function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-amber-400/20 to-emerald-500/10 blur-2xl" />
          <img src="/images/richard.png" alt={CONFIG.nome} className="w-full rounded-[2rem] border border-white/10 shadow-2xl" />
        </div>
        <div className="reveal">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-300">Quem sou eu</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{CONFIG.nome}</h2>
          <p className="mt-5 text-lg text-slate-300">
            Depois de anos estudando e operando o mercado financeiro, eu descobri
            a forma como os <strong className="text-white">grandes players lucram</strong> —
            enquanto a maioria das pessoas perde.
          </p>
          <p className="mt-4 text-lg text-slate-300">
            Transformei todo esse conhecimento no{" "}
            <strong className="text-emerald-300">Bot Tubarão</strong>, uma
            ferramenta feita para colocar pessoas comuns do lado certo do
            mercado. E hoje eu quero fazer isso por você.
          </p>
          <ul className="mt-6 space-y-3">
            {["Método real usado pelos grandes", "Acompanhamento próximo e humano", "Foco em resultado, não em promessa"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-slate-200"><Check /> {t}</li>
            ))}
          </ul>
          <div className="mt-8"><CtaButton label="Quero falar com o Richard" /></div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Depoimentos ------------------------------- */
function Testimonials() {
  const list = [
    { n: "André M.", r: "Nunca imaginei que seria tão simples. O bot faz o trabalho e eu só acompanho. Melhor decisão que tomei.", s: "+R$ 4.200 no primeiro mês" },
    { n: "Camila R.", r: "Eu já tinha perdido a esperança com sinais. O Bot Tubarão me mostrou que dá pra operar do lado certo.", s: "+R$ 2.800 recuperados" },
    { n: "João P.", r: "O suporte do Richard é diferenciado, ele realmente se importa. Recomendo de olhos fechados.", s: "Consistência todo dia" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 text-center reveal">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-300">Resultados</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Quem já usa, aprova 🚀</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {list.map((c, i) => (
            <div key={c.n} className="reveal glass rounded-3xl p-7" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mb-3 text-amber-300">★★★★★</div>
              <p className="text-slate-200">“{c.r}”</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="font-bold">{c.n}</div>
                <div className="text-sm font-semibold text-emerald-300">{c.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ----------------------------------- */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Preciso ter experiência no mercado?", a: "Não! O Bot Tubarão foi feito para iniciantes e avançados. Eu te oriento em cada passo pelo WhatsApp." },
    { q: "Como recebo o acesso?", a: "Basta clicar em qualquer botão de WhatsApp desta página, falar comigo e eu libero tudo para você." },
    { q: "Quanto preciso para começar?", a: "Você pode começar com o valor que se sentir confortável. Falamos sobre isso diretamente no WhatsApp." },
    { q: "Funciona no celular?", a: "Sim! Você acompanha tudo direto do seu celular, de onde estiver." },
  ];
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <div className="mb-12 text-center reveal">
        <span className="text-sm font-bold uppercase tracking-widest text-amber-300">Dúvidas</span>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">Perguntas frequentes</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="glass overflow-hidden rounded-2xl">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">
              {f.q}
              <span className={`text-emerald-300 transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
            </button>
            {open === i && <p className="px-5 pb-5 text-slate-400">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- CTA final ------------------------------- */
function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[130px]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center reveal">
        <div className="text-6xl">🦈</div>
        <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
          Hoje você vai lucrar como os grandes players.{" "}
          <span className="text-shine">Eu te dou certeza.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
          Chega de ficar do lado que perde. Fale comigo agora no WhatsApp e libere
          seu acesso ao Bot Tubarão.
        </p>
        <div className="mt-9 flex justify-center">
          <CtaButton label={`Falar com ${CONFIG.nome} no WhatsApp`} />
        </div>
        <p className="mt-4 text-sm text-slate-500">Resposta rápida • Atendimento direto comigo</p>
      </div>
    </section>
  );
}

/* -------------------------------- Footer ---------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-500">
      <div className="mb-3 flex items-center justify-center gap-2 font-black text-slate-300">
        🦈 BOT <span className="text-shine">TUBARÃO</span>
      </div>
      <p>© {new Date().getFullYear()} {CONFIG.nome}. Todos os direitos reservados.</p>
      <p className="mx-auto mt-3 max-w-lg px-5 text-xs text-slate-600">
        Aviso: operações no mercado financeiro envolvem risco. Resultados passados
        não garantem resultados futuros.
      </p>
    </footer>
  );
}

/* ------------------------------ Botão flutuante --------------------------- */
function FloatingWhats() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="pulse-ring fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
    >
      <WhatsIcon className="h-8 w-8" />
    </a>
  );
}

/* ---------------------------------- App ----------------------------------- */
export default function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Problem />
        <How />
        <Benefits />
        <About />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhats />
    </div>
  );
}
