import { motion } from "motion/react";
import { Folder, FileImage, Shapes, Monitor, UserCheck, Package } from "lucide-react";

export default function WhatIsIncluded() {
  const items = [
    {
      icon: <FileImage className="text-purple-400" />,
      title: "1,200+ Apparel Graphics",
      desc: "Curated PNG artwork across multiple directions and visual styles.",
    },
    {
      icon: <Shapes className="text-blue-400" />,
      title: "Editable Vector Files",
      desc: "Scale and adapt select assets without losing clarity.",
    },
    {
      icon: <Folder className="text-green-400" />,
      title: "Organized Categories",
      desc: "Browse by theme, look, or concept without the clutter.",
    },
    {
      icon: <Monitor className="text-pink-400" />,
      title: "Instant Cloud Access",
      desc: "Download your files from any device after checkout.",
    },
    {
      icon: <UserCheck className="text-yellow-400" />,
      title: "Commercial Use",
      desc: "Use the assets on physical products for your brand or clients.",
    },
    {
      icon: <Package className="text-cyan-400" />,
      title: "Lifetime Access",
      desc: "One payment and ongoing access to your library.",
    },
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden" id="inside">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            What&apos;s inside the archive
          </h2>
          <p className="text-gray-500 mt-4 font-bold text-sm tracking-widest">
            Everything organized for faster creative output
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 flex flex-col items-center text-center group transition-colors hover:border-white/20"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 group-hover:bg-white group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h4 className="text-white font-black text-xl mb-2 tracking-tight uppercase italic">{item.title}</h4>
              <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
