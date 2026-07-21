import React from 'react';
import { GraduationCap, FlaskConical, BookOpen, Activity, Users, Briefcase, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  // Mapping string to lucide icons
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    FlaskConical: <FlaskConical className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    BookOpen: <BookOpen className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    Activity: <Activity className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    Users: <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
    Briefcase: <Briefcase className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid layout for Header on left, Details on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-6 bg-teal-500 rounded-full shrink-0"></span>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                PCP Edge
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-white mt-2 tracking-tight leading-tight">
              Why Students Excel at Pushpendra College of Pharmacy
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              We focus heavily on hands-on practical education, industrial alignment, ethical healthcare protocols, and dedicated academic mentorship. Our state-of-the-art campus in Darripara is designed to foster a secure, collaborative, and career-centric ecosystem.
            </p>
          </div>
        </div>

        {/* Bento/Grid representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle hover gradient circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/5 group-hover:bg-teal-500/10 rounded-full transition-all duration-300" />
              
              <div>
                <div className="p-3.5 bg-blue-50 dark:bg-slate-850 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-teal-500/10">
                  {iconMap[item.icon] || <CheckCircle className="w-6 h-6 text-teal-600" />}
                </div>
                
                <h3 className="font-display font-extrabold text-base sm:text-lg text-blue-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-teal-400 transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Inline bottom highlight bar */}
              <div className="w-0 group-hover:w-full h-1 bg-teal-500 absolute bottom-0 left-0 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
