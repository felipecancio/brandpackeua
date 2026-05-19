import { motion } from "motion/react";

/** Mobile: 6 linhas WB/BW (2 cols). Desktop: 3 linhas de 4 — linhas 1–2 W B W B / B W B W; linha 3: W B W B (últimas duas invertidas vs. mobile) */
const tiles = [
  {
    src: "/design-gallery/saiyan.png",
    alt: "Camiseta branca com estampa Saiyan",
    mobileOrder: "order-0",
    desktopOrder: "md:order-0",
  },
  {
    src: "/design-gallery/supreme-bart.png",
    alt: "Camiseta preta com estampa Supreme",
    mobileOrder: "order-1",
    desktopOrder: "md:order-1",
  },
  {
    src: "/design-gallery/nike-abstract.png",
    alt: "Camiseta preta com estampa Nike",
    mobileOrder: "order-2",
    desktopOrder: "md:order-3",
  },
  {
    src: "/design-gallery/mickey-adidas.png",
    alt: "Camiseta branca com estampa Mickey Adidas",
    mobileOrder: "order-3",
    desktopOrder: "md:order-2",
  },
  {
    src: "/design-gallery/minnie-nike.png",
    alt: "Camiseta branca com estampa Minnie Nike",
    mobileOrder: "order-4",
    desktopOrder: "md:order-5",
  },
  {
    src: "/design-gallery/pikachu-nike.png",
    alt: "Camiseta preta com estampa Pikachu Nike",
    mobileOrder: "order-5",
    desktopOrder: "md:order-4",
  },
  {
    src: "/design-gallery/hand-supreme.png",
    alt: "Camiseta preta com estampa Supreme",
    mobileOrder: "order-6",
    desktopOrder: "md:order-6",
  },
  {
    src: "/design-gallery/stitch-nike.png",
    alt: "Camiseta branca com estampa Stitch Nike",
    mobileOrder: "order-7",
    desktopOrder: "md:order-7",
  },
  {
    src: "/design-gallery/homer-nike.png",
    alt: "Camiseta branca com estampa Nike divertida",
    mobileOrder: "order-8",
    desktopOrder: "md:order-8",
  },
  {
    src: "/design-gallery/snorlax-nike.png",
    alt: "Camiseta preta com estampa Snorlax Nike",
    mobileOrder: "order-9",
    desktopOrder: "md:order-9",
  },
  {
    src: "/design-gallery/adidas-originals.png",
    alt: "Camiseta preta com estampa Adidas Originals",
    mobileOrder: "order-10",
    desktopOrder: "md:order-11",
  },
  {
    src: "/design-gallery/stitch-supreme.png",
    alt: "Camiseta branca com estampa Stitch Supreme",
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
              GALERIA DE <span className="text-purple-500">ESTAMPAS</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium">
              Uma prévia das mais de 1.200 artes exclusivas que você recebe. Alta resolução, fundos transparentes e arquivos prontos para baixar.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center overflow-hidden"
                >
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <span className="text-white text-xs font-black uppercase tracking-widest">+500 Clientes satisfeitos</span>
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
      </div>
    </section>
  );
}
