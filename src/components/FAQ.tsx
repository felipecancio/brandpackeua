import { motion } from "motion/react";
import { PlusCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    { q: "Como recebo o acesso?", a: "Após concluir o pagamento, você recebe automaticamente um link para uma pasta compartilhada no Google Drive, onde pode baixar todo o conteúdo de imediato." },
    { q: "Existe mensalidade?", a: "Não. O acesso é vitalício com pagamento único. Sem mensalidades e sem custos escondidos." },
    { q: "Posso usar as artes na minha marca?", a: "Sim. As artes podem ser usadas comercialmente em produtos físicos como camisetas, moletons, quadros, brindes e muito mais." },
    { q: "Em quais formatos vêm os arquivos?", a: "A maior parte do material vem em PNG em alta resolução com fundo transparente e arquivos vetoriais/PDF prontos para impressão." },
    { q: "Preciso de programas avançados?", a: "Não necessariamente. Como os arquivos PNG já vêm prontos, você pode usar em ferramentas simples como Canva ou enviar diretamente para sua estamparia." },
    { q: "As artes são editáveis?", a: "Muitos arquivos incluem versões vetoriais para escalar sem perder qualidade e facilitar ajustes de cores ou tamanho em softwares como Illustrator ou Photoshop." }
  ];

  return (
    <section className="py-24 bg-black" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white italic">PERGUNTAS FREQUENTES</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              className="group border border-white/10 rounded-2xl bg-white/[0.02] p-6 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary className="flex items-center justify-between list-none">
                <span className="text-lg font-bold text-white group-open:text-purple-400 transition-colors uppercase tracking-tight">
                  {faq.q}
                </span>
                <PlusCircle className="text-white group-open:rotate-45 transition-transform" />
              </summary>
              <div className="mt-4 text-gray-400 text-base leading-relaxed">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
