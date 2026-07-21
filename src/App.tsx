/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowUp, Award, Bell, ShieldAlert } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Facilities from './components/Facilities';
import Faculty from './components/Faculty';
import Gallery from './components/Gallery';
import Notices from './components/Notices';
import FAQs from './components/FAQs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system preference
    const saved = localStorage.getItem('pcp_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync dark class on html tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('pcp_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('pcp_theme', 'light');
    }
  }, [darkMode]);

  // Track page scroll for Active Navigation Section Highlight & Back To Top appearance
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back-to-top visibility
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Section Intersection Observer
    const sections = [
      'home',
      'about',
      'courses',
      'why-us',
      'facilities',
      'faculty',
      'gallery',
      'notices',
      'faq',
      'contact',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when element occupies central region of viewport
      threshold: 0,
    };

    const observerCallbacks = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallbacks, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Smooth Scroll offset solver (calculates offset for sticky navbar overlap prevention)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-800 dark:text-gray-150 font-sans transition-colors duration-300">
      
      {/* Top sticky padding/announcement ticker */}
      <div className="bg-brand-teal-500 text-brand-blue-900 py-1.5 px-4 text-center text-[10px] sm:text-xs font-bold flex items-center justify-center space-x-2 z-50 relative mt-[50px] md:mt-[37px] lg:mt-[37px]">
        <Bell size={12} className="animate-bounce" />
        <span>Admissions Open for Session 2026-27! Register today for D.Pharm & B.Pharm degrees.</span>
        <button
          onClick={() => scrollToSection('admissions')}
          className="underline hover:text-brand-blue-800 ml-2 font-black uppercase tracking-wider cursor-pointer"
        >
          Enquire Now
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        onApplyClick={() => scrollToSection('admissions')}
      />

      {/* Core Website Content modules */}
      <main>
        {/* Home / Hero */}
        <Hero
          onApplyClick={() => scrollToSection('admissions')}
          onExploreClick={() => scrollToSection('courses')}
        />

        {/* Counter accomplishments strip */}
        <Stats />

        {/* About college */}
        <About />

        {/* Course details */}
        <Courses onApplyClick={() => scrollToSection('admissions')} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Infrastructure & facilities */}
        <Facilities />

        {/* Faculty information */}
        <Faculty />

        {/* Media Highlights gallery with lightbox */}
        <Gallery />

        {/* College notices and circulars */}
        <Notices />

        {/* Accordion FAQs */}
        <FAQs />

        {/* Alumni Testimonials */}
        <Testimonials />

        {/* Contact info, whatsapp, google map */}
        <Contact />
      </main>

      {/* Structured Site Footer */}
      <Footer
        scrollToSection={scrollToSection}
        onApplyClick={() => scrollToSection('admissions')}
      />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          id="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3.5 bg-gradient-to-r from-brand-blue-600 to-brand-blue-700 text-white rounded-full shadow-2xl hover:scale-115 transition-all duration-300 hover:shadow-brand-blue-500/35 border border-brand-blue-500/20 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

    </div>
  );
}

