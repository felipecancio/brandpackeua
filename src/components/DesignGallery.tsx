import { motion } from "motion/react";
import AcquireCtaButton from "./AcquireCtaButton";

/** Mobile: 6 linhas WB/BW (2 cols). Desktop: 3 linhas de 4 — linhas 1–2 W B W B / B W B W; linha 3: W B W B (últimas duas invertidas vs. mobile) */
const tiles = [
  {
    src: "/design-gallery/saiyan.png",
    alt: "Light tee with anime-inspired graphic",
    mobileOrder: "order-0",
    desktopOrder: "md:order-0",
  },
  {
    src: "/design-gallery/supreme-bart.png",
    alt: "Dark tee with cartoon-led streetwear graphic",
    mobileOrder: "order-1",
    desktopOrder: "md:order-1",
  },
  {
    src: "/design-gallery/nike-abstract.png",
    alt: "Dark tee with abstract sportswear graphic",
    mobileOrder: "order-2",
    desktopOrder: "md:order-3",
  },
  {
    src: "/design-gallery/mickey-adidas.png",
    alt: "Light tee with character remix graphic",
    mobileOrder: "order-3",
    desktopOrder: "md:order-2",
  },
  {
    src: "/design-gallery/minnie-nike.png",
    alt: "Light tee with fashion-led character graphic",
    mobileOrder: "order-4",
    desktopOrder: "md:order-5",
  },
  {
    src: "/design-gallery/pikachu-nike.png",
    alt: "Dark tee with mascot-inspired graphic",
    mobileOrder: "order-5",
    desktopOrder: "md:order-4",
  },
  {
    src: "/design-gallery/hand-supreme.png",
    alt: "Dark tee with bold logo-led graphic",
    mobileOrder: "order-6",
    desktopOrder: "md:order-6",
  },
  {
    src: "/design-gallery/stitch-nike.png",
    alt: "Light tee with playful street graphic",
    mobileOrder: "order-7",
    desktopOrder: "md:order-7",
  },
  {
    src: "/design-gallery/homer-nike.png",
    alt: "Light tee with pop-inspired apparel graphic",
    mobileOrder: "order-8",
    desktopOrder: "md:order-8",
  },
  {
    src: "/design-gallery/snorlax-nike.png",
    alt: "Dark tee with oversized character graphic",
    mobileOrder: "order-9",
    desktopOrder: "md:order-9",
  },
  {
    src: "/design-gallery/adidas-originals.png",
    alt: "Dark tee with archival sportswear graphic",
    mobileOrder: "order-10",
    desktopOrder: "md:order-11",
  },
  {
    src: "/design-gallery/stitch-supreme.png",
    alt: "Light tee with cartoon streetwear composition",
    mobileOrder: "order-11",
    desktopOrder: "md:order-10",
  },
];

export default function DesignGallery() {
  return (
    <section className="py-24 bg-black overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none mb-4">
              Inside the <span className="text-purple-500">collection</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium">
              A selected preview from the archive. Fashion-led compositions, clean files, and apparel-ready artwork built
              to move from concept to release faster.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center sm:px-6">
            {[
              { value: "1,200+", label: "Graphics" },
              { value: "PNG +", label: "Vector" },
              { value: "24/7", label: "Access" },
            ].map((item) => (
              <div key={item.label} className="min-w-[72px]">
                <p className="text-sm font-black uppercase tracking-wide text-white">{item.value}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 group ${tile.mobileOrder} ${tile.desktopOrder}`}
            >
              <img
                src={tile.src}
                alt={tile.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center px-2 sm:mt-14">
          <AcquireCtaButton complement="One-time payment. Lifetime access." />
        </div>
      </div>
    </section>
  );
}
