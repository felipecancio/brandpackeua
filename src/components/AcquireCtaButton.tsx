import { motion } from "motion/react";
import { Zap } from "lucide-react";

type AcquireCtaButtonProps = {
  className?: string;
  complement?: string;
};

export default function AcquireCtaButton({ className = "", complement }: AcquireCtaButtonProps) {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-2.5 sm:gap-3">
      <motion.a
        href="#access"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(16, 185, 129, 0.32), 0 10px 36px rgba(5, 150, 105, 0.42)",
            "0 0 10px 2px rgba(52, 211, 153, 0.32), 0 11px 38px rgba(5, 150, 105, 0.46)",
            "0 0 20px 5px rgba(52, 211, 153, 0.42), 0 14px 46px rgba(5, 150, 105, 0.52)",
            "0 0 34px 10px rgba(52, 211, 153, 0.5), 0 18px 54px rgba(5, 150, 105, 0.58)",
            "0 0 20px 5px rgba(52, 211, 153, 0.42), 0 14px 46px rgba(5, 150, 105, 0.52)",
            "0 0 10px 2px rgba(52, 211, 153, 0.32), 0 11px 38px rgba(5, 150, 105, 0.46)",
            "0 0 0 0 rgba(16, 185, 129, 0.32), 0 10px 36px rgba(5, 150, 105, 0.42)",
          ],
          filter: [
            "brightness(1)",
            "brightness(1.012)",
            "brightness(1.03)",
            "brightness(1.05)",
            "brightness(1.03)",
            "brightness(1.012)",
            "brightness(1)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1],
          times: [0, 0.14, 0.32, 0.5, 0.68, 0.86, 1],
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={`relative inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-300/40 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-700 px-6 py-4 text-base font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-colors hover:from-emerald-300 hover:via-green-400 hover:to-emerald-600 sm:w-auto sm:gap-3 sm:px-10 sm:py-5 sm:text-xl ${className}`}
      >
        <Zap className="h-6 w-6 shrink-0 fill-white text-white sm:h-7 sm:w-7" />
        Unlock Access
      </motion.a>

      {complement ? (
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500 sm:text-xs">
          {complement}
        </p>
      ) : null}
    </div>
  );
}
