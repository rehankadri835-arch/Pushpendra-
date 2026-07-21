import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQs() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq1'); // First question open by default

  return (
    <section id="faq" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-6 bg-teal-500 rounded-full shrink-0"></span>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Got Questions?
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-white mt-2 tracking-tight">
            Frequently Asked Queries
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            Quickly resolve common doubts regarding CSVTU university criteria, seat distribution, scholarship allocations, and drug licensing protocols.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden ${
                openFaqId === faq.id
                  ? 'border-teal-500/30 shadow-lg dark:shadow-slate-950/30'
                  : 'border-slate-200 dark:border-slate-800/80 hover:border-slate-300'
              }`}
            >
              <button
                id={`btn-faq-toggle-${faq.id}`}
                onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-start space-x-3.5">
                  <span className="text-teal-500 shrink-0 mt-0.5">
                    <HelpCircle size={18} />
                  </span>
                  <span className="font-display font-extrabold text-sm sm:text-base text-blue-900 dark:text-white leading-snug">
                    {faq.question}
                  </span>
                </div>
                
                <span className="text-gray-400 shrink-0 mt-1">
                  {openFaqId === faq.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>

              {/* Accordion Body Content */}
              {openFaqId === faq.id && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-8 pl-12 sm:pl-14 border-t border-slate-100 dark:border-slate-800 animate-fade-in">
                  <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Core Regulatory Trust Note */}
        <div className="mt-16 bg-blue-900 dark:bg-slate-900 text-white rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto border border-blue-800/50 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <div className="text-4xl sm:text-5xl">🛡️</div>
          <div className="text-center sm:text-left">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-white">Need Customized Advice or Counseling?</h4>
            <p className="text-xs text-blue-100 mt-1 leading-relaxed">
              Our campus reception desk is open Monday to Saturday from 9:30 AM to 5:00 PM. Fill out our Admissions Enquiry Form or dial our student helpline directly to schedule a campus tour in Ambikapur.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
