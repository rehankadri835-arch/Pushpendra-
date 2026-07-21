import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Campus' | 'Laboratory' | 'Library' | 'Events'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: Array<'All' | 'Campus' | 'Laboratory' | 'Library' | 'Events'> = [
    'All',
    'Campus',
    'Laboratory',
    'Library',
    'Events',
  ];

  // Filter gallery items
  const filteredGallery =
    activeFilter === 'All'
      ? GALLERY
      : GALLERY.filter((item) => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    // Find index of item within the FILTERED gallery
    const index = filteredGallery.findIndex((g) => g.id === item.id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0));
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-6 bg-teal-500 rounded-full shrink-0"></span>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Media Highlights
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-white mt-2 tracking-tight">
            Our Campus & Student Gallery
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            Take a look inside our campus environment in Ambikapur. Explore our modern laboratories, automated libraries, medical gardens, and academic seminars.
          </p>
        </div>

        {/* Filter Categories Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setLightboxIndex(null); // Clear lightbox just in case
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-gray-600 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid with Lightbox Action */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-55 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md aspect-square cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with zoom icon */}
              <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="self-end p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/25">
                  <Maximize2 size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-500 text-white px-2 py-0.5 rounded-full inline-block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-sm leading-snug truncate">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic empty state */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
            <ImageIcon className="mx-auto w-12 h-12 text-gray-300" />
            <p className="mt-2 text-sm text-gray-500">No media items available in this category.</p>
          </div>
        )}

        {/* Fullscreen Lightbox Modal */}
        {lightboxIndex !== null && currentLightboxItem && (
          <div
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex flex-col justify-between p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Header / Actions bar */}
            <div className="flex justify-between items-center text-white relative z-10 w-full max-w-7xl mx-auto">
              <div className="leading-tight">
                <span className="text-teal-400 font-bold uppercase text-[10px] tracking-wider bg-teal-500/10 px-2.5 py-0.5 rounded-full">
                  {currentLightboxItem.category}
                </span>
                <h3 className="font-display font-bold text-sm sm:text-base text-gray-100 mt-1">
                  {currentLightboxItem.title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/15 text-white cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Carousel Area */}
            <div className="flex-1 flex items-center justify-between max-w-7xl mx-auto w-full relative">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 p-3 sm:p-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-white cursor-pointer z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Central high resolution visual */}
              <div
                className="flex items-center justify-center w-full h-[60vh] sm:h-[70vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/5"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 p-3 sm:p-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-white cursor-pointer z-10"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Footer / Description and Index tracker */}
            <div className="text-center text-white/60 text-xs sm:text-sm max-w-2xl mx-auto py-2 z-10">
              <p className="font-sans leading-relaxed mb-2 text-gray-300">
                {currentLightboxItem.description || 'Pushpendra College of Pharmacy modern student activities.'}
              </p>
              <span className="font-mono text-xs text-gray-500">
                Image {lightboxIndex + 1} of {filteredGallery.length}
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
