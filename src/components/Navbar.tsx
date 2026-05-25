import { motion } from "motion/react";
import { ArrowRight, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-2 sm:gap-3">
          <div className="flex min-w-0 flex-1 items-center">
            <span className="hidden text-xl font-black leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 md:inline sm:text-2xl md:text-4xl">
              BRANDS PACK
            </span>
            <a
              href="#access"
              className="flex items-center gap-1.5 md:hidden"
              aria-label="Curated graphics archive. Jump to access."
            >
              <span className="bg-gradient-to-r from-orange-100 via-orange-200 to-red-200 bg-clip-text text-xs font-black uppercase leading-tight tracking-wide text-transparent sm:text-sm">
                Curated archive, instant access
              </span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-red-200/80 sm:h-4 sm:w-4" strokeWidth={2.25} aria-hidden />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#mockups" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Preview</a>
            <a href="#inside" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Inside</a>
            <a href="#access" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Access</a>
            <a href="#faq" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">FAQ</a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#access"
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Unlock Access
            </motion.a>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#access"
            animate={{ scale: [1, 1.022] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: [0.37, 0, 0.63, 1],
            }}
            className="md:hidden shrink-0 flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2.5 text-[11px] font-bold text-black hover:bg-gray-200 transition-colors sm:gap-2 sm:px-5 sm:text-sm"
          >
            <ShoppingCart className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap">Unlock Access</span>
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
