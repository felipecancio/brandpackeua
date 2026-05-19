import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";

const checklist = [
  { label: "PNG + Vector", icon: <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500" /> },
  { label: "Acesso Vitalício", icon: <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500" /> },
  { label: "Alta Resolução", icon: <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500" /> },
  { label: "Estampas Originais", icon: <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500" /> },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black" id="hero">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-y-4 max-lg:gap-y-3 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.38fr)] lg:grid-rows-[auto_auto_auto] lg:gap-x-12 lg:gap-y-8 lg:items-center">
          {/* Mobile order 1 / Desktop: col1 row1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 min-w-0 lg:order-none lg:col-start-1 lg:row-start-1 lg:pr-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              MAIS DE 1.200 ESTAMPAS PRONTAS
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6 tracking-tight">
              CRIATIVARTS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-rose-950">
                BRANDS PACK
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-0 max-w-lg leading-relaxed lg:mb-8">
              Leve seu negócio de estampas para o próximo nível. Tenha acesso a uma coleção exclusiva com mais de 1.200 artes inspiradas nas marcas mais populares do mercado, combinadas com a originalidade de personagens icônicos.
            </p>
          </motion.div>

          {/* Mobile order 2 / Desktop: col2 span 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 flex min-w-0 justify-center items-center lg:order-none lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:justify-end"
          >
            <div className="relative z-10 w-full max-w-[min(100%,26rem)] sm:max-w-[32rem] md:max-w-[38rem] max-lg:origin-center max-lg:scale-[1.08] lg:max-w-none lg:scale-100">
              <motion.img
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="/hero-brands-pack-mockup.png"
                alt="Criativarts Brands Pack Mockup"
                className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.35),0_0_70px_rgba(168,85,247,0.3)]"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          </motion.div>

          {/* Mobile order 3 / Desktop: col1 rows 2–3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="order-3 min-w-0 lg:order-none lg:col-start-1 lg:row-start-2 lg:row-span-2 lg:pr-4"
          >
            <div className="flex flex-col gap-4 max-lg:mb-0 mb-10 sm:flex-row sm:flex-nowrap lg:mb-10">
              <motion.a
                href="#comprar"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(16, 185, 129, 0.35), 0 10px 32px rgba(5, 150, 105, 0.4)",
                    "0 0 30px 8px rgba(52, 211, 153, 0.48), 0 14px 44px rgba(5, 150, 105, 0.52)",
                  ],
                  filter: ["brightness(1)", "brightness(1.07)"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative shrink-0 whitespace-nowrap inline-flex bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-700 px-6 py-4 text-base font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-colors hover:from-emerald-300 hover:via-green-400 hover:to-emerald-600 items-center justify-center gap-2 rounded-2xl border border-emerald-300/40 lg:px-8 lg:text-lg"
              >
                QUERO O PACK <ArrowRight className="h-5 w-5 shrink-0 text-white" />
              </motion.a>
              <a
                href="#gallery"
                className="shrink-0 whitespace-nowrap rounded-2xl border border-transparent bg-white px-6 py-4 text-base font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all hover:bg-gray-200 flex items-center justify-center gap-2 lg:px-8 lg:text-lg"
              >
                VER ESTAMPAS <Download className="h-5 w-5 shrink-0 text-black" />
              </a>
            </div>

            <div className="grid max-lg:mt-8 grid-cols-2 gap-x-4 gap-y-3 lg:mt-0 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
              {checklist.map((item, i) => (
                <div key={i} className="flex min-w-0 items-center gap-2 text-xs text-gray-400 font-medium sm:text-sm lg:text-sm">
                  {item.icon}
                  <span className="leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
