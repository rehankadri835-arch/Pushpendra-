import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-6 bg-teal-500 rounded-full shrink-0"></span>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Student Feedback
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-white mt-2 tracking-tight">
            What Our Alumni Say About Us
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            Discover real-life testimonies and career updates from registered pharmacists who completed their D.Pharm and B.Pharm degrees at Pushpendra College of Pharmacy.
          </p>
        </div>

        {/* Carousel Slider Panel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-10 md:p-12 transition-all duration-300 relative overflow-hidden">
            
            {/* Background Quotes Watermark */}
            <div className="absolute -top-6 -left-6 text-slate-100 dark:text-slate-800/40 pointer-events-none -z-0">
              <Quote size={120} className="opacity-40" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              
              {/* Profile Avatar Frame */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-teal-500/20 shadow-lg">
                  <img
                    src={TESTIMONIALS[activeIndex].image}
                    alt={TESTIMONIALS[activeIndex].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-display font-extrabold text-base text-blue-900 dark:text-white mt-4 text-center">
                  {TESTIMONIALS[activeIndex].name}
                </h4>
                <p className="font-sans text-xs font-bold text-teal-600 dark:text-teal-400 text-center">
                  {TESTIMONIALS[activeIndex].role}
                </p>
                <p className="font-sans text-[10px] text-gray-400 mt-0.5 text-center">
                  {TESTIMONIALS[activeIndex].batch}
                </p>
              </div>

              {/* Feedback Content Text */}
              <div className="flex-1">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="font-sans text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  "{TESTIMONIALS[activeIndex].content}"
                </p>

                {/* Slider Nav Controls inside block */}
                <div className="flex items-center space-x-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={handlePrev}
                    className="p-2 sm:p-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-full border border-slate-150 dark:border-slate-800 text-gray-600 dark:text-gray-300 cursor-pointer transition"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="font-sans text-xs text-gray-400">
                    {activeIndex + 1} of {TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-2 sm:p-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-full border border-slate-150 dark:border-slate-800 text-gray-600 dark:text-gray-300 cursor-pointer transition"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
