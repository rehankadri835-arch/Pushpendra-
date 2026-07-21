import { useState } from 'react';
import { Calendar, UserCheck, Shield, ChevronRight, Award, GraduationCap, Briefcase } from 'lucide-react';
import { COURSES } from '../data';

interface CoursesProps {
  onApplyClick: () => void;
}

export default function Courses({ onApplyClick }: CoursesProps) {
  const [selectedCourse, setSelectedCourse] = useState<'bpharm' | 'dpharm'>('bpharm');

  const activeCourse = COURSES.find((c) => c.id === selectedCourse)!;

  return (
    <section id="courses" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-6 bg-teal-500 rounded-full shrink-0"></span>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Our Academic Programs
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-white mt-2 tracking-tight">
            Affiliated Pharmacy Courses
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            Choose from our specialized undergraduate degree and foundational diploma programs, both fully accredited by the Pharmacy Council of India (PCI) and engineered to deliver extensive lab experience.
          </p>
        </div>

        {/* Tab Selection buttons */}
        <div className="flex justify-center mb-10 max-w-md mx-auto bg-slate-200/60 dark:bg-slate-800/60 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setSelectedCourse('bpharm')}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold tracking-wider rounded-xl transition-all duration-200 cursor-pointer ${
              selectedCourse === 'bpharm'
                ? 'bg-blue-700 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-700'
            }`}
          >
            B.Pharm (4 Years)
          </button>
          <button
            onClick={() => setSelectedCourse('dpharm')}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold tracking-wider rounded-xl transition-all duration-200 cursor-pointer ${
              selectedCourse === 'dpharm'
                ? 'bg-teal-500 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-teal-600'
            }`}
          >
            D.Pharm (2 Years)
          </button>
        </div>

        {/* Course Details Card with Glassmorphism */}
        <div className={`bg-white dark:bg-slate-900 rounded-3xl border-t-4 ${selectedCourse === 'bpharm' ? 'border-t-blue-700' : 'border-t-teal-500'} border-x border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-all duration-300`}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-150 dark:border-slate-800">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="p-2 bg-blue-55 dark:bg-slate-800 text-blue-700 dark:text-teal-400 rounded-xl">
                    <GraduationCap size={22} />
                  </span>
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider bg-teal-500/10 px-2.5 py-1 rounded-full">
                    Seat Intake: {activeCourse.seats} Seats
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-blue-900 dark:text-white leading-tight">
                  {activeCourse.name}
                </h3>

                <p className="font-sans text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                  {activeCourse.description}
                </p>

                {/* Duration & Eligibility Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center space-x-2 text-blue-700 dark:text-teal-400 font-bold text-xs sm:text-sm">
                      <Calendar size={16} />
                      <span>Program Duration</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium mt-1">
                      {activeCourse.duration}
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center space-x-2 text-blue-700 dark:text-teal-400 font-bold text-xs sm:text-sm">
                      <UserCheck size={16} />
                      <span>Academic Eligibility</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 font-medium mt-1 leading-normal">
                      {activeCourse.eligibility}
                    </p>
                  </div>
                </div>

                {/* Career Opportunities Grid */}
                <div>
                  <h4 className="font-display font-extrabold text-sm sm:text-base text-blue-900 dark:text-white mb-3 flex items-center space-x-2">
                    <Briefcase size={16} className="text-teal-500" />
                    <span>Career & Placement Opportunities</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeCourse.opportunities.map((opp, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <span className="text-teal-500 font-bold mt-0.5">•</span>
                        <span>{opp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action trigger */}
              <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  id={`btn-course-apply-${activeCourse.id}`}
                  onClick={onApplyClick}
                  className={`px-6 py-3 ${selectedCourse === 'bpharm' ? 'bg-blue-700 hover:bg-blue-800' : 'bg-teal-500 hover:bg-teal-600'} text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2 cursor-pointer`}
                >
                  <span>Apply for Admission</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Course Syllabus Column */}
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 bg-slate-50/50 dark:bg-slate-900/40 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-extrabold text-sm sm:text-base text-blue-900 dark:text-white mb-4 flex items-center space-x-2">
                  <Shield size={16} className="text-teal-500" />
                  <span>Key Syllabus & Lab Subjects</span>
                </h4>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                  Curriculum compliant with state PCI recommendations:
                </p>
                
                <div className="space-y-2.5">
                  {activeCourse.syllabus.map((subject, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between hover:translate-x-1 transition-transform duration-200"
                    >
                      <span className="font-sans text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {subject}
                      </span>
                      <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full">
                        Theory & Lab
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 bg-blue-900 dark:bg-slate-800 text-white p-5 rounded-2xl border border-blue-850 dark:border-slate-700">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-lg">🎖️</span>
                  <h5 className="font-display font-bold text-xs sm:text-sm text-white">CSVTU Affiliated Exam Degree</h5>
                </div>
                <p className="text-[11px] text-blue-100 leading-normal">
                  All tests, practical audits, and licensing degrees are managed and issued directly by Chhattisgarh Swami Vivekanand Technical University.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
