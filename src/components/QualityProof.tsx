import { motion } from "motion/react";
import { Search, CheckCircle } from "lucide-react";

const checklist = [
  { t: "Perfeito para DTF / Serigrafia", d: "Cores sólidas e bordas bem definidas." },
  { t: "Vetores Escaláveis", d: "Amplie suas artes para o tamanho que quiser." },
  { t: "ESTAMPAS ORIGINAIS", d: "Exclusivo para criar camisetas premium." },
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
        alt="Qualidade de estampa DTF em peça"
        className="w-full h-auto rounded-[40px] border border-white/10"
        draggable={false}
      />
    </motion.div>
  );
}

function QualityHeading() {
  return (
    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic uppercase leading-none">
      QUALIDADE PROFISSIONAL <br />
      <span className="text-gray-500">PRONTA PARA IMPRESSÃO</span>
    </h2>
  );
}

function QualityParagraph() {
  return (
    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
      Não perca clientes com artes pixeladas. Cada arquivo do{" "}
      <span className="text-white font-bold">Criativarts Brands Pack</span> foi preparado em alta resolução,
      garantindo cores vibrantes e bordas limpas para diferentes técnicas de impressão.
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

function QualityQuote() {
  return (
    <div className="mt-12 p-8 rounded-[32px] bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-white/10">
      <div className="flex items-center gap-4 text-white">
        <Search className="w-10 h-10 shrink-0 text-purple-400" />
        <p className="font-bold italic">
          &quot;Foi um dos melhores investimentos que fiz para acelerar minha produção de camisetas.&quot;
        </p>
      </div>
      <p className="text-gray-400 text-xs mt-4 text-right">— Carlos R., Designer têxtil</p>
    </div>
  );
}

export default function QualityProof() {
  return (
    <section className="py-24 bg-black overflow-hidden" id="calidad">
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
            <QualityQuote />
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
            <QualityQuote />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
