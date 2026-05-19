import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="text-2xl font-black text-white tracking-tighter mb-6 italic uppercase">
              CRIATIVARTS BRANDS PACK
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              O recurso premium para empreendedores de estamparia no Brasil. Artes prontas para transformar ideias em produtos vendáveis.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6 italic">NAVEGAÇÃO</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-bold">
              <li><a href="#hero" className="hover:text-white transition-colors">INICIO</a></li>
              <li><a href="#mockups" className="hover:text-white transition-colors">ESTAMPAS</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">BENEFÍCIOS</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">PERGUNTAS</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">
            © 2026 CRIATIVARTS BRANDS PACK. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex items-center gap-4 text-gray-600 text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-green-500" /> PROTEGIDO POR DMCA
          </div>
        </div>
      </div>
    </footer>
  );
}
