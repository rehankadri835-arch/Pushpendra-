import { Phone, Mail, MapPin, ExternalLink, Award, Shield } from 'lucide-react';
import { INSTITUTION_DETAILS } from '../data';

interface FooterProps {
  scrollToSection: (id: string) => void;
  onApplyClick: () => void;
}

export default function Footer({ scrollToSection, onApplyClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Campus Home', id: 'home' },
    { label: 'About College', id: 'about' },
    { label: 'Academic Programs', id: 'courses' },
    { label: 'Infrastructure', id: 'facilities' },
    { label: 'Meet Faculty', id: 'faculty' },
    { label: 'Media Gallery', id: 'gallery' },
    { label: 'Admission Enquiry', id: 'admissions' },
    { label: 'Latest Notices', id: 'notices' },
    { label: 'FAQs & Doubts', id: 'faq' },
    { label: 'Contact Desk', id: 'contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: '🌐' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'YouTube', url: '#', icon: '📺' },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand details and Approvals */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3" onClick={() => scrollToSection('home')}>
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md cursor-pointer">
                PCP
              </div>
              <div className="cursor-pointer">
                <h3 className="font-display font-black text-sm sm:text-base text-white tracking-wide leading-none">
                  PUSHPENDRA
                </h3>
                <p className="font-sans text-[10px] text-teal-400 font-bold uppercase tracking-wider mt-0.5">
                  College of Pharmacy
                </p>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
              A premier pharmacy training and research institution in Ambikapur, Chhattisgarh. Providing PCI accredited Bachelor of Pharmacy and Diploma in Pharmacy programs affiliated to CSVTU, Bhilai.
            </p>

            {/* Approval Tags */}
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-teal-400">🛡️</span>
                <span>Pharmacy Council of India (PCI) Approved</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-teal-400">🎓</span>
                <span>Affiliated to CSVTU, Bhilai</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-teal-400">🏛️</span>
                <span>Approved by DTE Raipur, Chhattisgarh</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links Map */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-xs text-gray-400 hover:text-teal-400 transition cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Courses */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wider">
              Pharma Courses
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="cursor-pointer hover:text-teal-400 transition" onClick={() => scrollToSection('courses')}>
                <span className="block font-semibold text-white">B.Pharm</span>
                <span>4 Years (8 Semesters)</span>
              </li>
              <li className="cursor-pointer hover:text-teal-400 transition" onClick={() => scrollToSection('courses')}>
                <span className="block font-semibold text-white">D.Pharm</span>
                <span>2 Years (Annual System)</span>
              </li>
              <li className="cursor-pointer hover:text-teal-400 transition animate-pulse" onClick={onApplyClick}>
                <span className="block font-semibold text-teal-400">Lateral Entry</span>
                <span>Direct B.Pharm 2nd Year Admissions</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400">
              <li className="flex items-start space-x-2.5">
                <MapPin size={15} className="text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-normal">{INSTITUTION_DETAILS.contact.address}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone size={15} className="text-teal-400 shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:${INSTITUTION_DETAILS.contact.phone}`} className="block hover:text-teal-400">
                    {INSTITUTION_DETAILS.contact.phone}
                  </a>
                  <a href={`tel:${INSTITUTION_DETAILS.contact.phoneAlt}`} className="block hover:text-teal-400">
                    {INSTITUTION_DETAILS.contact.phoneAlt}
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail size={15} className="text-teal-400 shrink-0" />
                <a href={`mailto:${INSTITUTION_DETAILS.contact.email}`} className="hover:text-teal-400 truncate">
                  {INSTITUTION_DETAILS.contact.email}
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="pt-3">
              <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-2">Connect With Us</p>
              <div className="flex space-x-2">
                {socialLinks.map((s, index) => (
                  <a
                    key={index}
                    href={s.url}
                    className="h-8 w-8 bg-slate-800 hover:bg-blue-700 hover:text-white rounded-lg flex items-center justify-center text-xs transition"
                    title={s.name}
                  >
                    <span>{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footnotes & Legal declarations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <div className="text-center md:text-left space-y-1">
            <p>© {currentYear} {INSTITUTION_DETAILS.name}, Ambikapur. All Rights Reserved.</p>
            <p className="text-[10px] text-gray-650">
              Disclaimer: All admission seats and timetables are regulated directly by DTE Raipur & CSVTU Bhilai guidelines.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline hover:text-gray-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:underline hover:text-gray-300">Terms of Use</a>
            <span>•</span>
            <a href="#" className="hover:underline hover:text-gray-300">CSVTU Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
