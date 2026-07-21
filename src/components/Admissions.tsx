import React, { useState, useEffect } from 'react';
import { Send, FileText, CheckCircle2, AlertCircle, Info, Calendar, Download, Trash2 } from 'lucide-react';
import { INSTITUTION_DETAILS } from '../data';

interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
  date: string;
}

export default function Admissions() {
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Bachelor of Pharmacy (B.Pharm)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [pastEnquiries, setPastEnquiries] = useState<Enquiry[]>([]);
  const [showEnquiriesList, setShowEnquiriesList] = useState(false);

  // Load existing enquiries
  useEffect(() => {
    const saved = localStorage.getItem('pcp_enquiries');
    if (saved) {
      try {
        setPastEnquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse previous enquiries');
      }
    }
  }, []);

  // Form Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-+]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a short message about your inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate Server Post request with delay
    setTimeout(() => {
      const newEnquiry: Enquiry = {
        id: 'enq_' + Date.now(),
        ...formData,
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      const updatedEnquiries = [newEnquiry, ...pastEnquiries];
      localStorage.setItem('pcp_enquiries', JSON.stringify(updatedEnquiries));
      setPastEnquiries(updatedEnquiries);

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset Form (except course preference)
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: formData.course,
        message: '',
      });

      // Clear success badge after 6 seconds
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1200);
  };

  const handleDeleteEnquiry = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = pastEnquiries.filter((enq) => enq.id !== id);
    localStorage.setItem('pcp_enquiries', JSON.stringify(updated));
    setPastEnquiries(updated);
  };

  const steps = [
    { num: '01', title: 'Submit Enquiry', desc: 'Fill out our online form below or visit the campus administrative cell directly in Darripara.' },
    { num: '02', title: 'Counseling & Verification', desc: 'Our admissions counselor will call you to verify your PCB/PCM marksheet and clarify CSVTU counseling steps.' },
    { num: '03', title: 'Document Audit', desc: 'Submit domicile certificate, 10+2 passing marksheets, caste certificate, and passport-size photographs.' },
    { num: '04', title: 'Seat Reservation', desc: 'Complete state counseling payment or secure direct admissions according to CSVTU/DTE Chhattisgarh guidelines.' },
  ];

  const documents = [
    'CSVTU Counseling Allocation Letter (For B.Pharm DTE seats)',
    'CG PPHT Entrance Exam Admit & Score Card (If applicable)',
    '10th (High School) Board Marksheet & Certificate',
    '12th (Higher Secondary Science) original Marksheet',
    'Transfer Certificate (TC) & Character Certificate',
    'Chhattisgarh State Domicile Certificate (Niwas Praman Patra)',
    'Caste Certificate (For SC / ST / OBC category reservations)',
    'Recent Passport Size Photographs (6 copies)',
    'Aadhar Card Copy (For registration & scholarships)'
  ];

  return (
    <section id="admissions" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-teal-600 dark:text-brand-teal-400 uppercase tracking-widest bg-brand-blue-50 dark:bg-brand-blue-950/50 px-3 py-1.5 rounded-full">
            Enroll Now
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue-800 dark:text-brand-blue-100 mt-3 tracking-tight">
            Admission Guidelines & Enquiry
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            Ready to shape your pharmaceutical career? Learn about our step-by-step CSVTU affiliated admission process or submit an instant enquiry to consult with our counselors.
          </p>
        </div>

        {/* Admission steps and Document list column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* Left Column: Guidelines & Documents */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-brand-blue-800 dark:text-brand-blue-100 mb-6 flex items-center space-x-2">
                <Info size={20} className="text-brand-teal-500" />
                <span>Admissions Process Steps</span>
              </h3>
              
              <div className="space-y-6">
                {steps.map((st) => (
                  <div key={st.num} className="flex space-x-4">
                    <div className="font-display font-black text-2xl text-brand-teal-500 bg-brand-teal-500/10 h-12 w-12 rounded-2xl flex items-center justify-center shrink-0">
                      {st.num}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-gray-800 dark:text-brand-blue-100">
                        {st.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mandatory Documents Checklist Box */}
            <div className="mt-10 bg-gray-50 dark:bg-slate-900/60 p-6 rounded-3xl border border-gray-100 dark:border-slate-800/80">
              <h4 className="font-display font-extrabold text-sm sm:text-base text-brand-blue-800 dark:text-brand-blue-100 mb-4 flex items-center space-x-2">
                <FileText size={16} className="text-brand-teal-500" />
                <span>Mandatory Documents Checklist</span>
              </h4>
              <ul className="space-y-2">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-start space-x-2 text-xs text-gray-600 dark:text-gray-400">
                    <CheckCircle2 size={13} className="text-brand-teal-500 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-800 flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-400">CSVTU CODE: PUSH-211</span>
                <button
                  onClick={() => alert('Download starting: Admissions Brochure 2026-27.pdf')}
                  className="text-xs text-brand-blue-600 dark:text-brand-teal-400 font-bold hover:underline flex items-center space-x-1 cursor-pointer"
                >
                  <Download size={12} />
                  <span>Download Brochure (PDF)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div className="lg:col-span-6 flex">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-150 dark:border-slate-800 shadow-2xl p-6 sm:p-10 flex flex-col justify-between w-full relative overflow-hidden">
              
              {/* Background accent lines */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-brand-blue-800 dark:text-brand-blue-100">
                      Admission Enquiry Form
                    </h3>
                    <p className="font-sans text-xs text-gray-400 mt-1">
                      Direct consultation with administrative desk
                    </p>
                  </div>
                  {pastEnquiries.length > 0 && (
                    <button
                      onClick={() => setShowEnquiriesList(!showEnquiriesList)}
                      className="text-xs font-bold text-brand-blue-600 dark:text-brand-teal-400 bg-brand-blue-50 dark:bg-brand-blue-950/40 px-2.5 py-1.5 rounded-xl border border-brand-blue-100/50 hover:bg-brand-blue-100 transition cursor-pointer"
                    >
                      {showEnquiriesList ? 'Show Form' : `My Enquiries (${pastEnquiries.length})`}
                    </button>
                  )}
                </div>

                {/* Submissions List Drawer on-page if selected */}
                {showEnquiriesList ? (
                  <div className="space-y-4 max-h-[450px] overflow-y-auto pr-1">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                      Submitted Enquiries (Stored Locally):
                    </p>
                    {pastEnquiries.map((enq) => (
                      <div
                        key={enq.id}
                        className="bg-gray-50 dark:bg-slate-950 p-4 rounded-2xl border border-gray-100 dark:border-slate-850 shadow-sm relative group"
                      >
                        <button
                          onClick={(e) => handleDeleteEnquiry(enq.id, e)}
                          className="absolute top-3 right-3 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          title="Delete Enquiry Record"
                        >
                          <Trash2 size={14} />
                        </button>
                        <div className="flex items-center space-x-1 text-brand-teal-600 dark:text-brand-teal-400 font-bold text-xs">
                          <span>{enq.course}</span>
                        </div>
                        <h4 className="font-display font-bold text-sm text-gray-800 dark:text-gray-100 mt-1">
                          {enq.name}
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mt-2">
                          <span>📞 {enq.phone}</span>
                          {enq.email && <span className="truncate">📧 {enq.email}</span>}
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic bg-white dark:bg-slate-900 p-2 rounded-xl border border-gray-50 dark:border-slate-800">
                          "{enq.message}"
                        </p>
                        <div className="text-[10px] text-gray-400 mt-3 text-right">
                          Submitted on {enq.date}
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => setShowEnquiriesList(false)}
                      className="w-full py-2.5 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 font-bold rounded-xl text-xs mt-4 cursor-pointer"
                    >
                      Back to Registration Form
                    </button>
                  </div>
                ) : (
                  /* Enquiry Form Form inputs */
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Success notification banner */}
                    {submitSuccess && (
                      <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 flex items-start space-x-3 text-emerald-800 dark:text-emerald-300">
                        <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-500" />
                        <div>
                          <p className="font-display font-bold text-xs sm:text-sm">Enquiry Registered Successfully!</p>
                          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5 leading-normal">
                            Thank you. Our admissions counselor will contact you at your submitted phone number shortly.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Name input */}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Dewangan"
                        className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 dark:bg-slate-950 text-xs sm:text-sm text-gray-800 dark:text-gray-100 outline-none transition ${
                          errors.name
                            ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                            : 'border-gray-200 dark:border-slate-800 focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="flex items-center space-x-1 text-red-500 text-[10px] mt-1 font-semibold">
                          <AlertCircle size={10} />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number Input */}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">
                        Phone Number (10 digit Mobile) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9131646112"
                        maxLength={10}
                        className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 dark:bg-slate-950 text-xs sm:text-sm text-gray-800 dark:text-gray-100 outline-none transition ${
                          errors.phone
                            ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                            : 'border-gray-200 dark:border-slate-800 focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="flex items-center space-x-1 text-red-500 text-[10px] mt-1 font-semibold">
                          <AlertCircle size={10} />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">
                        Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@example.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 dark:bg-slate-950 text-xs sm:text-sm text-gray-800 dark:text-gray-100 outline-none transition ${
                          errors.email
                            ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                            : 'border-gray-200 dark:border-slate-800 focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="flex items-center space-x-1 text-red-500 text-[10px] mt-1 font-semibold">
                          <AlertCircle size={10} />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Course Selection Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">
                        Course Interested In <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950 text-xs sm:text-sm text-gray-850 dark:text-gray-100 outline-none focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500 cursor-pointer"
                      >
                        <option value="Bachelor of Pharmacy (B.Pharm)">Bachelor of Pharmacy (B.Pharm) - 4 Years</option>
                        <option value="Diploma in Pharmacy (D.Pharm)">Diploma in Pharmacy (D.Pharm) - 2 Years</option>
                      </select>
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">
                        Brief Message / Query <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Ask about tuition fees, hostel availability, entrance cutoff marks, or scholarship processes..."
                        className={`w-full px-4 py-3 rounded-xl border bg-gray-50/50 dark:bg-slate-950 text-xs sm:text-sm text-gray-800 dark:text-gray-100 outline-none transition resize-none ${
                          errors.message
                            ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                            : 'border-gray-200 dark:border-slate-800 focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500'
                        }`}
                      />
                      {errors.message && (
                        <p className="flex items-center space-x-1 text-red-500 text-[10px] mt-1 font-semibold">
                          <AlertCircle size={10} />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-gradient-to-r from-brand-blue-600 to-brand-blue-700 hover:from-brand-blue-700 hover:to-brand-blue-800 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Submitting Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Enquiry Form</span>
                            <Send size={15} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Disclaimer */}
              <div className="text-[10px] text-gray-400 text-center mt-6 pt-4 border-t border-gray-100 dark:border-slate-850">
                🔒 Privacy Assured. Your contact information is only shared with Pushpendra College of Pharmacy Admissions desk and never sold or leaked.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
