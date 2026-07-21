import { Mail, GraduationCap, Briefcase, Award } from 'lucide-react';
import { FACULTY } from '../data';

export default function Faculty() {
  return (
    <section id="faculty" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-6 bg-teal-500 rounded-full shrink-0"></span>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Our Educators
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-white mt-2 tracking-tight">
            Meet Our Distinguished Faculty
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            Our professors are veteran medical scholars and pharmaceutical researchers, fully dedicated to nurturing academic growth, laboratory compliance, and clinical competence.
          </p>
        </div>

        {/* Principal Welcome Message Column Layout */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Principal Picture */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-xl">
                <img
                  src={FACULTY[0].image}
                  alt={FACULTY[0].name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-display font-extrabold text-lg text-blue-900 dark:text-white mt-4 text-center">
                {FACULTY[0].name}
              </h3>
              <p className="font-sans text-xs font-bold text-teal-600 dark:text-teal-400">
                {FACULTY[0].designation}
              </p>
              <p className="font-mono text-[10px] text-gray-400 mt-1">{FACULTY[0].qualification}</p>
            </div>

            {/* Principal Letter/Text */}
            <div className="lg:col-span-8">
              <span className="text-[10px] font-bold text-blue-700 dark:text-teal-400 uppercase tracking-widest">
                Principal's Message
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-blue-900 dark:text-white mt-1 mb-4">
                "Bridging Classroom Knowledge with Healthcare Needs"
              </h3>
              
              <div className="space-y-4 font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic">
                <p>
                  "I extend my warmest welcome to all prospective students, parents, and clinical scholars to Pushpendra College of Pharmacy, Ambikapur. Pharmacy is not simply a profession of drug preparation, it is a key column of human longevity, diagnostic safety, and societal health.
                </p>
                <p>
                  At PCP, our laboratories are calibrated to exact national standards, encouraging students to master the fine balances of pharmacology, medicinal chemistry, and pharmacognosy. Our focus is to deliver a learning space that instills structural confidence, analytical intelligence, and absolute ethical practice in drug delivery.
                </p>
                <p>
                  Whether you aspire to conduct research inside global formulations laboratories, oversee community care registries, or serve as a licensed pharmacist entrepreneur, our faculty is dedicated to steering your steps towards success."
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-150 dark:border-slate-800 flex flex-wrap gap-4 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="p-1 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-700 dark:text-teal-400">
                    <Briefcase size={14} />
                  </span>
                  <span className="font-medium text-gray-600 dark:text-gray-400">
                    Experience: {FACULTY[0].experience}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="p-1 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-700 dark:text-teal-400">
                    <Award size={14} />
                  </span>
                  <span className="font-medium text-gray-600 dark:text-gray-400">
                    Specialization: {FACULTY[0].specialization}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Core Faculty grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FACULTY.slice(1).map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between"
            >
              <div className="text-center">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden mx-auto shadow-md border-2 border-slate-100 dark:border-slate-800 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-display font-extrabold text-base text-blue-900 dark:text-white">
                  {member.name}
                </h4>
                <p className="font-sans text-xs font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                  {member.designation}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex items-start space-x-2 text-gray-500 dark:text-gray-400">
                  <GraduationCap size={15} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>{member.qualification}</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-500 dark:text-gray-400">
                  <Briefcase size={15} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>Exp: {member.experience}</span>
                </div>
                {member.specialization && (
                  <div className="flex items-start space-x-2 text-gray-500 dark:text-gray-400">
                    <Award size={15} className="text-teal-500 shrink-0 mt-0.5" />
                    <span className="italic">{member.specialization}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
