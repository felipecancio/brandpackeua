import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import AcquireCtaButton from "./AcquireCtaButton";

const checklist = [
  { t: "High-resolution source files", d: "Prepared for sharper detail and cleaner edges." },
  { t: "Scalable vector support", d: "Resize select artwork without sacrificing quality." },
  { t: "Transparent-background PNGs", d: "Faster placement on tees, hoodies, and mockups." },
];

function QualityImage({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <img
        src="/quality-dtf-print.png"
        alt="Close-up of premium apparel print quality"
        className="w-full h-auto rounded-[40px] border border-white/10"
        draggable={false}
      />
    </motion.div>
  );
}

function QualityHeading() {
  return (
    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic uppercase leading-none">
      Built for clean <br />
      <span className="text-gray-500">print output</span>
    </h2>
  );
}

function QualityParagraph() {
  return (
    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
      High-resolution files prepared to hold up from mockup to production. The archive is designed to help apparel
      creators present cleaner visuals, place artwork faster, and deliver stronger print-ready results across multiple
      workflows.
    </p>
  );
}

function QualityList() {
  return (
    <ul className="space-y-4">
      {checklist.map((item, i) => (
        <li key={i} className="flex gap-4">
          <div className="mt-1 shrink-0">
            <CheckCircle className="text-green-500 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-black text-lg uppercase tracking-tight">{item.t}</h4>
            <p className="text-gray-500 text-sm">{item.d}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function QualityCta() {
  return (
    <div className="mt-12 flex justify-center">
      <AcquireCtaButton complement="Instant access. One-time payment." />
    </div>
  );
}

export default function QualityProof() {
  return (
    <section className="py-24 bg-black overflow-hidden" id="quality">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: título → párrafo → imagen → lista → testimonio */}
        <div className="flex flex-col gap-8 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <QualityHeading />
            <QualityParagraph />
          </motion.div>
          <QualityImage />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <QualityList />
            <QualityCta />
          </motion.div>
        </div>

        {/* Desktop: imagen | columna completa (como antes) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <QualityImage />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <QualityHeading />
            <QualityParagraph />
            <QualityList />
            <QualityCta />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
