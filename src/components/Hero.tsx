import { ArrowRight, BookOpen, GraduationCap, Award } from 'lucide-react';
import { INSTITUTION_DETAILS } from '../data';

interface HeroProps {
  onApplyClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onApplyClick, onExploreClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80"
          alt="Pushpendra College of Pharmacy Campus"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Deep visual gradient overlay to support high readability - Geometric Balance theme blue-900 overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-blue-950/20 dark:from-slate-950 dark:via-transparent" />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl z-1 pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl z-1 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-start justify-center">
        {/* Accreditation and Approval badging */}
        <div className="inline-flex flex-wrap items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-white text-xs font-semibold tracking-wide mb-6 animate-fade-in">
          <span className="flex items-center space-x-1 text-teal-300">
            <Award size={14} />
            <span>PCI Approved</span>
          </span>
          <span className="text-white/40">•</span>
          <span>CSVTU Affiliated</span>
          <span className="text-white/40">•</span>
          <span className="bg-teal-500 text-blue-950 font-bold px-2 py-0.5 rounded-full text-[10px]">
            Session 2026-27 Open
          </span>
        </div>

        {/* Hero Headings */}
        <div className="max-w-3xl mb-8">
          <span className="text-teal-300 font-bold uppercase tracking-widest text-xs mb-3 block">Ambikapur's Premier Institution</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
            Shaping Future <span className="text-teal-300">Pharmacists</span> with Excellence
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
            Empowering aspiring pharmaceutical professionals at Ambikapur, Chhattisgarh with global standards, state-of-the-art laboratory research, and dedicated clinical training.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
          <button
            id="hero-apply-btn"
            onClick={onApplyClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-teal-950/20 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 text-sm uppercase tracking-wider cursor-pointer"
          >
            <span>Apply Now</span>
            <GraduationCap size={18} />
          </button>
          <button
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:border-white/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2 text-sm tracking-wide cursor-pointer"
          >
            <span>Explore Courses</span>
            <BookOpen size={18} className="text-teal-300" />
          </button>
        </div>

        {/* Highlights/Core pillars banner bar at the bottom of hero */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl bg-white/10 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/10 dark:border-slate-800/60 shadow-2xl">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-teal-500/20 text-teal-300 rounded-xl">
              <Award size={22} />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm sm:text-base">PCI Registered</h4>
              <p className="text-xs text-blue-100/70 mt-0.5">Approved seat capacities for D.Pharm & B.Pharm</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
            <div className="p-3 bg-teal-500/20 text-teal-300 rounded-xl">
              <GraduationCap size={22} />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm sm:text-base">Affiliated to CSVTU</h4>
              <p className="text-xs text-blue-100/70 mt-0.5">Affiliation with top technical university in CG</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
            <div className="p-3 bg-teal-500/20 text-teal-300 rounded-xl">
              <BookOpen size={22} />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-sm sm:text-base">Academic Excellence</h4>
              <p className="text-xs text-blue-100/70 mt-0.5">Focus on hospital internships and drug formulation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
