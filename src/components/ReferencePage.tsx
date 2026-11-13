import React, { useState, useMemo } from 'react';
import { ArrowLeft, BookOpen, Search, CheckCircle2 } from 'lucide-react';
import { REFERENCES_DATA, SLIDES_DATA } from '../data/slidesData';

interface ReferencePageProps {
  onGoHome: () => void;
  onSelectSlide: (slideIdx: number) => void;
}

export const ReferencePage: React.FC<ReferencePageProps> = ({
  onGoHome,
  onSelectSlide,
}) => {
  const [query, setQuery] = useState('');

  const filteredRefs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return REFERENCES_DATA;
    return REFERENCES_DATA.filter(
      (ref) =>
        ref.title.toLowerCase().includes(q) ||
        ref.authors.toLowerCase().includes(q) ||
        ref.journal.toLowerCase().includes(q) ||
        ref.keyFindings.some((f) => f.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="w-full h-full bg-[#121212] text-white flex flex-col overflow-hidden font-sans select-none">
      {/* Header */}
      <header className="h-14 px-4 sm:px-6 md:px-8 bg-black/50 border-b border-white/10 flex items-center justify-between gap-3 shrink-0">
        <button
          onClick={onGoHome}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition-colors border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Beranda</span>
        </button>

        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <BookOpen className="w-4 h-4 text-[#1DB954]" />
          <span>Daftar Pustaka &amp; Rujukan Akademik</span>
        </div>

        <div className="w-20 hidden sm:block" />
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-8 lg:p-10">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Intro & Search */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Sumber Primer &amp; Kajian Pendukung
              </h1>
              <p className="text-sm text-[#D1D5DB] max-w-2xl leading-relaxed">
                Memisahkan naskah klasik Imam Al-Ghazali dan Imam Al-Farabi dari artikel kajian sekunder agar kutipan tetap teliti secara metodologis.
              </p>
            </div>

            <div className="relative w-full sm:w-72 shrink-0">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari penulis, kitab, atau topik..."
                className="w-full bg-white/10 focus:bg-[#202020] text-sm text-white placeholder-white/40 pl-10 pr-4 py-2 rounded-full border border-white/10 focus:outline-none focus:border-[#1DB954]"
              />
            </div>
          </div>

          {/* Reference Cards */}
          <div className="space-y-4">
            {filteredRefs.map((ref) => {
              const linkedSlides = SLIDES_DATA.map((slide, idx) => ({
                slide,
                idx,
              })).filter(({ slide }) => slide.primaryReferences.includes(ref.id));

              return (
                <article
                  key={ref.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#181818] border border-white/10 space-y-4"
                >
                  <div className="space-y-1">
                    <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {ref.title}
                    </h2>
                    <p className="text-sm text-[#1DB954] font-semibold">
                      {ref.authors} ({ref.year})
                    </p>
                    <p className="text-xs sm:text-sm text-white/60">
                      {ref.journal}
                      {ref.volumeInfo ? ` · ${ref.volumeInfo}` : ''}
                    </p>
                  </div>

                  {ref.methodology && (
                    <p className="text-xs sm:text-sm text-[#D1D5DB] bg-black/35 border border-white/5 rounded-xl px-4 py-2.5">
                      <strong className="text-white">Pendekatan:</strong> {ref.methodology}
                    </p>
                  )}

                  <ul className="space-y-2">
                    {ref.keyFindings.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-[#E5E7EB] leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1DB954] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {linkedSlides.length > 0 && (
                    <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                      <span className="text-xs text-white/50 mr-1">Digunakan pada slide:</span>
                      {linkedSlides.map(({ slide, idx }) => (
                        <button
                          key={slide.id}
                          onClick={() => onSelectSlide(idx)}
                          className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#1DB954] hover:text-black text-xs font-mono font-semibold text-white/85 border border-white/10 transition-colors"
                        >
                          Slide {slide.trackNumber}
                        </button>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};
