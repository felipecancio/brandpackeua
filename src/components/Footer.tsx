import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="text-2xl font-black text-white tracking-tighter mb-6 italic uppercase">
              BRANDS PACK
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              A curated apparel graphics library for streetwear creators, print studios, and design-led e-commerce
              brands.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6 italic">Navigation</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-bold">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#mockups" className="hover:text-white transition-colors">Preview</a></li>
              <li><a href="#inside" className="hover:text-white transition-colors">Inside the Archive</a></li>
              <li><a href="#access" className="hover:text-white transition-colors">Access</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">
            © 2026 BRANDS PACK. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4 text-gray-600 text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-green-500" /> Secure digital access
          </div>
        </div>
      </div>
    </footer>
  );
}
