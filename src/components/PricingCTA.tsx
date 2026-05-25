import { motion } from "motion/react";
import { Check, Star, Zap, Shield, Rocket } from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="scroll-mt-24 py-24 bg-black relative overflow-hidden" id="comprar">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(16,185,129,0.08),transparent)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-[40px] border border-emerald-500/25 bg-gradient-to-b from-emerald-950/50 via-emerald-900/15 to-black/60 p-8 text-center shadow-[0_0_0_1px_rgba(52,211,153,0.12),0_24px_80px_-24px_rgba(16,185,129,0.35),0_40px_100px_-40px_rgba(0,0,0,0.8)] md:p-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <div className="pointer-events-none absolute inset-x-12 -top-20 h-32 rounded-full bg-emerald-500/10 blur-[60px]" />
          <div className="relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-[10px] font-black text-white mb-8 tracking-[.2em] uppercase">
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> OFERTA POR TEMPO LIMITADO
          </div>

          <h2 className="mb-6 text-3xl font-black uppercase italic leading-snug tracking-wide text-white md:text-5xl">
            <span className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 md:gap-x-3">
              <span>ACESSO</span>
              <span>COMPLETO</span>
              <span>POR</span>
              <span>APENAS</span>
              <span className="inline-block bg-gradient-to-r from-lime-300 via-emerald-400 to-green-600 bg-clip-text pb-1 pr-1 text-transparent not-italic tracking-normal md:pr-1.5">
                $8 USD
              </span>
            </span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Acesso imediato às mais de 1.200 estampas, bônus exclusivos, atualizações e suporte. Sem mensalidades. Sem custos escondidos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-12">
            {[
              "Mockups prontos das estampas aplicadas",
              "Arquivos PNG + PDF Vetor",
              "Licença comercial incluída",
              "Acesso vitalício via Google Drive",
              "Suporte personalizado",
              "Atualizações gratuitas",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300 font-bold text-sm">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                {text}
              </div>
            ))}
          </div>

          <motion.a
            href="https://pay.hotmart.com/P104382859N?off=a0bcdxdl&checkoutMode=10"
            rel="noopener noreferrer"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(16, 185, 129, 0.32), 0 10px 36px rgba(5, 150, 105, 0.42)",
                "0 0 10px 2px rgba(52, 211, 153, 0.32), 0 11px 38px rgba(5, 150, 105, 0.46)",
                "0 0 20px 5px rgba(52, 211, 153, 0.42), 0 14px 46px rgba(5, 150, 105, 0.52)",
                "0 0 34px 10px rgba(52, 211, 153, 0.5), 0 18px 54px rgba(5, 150, 105, 0.58)",
                "0 0 20px 5px rgba(52, 211, 153, 0.42), 0 14px 46px rgba(5, 150, 105, 0.52)",
                "0 0 10px 2px rgba(52, 211, 153, 0.32), 0 11px 38px rgba(5, 150, 105, 0.46)",
                "0 0 0 0 rgba(16, 185, 129, 0.32), 0 10px 36px rgba(5, 150, 105, 0.42)",
              ],
              filter: [
                "brightness(1)",
                "brightness(1.012)",
                "brightness(1.03)",
                "brightness(1.05)",
                "brightness(1.03)",
                "brightness(1.012)",
                "brightness(1)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
              times: [0, 0.14, 0.32, 0.5, 0.68, 0.86, 1],
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative w-full sm:w-auto inline-flex bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-700 text-white px-8 py-5 text-xl sm:px-12 sm:py-6 sm:text-2xl rounded-2xl font-black items-center justify-center gap-2 sm:gap-3 border border-emerald-300/40 mb-6 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:from-emerald-300 hover:via-green-400 hover:to-emerald-600 transition-colors whitespace-nowrap"
          >
            <Zap className="h-7 w-7 shrink-0 fill-white text-white sm:h-8 sm:w-8" />
            COMPRAR AGORA
          </motion.a>

          <div className="flex flex-nowrap justify-center items-center gap-3 sm:gap-6 opacity-40 max-sm:text-[10px] sm:text-xs">
            <div className="flex shrink-0 items-center gap-1.5 text-white font-bold uppercase tracking-wide sm:tracking-widest sm:gap-2">
              <Shield className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" /> Pagamento 100% Seguro
            </div>
            <div className="flex shrink-0 items-center gap-1.5 text-white font-bold uppercase tracking-wide sm:tracking-widest sm:gap-2">
              <Rocket className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" /> Entrega Imediata
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
