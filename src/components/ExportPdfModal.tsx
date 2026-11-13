import React, { useState } from 'react';
import { X, Download, FileText, Loader2, CheckCircle2 } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { SlideData } from '../types/presentation';

interface ExportPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
}

export const ExportPdfModal: React.FC<ExportPdfModalProps> = ({
  isOpen,
  onClose,
  slides,
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  const handleExportPdf = async () => {
    setIsExporting(true);
    setDone(false);

    try {
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: [960, 540],
      });

      const w = pdf.internal.pageSize.getWidth();
      const h = pdf.internal.pageSize.getHeight();

      // Cover Page
      pdf.setFillColor(18, 18, 18);
      pdf.rect(0, 0, w, h, 'F');
      pdf.setFillColor(29, 185, 84);
      pdf.rect(0, 0, 8, h, 'F');

      pdf.setTextColor(29, 185, 84);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(12);
      pdf.text('SPOTSUFY · KELOMPOK 8 TASAWUF PSIKOTERAPI', 56, 90);

      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(28);
      const coverTitle = pdf.splitTextToSize(
        'KONSEP TERAPI SAMA‘IY MENURUT IMAM AL-GHAZALI DAN IMAM AL-FARABI',
        w - 112
      );
      pdf.text(coverTitle, 56, 150);

      pdf.setTextColor(209, 213, 219);
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(13);
      const coverDesc = pdf.splitTextToSize(
        'Ringkasan Materi 16 Slide: Hubungan pendengaran, susunan musikal, pemahaman, keadaan hati, dan pembinaan jiwa berdasarkan Ihya’ ‘Ulum al-Din, Kitab al-Musiqa al-Kabir, serta kajian Jurnal CMES (2019).',
        w - 112
      );
      pdf.text(coverDesc, 56, 255);

      pdf.setTextColor(156, 163, 175);
      pdf.setFontSize(11);
      pdf.text(`Total Materi: ${slides.length} Slide Presentasi`, 56, h - 56);

      // Individual Slide Summary Pages
      slides.forEach((slide) => {
        pdf.addPage([960, 540], 'landscape');
        pdf.setFillColor(18, 18, 18);
        pdf.rect(0, 0, w, h, 'F');
        pdf.setFillColor(29, 185, 84);
        pdf.rect(0, 0, w, 6, 'F');

        pdf.setTextColor(29, 185, 84);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.text(`SLIDE ${slide.trackNumber} · ${slide.category.toUpperCase()}`, 52, 54);

        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(24);
        const titleLines = pdf.splitTextToSize(slide.title, w - 104);
        pdf.text(titleLines, 52, 92);

        pdf.setTextColor(209, 213, 219);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(14);
        pdf.text(pdf.splitTextToSize(slide.subtitle, w - 104), 52, 134);

        let yPos = 185;

        if (slide.theme) {
          pdf.setTextColor(255, 255, 255);
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(12);
          pdf.text('Fokus Bahasan:', 52, yPos);
          yPos += 20;

          pdf.setTextColor(229, 231, 235);
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(13);
          const themeLines = pdf.splitTextToSize(slide.theme, w - 104);
          pdf.text(themeLines, 52, yPos);
          yPos += themeLines.length * 18 + 18;
        }

        if (slide.mainMessage) {
          pdf.setFillColor(24, 24, 24);
          pdf.roundedRect(52, yPos, w - 104, 72, 8, 8, 'F');
          pdf.setTextColor(29, 185, 84);
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(11);
          pdf.text('PESAN UTAMA', 68, yPos + 24);

          pdf.setTextColor(255, 255, 255);
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(13);
          const msgLines = pdf.splitTextToSize(slide.mainMessage, w - 136);
          pdf.text(msgLines, 68, yPos + 46);
          yPos += 92;
        }

        if (slide.academicNote) {
          pdf.setTextColor(251, 191, 36);
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(11);
          pdf.text('Catatan Akademik:', 52, yPos);
          yPos += 18;

          pdf.setTextColor(209, 213, 219);
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(11.5);
          pdf.text(pdf.splitTextToSize(slide.academicNote, w - 104), 52, yPos);
        }

        pdf.setTextColor(115, 115, 115);
        pdf.setFontSize(10);
        pdf.text(`Spotsufy · Slide ${slide.trackNumber} / ${slides.length}`, 52, h - 32);
      });

      pdf.save('Presentasi-Terapi-Samaiy-Spotsufy.pdf');
      setDone(true);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 select-none">
      <div className="w-full max-w-md bg-[#181818] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#1DB954]" />
            <h3 className="text-base font-bold text-white">Export Materi ke PDF</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Tutup dialog export PDF"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <p className="text-sm text-[#D1D5DB] leading-relaxed">
            Unduh ringkasan halaman beranda dan seluruh <strong>{slides.length} slide</strong> presentasi dalam format PDF lanskap 16:9 siap baca.
          </p>

          {done && (
            <div className="p-3.5 rounded-xl bg-[#1DB954]/15 border border-[#1DB954]/40 flex items-center gap-2.5 text-sm text-[#1DB954] font-semibold">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>File PDF berhasil dibuat dan diunduh.</span>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/80 transition-colors"
            >
              Batal
            </button>
            <button
              onClick={handleExportPdf}
              disabled={isExporting}
              className="px-5 py-2.5 rounded-full bg-[#1DB954] hover:bg-[#1ed760] disabled:opacity-60 text-black text-xs font-extrabold inline-flex items-center gap-2 transition-colors"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Memproses PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Unduh PDF</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
