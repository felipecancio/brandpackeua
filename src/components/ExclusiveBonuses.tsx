import { motion } from "motion/react";
import { CheckCircle2, Sparkles } from "lucide-react";

const bonuses = [
  {
    tag: "Included Extra 01",
    title: "Presentation Mockups",
    image: "/bonus-images/bonus-mockups.png",
    imageAlt: "Premium apparel mockup presentation",
    description:
      "A set of ready-to-use apparel mockups for product pages, launch posts, and cleaner visual presentation.",
    bullets: [
      "Modern apparel scenes",
      "Useful for storefronts and social campaigns",
      "Speeds up launch preparation",
      "Helps concepts feel more product-ready",
    ],
    glow: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
  {
    tag: "Included Extra 02",
    title: "Visual Reference Catalog",
    image: "/bonus-images/bonus-catalogo.png",
    imageAlt: "Visual catalog with collection references",
    description:
      "A fast visual overview of the archive so you can spot directions, styles, and compositions without digging through every folder first.",
    bullets: [
      "Clear preview of the collection",
      "Makes discovery faster",
      "Useful for planning new releases",
      "Immediate visual reference",
    ],
    glow: "from-purple-500/20 via-blue-500/10 to-transparent",
  },
];

export default function ExclusiveBonuses() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24" id="extras">
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-white">
            <Sparkles className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            Included with access
          </div>

          <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-white md:text-6xl">
            Included extras for a cleaner workflow
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {bonuses.map((bonus, index) => (
            <motion.article
              key={bonus.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-7 shadow-2xl transition-colors hover:border-white/20 hover:bg-white/[0.045] sm:p-8 lg:p-10"
            >
              <div className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${bonus.glow} opacity-70 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-8 flex items-start justify-end">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-gray-300">
                    {bonus.tag}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-black uppercase italic leading-tight tracking-tight text-white md:text-3xl">
                  {bonus.title}
                </h3>

                <div className="mb-6 overflow-hidden rounded-[28px] border border-white/10 bg-black/30 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]">
                  <img
                    src={bonus.image}
                    alt={bonus.imageAlt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    draggable={false}
                  />
                </div>

                <p className="mb-7 text-[15px] font-medium leading-relaxed text-gray-400 sm:text-base">
                  {bonus.description}
                </p>

                <ul className="space-y-3">
                  {bonus.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm font-bold leading-snug text-gray-300">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="relative mx-auto mt-8 max-w-4xl overflow-hidden rounded-[32px] border border-emerald-300/20 bg-gradient-to-br from-emerald-950/40 via-white/[0.04] to-purple-950/30 p-6 text-center shadow-[0_0_60px_rgba(16,185,129,0.08)] sm:p-8"
        >
          <div className="pointer-events-none absolute inset-x-12 -top-24 h-40 rounded-full bg-emerald-400/10 blur-[70px]" />
          <p className="relative z-10 text-base font-black leading-relaxed text-white sm:text-lg">
            Both extras are included with full access to the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-400 to-green-500">
              Brands Pack
            </span>
            archive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
