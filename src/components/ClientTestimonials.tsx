import { motion } from "motion/react";
import { Package, Printer, Rocket } from "lucide-react";

const profiles = [
  {
    icon: <Package className="h-6 w-6" />,
    label: "Independent brands",
    title: "Develop drops faster",
    text: "Build capsule collections, evergreen staples, and launch visuals without starting every concept from a blank file.",
  },
  {
    icon: <Printer className="h-6 w-6" />,
    label: "Print studios",
    title: "Keep production moving",
    text: "Use organized, high-resolution assets that are easier to place, preview, and hand off across real print workflows.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    label: "POD sellers",
    title: "Launch with better visuals",
    text: "Create stronger product pages, faster storefront updates, and cleaner creative tests for on-demand catalogs.",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#050505] py-20 sm:py-24" id="creators">
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
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-purple-400">Built for creators</p>
          <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white sm:text-4xl md:text-5xl">
            Made for modern <span className="text-gray-500">apparel workflows</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 sm:text-lg">
            Whether you run a fashion label, fulfill print orders, or sell on demand, the archive is designed to speed
            up output without lowering your visual standard.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-6">
          {profiles.map((profile, index) => (
            <motion.article
              key={profile.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-7 lg:p-8"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-white transition-colors group-hover:bg-white group-hover:text-black">
                {profile.icon}
              </div>

              <div className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-gray-500">{profile.label}</div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight text-white">{profile.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-400 sm:text-base">{profile.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
