import { motion } from "motion/react";
import { PlusCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How is access delivered?",
      a: "Right after checkout you receive an email with a link to the shared library, so you can start browsing and downloading immediately.",
    },
    {
      q: "Is this a subscription?",
      a: "No. It is a one-time payment with lifetime access to the archive.",
    },
    {
      q: "Can I use the graphics for my brand or client projects?",
      a: "Yes. The assets are intended for use on physical products and commercial apparel workflows.",
    },
    {
      q: "Which file formats are included?",
      a: "The library includes high-resolution PNG files, plus vector and PDF files where available.",
    },
    {
      q: "Do I need advanced software?",
      a: "Not necessarily. PNG files can be used in Canva or sent directly to your print partner. Vector files work best in Illustrator, Photoshop, or similar tools.",
    },
    {
      q: "Will I be able to edit the designs?",
      a: "Many assets include editable vector versions or easy-to-adapt layouts for resizing and color adjustments.",
    },
  ];

  return (
    <section className="py-24 bg-black" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white italic">Frequently Asked Questions</h2>
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
