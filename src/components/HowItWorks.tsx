import { motion } from "motion/react";
import { UserPlus, Mail, Download, Rocket } from "lucide-react";

const steps = [
  { icon: <UserPlus />, title: "Passo 1", text: "Faça seu pagamento de forma rápida e segura.", label: "COMPRA" },
  { icon: <Mail />, title: "Passo 2", text: "Receba o link de acesso diretamente no seu e-mail.", label: "ACESSO" },
  { icon: <Download />, title: "Passo 3", text: "Baixe os arquivos completos agora ou quando quiser, com acesso vitalício.", label: "DOWNLOAD" },
  { icon: <Rocket />, title: "Passo 4", text: "Comece a criar, inovar e aumentar suas vendas a partir de hoje.", label: "VENDA" },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#0a0a0a]" id="metodo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 italic uppercase">COMO FUNCIONA?</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-12 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-black border-2 border-white/10 flex items-center justify-center text-white mx-auto mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-white transition-colors transform hover:-translate-y-2 duration-300">
                {step.icon}
              </div>
              <span className="inline-block bg-white text-black px-3 py-1 rounded text-[10px] font-black mb-4 tracking-widest">{step.label}</span>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm px-4">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
