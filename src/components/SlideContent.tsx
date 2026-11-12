import React, { useState } from 'react';
import { 
  BookOpen, Sparkles, Flame, Droplets, Gem, Heart, Music,
  ArrowRight, ShieldAlert, CheckCircle2, Waves, Activity,
  Layers, Volume2, UserCheck, Compass, Info, Feather,
  Wind, Brain, Ear, Scale, Target, Sliders, Eye
} from 'lucide-react';
import { SlideData, AudioTrackType } from '../types/presentation';
import ghazaliFarabiHeroImg from '../assets/images/ghazali_farabi_manuscript_1794465711425.jpg';
import ghazaliSparkHeartImg from '../assets/images/ghazali_spark_heart_1794465736470.jpg';
import alGhazaliPortraitImg from '../assets/images/al_ghazali_portrait_1794464724623.jpg';
import alFarabiPortraitImg from '../assets/images/al_farabi_portrait_1794464755547.jpg';
import heartSpiritualGemsImg from '../assets/images/heart_spiritual_gems_1794464775917.jpg';
import auditoryGatewayImg from '../assets/images/slide_09_sama_iy_1792249761715.jpg';
import springFluteBreezeImg from '../assets/images/spring_flute_breeze_1794471612617.jpg';
import musicSoulResonanceImg from '../assets/images/music_soul_resonance_1794471631880.jpg';

interface SlideContentProps {
  slide: SlideData;
  isPlayingAudio: boolean;
  activeAudioTrack: AudioTrackType;
  onPlayTrack: (track: AudioTrackType) => void;
  onOpenReferences: () => void;
  isLiked?: boolean;
  onToggleLike?: () => void;
  onSelectSlide?: (index: number) => void;
  isFullscreen?: boolean;
}

export const SlideContent: React.FC<SlideContentProps> = ({
  slide,
  isPlayingAudio,
  activeAudioTrack,
  onPlayTrack,
  onOpenReferences,
  isFullscreen = false
}) => {
  // State for Slide 2 interactive detail
  const [activeElementS2, setActiveElementS2] = useState<'sama' | 'qalb' | 'wajd' | 'bina'>('sama');
  // State for Slide 5 active influence category
  const [activeInfluenceS5, setActiveInfluenceS5] = useState<number>(0);

  // ---------------------------------------------------------------------------
  // SLIDE 1: VISUAL PEMBUKA (PENGANTAR, KEDUA TOKOH, & PENDENGARAN MENUJU JIWA)
  // ---------------------------------------------------------------------------
  if (slide.id === 1) {
    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-6 md:p-8 flex flex-col gap-4 lg:gap-0 lg:justify-between">
        {/* Header Title Section */}
        <div className="border-b border-white/10 pb-3 flex items-start justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              TERAPI SAMĀ‘IY: Ketika Pendengaran Menjadi Jalan Menuju Jiwa
            </h1>
            <p className="text-sm md:text-base text-[#D1D5DB] font-medium mt-0.5">
              Perspektif Pemikiran Imam Al-Ghazali dan Imam Al-Farabi
            </p>
          </div>
        </div>

        {/* Main Split Layout: Left Info & Arguments vs Right Historical Illustration */}
        <div className="grid grid-cols-12 gap-6 my-auto items-center flex-1 py-3">
          {/* Left Column: Pengantar & Landasan Pemikiran */}
          <div className="col-span-12 lg:col-span-7 space-y-4">
            {/* Pertanyaan Pengantar Reflektif */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-[#181818] to-transparent border-l-4 border-amber-400 border-y border-r border-white/5">
              <p className="text-sm md:text-base text-white/95 italic leading-relaxed">
                “Pernahkah sebuah lantunan membuat seseorang tiba-tiba merasa tenang, sedih, bahagia, terharu, atau bahkan merasakan kerinduan spiritual?”
              </p>
              <p className="text-xs text-[#B3B3B3] mt-2 leading-relaxed">
                Suara bukan sekadar gelombang akustik yang diterima indera telinga. Dalam pemikiran Islam klasik, suara dan musik merupakan objek kajian mendalam yang berkaitan erat dengan keadaan hati dan jiwa manusia.
              </p>
            </div>

            {/* Dua Tokoh & Karakteristik Kajian */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {/* Tokoh 1: Imam Al-Ghazali */}
              <div className="p-3.5 rounded-xl bg-[#181818] border border-amber-500/25 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300">1. Imam Abu Hamid Al-Ghazali</span>
                  <span className="text-[10px] font-mono text-white/40">1058–1111 M</span>
                </div>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Mengkaji bagaimana aktivitas mendengar (<strong className="text-white">Samā‘</strong>) membangkitkan getaran pengalaman batin (<strong className="text-amber-300">Wajd</strong>) dan penyingkapan hati.
                </p>
                <div className="text-[11px] font-mono text-amber-200/70 border-t border-white/5 pt-1.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Iḥyā’ ‘Ulūm al-Dīn</span>
                </div>
              </div>

              {/* Tokoh 2: Imam Al-Farabi */}
              <div className="p-3.5 rounded-xl bg-[#181818] border border-cyan-500/25 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-300">2. Abu Nashr Al-Farabi</span>
                  <span className="text-[10px] font-mono text-white/40">872–950 M</span>
                </div>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Mengembangkan kajian musik filosofis-ilmiah: hakikat suara, interval nada teratur, ritme, susunan lagu, dan pengaruhnya pada jiwa.
                </p>
                <div className="text-[11px] font-mono text-cyan-200/70 border-t border-white/5 pt-1.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">Kitāb al-Mūsīqā al-Kabīr</span>
                </div>
              </div>
            </div>

            {/* Pesan Utama Slide 1 */}
            <div className="p-3 rounded-xl bg-[#1DB954]/10 border border-[#1DB954]/30 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#1DB954] text-black flex items-center justify-center shrink-0 font-bold text-xs">
                ★
              </div>
              <p className="text-xs md:text-sm text-white font-medium leading-relaxed">
                <strong>Pesan Utama:</strong> Pendengaran dapat menjadi jalan terstruktur untuk menyentuh, menggerakkan, dan membina keadaan batin manusia.
              </p>
            </div>
          </div>

          {/* Right Column: Historical Illustration Artwork */}
          <div className="col-span-12 lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group aspect-[16/10]">
              <img 
                src={ghazaliFarabiHeroImg} 
                alt="Imam Al-Ghazali dan Imam Al-Farabi dengan Manuskrip Klasik" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4">
                <span className="text-xs font-bold text-amber-300 drop-shadow flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Representasi Historis Kedua Tokoh & Manuskrip Klasik Islam
                </span>
                <p className="text-[11px] text-white/80 leading-snug mt-1">
                  Menelaah keterhubungan akustik suara, kesucian kalbu, dan keselarasan jiwa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Academic Footnote */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40">
          <span>Sumber Primer: Iḥyā’ ‘Ulūm al-Dīn & Kitāb al-Mūsīqā al-Kabīr</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 01</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 2: DIAGRAM KONSEPTUAL SAMĀ‘, QALB, DAN WAJD
  // ---------------------------------------------------------------------------
  if (slide.id === 2) {
    const elementsData = [
      {
        id: 'sama',
        step: '01',
        title: 'SAMĀ‘',
        arabic: 'السَّمَاعُ',
        role: 'Pintu Masuk (Madkhal)',
        desc: 'Aktivitas mendengar atau menyimak suara, nada, dan lantunan. Samā‘ bukan sekadar proses fisik organ telinga menerima gelombang getaran, melainkan keterbukaan indera menyerap keindahan dan makna.',
        highlight: 'Berfungsi sebagai gerbang persepsi pertama yang mengantarkan bunyi menuju kedalaman batin.'
      },
      {
        id: 'qalb',
        step: '02',
        title: 'QALB',
        arabic: 'الْقَلْبُ',
        role: 'Tempat Respons Batin (Maqarr)',
        desc: 'Hati sebagai pusat kesadaran, tempat terhimpunnya berbagai rahasia, watak, dan kecenderungan manusia. Hati merespons karakter bunyi yang masuk melalui kecocokan fitriah.',
        highlight: 'Tempat bertemunya getaran nada dengan isi batin yang sebelumnya tersimpan atau tertidur.'
      },
      {
        id: 'wajd',
        step: '03',
        title: 'WAJD',
        arabic: 'الْوَجْدُ',
        role: 'Pengalaman Batin (Atsar Ruhi)',
        desc: 'Keadaan atau pengalaman batin yang muncul sebagai buah dari Samā‘. Berupa getaran rasa haru, keinsyafan, kerinduan spiritual, atau perubahan keadaan hati (aḥwāl).',
        highlight: 'Bukan emosi liar tanpa kendali, melainkan getaran murni yang dialami jiwa yang sadar.'
      },
      {
        id: 'bina',
        step: '04',
        title: 'PEMBINAAN JIWA',
        arabic: 'تَهْذِيبُ النَّفْسِ',
        role: 'Tujuan Akhir (Ghayah)',
        desc: 'Pemanfaatan terarah dari pengalaman batin untuk menata moral, mengikis kelalaian, menumbuhkan ketenangan, serta mendekatkan diri kepada Allah SWT.',
        highlight: 'Mengubah getaran rasa sesaat menjadi komitmen perbaikan akhlak dan kejernihan batin.'
      }
    ];

    const currentElem = elementsData.find(e => e.id === activeElementS2) || elementsData[0];

    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-6 md:p-8 flex flex-col gap-4 lg:gap-0 lg:justify-between">
        {/* Header */}
        <div className="border-b border-white/10 pb-3 flex items-start justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              APA ITU TERAPI SAMĀ‘IY?
            </h2>
            <p className="text-sm md:text-base text-[#D1D5DB] font-medium mt-0.5">
              Memahami Pendengaran sebagai Jalan Menuju Pengalaman Batin
            </p>
          </div>
        </div>

        {/* Conceptual Flowchart Diagram: SAMĀ‘ ➔ QALB ➔ WAJD ➔ PEMBINAAN JIWA */}
        <div className="py-2">
          <div className="text-xs font-mono font-semibold text-white/50 mb-2 uppercase tracking-wider flex items-center justify-between">
            <span>Alur Konseptual Hubungan Transformasi:</span>
            <span className="text-[#1DB954]">Klik tahapan untuk menelaah detail</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
            {elementsData.map((elem, idx) => {
              const isActive = activeElementS2 === elem.id;
              return (
                <div
                  key={elem.id}
                  onClick={() => setActiveElementS2(elem.id as any)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                    isActive 
                      ? 'bg-gradient-to-b from-[#1DB954]/20 to-[#181818] border-[#1DB954] shadow-lg shadow-[#1DB954]/15' 
                      : 'bg-[#181818] border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-[#1DB954] text-black' : 'bg-white/10 text-white/70'
                    }`}>
                      Tahap {elem.step}
                    </span>
                    <span className="text-base md:text-lg font-arabic text-amber-300" dir="rtl" lang="ar">
                      {elem.arabic}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-sm md:text-base font-extrabold tracking-tight ${isActive ? 'text-[#1DB954]' : 'text-white'}`}>
                      {elem.title}
                    </h3>
                    <p className="text-[11px] text-white/60 font-medium truncate mt-0.5">
                      {elem.role}
                    </p>
                  </div>

                  {/* Flow Arrow Indicator for steps 1-3 */}
                  {idx < 3 && (
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden lg:flex w-4 h-4 rounded-full bg-[#121212] border border-white/20 items-center justify-center text-white/60">
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Explanation Container */}
        <div className="grid grid-cols-12 gap-5 my-auto items-stretch">
          {/* Active Stage Inspector Box */}
          <div className="col-span-12 lg:col-span-7 p-4 md:p-5 rounded-2xl bg-[#181818] border border-white/10 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-base font-extrabold text-white">
                    {currentElem.title}
                  </span>
                  <span className="text-lg font-arabic text-amber-300" dir="rtl" lang="ar">
                    {currentElem.arabic}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#1DB954] bg-[#1DB954]/10 px-2.5 py-0.5 rounded-full border border-[#1DB954]/20">
                  {currentElem.role}
                </span>
              </div>

              <p className="text-sm md:text-base text-[#E0E0E0] leading-relaxed">
                {currentElem.desc}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs md:text-sm text-amber-200/90 leading-relaxed">
              <strong className="text-white">Peran Kritis: </strong>
              {currentElem.highlight}
            </div>
          </div>

          {/* Pengertian Terapi Samā‘iy & Catatan Batas Akademik */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between space-y-3">
            {/* Pengertian Konseptual */}
            <div className="p-4 rounded-2xl bg-[#181818] border border-white/10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1DB954] block">
                Hakikat Terapi Samā‘iy
              </span>
              <p className="text-xs md:text-sm text-[#D1D5DB] leading-relaxed">
                Terapi Samā‘iy dalam presentasi ini merupakan istilah konseptual untuk menjelaskan <strong>pemanfaatan aktivitas mendengar, suara, dan lantunan</strong> sebagai sarana pembinaan serta pengarahan keadaan jiwa.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Bukan sekadar hiburan indrawi, melainkan metode untuk membangkitkan, mengolah, dan mengarahkan batin menuju kondisi yang lebih mulia dan tenang.
              </p>
            </div>

            {/* Academic Boundary Note */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200/95 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
                <span>Peringatan Metodologis Akademik</span>
              </div>
              <p className="leading-relaxed text-[11px] md:text-xs">
                {slide.academicNote}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40">
          <span>Formula Inti: Samā‘ (Pintu Masuk) ➔ Qalb (Tempat Respons) ➔ Wajd (Pengalaman Batin) ➔ Pembinaan Jiwa</span>
          <span className="text-[#1DB954] font-semibold">{slide.mainMessage}</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 3: DUA KOLOM PERBANDINGAN AL-GHAZALI DAN AL-FARABI
  // ---------------------------------------------------------------------------
  if (slide.id === 3) {
    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-6 md:p-8 flex flex-col gap-4 lg:gap-0 lg:justify-between">
        {/* Header */}
        <div className="border-b border-white/10 pb-3 flex items-start justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              DUA TOKOH, DUA SUDUT PANDANG
            </h2>
            <p className="text-sm md:text-base text-[#D1D5DB] font-medium mt-0.5">
              Imam Al-Ghazali dan Imam Al-Farabi dalam Kajian Pendengaran, Musik, dan Jiwa
            </p>
          </div>
        </div>

        {/* Two Balanced Columns Comparison */}
        <div className="grid grid-cols-12 gap-5 my-auto items-stretch flex-1 py-3">
          {/* Kolom Kiri: IMAM AL-GHAZALI */}
          <div className="col-span-12 lg:col-span-6 p-4 md:p-5 rounded-2xl bg-gradient-to-b from-amber-500/10 via-[#181818] to-[#141414] border border-amber-500/30 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 border-b border-amber-500/20 pb-2.5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 border-amber-400 shrink-0 shadow-md bg-black">
                  <img src={alGhazaliPortraitImg} alt="Imam Al-Ghazali" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-extrabold text-amber-300 leading-none">
                      IMAM AL-GHAZALI
                    </h3>
                    <span className="text-[10px] font-mono text-white/50">1058–1111 M</span>
                  </div>
                  <span className="text-[11px] font-bold text-amber-200 mt-1 inline-block">
                    Tasawuf & Pembinaan Batin
                  </span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-[#E0E0E0] leading-relaxed">
                Membahas Samā‘ sebagai <strong>aktivitas mendengar yang dapat menggerakkan hati</strong> dan menghasilkan pengalaman batin yang disebut <strong>Wajd</strong>.
              </p>

              {/* Pokok Pemikiran Al-Ghazali */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300/80 block">
                  Pokok Pemikiran:
                </span>
                <ul className="text-xs md:text-sm text-white/90 space-y-1.5 pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Hubungan antara pendengaran dan kedalaman hati (qalb).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Samā‘ sebagai pemantik (<em className="text-amber-200">qawādiḥ</em>) keadaan batin yang tersembunyi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Wajd sebagai pengalaman spiritual dan transformasi diri.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Pengaruh keadaan batin terhadap gerak anggota tubuh.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>Adab, syarat tempat-waktu, manfaat, dan potensi mudarat.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sumber Primer Al-Ghazali */}
            <div className="p-2.5 rounded-xl bg-black/50 border border-amber-500/20 text-xs flex items-center justify-between">
              <span className="text-white/70">Sumber Primer:</span>
              <span className="font-semibold text-amber-300">Iḥyā’ ‘Ulūm al-Dīn (Kitāb Ādāb al-Samā‘ wa al-Wajd)</span>
            </div>
          </div>

          {/* Kolom Kanan: IMAM AL-FARABI */}
          <div className="col-span-12 lg:col-span-6 p-4 md:p-5 rounded-2xl bg-gradient-to-b from-cyan-500/10 via-[#181818] to-[#141414] border border-cyan-500/30 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-2.5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 border-cyan-400 shrink-0 shadow-md bg-black">
                  <img src={alFarabiPortraitImg} alt="Imam Al-Farabi" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-extrabold text-cyan-300 leading-none">
                      IMAM AL-FARABI
                    </h3>
                    <span className="text-[10px] font-mono text-white/50">872–950 M</span>
                  </div>
                  <span className="text-[11px] font-bold text-cyan-200 mt-1 inline-block">
                    Filsafat & Ilmu Musik
                  </span>
                </div>
              </div>

              <p className="text-xs md:text-sm text-[#E0E0E0] leading-relaxed">
                Mengembangkan kajian musik secara <strong>sistematis dan matematis</strong> melalui pembahasan hakikat suara, nada, interval, ritme, dan komposisi musikal.
              </p>

              {/* Pokok Pembahasan Al-Farabi */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300/80 block">
                  Pokok Pembahasan:
                </span>
                <ul className="text-xs md:text-sm text-white/90 space-y-1.5 pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Hakikat akustik dan karakteristik fisika bunyi/suara.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Susunan nada (<em className="text-cyan-200">naghamāt</em>) dan hubungan harmoni musikal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Pola ritme (<em className="text-cyan-200">īqā‘</em>) dan arsitektur komposisi lagu (<em className="text-cyan-200">laḥn</em>).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Pengalaman musikal objektif dan pengaruhnya terhadap jiwa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Musik sebagai cabang ilmu pengetahuan ilmiah (matematika).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sumber Primer Al-Farabi */}
            <div className="p-2.5 rounded-xl bg-black/50 border border-cyan-500/20 text-xs flex items-center justify-between">
              <span className="text-white/70">Sumber Primer:</span>
              <span className="font-semibold text-cyan-300">Kitāb al-Mūsīqā al-Kabīr</span>
            </div>
          </div>
        </div>

        {/* Titik Temu & Sintesis Bagian Bawah */}
        <div className="p-4 rounded-2xl bg-[#181818] border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1DB954] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#1DB954]" /> Titik Temu & Sintesis Analitis
            </span>
            <span className="text-[11px] text-white/50">Kedua Tokoh Menjawab Pertanyaan Berbeda</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm pt-1">
            <div className="p-2.5 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <strong className="text-amber-300 block mb-0.5">Pertanyaan Imam Al-Ghazali:</strong>
              <p className="text-white/90 leading-snug">
                “Bagaimana suara menggerakkan hati dan menghasilkan pengalaman batin?”
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
              <strong className="text-cyan-300 block mb-0.5">Pertanyaan Imam Al-Farabi:</strong>
              <p className="text-white/90 leading-snug">
                “Bagaimana suara dan musik tersusun, serta bagaimana karakteristik musikal dapat dipahami?”
              </p>
            </div>
          </div>

          <p className="text-[11px] md:text-xs text-[#A7A7A7] leading-relaxed pt-1">
            <strong>Kesimpulan:</strong> Keduanya menjadi landasan kokoh untuk membangun pemahaman mengenai hubungan antara musik dan pembinaan jiwa. Keduanya memiliki titik temu pada daya pengaruh suara terhadap manusia, namun tidak boleh digambarkan seolah-olah memiliki teori yang identik.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40">
          <span>Perbandingan Metodologis Objektif</span>
          <span className="text-amber-400 font-semibold">{slide.mainMessage}</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 4: BAGAIMANA AL-GHAZALI MEMAHAMI SAMĀ‘? (KUTIPAN ARAB & METAFORA KHATIM)
  // ---------------------------------------------------------------------------
  if (slide.id === 4) {
    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-4 md:p-5 lg:p-6 flex flex-col gap-4 lg:gap-0 lg:justify-between select-none">
        {/* Header */}
        <div className="border-b border-white/10 pb-2.5 flex items-start justify-between shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
              BAGAIMANA AL-GHAZALI MEMAHAMI SAMĀ‘?
            </h2>
            <p className="text-xs md:text-sm text-[#D1D5DB] font-medium mt-0.5">
              Pendengaran sebagai Jalan untuk Menggerakkan Khazanah Hati
            </p>
          </div>
        </div>

        {/* Primary Arabic Quotes Box: Dual Prominent Calligraphy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-auto flex-1 min-h-0 items-stretch py-1">
          {/* Kutipan Arab 1: Khazanah Rahasia Batin */}
          <div className="p-4 md:p-5 rounded-2xl bg-[#181818] border border-amber-500/35 shadow-lg flex flex-col justify-between space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block border-b border-white/5 pb-1.5">
              1. Khazanah Rahasia Batin
            </span>

            <div className="py-2 flex items-center justify-end flex-1">
              <p 
                className="text-2xl md:text-3xl lg:text-4xl font-arabic text-amber-200 text-right leading-[2.1] dir-rtl select-text" 
                dir="rtl" 
                lang="ar"
              >
                فَإِنَّ الْقُلُوبَ وَالسَّرَائِرَ خَزَائِنُ الْأَسْرَارِ وَمَعَادِنُ الْجَوَاهِرِ
              </p>
            </div>

            <div className="pt-2 border-t border-white/5">
              <p className="text-xs md:text-sm text-white/90 leading-relaxed italic">
                “Sesungguhnya hati dan batin merupakan tempat penyimpanan rahasia dan tambang berbagai permata.”
              </p>
            </div>
          </div>

          {/* Kutipan Arab 2: Pemantik Pendengaran */}
          <div className="p-4 md:p-5 rounded-2xl bg-[#181818] border border-amber-500/35 shadow-lg flex flex-col justify-between space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block border-b border-white/5 pb-1.5">
              2. Pemantik Pendengaran (Qawādiḥ)
            </span>

            <div className="py-2 flex items-center justify-end flex-1">
              <p 
                className="text-2xl md:text-3xl lg:text-4xl font-arabic text-amber-200 text-right leading-[2.1] dir-rtl select-text" 
                dir="rtl" 
                lang="ar"
              >
                وَلَا سَبِيلَ إِلَى اسْتِثَارَةِ خَفَايَاهَا إِلَّا بِقَوَادِحِ السَّمَاعِ
              </p>
            </div>

            <div className="pt-2 border-t border-white/5">
              <p className="text-xs md:text-sm text-white/90 leading-relaxed italic">
                “Tidak ada jalan untuk membangkitkan rahasia yang tersembunyi kecuali melalui pemantik-pemantik pendengaran.”
              </p>
            </div>
          </div>
        </div>

        {/* 3 Classical Analogies (Horizontal Row without crowded image) */}
        <div className="p-3.5 rounded-2xl bg-[#181818] border border-white/10 space-y-2 shrink-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* 1. Api dalam Batu */}
            <div className="p-2.5 rounded-xl bg-black/40 border border-amber-500/20 flex items-start gap-2.5">
              <Flame className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs text-amber-300 block">Api dalam Batu</strong>
                <p className="text-[11px] text-[#D1D5DB] leading-snug mt-0.5">
                  Percikan api tersimpan dalam batu, baru tampak setelah ada pemantik (<em className="text-amber-200">qawādiḥ</em>).
                </p>
              </div>
            </div>

            {/* 2. Air Bawah Tanah */}
            <div className="p-2.5 rounded-xl bg-black/40 border border-blue-500/20 flex items-start gap-2.5">
              <Droplets className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs text-blue-300 block">Air Bawah Tanah</strong>
                <p className="text-[11px] text-[#D1D5DB] leading-snug mt-0.5">
                  Mata air jernih telah ada terpendam, baru memancar saat dialirkan jalurnya.
                </p>
              </div>
            </div>

            {/* 3. Khazanah Permata */}
            <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/20 flex items-start gap-2.5">
              <Gem className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs text-emerald-300 block">Khazanah Permata</strong>
                <p className="text-[11px] text-[#D1D5DB] leading-snug mt-0.5">
                  Hati menyimpan berbagai permata kebaikan yang tertutup hingga dibuka oleh pendengaran bermakna.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[11px] md:text-xs text-white/80 leading-snug pt-1.5 border-t border-white/5 text-center">
            <strong>Kesimpulan:</strong> Samā‘ bukan sekadar mendengar suara fisik, melainkan aktivitas yang menggerakkan hati dan menyingkap rahasia batinnya.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40 shrink-0">
          <span>Teks Arab Asli Bersumber dari Iḥyā’ ‘Ulūm al-Dīn</span>
          <span className="text-[#1DB954] font-semibold">{slide.mainMessage}</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 5: DIAGRAM MUNĀSABAH ANTARA SUARA, NADA, DAN KEADAAN RUHANI
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  // SLIDE 5: MENGAPA SUARA BISA MENYENTUH HATI?
  // ---------------------------------------------------------------------------
  if (slide.id === 5) {
    const influenceCategories = [
      {
        id: 'emosional',
        num: '01',
        title: 'Pengaruh Emosional',
        desc: 'Membangkitkan luapan kegembiraan, kesedihan, atau keharuan batin.',
        arabicRef: 'مَا يُفَرِّحُ وَيُحْزِنُ',
        color: 'text-amber-300'
      },
      {
        id: 'psikologis',
        num: '02',
        title: 'Pengaruh Psikologis',
        desc: 'Memberi ketenangan mendalam, mengantar tidur, atau kesiagaan mental.',
        arabicRef: 'مَا يُنَوِّمُ وَيُهَدِّئُ',
        color: 'text-cyan-300'
      },
      {
        id: 'fisik',
        num: '03',
        title: 'Pengaruh Fisik',
        desc: 'Menggerakkan anggota tubuh: ketukan jari, anggukan kepala, dan langkah.',
        arabicRef: 'يُحَرِّكُ الْجَوَارِحَ',
        color: 'text-emerald-300'
      },
      {
        id: 'ruhani',
        num: '04',
        title: 'Pengaruh Ruhani',
        desc: 'Pemantik zikir, kerinduan Ilahi, dan kesadaran tauhid bagi kalbu yang jernih.',
        arabicRef: 'مُنَاسَبَةُ الْأَرْوَاحِ',
        color: 'text-purple-300'
      }
    ];

    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-4 md:p-5 lg:p-6 flex flex-col gap-4 lg:gap-0 lg:justify-between select-none">
        {/* Header */}
        <div className="border-b border-white/10 pb-2.5 flex items-start justify-between shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
              MENGAPA SUARA BISA MENYENTUH HATI?
            </h2>
            <p className="text-xs md:text-sm text-[#D1D5DB] font-medium mt-0.5">
              Munāsabah antara Nada, Suara, dan Keadaan Ruhani Manusia
            </p>
          </div>
        </div>

        {/* Primary Arabic Quotes Section (Dual Prominent Calligraphy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-auto py-1 flex-1 min-h-0 items-stretch">
          {/* Kutipan Arab 1: Rahasia Munasabah */}
          <div className="p-4 rounded-2xl bg-[#181818] border border-amber-500/30 flex flex-col justify-between space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block border-b border-white/5 pb-1">
              1. Rahasia Munāsabah Nada & Ruh:
            </span>
            <div className="py-2 flex items-center justify-end flex-1">
              <p 
                className="text-xl md:text-2xl lg:text-3xl font-arabic text-amber-200 text-right leading-[2.1] dir-rtl select-text"
                dir="rtl" 
                lang="ar"
              >
                لِلَّهِ تَعَالَى سِرٌّ فِي مُنَاسَبَةِ النَّغَمَاتِ الْمَوْزُونَةِ لِلْأَرْوَاحِ
              </p>
            </div>
            <p className="text-xs text-white/90 italic leading-snug pt-1 border-t border-white/5">
              “Allah Ta'ala memiliki rahasia dalam kesesuaian antara nada-nada yang berirama dengan ruh manusia.”
            </p>
          </div>

          {/* Kutipan Arab 2: Variasi Pengaruh */}
          <div className="p-4 rounded-2xl bg-[#181818] border border-amber-500/30 flex flex-col justify-between space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block border-b border-white/5 pb-1">
              2. Variasi Karakteristik Nada:
            </span>
            <div className="py-2 flex items-center justify-end flex-1">
              <p 
                className="text-xl md:text-2xl lg:text-3xl font-arabic text-amber-200 text-right leading-[2.1] dir-rtl select-text"
                dir="rtl" 
                lang="ar"
              >
                فَمِنَ الْأَصْوَاتِ مَا يُفَرِّحُ، وَمِنْهَا مَا يُحْزِنُ، وَمِنْهَا مَا يُنَوِّمُ
              </p>
            </div>
            <p className="text-xs text-white/90 italic leading-snug pt-1 border-t border-white/5">
              “Di antara suara ada yang menggembirakan, ada yang menyedihkan, dan ada pula yang mengantar tidur tenang.”
            </p>
          </div>
        </div>

        {/* 4 Spheres of Influence (Clean 4-column horizontal cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 shrink-0 my-1">
          {influenceCategories.map((cat) => (
            <div 
              key={cat.id} 
              className="p-3 rounded-xl bg-[#181818] border border-white/10 flex flex-col justify-between space-y-1.5"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-1">
                <span className="text-[10px] font-mono font-bold text-white/40">{cat.num}</span>
                <span className={`text-xs font-arabic font-bold ${cat.color}`} dir="rtl" lang="ar">
                  {cat.arabicRef}
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white leading-tight">{cat.title}</h4>
                <p className="text-[11px] text-[#CCCCCC] leading-snug mt-1">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Principle Callout */}
        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between gap-3 shrink-0">
          <p className="text-[11px] md:text-xs text-amber-200/95 leading-snug">
            <strong>Prinsip Al-Ghazali:</strong> Suara bukan sarana mekanis otomatis; ia membangkitkan apa yang paling dominan di dalam hati pendengar.
          </p>
          <span className="text-[10px] font-mono text-white/40 shrink-0 hidden sm:inline">
            Iḥyā’ ‘Ulūm al-Dīn
          </span>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40 shrink-0">
          <span>Kutipan Sahih: Iḥyā’ ‘Ulūm al-Dīn (Bab Ādāb al-Samā‘ wa al-Wajd)</span>
          <span className="text-[#1DB954] font-semibold">{slide.mainMessage}</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 6: KONSEP SAMA'IY (PEMBUKA PEMBAHASAN INTI)
  // ---------------------------------------------------------------------------
  if (slide.id === 6) {
    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-6 md:p-8 flex flex-col gap-4 lg:gap-0 lg:justify-between">
        {/* Header */}
        <div className="border-b border-white/10 pb-3 flex items-start justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              KONSEP SAMĀ‘IY
            </h2>
            <p className="text-sm md:text-base text-[#D1D5DB] font-medium mt-0.5">
              Hubungan Terpadu antara Pendengaran, Pengalaman Batin, dan Tindakan Manusia
            </p>
          </div>
        </div>

        {/* Center: 3 Pillar Horizontal Visual (Telinga, Hati, Tindakan) */}
        <div className="my-auto py-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            {/* 1. Pendengaran (Telinga / Stimulus) */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#181818] border border-cyan-500/20 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 relative group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Ear className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  Gerbang Awal
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-extrabold text-white">
                  1. Pendengaran (Samā‘)
                </h3>
                <p className="text-xs text-cyan-200/80 font-mono">
                  Stimulus Suara & Makna
                </p>
                <p className="text-xs md:text-sm text-[#D1D5DB] leading-relaxed pt-1">
                  Menerima getaran suara, nada berirama, dan pesan dari apa yang didengar melalui indera pendengaran yang terbuka.
                </p>
              </div>
              <div className="text-[11px] text-[#A7A7A7] pt-2 border-t border-white/5">
                Keterbukaan indera menyerap keindahan dan pesan.
              </div>
            </div>

            {/* 2. Pengalaman Batin (Hati / Transformasi Jiwa) */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#181818] border border-amber-500/25 hover:border-amber-500/45 transition-all flex flex-col justify-between space-y-4 relative group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  Pusat Respons
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-extrabold text-white">
                  2. Pengalaman Batin (Qalb)
                </h3>
                <p className="text-xs text-amber-200/80 font-mono">
                  Pengolahan Kalbu & Rasa (Wajd)
                </p>
                <p className="text-xs md:text-sm text-[#D1D5DB] leading-relaxed pt-1">
                  Makna yang didengar menyentuh hati, memantik rahasia batin, serta membangkitkan getaran rasa haru, tenang, atau kesadaran diri.
                </p>
              </div>
              <div className="text-[11px] text-[#A7A7A7] pt-2 border-t border-white/5">
                Menghidupkan kesadaran dan kepekaan ruhani.
              </div>
            </div>

            {/* 3. Respons Perilaku (Tindakan / Aktivitas Anggota Tubuh) */}
            <div className="p-5 md:p-6 rounded-2xl bg-[#181818] border border-[#1DB954]/25 hover:border-[#1DB954]/45 transition-all flex flex-col justify-between space-y-4 relative group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#1DB954]/10 border border-[#1DB954]/20 text-[#1DB954] flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-[#1DB954] bg-[#1DB954]/10 px-2.5 py-1 rounded-full border border-[#1DB954]/20">
                  Perwujudan Akhlak
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-extrabold text-white">
                  3. Tindakan Nyata ('Amal)
                </h3>
                <p className="text-xs text-[#1DB954]/80 font-mono">
                  Gerak Anggota Tubuh (Harakāt)
                </p>
                <p className="text-xs md:text-sm text-[#D1D5DB] leading-relaxed pt-1">
                  Keadaan batin terwujud dalam gerakan anggota tubuh: pengendalian emosi, kehati-hatian lisan, dan perbaikan perilaku sehari-hari.
                </p>
              </div>
              <div className="text-[11px] text-[#A7A7A7] pt-2 border-t border-white/5">
                Transformasi batin menjadi keluhuran akhlak nyata.
              </div>
            </div>
          </div>

          {/* Core Insight Callout */}
          <div className="mt-5 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#1DB954] shrink-0" />
            <p className="text-xs md:text-sm text-white/90 leading-relaxed">
              <strong>Pesan Kunci:</strong> Pengalaman mendengar memiliki tahapan yang saling berkaitan. Sesuatu yang didengar terlebih dahulu dipahami, kemudian menghasilkan keadaan batin, dan selanjutnya memunculkan tindakan nyata.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40">
          <span>Kajian Konseptual Samā‘iy Imam Al-Ghazali</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 06</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 7: TIGA TAHAPAN SAMA'IY (FAHMUN, WAJDUN, HARAKATUN)
  // ---------------------------------------------------------------------------
  if (slide.id === 7) {
    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-6 md:p-8 flex flex-col gap-4 lg:gap-0 lg:justify-between">
        {/* Header */}
        <div className="border-b border-white/10 pb-3 flex items-start justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              TIGA TAHAPAN SAMA’IY
            </h2>
            <p className="text-sm md:text-base text-[#D1D5DB] font-medium mt-0.5">
              Fahmun (Kognisi), Wajdun (Afeksi), dan Harakātun (Konasi) menurut Imam Al-Ghazali
            </p>
          </div>
        </div>

        {/* 3 Horizontal Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-1">
          {/* 1. Fahmun */}
          <div className="p-4 md:p-5 rounded-2xl bg-[#181818] border border-cyan-500/30 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono font-bold text-cyan-300">01. TAHAP KOGNISI</span>
                <span className="text-lg font-arabic text-cyan-300" dir="rtl" lang="ar">فَهْمٌ</span>
              </div>
              <h3 className="text-base font-extrabold text-white mt-2">
                FAHMUN (ILMU)
              </h3>
              <p className="text-xs md:text-sm text-[#D1D5DB] leading-relaxed mt-1">
                Tahap pemahaman terhadap apa yang didengar. Tidak sekadar menangkap bunyi, melainkan mencerna makna dan nilai luhur (misal: memahami esensi kesabaran).
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-cyan-200/90 flex items-center gap-2">
              <Brain className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Dimensi:</strong> Kognisi & pengolahan makna akal.</span>
            </div>
          </div>

          {/* 2. Wajdun */}
          <div className="p-4 md:p-5 rounded-2xl bg-[#181818] border border-amber-500/30 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono font-bold text-amber-300">02. TAHAP AFEKSI</span>
                <span className="text-lg font-arabic text-amber-300" dir="rtl" lang="ar">وَجْدٌ</span>
              </div>
              <h3 className="text-base font-extrabold text-white mt-2">
                WAJDUN (HAL)
              </h3>
              <p className="text-xs md:text-sm text-[#D1D5DB] leading-relaxed mt-1">
                Keadaan batiniah yang muncul saat pemahaman menyentuh hati. Melahirkan getaran afeksi: ketenangan, rasa haru, penyesalan, atau dorongan taubat.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-amber-200/90 flex items-center gap-2">
              <Heart className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Dimensi:</strong> Afeksi & pengalaman batiniah kalbu.</span>
            </div>
          </div>

          {/* 3. Harakatun */}
          <div className="p-4 md:p-5 rounded-2xl bg-[#181818] border border-[#1DB954]/30 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs font-mono font-bold text-[#1DB954]">03. TAHAP KONASI</span>
                <span className="text-lg font-arabic text-[#1DB954]" dir="rtl" lang="ar">حَرَكَاتٌ</span>
              </div>
              <h3 className="text-base font-extrabold text-white mt-2">
                HARAKĀTUN ('AMAL)
              </h3>
              <p className="text-xs md:text-sm text-[#D1D5DB] leading-relaxed mt-1">
                Gerakan dan respons nyata anggota tubuh: mengendalikan amarah, menjaga lisan, dan mewujudkan komitmen perbaikan akhlak dalam tindakan sehari-hari.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-[#1DB954]/90 flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#1DB954] shrink-0" />
              <span><strong>Dimensi:</strong> Konasi, kehendak, dan amal perbuatan.</span>
            </div>
          </div>
        </div>

        {/* Primary Arabic Quote of Al-Ghazali at bottom */}
        <div className="p-4 rounded-2xl bg-[#181818] border border-amber-500/25 space-y-2">
          <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
            <span className="text-xs font-mono font-bold text-amber-400">
              Landasan Pemikiran Imam Al-Ghazali:
            </span>
            <span className="text-[10px] text-white/50">Iḥyā’ ‘Ulūm al-Dīn</span>
          </div>
          <p className="text-base md:text-lg font-arabic text-amber-200 text-right leading-relaxed dir-rtl select-text" dir="rtl" lang="ar">
            أَوَّلُ دَرَجَةِ السَّمَاعِ فَهْمُ الْمَسْمُوعِ، ثُمَّ يُثْمِرُ الْفَهْمُ الْوَجْدَ، وَيُثْمِرُ الْوَجْدُ الْحَرَكَةَ بِالْجَوَارِحِ
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/90 gap-1 pt-1 border-t border-white/5">
            <p className="italic">
              “Tingkatan pertama Samā' adalah memahami sesuatu yang didengar. Kemudian pemahaman menghasilkan Wajd, dan Wajd menghasilkan gerakan melalui anggota tubuh.”
            </p>
            <span className="text-[10px] text-white/40 shrink-0 font-mono">
              (Kognisi, afeksi, konasi: pendekatan interpretatif)
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40">
          <span>Rumusan Alur: Samā‘ ➔ Fahmun (Kognisi) ➔ Wajdun (Afeksi) ➔ Harakātun (Konasi)</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 07</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 8: DEFINISI TERAPI SAMA'IY
  // ---------------------------------------------------------------------------
  if (slide.id === 8) {
    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-6 md:p-8 flex flex-col gap-4 lg:gap-0 lg:justify-between">
        {/* Header */}
        <div className="border-b border-white/10 pb-3 flex items-start justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              DEFINISI TERAPI SAMĀ‘IY
            </h2>
            <p className="text-sm md:text-base text-[#D1D5DB] font-medium mt-0.5">
              Pendengaran sebagai Pendekatan Utama dalam Mengondisikan Keadaan Jiwa dan Akhlak
            </p>
          </div>
        </div>

        {/* Central Definition Statement Banner */}
        <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-[#1DB954]/15 via-[#181818] to-black border-l-4 border-[#1DB954] border-y border-r border-white/10">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#1DB954] block mb-1">
            Rumusan Definisi Konseptual:
          </span>
          <p className="text-sm md:text-base text-white font-extrabold tracking-wide leading-relaxed">
            “PENDENGARAN (SAMĀ‘) MENJADI PENDEKATAN TERAPI YANG PALING UTAMA DALAM MENGONDISIKAN KEADAAN JIWA MELALUI PROSES KOGNISI (ILMU) YANG AKAN MENGUBAH AFEKSI (ḤĀL) DAN AKAN MEMBENTUK PERILAKU (‘AMAL) YANG BERNILAI AKHLAK.”
          </p>
        </div>

        {/* 3 Dimensions to Ultimate Goal Flow */}
        <div className="grid grid-cols-12 gap-4 my-auto items-stretch py-1 flex-1">
          {/* Left: 3 Process Stages (Kognisi, Afeksi, Konasi) */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
            {/* Dimensi 1: Kognisi */}
            <div className="p-4 rounded-2xl bg-[#181818] border border-white/10 flex flex-col justify-between space-y-2">
              <div>
                <span className="text-[11px] font-mono text-cyan-300 font-bold block">1. KOGNISI (ILMU)</span>
                <h4 className="text-sm font-bold text-white mt-1">Hadirkan Pemahaman</h4>
                <p className="text-xs text-[#CCCCCC] leading-relaxed mt-1">
                  Pendengaran diarahkan untuk menangkap pesan dan kesadaran makna dari apa yang didengar.
                </p>
              </div>
              <div className="text-[10px] text-cyan-200/70 border-t border-white/5 pt-1.5 font-mono">
                Contoh: Paham hikmah & bahaya kelalaian
              </div>
            </div>

            {/* Dimensi 2: Afeksi */}
            <div className="p-4 rounded-2xl bg-[#181818] border border-white/10 flex flex-col justify-between space-y-2">
              <div>
                <span className="text-[11px] font-mono text-amber-300 font-bold block">2. AFEKSI (HAL)</span>
                <h4 className="text-sm font-bold text-white mt-1">Sentuh Kalbu</h4>
                <p className="text-xs text-[#CCCCCC] leading-relaxed mt-1">
                  Pemahaman menyentuh hati dan mengarahkan keadaan batiniah menuju kondisi yang lebih tenang dan mulia.
                </p>
              </div>
              <div className="text-[10px] text-amber-200/70 border-t border-white/5 pt-1.5 font-mono">
                Contoh: Kalbu sadar & hening
              </div>
            </div>

            {/* Dimensi 3: Konasi */}
            <div className="p-4 rounded-2xl bg-[#181818] border border-white/10 flex flex-col justify-between space-y-2">
              <div>
                <span className="text-[11px] font-mono text-emerald-300 font-bold block">3. KONASI ('AMAL)</span>
                <h4 className="text-sm font-bold text-white mt-1">Wujudkan Tindakan</h4>
                <p className="text-xs text-[#CCCCCC] leading-relaxed mt-1">
                  Keadaan batin diwujudkan dalam tindakan nyata: menahan emosi, menjaga lisan, dan melatih sabar.
                </p>
              </div>
              <div className="text-[10px] text-emerald-200/70 border-t border-white/5 pt-1.5 font-mono">
                Contoh: Kendalikan perilaku sehari-hari
              </div>
            </div>
          </div>

          {/* Right: Ultimate Goal & Arabic Calligraphy Badge */}
          <div className="col-span-12 lg:col-span-4 p-4 rounded-2xl bg-gradient-to-b from-[#1DB954]/20 via-[#181818] to-black border border-[#1DB954]/40 flex flex-col justify-between space-y-2.5 shadow-lg shadow-[#1DB954]/10">
            <div>
              <span className="text-[11px] font-mono text-[#1DB954] font-bold block uppercase tracking-wider">TUJUAN UTAMA</span>
              <h4 className="text-sm md:text-base font-black text-white mt-0.5">PEMBENTUKAN AKHLAK</h4>
              <p className="text-xs text-white/80 leading-relaxed mt-1">
                Bukan sekadar kenyamanan mendengar sesaat, melainkan pembinaan watak dan keluhuran pekerti (<em>tahdhīb an-nafs</em>).
              </p>
            </div>
            
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-center space-y-1.5 flex-1 flex flex-col justify-center">
              <p className="text-xl md:text-2xl font-arabic text-emerald-200 leading-relaxed select-text" dir="rtl" lang="ar">
                وَالْغَايَةُ الْقُصْوَى تَهْذِيبُ الْأَخْلَاقِ وَتَزْكِيَةُ النُّفُوسِ
              </p>
              <span className="text-[11px] text-emerald-300/80 font-medium block">
                Tujuan Puncak: Pembinaan Watak & Keluhuran Akhlak
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40 shrink-0">
          <span>Kajian Konseptual: Pembinaan Jiwa Berlandaskan Pemikiran Al-Ghazali</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 08</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 9: JIWA YANG SEHAT & KEPEKAAN BATIN
  // ---------------------------------------------------------------------------
  if (slide.id === 9) {
    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-4 md:p-5 lg:p-6 flex flex-col gap-4 lg:gap-0 lg:justify-between select-none">
        {/* Header */}
        <div className="border-b border-white/10 pb-2.5 flex items-start justify-between shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
              JIWA YANG SEHAT
            </h2>
            <p className="text-xs md:text-sm text-[#D1D5DB] font-medium mt-0.5">
              Hubungan antara Kesehatan Jiwa, Kepekaan Batin, dan Kemampuan Merasakan Keindahan
            </p>
          </div>
        </div>

        {/* 3 Interconnected Elements Grid with Prominent Arabic Quote */}
        <div className="grid grid-cols-12 gap-4 my-auto items-stretch py-1 flex-1 min-h-0">
          {/* Left Column: 3 Ilustrasi Simbolik & Refleksi Akademik */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-between space-y-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* 1. Semilir Angin */}
              <div className="p-3 rounded-xl bg-[#181818] border border-cyan-500/20 space-y-1">
                <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-xs">
                  <Wind className="w-3.5 h-3.5 shrink-0" />
                  <span>Semilir Angin</span>
                </div>
                <p className="text-[11px] text-[#CCCCCC] leading-snug">
                  Kelembutan dan kehalusan semilir alam yang menenteramkan batin.
                </p>
              </div>

              {/* 2. Bunga-Bunga */}
              <div className="p-3 rounded-xl bg-[#181818] border border-emerald-500/20 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-300 font-bold text-xs">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>Bunga-Bunga</span>
                </div>
                <p className="text-[11px] text-[#CCCCCC] leading-snug">
                  Keindahan visual yang menyadarkan fitrah jiwa akan tanda keindahan.
                </p>
              </div>

              {/* 3. Seruling Musim Semi */}
              <div className="p-3 rounded-xl bg-[#181818] border border-amber-500/20 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs">
                  <Music className="w-3.5 h-3.5 shrink-0" />
                  <span>Petikan Nada</span>
                </div>
                <p className="text-[11px] text-[#CCCCCC] leading-snug">
                  Harmoni nada teratur yang menyentuh afeksi batiniah manusia.
                </p>
              </div>
            </div>

            {/* Academic Reflection Box */}
            <div className="p-3.5 rounded-2xl bg-[#181818] border border-white/10 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1DB954] block">
                  Hubungan dengan Terapi Samā‘iy
                </span>
                <p className="text-xs md:text-sm text-[#D1D5DB] leading-relaxed mt-1">
                  Kepekaan batin merupakan aspek esensial karena pengalaman mendengar melibatkan hati, bukan sekadar organ telinga. Suara menjadi pemantik, namun respons bergantung pada keterbukaan dan kesiapan jiwa pendengar.
                </p>
              </div>
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[11px] text-amber-200/90 leading-snug">
                <strong>Catatan Akademik:</strong> Ungkapan ini dipertahankan sebagai ilustrasi filosofis tentang kepekaan jiwa, bukan kriteria diagnosis klinis medis.
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Arabic Calligraphy Quote from Ihya' */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
            <div className="p-4 md:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col justify-between space-y-3 shadow-lg">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block border-b border-white/5 pb-1">
                Kalam Hikmah Imam Al-Ghazali:
              </span>
              <p className="text-xl md:text-2xl lg:text-3xl font-arabic text-amber-200 text-right leading-[2.2] dir-rtl select-text" dir="rtl" lang="ar">
                مَنْ لَمْ يُحَرِّكْهُ الرَّبِيعُ وَأَزْهَارُهُ، وَالْعُودُ وَأَوْتَارُهُ، فَهُوَ فَاسِدُ الْمِزَاجِ، لَيْسَ لَهُ عِلَاجٌ
              </p>
              <div className="pt-2 border-t border-white/10">
                <p className="text-xs text-white/90 italic leading-relaxed">
                  “Barang siapa yang tidak tergerak oleh musim semi dan bunganya, serta petikan nada dan dawainya, maka tabiat batinnya telah rusak dan tiada obat baginya.”
                </p>
                <span className="text-[10px] font-mono text-white/40 block mt-1">
                  Iḥyā’ ‘Ulūm al-Dīn — Kitāb Ādāb al-Samā‘ wa al-Wajd
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40 shrink-0">
          <span>Kepekaan Batin sebagai Unsur Kunci Pengalaman Samā‘iy</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 09</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 10: EMPAT TINGKATAN MUSTAMI'
  // ---------------------------------------------------------------------------
  if (slide.id === 10) {
    const mustamiLevels = [
      {
        level: '4',
        name: 'Mujāwazatu al-Ahwāl wa al-Maqāmāt',
        arabic: 'مُجَاوَزَةُ الْأَحْوَالِ وَالْمَقَامَاتِ',
        title: 'Tingkat 4: Melampaui Ahwal & Maqamat (Fanā\' & Baqā\')',
        badge: 'Puncak Spiritual',
        desc: 'Pengalaman spiritual melampaui ego dan keakuan diri. Menghadirkan kesadaran hakiki kepada Allah (Fanā\' & Baqā\').',
        color: 'border-[#1DB954] bg-[#1DB954]/10 text-[#1DB954]'
      },
      {
        level: '3',
        name: 'Mu\'āmalah Ma\'allāh',
        arabic: 'مُعَامَلَةٌ مَعَ اللهِ',
        title: 'Tingkat 3: Hubungan Spiritual dengan Allah',
        badge: 'Orientasi Ketuhanan',
        desc: 'Menjadikan pengalaman mendengar sebagai sarana mengingat Allah, memperdalam mahabbah, dan membangun ikatan spiritual.',
        color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
      },
      {
        level: '2',
        name: 'Bi Fahmin wa Tanzīl',
        arabic: 'بِفَهْمٍ وَتَنْزِيلٍ عَلَى صُورَةِ مَخْلُوقٍ',
        title: 'Tingkat 2: Pemahaman Keindahan Makhluk',
        badge: 'Orientasi Makhluk',
        desc: 'Memahami makna lagu dan syair, namun orientasi penghayatan masih tertuju pada cinta dan keindahan makhluk manusia.',
        color: 'border-amber-500/40 bg-amber-500/10 text-amber-300'
      },
      {
        level: '1',
        name: 'Mujarradu ath-Thabī\'iy',
        arabic: 'مُجَرَّدُ الطَّبِيعِي',
        title: 'Tingkat 1: Kenikmatan Alami / Musikal Semata',
        badge: 'Tingkat Dasar',
        desc: 'Mendengarkan semata-mata karena keindahan irama lagu tanpa menghubungkannya dengan penghayatan spiritual.',
        color: 'border-white/10 bg-white/5 text-white/80'
      }
    ];

    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-4 md:p-5 lg:p-6 flex flex-col gap-4 lg:gap-0 lg:justify-between select-none">
        {/* Header */}
        <div className="border-b border-white/10 pb-2.5 flex items-start justify-between shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
              TINGKATAN MUSTAMI’
            </h2>
            <p className="text-xs md:text-sm text-[#D1D5DB] font-medium mt-0.5">
              Empat Tingkatan Pendengar Berdasarkan Orientasi dan Kesiapan Spiritual
            </p>
          </div>
          <span className="hidden md:inline-block text-xs font-arabic text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/25" dir="rtl" lang="ar">
            مَرَاتِبُ الْمُسْتَمِعِينَ
          </span>
        </div>

        {/* 4-Tier Ascending Ladder */}
        <div className="grid grid-cols-12 gap-4 my-auto items-stretch py-1 flex-1 min-h-0">
          {/* Left Column: 4 Levels (from 4 at top to 1 at bottom) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-between space-y-2">
            {mustamiLevels.map((lvl) => (
              <div 
                key={lvl.level}
                className={`p-3 md:p-3.5 rounded-xl border flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-3 transition-colors ${lvl.color}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-7 h-7 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center font-mono font-black text-xs shrink-0">
                    {lvl.level}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h4 className="text-xs md:text-sm font-bold text-white lg:truncate">
                        {lvl.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/10 shrink-0 hidden sm:inline">
                        {lvl.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#D1D5DB] lg:line-clamp-1 mt-0.5">
                      {lvl.desc}
                    </p>
                  </div>
                </div>

                <span className="text-sm md:text-base font-arabic text-amber-300 shrink-0 self-end lg:self-auto" dir="rtl" lang="ar">
                  {lvl.arabic}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Implikasi Terapi Samā'iy & Prominent Arabic Badge */}
          <div className="col-span-12 lg:col-span-4 p-4 rounded-2xl bg-[#181818] border border-white/10 flex flex-col justify-between space-y-2.5">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1DB954] block">
                Implikasi Terapi Samā‘iy:
              </span>
              <p className="text-xs text-[#D1D5DB] leading-relaxed">
                Dua orang dapat mendengar lantunan yang sama, namun memperoleh rasa batin yang berbeda karena perbedaan kesiapan spiritual.
              </p>
              <p className="text-xs text-[#A7A7A7] leading-relaxed">
                Terapi Samā‘iy diarahkan bertahap: dari menikmati keindahan nada menuju penghayatan dan pembinaan akhlak.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-center space-y-1.5 flex-1 flex flex-col justify-center">
              <p className="text-xl md:text-2xl font-arabic text-amber-200 leading-relaxed select-text" dir="rtl" lang="ar">
                السَّمَاعُ عَلَى قَدْرِ صَفَاءِ الْقُلُوبِ وَمَرَاتِبِهَا
              </p>
              <span className="text-[11px] text-amber-300/80 font-medium block">
                Buah Pendengaran Selaras dengan Kejernihan Relung Hati
              </span>
            </div>

            <div className="p-2 rounded-xl bg-black/40 border border-white/5 text-[11px] text-white/60 leading-snug">
              <strong>Prinsip:</strong> Pendengar tidak diseragamkan; pembinaan jiwa berlangsung bertahap (<em>tadarruj</em>).
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40 shrink-0">
          <span>Klasifikasi Mustami‘ Berdasarkan Kesiapan Ruhani</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 10</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 11: TUJUAN TERAPI SAMĀ‘IY AL-GHAZALI
  // ---------------------------------------------------------------------------
  if (slide.id === 11) {
    const readyPoints = [
      'Menggerakkan dan menyingkap keadaan hati (aḥwāl).',
      'Menguatkan kesadaran, ingatan, dan perhatian kepada Allah.',
      'Membangkitkan keadaan rohani seperti khauf, raja’, mahabbah, syauq, dan penyesalan.',
      'Mengarahkan gerak batin menuju ketaatan, perbaikan diri, dan kedekatan kepada Allah.',
      'Menempatkan samā‘ dalam adab, ilmu, dan pengendalian diri.'
    ];

    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-4 md:p-5 lg:p-6 flex flex-col gap-4 lg:gap-0 lg:justify-between select-none">
        {/* Header */}
        <div className="border-b border-white/10 pb-2.5 flex items-start justify-between shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
              TUJUAN TERAPI SAMĀ‘IY AL-GHAZALI
            </h2>
            <p className="text-xs md:text-sm text-[#D1D5DB] font-medium mt-0.5">
              Menyingkap Isi Hati, Mengarahkan Gerak Batin, dan Menuju Kedekatan kepada Allah
            </p>
          </div>
        </div>

        {/* Main Content: Left Ready Text vs Right Explanations */}
        <div className="grid grid-cols-12 gap-4 my-auto items-stretch py-1 flex-1 min-h-0">
          {/* Left Column: Teks Slide Siap Tempel */}
          <div className="col-span-12 lg:col-span-6 p-4 md:p-5 rounded-2xl bg-[#181818] border border-amber-500/25 flex flex-col justify-between space-y-2.5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-2">
                Tujuan Pokok Samā‘ (Imam Al-Ghazali):
              </span>
              <ul className="space-y-1.5 text-xs md:text-sm text-[#E0E0E0]">
                {readyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prominent Arabic Quote Badge */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-center space-y-1 my-1">
              <p className="text-lg md:text-xl font-arabic text-amber-200 leading-relaxed select-text" dir="rtl" lang="ar">
                السَّمَاعُ لَا يُنْتِجُ فِي الْقَلْبِ مَا لَيْسَ فِيهِ، بَلْ يُحَرِّكُ مَا هُوَ كَامِنٌ فِيهِ
              </p>
              <span className="text-[11px] text-amber-300/80 font-medium block italic">
                “Samā‘ tidak menghasilkan sesuatu yang baru, melainkan menggerakkan apa yang telah terpendam.”
              </span>
            </div>

            <p className="text-xs text-white/60 leading-relaxed pt-1.5 border-t border-white/5">
              Samā‘ bukan sekadar hiburan sesaat, melainkan sarana yang menggerakkan potensi batin yang telah ada.
            </p>
          </div>

          {/* Right Column: Uraian Penjelasan Pemateri */}
          <div className="col-span-12 lg:col-span-6 p-4 md:p-5 rounded-2xl bg-[#181818] border border-white/10 flex flex-col justify-between space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1DB954] block">
              Pokok Penjelasan Pemateri:
            </span>

            <div className="space-y-2.5 flex-1 flex flex-col justify-around">
              <div className="space-y-0.5">
                <h4 className="text-xs md:text-sm font-bold text-amber-300">
                  1. Hati sebagai Khazanah & Nada sebagai Pemantik
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Isi hati tersembunyi ibarat api dalam batu dan air di bawah tanah. Nada yang teratur menjadi pemantik (<em>qawādiḥ</em>) yang menyingkap apa yang dominan dalam diri pendengar.
                </p>
              </div>

              <div className="space-y-0.5">
                <h4 className="text-xs md:text-sm font-bold text-[#1DB954]">
                  2. Wajd Diarahkan oleh Ilmu dan Adab
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Keadaan batin yang muncul (<em>wajd</em>) tidak boleh dibiarkan menjadi luapan emosi sesaat, melainkan harus ditimbang dengan ilmu dan diarahkan menjadi amal saleh.
                </p>
              </div>

              <div className="space-y-0.5">
                <h4 className="text-xs md:text-sm font-bold text-cyan-300">
                  3. Puncak Kejernihan Tauhid
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Tujuan tertinggi adalah ketika perhatian pendengar tidak lagi terpaku pada ego atau rasa nikmat musikal, melainkan tertuju sepenuhnya kepada Allah.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Principle Callout */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-4 mt-1 shrink-0">
          <p className="text-[11px] md:text-xs text-white/90 leading-snug">
            <strong>Prinsip Penilaian Al-Ghazali:</strong> Samā‘ adalah sarana, bukan tujuan akhir. Ukuran keberhasilan rohani bukan kerasnya tangisan atau gerakan tubuh, melainkan arah perubahan batin dan amal nyata.
          </p>
          <span className="text-[10px] font-mono text-white/40 shrink-0 hidden sm:inline">
            Iḥyā’ ‘Ulūm al-Dīn
          </span>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40 shrink-0">
          <span>Kajian Batiniah Tasawuf Imam Al-Ghazali</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 11</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 12: BAGAIMANA AL-FARABI MEMAHAMI MUSIK?
  // ---------------------------------------------------------------------------
  if (slide.id === 12) {
    const readyPoints = [
      'Musik tersusun dari bunyi/nada dengan tinggi-rendah tertentu.',
      'Susunan nada membentuk melodi dan pola irama yang terukur.',
      'Keteraturan musikal memengaruhi pengalaman pendengar.',
      'Musik dapat dipahami secara teoritis sekaligus dipraktikkan melalui suara dan instrumen.',
      'Kajian musik menuntut pemahaman tentang unsur dan hubungan antarunsurnya.'
    ];

    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-4 md:p-5 lg:p-6 flex flex-col gap-4 lg:gap-0 lg:justify-between select-none">
        {/* Header */}
        <div className="border-b border-white/10 pb-2.5 flex items-start justify-between shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
              BAGAIMANA AL-FARABI MEMAHAMI MUSIK?
            </h2>
            <p className="text-xs md:text-sm text-[#D1D5DB] font-medium mt-0.5">
              Al-Farabi: Musik sebagai Ilmu dan Seni yang Terstruktur
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-4 my-auto items-stretch py-1 flex-1 min-h-0">
          {/* Left Column: Teks Slide Siap Tempel */}
          <div className="col-span-12 lg:col-span-6 p-4 md:p-5 rounded-2xl bg-[#181818] border border-cyan-500/25 flex flex-col justify-between space-y-2.5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-2">
                Hakikat Musik (Kitāb al-Mūsīqā al-Kabīr):
              </span>
              <ul className="space-y-1.5 text-xs md:text-sm text-[#E0E0E0]">
                {readyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prominent Arabic Quote Badge */}
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-center space-y-1 my-1">
              <p className="text-base md:text-lg font-arabic text-cyan-200 leading-relaxed select-text" dir="rtl" lang="ar">
                صِنَاعَةُ الْمُوسِيقَى تَشْتَمِلُ عَلَى تَأْلِيفِ النَّغَمِ وَالْإِيقَاعِ لِتَغْذِيَةِ النَّفْسِ
              </p>
              <span className="text-[11px] text-cyan-300/80 font-medium block italic">
                “Seni musik merangkul susunan nada dan ritme teratur demi merawat jiwa.”
              </span>
            </div>

            <p className="text-xs text-white/60 leading-relaxed pt-1.5 border-t border-white/5">
              Musik ditempatkan sebagai ilmu sistematis, bukan sekadar hiburan atau ekspresi spontan.
            </p>
          </div>

          {/* Right Column: Tiga Unsur Penjelas Musik */}
          <div className="col-span-12 lg:col-span-6 p-4 md:p-5 rounded-2xl bg-[#181818] border border-white/10 flex flex-col justify-between space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1DB954] block">
              Tiga Unsur Penjelas Karakter Musik:
            </span>

            <div className="space-y-2.5 flex-1 flex flex-col justify-around">
              <div className="space-y-0.5">
                <h4 className="text-xs md:text-sm font-bold text-cyan-300">
                  1. Tinggi-Rendah Nada (Pitch / Naghamāt)
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Bahan dasar bunyi teratur yang memiliki frekuensi tertentu dan hubungan interval matematis terukur.
                </p>
              </div>

              <div className="space-y-0.5">
                <h4 className="text-xs md:text-sm font-bold text-[#1DB954]">
                  2. Susunan Melodi (Laḥn)
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Rangkaian nada yang disusun harmonis membentuk alur musikal utuh yang dapat dirasakan.
                </p>
              </div>

              <div className="space-y-0.5">
                <h4 className="text-xs md:text-sm font-bold text-amber-300">
                  3. Pola Irama (Īqā‘)
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Pengaturan pola waktu, ketukan, sukat, dan durasi bunyi yang memberi denyut kesinambungan tempo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-4 mt-1 shrink-0">
          <p className="text-[11px] md:text-xs text-white/90 leading-snug">
            <strong>Keunggulan Al-Farabi:</strong> Jika Al-Ghazali menelaah gerak hati pendengar, Al-Farabi menjelaskan apa yang membentuk musik: susunan bunyi, ukuran, dan keteraturan pola musikal.
          </p>
          <span className="text-[10px] font-mono text-white/40 shrink-0 hidden sm:inline">
            Kitāb al-Mūsīqā al-Kabīr
          </span>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40 shrink-0">
          <span>Kajian Teori Musik & Akustik Islam Klasik</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 12</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 13: MUSIK DAN PENGARUHNYA TERHADAP JIWA
  // ---------------------------------------------------------------------------
  if (slide.id === 13) {
    const readyPoints = [
      'Nada dan susunan melodi dapat membentuk suasana musikal.',
      'Irama dan tempo memberi kesan gerak, ketenangan, atau ketegangan.',
      'Syair dan makna yang didengar ikut mengarahkan penghayatan.',
      'Respons pendengar dapat berupa tenang, gembira, sedih, rindu, atau tergerak.',
      'Pengaruh musik bergantung pada karakter musik dan keadaan pendengarnya.'
    ];

    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-4 md:p-5 lg:p-6 flex flex-col gap-4 lg:gap-0 lg:justify-between select-none">
        {/* Header */}
        <div className="border-b border-white/10 pb-2.5 flex items-start justify-between shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
              MUSIK DAN PENGARUHNYA TERHADAP JIWA
            </h2>
            <p className="text-xs md:text-sm text-[#D1D5DB] font-medium mt-0.5">
              Hubungan Karakter Musik, Makna Syair, dan Pengalaman Pendengar
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-4 my-auto items-stretch py-1 flex-1 min-h-0">
          {/* Left Column: Teks Slide Siap Tempel */}
          <div className="col-span-12 lg:col-span-6 p-4 md:p-5 rounded-2xl bg-[#181818] border border-[#1DB954]/25 flex flex-col justify-between space-y-2.5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1DB954] block mb-2">
                Karakteristik Pengaruh Musik:
              </span>
              <ul className="space-y-1.5 text-xs md:text-sm text-[#E0E0E0]">
                {readyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prominent Arabic Quote Badge */}
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-center space-y-1 my-1">
              <p className="text-base md:text-lg font-arabic text-emerald-200 leading-relaxed select-text" dir="rtl" lang="ar">
                النَّغَمَاتُ الْمُتَنَاسِبَةُ تُحْدِثُ فِي النَّفْسِ اعْتِدَالًا وَطُمَأْنِينَةً
              </p>
              <span className="text-[11px] text-emerald-300/80 font-medium block italic">
                “Melodi yang harmonis melahirkan keselarasan dan ketenteraman batin pada jiwa.”
              </span>
            </div>

            <p className="text-xs text-white/60 leading-relaxed pt-1.5 border-t border-white/5">
              Musik bekerja melalui keterhubungan antara komposisi nada, kedalaman syair, dan kondisi batin pendengar.
            </p>
          </div>

          {/* Right Column: Tiga Ranah Manfaat */}
          <div className="col-span-12 lg:col-span-6 p-4 md:p-5 rounded-2xl bg-[#181818] border border-white/10 flex flex-col justify-between space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block">
              Tiga Ranah Manfaat (Ro Hani & Ediyono 2019):
            </span>

            <div className="space-y-2.5 flex-1 flex flex-col justify-around">
              <div className="space-y-0.5">
                <h4 className="text-xs md:text-sm font-bold text-cyan-300">
                  1. Pengaruh terhadap Jiwa
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Susunan melodi yang harmonis membantu menghadirkan ketenteraman batin dan kestabilan emosi.
                </p>
              </div>

              <div className="space-y-0.5">
                <h4 className="text-xs md:text-sm font-bold text-amber-300">
                  2. Dukungan bagi Orientasi Spiritual
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Syair berisi puji-pujian kepada Allah dan selawat mengarahkan penghayatan pada kesadaran religius.
                </p>
              </div>

              <div className="space-y-0.5">
                <h4 className="text-xs md:text-sm font-bold text-emerald-300">
                  3. Pendamping dalam Konteks Psikosomatik
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Musik berkarakter tenang menjadi media pendamping untuk membantu relaksasi dari ketegangan emosional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Caution Callout */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-4 mt-1 shrink-0">
          <p className="text-[11px] md:text-xs text-white/90 leading-snug">
            <strong>Catatan Kehati-hatian:</strong> Efek musik tidak seragam pada setiap orang karena dipengaruhi kebiasaan, memori, budaya, dan keadaan batin. Musik dibahas sebagai sarana pendamping, bukan pengganti layanan medis profesional.
          </p>
          <span className="text-[10px] font-mono text-white/40 shrink-0 hidden sm:inline">
            Jurnal CMES (2019)
          </span>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40 shrink-0">
          <span>Kajian Hubungan Karakter Komposisi dan Respons Jiwa</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 13</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 14: AL-GHAZALI VS AL-FARABI
  // ---------------------------------------------------------------------------
  if (slide.id === 14) {
    const tableData = [
      {
        aspek: 'Fokus kajian',
        ghazali: 'Samā‘, wajd, hati, adab, dan perjalanan rohani.',
        farabi: 'Musik sebagai ilmu/seni; struktur bunyi, nada, susunan, dan irama.'
      },
      {
        aspek: 'Pertanyaan utama',
        ghazali: 'Apa yang dibangkitkan pendengaran dalam hati, dan ke mana keadaan itu diarahkan?',
        farabi: 'Bagaimana musik tersusun dan bagaimana karakter musikal berhubungan dengan pengalaman pendengar?'
      },
      {
        aspek: 'Objek perhatian',
        ghazali: 'Pendengar dan keadaan batinnya.',
        farabi: 'Musik sebagai susunan bunyi serta hubungan musikal.'
      },
      {
        aspek: 'Mekanisme pengaruh',
        ghazali: 'Samā‘ menggerakkan apa yang tersimpan dalam hati; wajd menjadi keadaan yang muncul sesudahnya.',
        farabi: 'Susunan musikal dan karakter bunyi dapat menghadirkan kesan serta respons pada jiwa.'
      },
      {
        aspek: 'Orientasi',
        ghazali: 'Penyucian/pembinaan hati, zikir, kesadaran, keikhlasan, dan kedekatan kepada Allah.',
        farabi: 'Pemahaman sistematis tentang musik; dalam kajian sekunder, dikaitkan dengan ketenteraman, spiritualitas, dan terapi.'
      },
      {
        aspek: 'Syarat atau batas',
        ghazali: 'Ilmu, adab, kesiapan pendengar, pengendalian diri, dan penilaian terhadap dampak samā‘.',
        farabi: 'Pemahaman unsur musik dan kesesuaian karakter musik dengan konteks serta keadaan pendengar.'
      },
      {
        aspek: 'Risiko salah paham',
        ghazali: 'Menganggap semua pengalaman emosional atau gerakan sebagai tanda kedekatan spiritual.',
        farabi: 'Menganggap efek maqām bersifat pasti atau bahwa rincian artikel sekunder adalah kutipan primer.'
      },
      {
        aspek: 'Sumber utama yang dipakai',
        ghazali: 'Iḥyā’ ‘Ulūm al-Dīn, Kitāb Ādāb al-Samā‘ wa al-Wajd.',
        farabi: 'Kitāb al-Mūsīqā al-Kabīr; untuk penjelasan slide digunakan kajian Ro Hani & Ediyono (2019).'
      }
    ];

    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-6 md:p-8 flex flex-col gap-4 lg:gap-0 lg:justify-between">
        {/* Header */}
        <div className="border-b border-white/10 pb-3 flex items-start justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              AL-GHAZALI VS AL-FARABI
            </h2>
            <p className="text-sm md:text-base text-[#D1D5DB] font-medium mt-0.5">
              Perbandingan Dua Pendekatan yang Saling Melengkapi
            </p>
          </div>
        </div>

        {/* 8-Aspect Comparison Table */}
        <div className="my-auto py-1 flex-1 flex flex-col justify-center overflow-hidden">
          <div className="md:hidden space-y-3">
            {tableData.map((row) => (
              <div key={row.aspek} className="rounded-xl border border-white/10 bg-[#181818] overflow-hidden">
                <div className="px-3 py-2 bg-black/50 border-b border-white/10 text-xs font-bold text-white">
                  {row.aspek}
                </div>
                <div className="p-3 space-y-2.5">
                  <div className="border-l-2 border-amber-400/70 pl-2.5">
                    <span className="block text-[11px] font-bold text-amber-300 mb-0.5">Imam Al-Ghazali</span>
                    <p className="text-xs leading-relaxed text-amber-100/90">{row.ghazali}</p>
                  </div>
                  <div className="border-l-2 border-cyan-400/70 pl-2.5">
                    <span className="block text-[11px] font-bold text-cyan-300 mb-0.5">Al-Farabi</span>
                    <p className="text-xs leading-relaxed text-cyan-100/90">{row.farabi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block overflow-x-auto rounded-xl border border-white/10 bg-[#181818]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-black/50 text-[11px] md:text-xs">
                  <th className="py-2 px-3 font-bold text-white/60 w-[22%]">
                    Aspek
                  </th>
                  <th className="py-2 px-3 font-bold text-amber-300 w-[39%] border-l border-white/10">
                    Imam Al-Ghazali
                  </th>
                  <th className="py-2 px-3 font-bold text-cyan-300 w-[39%] border-l border-white/10">
                    Al-Farabi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[11px] md:text-xs text-[#D1D5DB]">
                {tableData.map((row, idx) => (
                  <tr key={row.aspek} className={idx % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}>
                    <td className="py-1.5 px-3 font-semibold text-white/90 align-top">
                      {row.aspek}
                    </td>
                    <td className="py-1.5 px-3 border-l border-white/5 leading-relaxed text-amber-100/90 align-top">
                      {row.ghazali}
                    </td>
                    <td className="py-1.5 px-3 border-l border-white/5 leading-relaxed text-cyan-100/90 align-top">
                      {row.farabi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Synthesis Callout */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-4 mt-1">
          <p className="text-xs text-white/90 leading-snug">
            <strong>Inti Perbandingan:</strong> Al-Farabi membantu menjawab “apa itu musik dan bagaimana susunannya?”, sedangkan Al-Ghazali membantu menjawab “apa yang terjadi pada hati ketika mendengar, dan bagaimana pengalaman itu diarahkan?”. Keduanya saling melengkapi tanpa perlu dilebur menjadi satu teori tunggal.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40">
          <span>Studi Komparatif Dua Kutub Pemikiran Islam Klasik</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 14</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 15: DI MANA TITIK TEMU KEDUANYA?
  // ---------------------------------------------------------------------------
  if (slide.id === 15) {
    const readyPoints = [
      'Musik/samā‘ memiliki hubungan dengan keadaan jiwa manusia.',
      'Susunan dan karakter suara dapat membangkitkan respons batin.',
      'Pengaruh pendengaran tidak terlepas dari kondisi pendengar.',
      'Musik dapat diarahkan pada ketenteraman dan pembinaan diri.',
      'Al-Ghazali menekankan adab dan orientasi spiritual; Al-Farabi menekankan struktur serta karakter musikal.'
    ];

    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-6 md:p-8 flex flex-col gap-4 lg:gap-0 lg:justify-between">
        {/* Header */}
        <div className="border-b border-white/10 pb-3 flex items-start justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              DI MANA TITIK TEMU KEDUANYA?
            </h2>
            <p className="text-sm md:text-base text-[#D1D5DB] font-medium mt-0.5">
              Titik Temu Al-Ghazali dan Al-Farabi
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-5 my-auto items-stretch py-1 flex-1">
          {/* Left Column: Teks Slide Siap Tempel */}
          <div className="col-span-12 lg:col-span-6 p-5 rounded-2xl bg-[#181818] border border-cyan-500/25 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-3">
                Titik Temu Al-Ghazali dan Al-Farabi:
              </span>
              <ul className="space-y-2 text-xs md:text-sm text-[#E0E0E0]">
                {readyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Illustration to eliminate empty vertical space */}
            <div className="relative rounded-xl overflow-hidden border border-cyan-500/20 aspect-[16/7] shrink-0 my-1">
              <img 
                src={ghazaliFarabiHeroImg} 
                alt="Titik Temu Al-Ghazali dan Al-Farabi" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-2.5">
                <span className="text-[10px] text-cyan-200/90 font-medium leading-tight">
                  Titik Temu: Suara Berkaitan Erat dengan Kehidupan Jiwa Manusia
                </span>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed pt-2 border-t border-white/5">
              Titik temu keduanya bukan kesamaan seluruh teori, melainkan pengakuan bahwa pendengaran berkaitan langsung dengan kehidupan jiwa.
            </p>
          </div>

          {/* Right Column: Tiga Pokok Konvergensi */}
          <div className="col-span-12 lg:col-span-6 p-5 rounded-2xl bg-[#181818] border border-white/10 flex flex-col justify-between space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1DB954] block">
              Tiga Landasan Persamaan:
            </span>

            <div className="space-y-3 flex-1 flex flex-col justify-around">
              <div className="space-y-1">
                <h4 className="text-xs md:text-sm font-bold text-cyan-300">
                  1. Hubungan antara Suara dan Jiwa
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Keduanya mengakui suara teratur memiliki daya pengaruh langsung pada jiwa, bukan sekadar pengalaman pasif organ pendengaran.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs md:text-sm font-bold text-amber-300">
                  2. Pengalaman Terikat Kondisi Pendengar
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Efek suara tidak mekanis-seragam; ia sangat dipengaruhi oleh kondisi batin, pengetahuan, pengalaman, dan makna yang diserap pendengar.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs md:text-sm font-bold text-[#1DB954]">
                  3. Melampaui Sekadar Hiburan
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Musik dan samā‘ dapat diarahkan untuk ketenteraman jiwa, pengelolaan emosi, pemantik kesadaran batin, dan pembinaan diri.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-4 mt-2">
          <p className="text-xs text-white/90 leading-snug">
            <strong>Kaidah Evaluasi Bersama:</strong> Keduanya tidak mendukung kesimpulan bahwa semua musik selalu baik atau selalu buruk tanpa melihat isi syair, adab, konteks, dan dampak nyata terhadap perilaku.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40">
          <span>Sintesis Konvergensi Gagasan Islam Klasik</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 15</span>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // SLIDE 16: TERAPI SAMĀ‘IY: DARI MENDENGAR MENUJU MEMULIHKAN JIWA
  // ---------------------------------------------------------------------------
  if (slide.id === 16) {
    const steps = [
      {
        num: '01',
        title: 'Memilih suara/musik yang sesuai dan bermakna',
        desc: 'Mempertimbangkan karakter bunyi, susunan melodi, irama, syair, konteks, dan tujuan kegiatan.',
        focus: 'Prinsip Al-Farabi (Objek Musikal)'
      },
      {
        num: '02',
        title: 'Menghadirkan perhatian dan kesiapan pendengar',
        desc: 'Memperhatikan suasana, niat sadar, kesiapan fisik, serta adab pendengar agar menyimak dengan utuh.',
        focus: 'Prinsip Al-Ghazali (Kesiapan Subjek)'
      },
      {
        num: '03',
        title: 'Mengamati respons hati dan emosi yang muncul',
        desc: 'Menyadari apa yang timbul (tenang, sedih, rindu, takut) secara jujur sebagai data pengalaman awal tanpa memaksakannya.',
        focus: 'Kesadaran Batiniah (Tajribah)'
      },
      {
        num: '04',
        title: 'Memahami serta mengarahkan respons melalui refleksi & zikir',
        desc: 'Membimbing getaran batin: rasa takut menjadi kehati-hatian, harap menjadi optimisme, dan rindu tertuju kepada Allah.',
        focus: 'Transformasi Spiritual (Tarbiyah)'
      },
      {
        num: '05',
        title: 'Menjadikan pengalaman mendengar sebagai dorongan amal nyata',
        desc: 'Membuahkan perubahan nyata: hati lebih sadar, perhatian terarah, emosi tertata, dan perilaku terdorong pada keluhuran akhlak.',
        focus: 'Buah Akhlak & Amal Saleh'
      }
    ];

    return (
      <div data-slide-root className="w-full min-h-full lg:h-full p-6 md:p-8 flex flex-col gap-4 lg:gap-0 lg:justify-between">
        {/* Header */}
        <div className="border-b border-white/10 pb-3 flex items-start justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
              TERAPI SAMĀ‘IY: DARI MENDENGAR MENUJU MEMULIHKAN JIWA
            </h2>
            <p className="text-sm md:text-base text-[#D1D5DB] font-medium mt-0.5">
              Sintesis Alur Praktis dari Mendengar Menuju Pembinaan Batin
            </p>
          </div>
        </div>

        {/* 5-Step Sequential Workflow: Generous card layout without illustration */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 my-auto items-stretch py-2 flex-1">
          {steps.map((st) => (
            <div 
              key={st.num}
              className="p-5 rounded-2xl bg-[#181818] border border-white/10 flex flex-col justify-between space-y-3 hover:border-[#1DB954]/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-[#1DB954]/15 border border-[#1DB954]/30 flex items-center justify-center font-mono font-black text-xs text-[#1DB954]">
                    {st.num}
                  </span>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    Langkah
                  </span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-white leading-snug">
                  {st.title}
                </h4>
                <p className="text-xs md:text-sm text-[#D1D5DB] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <span className="text-[11px] font-medium text-emerald-400/90 block">
                  {st.focus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Central Principle Callout */}
        <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-[#1DB954]/15 via-[#181818] to-[#181818] border-l-4 border-[#1DB954] border-y border-r border-white/10 flex items-center justify-between gap-4 mt-2">
          <div>
            <p className="text-sm md:text-base font-bold text-white">
              Prinsip Utama: Bukan sekadar mendengar, tetapi mengolah apa yang dibangkitkan oleh pendengaran.
            </p>
            <p className="text-xs md:text-sm text-[#D1D5DB] mt-1 leading-relaxed">
              Al-Farabi memberi perhatian pada kualitas dan keteraturan susunan musik yang didengar; Imam Al-Ghazali memberi perhatian pada hati yang menyimak serta ke mana arah batin dituntun setelah hati tergerak menuju pembinaan jiwa dan amal nyata.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-white/40">
          <span>Sintesis Aplikatif Pembinaan Jiwa Berbasis Terapi Samā‘iy</span>
          <span className="font-mono text-white/30 whitespace-nowrap">Slide 16 (Penutup)</span>
        </div>
      </div>
    );
  }

  // Fallback for safety
  return null;
};

