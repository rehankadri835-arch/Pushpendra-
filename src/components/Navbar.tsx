import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone, Mail, Award, ArrowRight } from 'lucide-react';
import { INSTITUTION_DETAILS } from '../data';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
  onApplyClick: () => void;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  activeSection,
  scrollToSection,
  onApplyClick,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Courses', id: 'courses' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Faculty', id: 'faculty' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Notices', id: 'notices' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4 sm:px-6 lg:px-8 hidden md:block border-b border-blue-800/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${INSTITUTION_DETAILS.contact.phone}`}
              className="flex items-center space-x-1.5 hover:text-teal-400 transition"
            >
              <Phone size={13} className="text-teal-400" />
              <span>{INSTITUTION_DETAILS.contact.phone}</span>
            </a>
            <a
              href={`mailto:${INSTITUTION_DETAILS.contact.email}`}
              className="flex items-center space-x-1.5 hover:text-teal-400 transition"
            >
              <Mail size={13} className="text-teal-400" />
              <span>{INSTITUTION_DETAILS.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-teal-400 font-medium">
              <Award size={13} />
              <span>PCI Approved</span>
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-200">Affiliated to CSVTU, Bhilai</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        id="main-nav"
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-4 border-b border-gray-100 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and College Title */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavItemClick('home')}
            >
              <div className="w-10 h-10 bg-blue-700 dark:bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-md">
                P
              </div>
              <div>
                <h1 className="font-display text-base sm:text-lg font-bold text-blue-900 dark:text-white leading-none uppercase tracking-tight">
                  PUSHPENDRA
                </h1>
                <p className="font-sans text-[9px] sm:text-[10px] font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-widest mt-0.5">
                  College of Pharmacy
                </p>
              </div>
            </div>

            {/* Desktop Navigation links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavItemClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-blue-700 dark:text-teal-400 bg-blue-50 dark:bg-slate-800 font-bold border-b-2 border-blue-700 dark:border-teal-400 rounded-none'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-teal-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Action Buttons: Dark Mode & Apply Now */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                id="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl border border-gray-200 dark:border-slate-800 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
                aria-label="Toggle Theme Mode"
              >
                {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
              </button>
              <button
                id="btn-apply-now"
                onClick={onApplyClick}
                className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded-full text-xs font-bold shadow-lg shadow-blue-200 dark:shadow-none transition-all duration-200 flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Mobile Actions block */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                id="theme-toggle-mobile"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
                aria-label="Toggle Theme Mode Mobile"
              >
                {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
              </button>
              <button
                id="btn-mobile-menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-0 top-[57px] sm:top-[65px] bg-slate-900/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`lg:hidden fixed right-0 top-[57px] sm:top-[65px] bottom-0 w-72 bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 flex flex-col justify-between ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="overflow-y-auto py-6 px-4 space-y-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2">
              Navigation
            </p>
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-mobile-${item.id}`}
                onClick={() => handleNavItemClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  activeSection === item.id
                    ? 'text-blue-700 dark:text-teal-400 bg-blue-50 dark:bg-slate-800 font-bold'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/50 space-y-3">
            <button
              id="btn-apply-now-mobile"
              onClick={() => {
                onApplyClick();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold tracking-wider shadow-md text-center flex justify-center items-center space-x-2 cursor-pointer"
            >
              <span>Apply Admission</span>
              <ArrowRight size={14} />
            </button>
            <div className="text-center text-[10px] text-gray-400">
              Ambikapur, Chhattisgarh • PCI Approved
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
