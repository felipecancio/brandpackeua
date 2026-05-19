import { motion } from "motion/react";
import { Star, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    quote:
      "Trabalho com DTF há alguns anos e nunca tinha recebido arquivos tão limpos. As bordas saem perfeitas, as cores ficam vivas e meus clientes percebem a diferença na hora. Dá para ver que não é material genérico.",
    name: "André Moraes",
    place: "Belo Horizonte, MG",
    avatar: "/testimonials/1.png",
  },
  {
    quote:
      "A variedade de estilos salvou minha coleção. Antes eu passava horas procurando referência; agora abro as pastas e encontro anime, marcas, memes e muita coisa pronta para vender. Minha lojinha já aumentou bem os pedidos.",
    name: "Maria Pereira",
    place: "Campinas, SP",
    avatar: "/testimonials/2.png",
  },
  {
    quote:
      "Comprei achando que poderia ser mais um pacote comum da internet, mas a licença comercial e o acesso pelo Drive me convenceram. Atendo marcas pequenas e o tempo que economizo criando artes eu uso para fechar mais vendas.",
    name: "Ricardo Mendes",
    place: "Curitiba, PR",
    avatar: "/testimonials/3.png",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function ClientTestimonials() {
  return (
    <section
      className="relative border-y border-white/5 bg-[#050505] py-20 sm:py-24 overflow-hidden"
      id="testimonios"
    >
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 translate-x-1/2 rounded-full bg-blue-600/10 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-14"
        >
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-purple-400">
            Experiências reais
          </p>
          <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white sm:text-4xl md:text-5xl">
            O que dizem <span className="text-gray-500">quem já usa</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 sm:text-lg">
            Estamparias, marcas independentes e empreendedores brasileiros. Depoimentos com linguagem real, de quem vende todos os dias.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-6">
          {testimonials.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-7 lg:p-8"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-4 flex items-center justify-between gap-3">
                <StarRow />
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Verificado
                  <BadgeCheck
                    className="h-4 w-4 shrink-0 fill-sky-500 text-sky-600"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </span>
              </div>

              <blockquote className="flex-1 text-[15px] leading-relaxed text-gray-300 sm:text-base">
                <p>
                  <span className="mr-1 font-serif text-2xl leading-none text-purple-500/50">&ldquo;</span>
                  {t.quote}
                  <span className="font-serif text-2xl leading-none text-purple-500/50">&rdquo;</span>
                </p>
              </blockquote>

              <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                <img
                  src={t.avatar}
                  alt=""
                  width={52}
                  height={52}
                  className="h-[52px] w-[52px] shrink-0 rounded-2xl object-cover ring-2 ring-white/10"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0 text-left">
                  <p className="truncate font-black text-white">{t.name}</p>
                  <p className="text-xs font-medium text-gray-500">{t.place}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
