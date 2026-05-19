import { motion } from "motion/react";
import { Zap, Clock, ShieldCheck, Download, Package, Sparkles, Layout, Printer } from "lucide-react";

const benefits = [
  { icon: <Zap />, title: "Prontas para Usar", desc: "Arquivos PNG com fundo transparente prontos para estampar." },
  { icon: <Clock />, title: "Economize Tempo", desc: "Pare de passar horas criando do zero. Escolha, baixe e venda." },
  { icon: <ShieldCheck />, title: "Qualidade Pro", desc: "Artes pensadas para streetwear, camisetas e produtos personalizados." },
  { icon: <Download />, title: "Acesso Imediato", desc: "Link do Google Drive enviado para você logo após a compra." },
  { icon: <Package />, title: "Atualizações", desc: "Receba novas artes sem custo adicional." },
  { icon: <Layout />, title: "Tudo Organizado", desc: "Pastas separadas por tema e estilo para encontrar rápido." },
  { icon: <Printer />, title: "Alta Resolução", desc: "300 DPI para impressões nítidas, vibrantes e profissionais." },
  { icon: <Sparkles />, title: "Sem Mensalidade", desc: "Pagamento único, acesso vitalício. Sem assinaturas." },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-black border-y border-white/5" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
