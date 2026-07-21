import { Phone, Mail, MapPin, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { INSTITUTION_DETAILS } from '../data';

export default function Contact() {
  const whatsappUrl = `https://wa.me/${INSTITUTION_DETAILS.contact.whatsapp}?text=Hello%20Pushpendra%2520College%2520of%2520Pharmacy%2C%20I%20am%20interested%20in%20obtaining%20admissions%20details%20for%20the%20upcoming%20academic%20session.`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-6 bg-teal-500 rounded-full shrink-0"></span>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Get in Touch
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-white mt-2 tracking-tight">
            Our Campus & Contact Desk
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            Have questions or want to visit us in Ambikapur? Find our physical coordinates, dial our support center directly, or click to start an instant chat on WhatsApp.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact details and actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Cards List */}
            <div className="space-y-4">
              
              {/* Address card */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-700 dark:text-teal-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-blue-900 dark:text-white">
                    Campus Location
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    {INSTITUTION_DETAILS.contact.address}
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-700 dark:text-teal-400 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-blue-900 dark:text-white">
                    Admissions Helpline
                  </h4>
                  <div className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 space-y-1">
                    <a href={`tel:${INSTITUTION_DETAILS.contact.phone}`} className="block hover:text-blue-700 dark:hover:text-teal-400 font-semibold">
                      {INSTITUTION_DETAILS.contact.phone}
                    </a>
                    <a href={`tel:${INSTITUTION_DETAILS.contact.phoneAlt}`} className="block hover:text-blue-700 dark:hover:text-teal-400 font-semibold">
                      {INSTITUTION_DETAILS.contact.phoneAlt}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-700 dark:text-teal-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-blue-900 dark:text-white">
                    Official Email Inbox
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <a href={`mailto:${INSTITUTION_DETAILS.contact.email}`} className="hover:text-blue-700 dark:hover:text-teal-400 font-medium">
                      {INSTITUTION_DETAILS.contact.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl text-blue-700 dark:text-teal-400 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-blue-900 dark:text-white">
                    Working Hours
                  </h4>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Monday – Saturday: 9:30 AM to 5:00 PM <br />
                    <span className="text-[10px] text-gray-400 font-semibold">Closed on Sundays & Gazetted Holidays</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Floating Instant Actions: WhatsApp Trigger */}
            <div className="bg-slate-50 dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h4 className="font-display font-extrabold text-xs sm:text-sm text-blue-900 dark:text-teal-400 uppercase tracking-widest mb-2">
                Have Quick Doubts?
              </h4>
              <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mb-4 leading-normal">
                Click below to start a secure chat with our admissions desk on WhatsApp. No registrations required.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs tracking-wider uppercase px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <MessageSquare size={14} className="fill-white text-[#25D366]" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Location IFrame */}
          <div className="lg:col-span-7 flex">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between w-full h-[450px] lg:h-auto min-h-[400px]">
              <iframe
                src={INSTITUTION_DETAILS.contact.mapIframe}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location of Pushpendra College of Pharmacy"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
