import React from 'react';
import { X, Users, BookOpen, Play } from 'lucide-react';
import spotsufyLogo from '../assets/images/logo_spotsufy.png';

interface GroupInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartPresentation?: () => void;
}

export const GroupInfoModal: React.FC<GroupInfoModalProps> = ({
  isOpen,
  onClose,
  onStartPresentation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 select-none">
      <div className="w-full max-w-lg bg-[#181818] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-black border border-white/10 shrink-0">
              <img src={spotsufyLogo} alt="Spotsufy Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">Kelompok 8 · Tasawuf Psikoterapi</h3>
              <p className="text-xs text-[#1DB954] font-medium">Tim Penyusun Materi Konsep Terapi Samā‘iy</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Tutup informasi kelompok"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1DB954]">
              <BookOpen className="w-4 h-4" />
              <span>Fokus Kajian Presentasi</span>
            </div>
            <p className="text-sm text-[#E5E7EB] leading-relaxed">
              Kajian komparatif dan sintesis pemikiran <strong>Imam Abu Hamid Al-Ghazali</strong> (<em>Iḥyā’ ‘Ulūm al-Dīn</em>) dan <strong>Abu Nashr Al-Farabi</strong> (<em>Kitāb al-Mūsīqā al-Kabīr</em>) mengenai hubungan pendengaran, susunan musikal, keadaan kalbu, dan pembinaan jiwa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-xs font-semibold text-amber-300 block">Rujukan Utama Al-Ghazali</span>
              <p className="text-xs text-[#D1D5DB] leading-relaxed">
                Kitāb Ādāb al-Samā‘ wa al-Wajd: konsep Samā‘, Qalb, Wajd, Munāsabah, serta tingkatan Mustami‘.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
              <span className="text-xs font-semibold text-cyan-300 block">Rujukan Utama Al-Farabi</span>
              <p className="text-xs text-[#D1D5DB] leading-relaxed">
                Kitāb al-Mūsīqā al-Kabīr &amp; kajian Ro Hani &amp; Suryo Ediyono (CMES, 2019).
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <Users className="w-4 h-4 text-[#1DB954]" />
              <span>16 Slide Presentasi · 15 Audio Kontemplasi</span>
            </div>

            {onStartPresentation ? (
              <button
                onClick={() => {
                  onClose();
                  onStartPresentation();
                }}
                className="px-4 py-2 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black text-xs font-extrabold inline-flex items-center gap-1.5 transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Mulai Presentasi</span>
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Tutup
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
