import React, { useState } from 'react';
import { FlaskConical, Activity, Cpu, BookOpen, Tv, Leaf, ArrowRight } from 'lucide-react';
import { FACILITIES } from '../data';

export default function Facilities() {
  const [activeFacility, setActiveFacility] = useState(0);

  // Map icon strings to Lucide components
  const iconMap: Record<string, React.ReactNode> = {
    FlaskConical: <FlaskConical size={18} />,
    Activity: <Activity size={18} />,
    Cpu: <Cpu size={18} />,
    BookOpen: <BookOpen size={18} />,
    Tv: <Tv size={18} />,
    Leaf: <Leaf size={18} />,
  };

  return (
    <section id="facilities" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-6 bg-teal-500 rounded-full shrink-0"></span>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Our Infrastructure
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-white mt-2 tracking-tight">
            State-of-the-Art College Facilities
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            Pushpendra College of Pharmacy provides world-class practical infrastructure with advanced analytical instruments to help students conduct research, formulation studies, and digital research.
          </p>
        </div>

        {/* Feature Split Layout or Modern Grid with Hover Overlays */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: List with descriptive active buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {FACILITIES.map((fac, index) => (
              <button
                key={fac.id}
                onClick={() => setActiveFacility(index)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start space-x-4 cursor-pointer ${
                  activeFacility === index
                    ? 'bg-white dark:bg-slate-900 border-teal-500 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/20 translate-x-1'
                    : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-900/40 hover:border-slate-200 dark:hover:border-slate-800'
                }`}
              >
                <div
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    activeFacility === index
                      ? 'bg-blue-700 text-white'
                      : 'bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-teal-400'
                  }`}
                >
                  {iconMap[fac.icon]}
                </div>
                <div>
                  <h4
                    className={`font-display font-extrabold text-sm sm:text-base transition-colors duration-200 ${
                      activeFacility === index
                        ? 'text-blue-900 dark:text-teal-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {fac.title}
                  </h4>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {fac.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Visual Active Showcase Card */}
          <div className="lg:col-span-7 flex">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between w-full">
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img
                  src={FACILITIES[activeFacility].image}
                  alt={FACILITIES[activeFacility].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                  <div className="flex items-center space-x-2 bg-blue-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">
                    <span className="text-teal-400">{iconMap[FACILITIES[activeFacility].icon]}</span>
                    <span>PCI Standard Lab</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-blue-900 dark:text-white">
                    {FACILITIES[activeFacility].title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                    {FACILITIES[activeFacility].description}
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-400 font-semibold uppercase tracking-wider">
                    Location: Ground Floor Blocks
                  </span>
                  <span className="text-blue-700 dark:text-teal-400 font-bold flex items-center space-x-1">
                    <span>Equipped with smart panels</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
