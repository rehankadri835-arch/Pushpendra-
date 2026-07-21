import { useState, useEffect } from 'react';
import { Calendar, Bell, AlertCircle, FileText, Search, ExternalLink, CheckCircle } from 'lucide-react';
import { NOTICES } from '../data';

export default function Notices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Admission' | 'Academic' | 'Exam' | 'General'>('All');
  const [expandedNoticeId, setExpandedNoticeId] = useState<string | null>('n1'); // Expands first notice by default
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  useEffect(() => {
    if (notificationMsg) {
      const timer = setTimeout(() => {
        setNotificationMsg(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [notificationMsg]);

  const categories: Array<'All' | 'Admission' | 'Academic' | 'Exam' | 'General'> = [
    'All',
    'Admission',
    'Academic',
    'Exam',
    'General',
  ];

  // Filtering Logic
  const filteredNotices = NOTICES.filter((notice) => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (notice.description && notice.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' ? true : notice.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Admission':
        return 'bg-teal-500/10 text-teal-600 dark:text-teal-400';
      case 'Exam':
        return 'bg-red-500/10 text-red-600 dark:text-red-400';
      case 'Academic':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      default:
        return 'bg-slate-500/10 text-slate-600 dark:text-slate-400';
    }
  };

  return (
    <section id="notices" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-6 bg-teal-500 rounded-full shrink-0"></span>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Announcements
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-white mt-2 tracking-tight">
            Latest College Notices & News
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            Stay up to date with official circulars, CSVTU university timetables, and campus events. Check back regularly for the latest details regarding registrations and exams.
          </p>
        </div>

        {/* Floating Safe UI notification alert (instead of window.alert) */}
        {notificationMsg && (
          <div className="fixed bottom-6 right-6 z-50 bg-blue-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-blue-700 max-w-sm flex items-center gap-3 animate-bounce">
            <CheckCircle className="text-teal-400 shrink-0 w-5 h-5" />
            <p className="text-xs sm:text-sm font-medium">{notificationMsg}</p>
          </div>
        )}

        {/* Search and Category Filter Panel */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl p-4 sm:p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400 pointer-events-none">
              <Search size={16} />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search circulars (e.g. syllabus, seats, admit)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-xs sm:text-sm text-gray-800 dark:text-gray-100 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition"
            />
          </div>

          {/* Categories Horizontal Scroller */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-900 text-gray-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Notice Board List */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden divide-y divide-slate-200 dark:divide-slate-800">
          
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className={`p-6 transition-all duration-300 cursor-pointer ${
                expandedNoticeId === notice.id
                  ? 'bg-blue-50/30 dark:bg-slate-900'
                  : 'hover:bg-slate-50/40 dark:hover:bg-slate-900/20'
              }`}
              onClick={() => setExpandedNoticeId(expandedNoticeId === notice.id ? null : notice.id)}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Notice Title and Categories */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${getCategoryColor(notice.category)}`}>
                      {notice.category}
                    </span>
                    <span className="flex items-center space-x-1.5 text-gray-400 text-[11px] font-medium">
                      <Calendar size={12} />
                      <span>{new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </span>
                    {notice.isNew && (
                      <span className="bg-red-500 text-white font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full animate-pulse">
                        New
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-display font-bold text-sm sm:text-base text-blue-900 dark:text-white leading-snug">
                    {notice.title}
                  </h4>
                </div>
                
                {/* Action feedback info */}
                <div className="self-start sm:self-center shrink-0">
                  <span className="text-xs text-blue-700 dark:text-teal-400 font-bold hover:underline inline-flex items-center space-x-1">
                    <span>{expandedNoticeId === notice.id ? 'Collapse' : 'Read details'}</span>
                  </span>
                </div>
              </div>

              {/* Collapsed/Expanded descriptive details */}
              {expandedNoticeId === notice.id && (
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 animate-fade-in">
                  <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {notice.description}
                  </p>
                  
                  {/* Action Link Mockups */}
                  <div className="mt-4 flex flex-wrap gap-4 text-xs">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setNotificationMsg(`Opening official circular attachment for notice: "${notice.title}"`);
                      }}
                      className="bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-teal-400 font-bold px-3 py-1.5 rounded-xl border border-blue-100/50 hover:bg-slate-200 transition flex items-center space-x-1.5 cursor-pointer"
                    >
                      <FileText size={13} />
                      <span>Download Official PDF Circular</span>
                      <ExternalLink size={11} />
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setNotificationMsg('Redirecting to CSVTU Portal details circular index...');
                      }}
                      className="text-gray-500 hover:text-blue-700 dark:hover:text-white font-semibold transition py-1.5 px-1 cursor-pointer"
                    >
                      Visit CSVTU Portal
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Empty filtered state */}
          {filteredNotices.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-slate-900">
              <AlertCircle className="mx-auto w-12 h-12 text-gray-300" />
              <p className="mt-2 text-sm text-gray-500 font-medium">No announcements match your search query or selected filters.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="text-xs text-blue-700 dark:text-teal-400 font-bold hover:underline mt-2 cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
