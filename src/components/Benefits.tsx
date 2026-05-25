import { motion } from "motion/react";
import { Zap, Clock, ShieldCheck, Download, Package, Sparkles, Layout, Printer } from "lucide-react";

const benefits = [
  {
    icon: <Zap />,
    title: "Apparel-Ready Formats",
    desc: "Transparent PNGs and supporting vector files designed for faster production.",
  },
  {
    icon: <Clock />,
    title: "Faster Creative Cycles",
    desc: "Move from concept to product without building every graphic from scratch.",
  },
  {
    icon: <ShieldCheck />,
    title: "Print-Conscious Quality",
    desc: "Prepared for cleaner presentation across apparel and merchandise workflows.",
  },
  {
    icon: <Download />,
    title: "Instant Delivery",
    desc: "Your access link is sent as soon as checkout is complete.",
  },
  {
    icon: <Package />,
    title: "Library Access",
    desc: "Return to the archive anytime you need new creative direction.",
  },
  {
    icon: <Layout />,
    title: "Clean Organization",
    desc: "Find the right direction faster with categories built for real-world use.",
  },
  {
    icon: <Printer />,
    title: "High-Resolution Files",
    desc: "Sharper detail for product mockups, storefront visuals, and print output.",
  },
  {
    icon: <Sparkles />,
    title: "One-Time Payment",
    desc: "No subscription required. Unlock the library once and keep it accessible.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-black border-y border-white/5" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-purple-400">Why it converts</p>
          <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white sm:text-4xl md:text-5xl">
            Built to stay in your <span className="text-gray-500">creative rotation</span>
          </h2>
          <p className="mt-4 text-base text-gray-500 sm:text-lg">
            The archive is structured to help creative teams, solo founders, and sellers move faster while keeping the
            visual standard sharp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-4 group-hover:bg-white transition-colors group-hover:text-black">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
