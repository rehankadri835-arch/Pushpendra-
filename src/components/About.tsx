import { CheckCircle2, Award, ShieldCheck, HeartPulse } from 'lucide-react';
import { INSTITUTION_DETAILS } from '../data';

export default function About() {
  const pillars = [
    {
      title: 'PCI New Delhi Approved',
      description: 'Fully certified and authorized for drug education under the Pharmacy Act regulations.',
      icon: <Award className="w-5 h-5 text-teal-500" />
    },
    {
      title: 'Experienced Faculty Guidance',
      description: 'Learn directly from M.Pharm & Ph.D professors dedicated to practical laboratory teaching.',
      icon: <ShieldCheck className="w-5 h-5 text-teal-500" />
    },
    {
      title: 'Clinical & Hospital Postings',
      description: 'Structured internship tie-ups with district general hospitals for clinical prescription handling.',
      icon: <HeartPulse className="w-5 h-5 text-teal-500" />
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 aspect-[4/3] sm:aspect-square lg:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                alt="Pharmacy students collaborating"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
            </div>

            {/* Float Badge 1 */}
            <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white p-6 rounded-3xl shadow-xl z-20 max-w-xs border border-blue-600 hidden sm:block">
              <p className="text-3xl font-extrabold font-display">Est. {INSTITUTION_DETAILS.established}</p>
              <p className="text-xs text-blue-100 font-medium mt-1 uppercase tracking-wider">
                Delivering Pharmacy Education Excellence
              </p>
            </div>

            {/* Decorative colored blobs behind image */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-teal-500/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-blue-500/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-6 bg-teal-500 rounded-full shrink-0"></span>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                Welcome to Pushpendra College of Pharmacy
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-white tracking-tight leading-tight mb-6">
              Nurturing Skills & Ethical Values in Pharmaceutical Care
            </h2>
            
            <div className="space-y-4 font-sans text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Established with a vision to revolutionize healthcare education in Ambikapur and the surrounding Surguja region, 
                <strong className="text-blue-700 dark:text-teal-400"> Pushpendra College of Pharmacy</strong> has emerged as a landmark of academic and practical learning.
              </p>
              <p>
                Approved by the <span className="font-semibold text-gray-800 dark:text-white">Pharmacy Council of India (PCI)</span>, New Delhi and affiliated with the <span className="font-semibold text-gray-800 dark:text-white">Chhattisgarh Swami Vivekanand Technical University (CSVTU)</span>, Bhilai, we deliver programs that comply with international safety standards, clinical protocols, and rigorous manufacturing criteria.
              </p>
              <p>
                Our pedagogy bridges classical pharmacology with computational research and smart formulation laboratories, guaranteeing that our students develop highly secure compounding skills, diagnostic critical thinking, and regulatory expertise.
              </p>
            </div>

            {/* Approval Badging Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8 bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
              {INSTITUTION_DETAILS.approvals.map((app, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-xl">{app.logo}</span>
                  <div className="leading-tight">
                    <span className="font-display font-bold text-xs text-blue-900 dark:text-teal-400">
                      {app.authority} Approved
                    </span>
                    <p className="text-[10px] text-gray-400">Official Board Registration</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Pillars */}
            <div className="space-y-4">
              {pillars.map((p, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-50 dark:bg-slate-900 rounded-xl mt-1">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-gray-800 dark:text-white">
                      {p.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
