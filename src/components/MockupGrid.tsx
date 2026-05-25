import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const SLIDE_COUNT = 9;
const GAP_PX = 16;
const slides = Array.from({ length: SLIDE_COUNT }, (_, i) => `/mockup-carousel/${i + 1}.png`);

export default function MockupGrid() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(1);
  const [slideW, setSlideW] = useState(0);
  const [index, setIndex] = useState(0);

  const measure = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const w = el.clientWidth;
    const isLg = window.matchMedia("(min-width: 1024px)").matches;
    const vis = isLg ? 4 : 1;
    const sw = vis === 1 ? w : (w - GAP_PX * 3) / 4;
    setVisible(vis);
    setSlideW(sw);
  }, []);

  useLayoutEffect(() => {
    measure();
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => measure();
    mq.addEventListener("change", onMq);
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => {
      mq.removeEventListener("change", onMq);
      ro.disconnect();
    };
  }, [measure]);

  const maxIndex = Math.max(0, SLIDE_COUNT - visible);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
    return () => window.clearInterval(id);
  }, [maxIndex]);

  const offsetPx = index * (slideW + GAP_PX);

  const goPrev = () => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };

  const goNext = () => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  };

  return (
    <section className="py-24 bg-[#0a0a0a]" id="mockups">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            See the archive in context
          </h2>
          <div className="text-gray-500 max-w-2xl mx-auto text-lg space-y-4">
            <p>
              A visual library built for storefronts, launch campaigns, lookbooks, and fast-moving apparel workflows.
            </p>
            <p>
              Inside the collection you will find sportswear-inspired layouts, mascot-led graphics, bold compositions,
              and product-ready artwork prepared for real-world use.
            </p>
          </div>
        </div>

        <div className="relative px-11 sm:px-12 md:px-14 lg:px-16">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white shadow-lg backdrop-blur-md transition hover:border-white/30 hover:bg-white/10 md:h-12 md:w-12"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white shadow-lg backdrop-blur-md transition hover:border-white/30 hover:bg-white/10 md:h-12 md:w-12"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2} />
          </button>

          <div
            ref={viewportRef}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            {slideW > 0 ? (
              <motion.div
                className="flex"
                style={{ gap: GAP_PX }}
                animate={{ x: -offsetPx }}
                transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              >
                {slides.map((src, i) => (
                  <div
                    key={src}
                    className="group relative aspect-[3/4] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/40"
                    style={{ width: slideW }}
                  >
                    <img
                      src={src}
                      alt={`Apparel mockup preview ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      draggable={false}
                    />
                  </div>
                ))}
              </motion.div>
            ) : (
              <div
                className="aspect-[3/4] w-full rounded-xl bg-white/[0.04]"
                aria-hidden
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
