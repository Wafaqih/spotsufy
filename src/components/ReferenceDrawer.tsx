import React from 'react';
import { X, BookOpen, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { SlideData } from '../types/presentation';
import { REFERENCES_DATA } from '../data/slidesData';

interface ReferenceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: SlideData;
}

export const ReferenceDrawer: React.FC<ReferenceDrawerProps> = ({
  isOpen,
  onClose,
  currentSlide,
}) => {
  if (!isOpen) return null;

  const slideRefs = REFERENCES_DATA.filter((ref) =>
    currentSlide.primaryReferences.includes(ref.id)
  );
  const refsToDisplay = slideRefs.length > 0 ? slideRefs : REFERENCES_DATA;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm select-none">
      <div
        className="flex-1"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className="w-full max-w-xl h-full bg-[#141414] border-l border-white/10 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#181818] shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="min-w-0">
              <h3 className="text-base font-bold text-white truncate">
                Rujukan Primer &amp; Catatan Slide {currentSlide.trackNumber}
              </h3>
              <p className="text-xs text-white/60 truncate">{currentSlide.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Tutup panel rujukan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {currentSlide.academicNote && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>Catatan Ketelitian Akademik</span>
              </div>
              <p className="text-sm text-amber-100/90 leading-relaxed">
                {currentSlide.academicNote}
              </p>
            </div>
          )}

          {currentSlide.arabicQuote && (
            <div className="p-4 rounded-xl bg-[#181818] border border-white/10 space-y-2">
              <p
                dir="rtl"
                lang="ar"
                className="text-xl font-arabic text-amber-200 text-right leading-[2] select-text"
              >
                {currentSlide.arabicQuote.arabic}
              </p>
              <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed">
                “{currentSlide.arabicQuote.translation}”
              </p>
              <p className="text-xs text-white/50">{currentSlide.arabicQuote.source}</p>
            </div>
          )}

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1DB954]">
              Sumber Rujukan Terkait
            </h4>
            {refsToDisplay.map((ref) => (
              <div
                key={ref.id}
                className="p-4 rounded-xl bg-[#181818] border border-white/10 space-y-2.5"
              >
                <div>
                  <h5 className="text-sm font-bold text-white leading-snug">
                    {ref.title}
                  </h5>
                  <p className="text-xs text-[#1DB954] font-medium mt-1">
                    {ref.authors} ({ref.year})
                  </p>
                  <p className="text-xs text-white/60 mt-0.5">
                    {ref.journal}
                    {ref.volumeInfo ? ` · ${ref.volumeInfo}` : ''}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-2 border-t border-white/5">
                  {ref.keyFindings.map((finding, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-[#D1D5DB] leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1DB954] shrink-0 mt-0.5" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};
