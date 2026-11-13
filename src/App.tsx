import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES_DATA } from './data/slidesData';
import { AudioTrackType } from './types/presentation';
import { audioEngine } from './utils/audioEngine';
import { SpotifySidebar } from './components/SpotifySidebar';
import { SpotifyPlayerBar } from './components/SpotifyPlayerBar';
import { SlideContent } from './components/SlideContent';
import { SlideStage, DESIGN_W, DESIGN_H } from './components/SlideStage';
import { ReferenceDrawer } from './components/ReferenceDrawer';

import { SpotsufyHome } from './components/SpotsufyHome';
import { GroupInfoModal } from './components/GroupInfoModal';
import { MusicLibraryPage } from './components/MusicLibraryPage';
import { ReferencePage } from './components/ReferencePage';
import { IntroSplashScreen } from './components/IntroSplashScreen';
import spotsufyLogo from './assets/images/logo_spotsufy.png';
import { 
  BookOpen, Music, HelpCircle, Users, Menu, Heart
} from 'lucide-react';

// Tampilan desktop: kanvas presentasi 16:9. Di bawah ini: halaman scroll vertikal.
const DESKTOP_QUERY = '(min-width: 1024px) and (min-height: 540px)';

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

export default function App() {
  const [hasCompletedIntro, setHasCompletedIntro] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'home' | 'presentation' | 'references' | 'music'>('home');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [activeAudioTrack, setActiveAudioTrack] = useState<AudioTrackType>('none');
  const [volume, setVolume] = useState<number>(0.75);
  const [likedSlides, setLikedSlides] = useState<Set<number>>(new Set([1, 4]));
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => window.innerWidth < 1440);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isPlayerBarVisible, setIsPlayerBarVisible] = useState<boolean>(true);
  const [isRefModalOpen, setIsRefModalOpen] = useState<boolean>(false);
  const [showGroupModal, setShowGroupModal] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showShortcutHelp, setShowShortcutHelp] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const [stageScale, setStageScale] = useState<number>(1);

  const currentSlide = SLIDES_DATA[currentSlideIndex];

  // Sync audio engine state listener
  useEffect(() => {
    audioEngine.setListener((playing, track) => {
      setIsPlayingAudio(playing);
      setActiveAudioTrack(track);
    });
  }, []);

  // Handle slide transitions
  const handlePrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  const handleNextSlide = useCallback(() => {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex]);

  const handleSelectSlide = (index: number) => {
    if (index >= 0 && index < SLIDES_DATA.length) {
      setCurrentSlideIndex(index);
    }
  };

  // Audio Playback
  const handlePlayTrack = (track: AudioTrackType) => {
    audioEngine.playTrack(track);
  };

  const handleTogglePlayAudio = () => {
    if (isPlayingAudio) {
      audioEngine.pause();
    } else {
      if (audioEngine.getCurrentItem()) {
        audioEngine.resume();
      } else {
        const trackToPlay = currentSlide?.recommendedAudio && currentSlide.recommendedAudio !== 'none'
          ? currentSlide.recommendedAudio
          : (activeAudioTrack !== 'none' ? activeAudioTrack : 'arabian_acoustic');
        audioEngine.playTrack(trackToPlay);
      }
    }
  };

  const handleVolumeChange = (vol: number) => {
    setVolume(vol);
    audioEngine.setVolume(vol);
  };

  const handleToggleLike = () => {
    setLikedSlides(prev => {
      const next = new Set(prev);
      if (next.has(currentSlide.id)) {
        next.delete(currentSlide.id);
      } else {
        next.add(currentSlide.id);
      }
      return next;
    });
  };

  // Fullscreen support
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
      setIsSidebarCollapsed(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      const isFs = !!document.fullscreenElement;
      setIsFullscreen(isFs);
      if (isFs) {
        setIsSidebarCollapsed(true);
      }
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Sync fullscreen class on html element for proportional typography scaling
  useEffect(() => {
    if (isFullscreen) {
      document.documentElement.classList.add('is-fullscreen');
    } else {
      document.documentElement.classList.remove('is-fullscreen');
    }
    return () => {
      document.documentElement.classList.remove('is-fullscreen');
    };
  }, [isFullscreen]);

  // Kunci rem 16px hanya saat presentasi desktop agar kanvas 1280x720 proporsional
  useEffect(() => {
    const on = viewMode === 'presentation' && isDesktop;
    document.documentElement.classList.toggle('is-stage-desktop', on);
    return () => document.documentElement.classList.remove('is-stage-desktop');
  }, [viewMode, isDesktop]);

  // Hitung skala kanvas dari ruang yang tersedia (desktop)
  useEffect(() => {
    if (viewMode !== 'presentation' || !isDesktop) return;
    const el = mainRef.current;
    if (!el) return;
    const PAD = 32; // p-4 kiri+kanan / atas+bawah
    const update = () => {
      const w = el.clientWidth - PAD;
      const h = el.clientHeight - PAD;
      if (w <= 0 || h <= 0) return;
      setStageScale(Math.max(0.3, Math.min(w / DESIGN_W, h / DESIGN_H)));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [viewMode, isDesktop, hasCompletedIntro]);

  // Mobile: setiap pindah slide, kembali ke atas halaman
  useEffect(() => {
    if (!isDesktop) mainRef.current?.scrollTo({ top: 0 });
  }, [currentSlideIndex, isDesktop, viewMode]);

  // Tutup drawer navigasi saat pindah ke desktop
  useEffect(() => {
    if (isDesktop) setIsMobileNavOpen(false);
  }, [isDesktop]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!hasCompletedIntro) return;
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;

      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          handleNextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlePrevSlide();
          break;
        case ' ':
        case 'p':
        case 'P':
          e.preventDefault();
          handleTogglePlayAudio();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          setIsRefModalOpen(prev => !prev);
          break;
        case 'h':
        case 'H':
          setShowShortcutHelp(prev => !prev);
          break;
        case 'b':
        case 'B':
          e.preventDefault();
          setIsPlayerBarVisible(prev => !prev);
          break;
        case 'Escape':
          setIsRefModalOpen(false);
          setShowShortcutHelp(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, handleTogglePlayAudio, hasCompletedIntro]);

  if (!hasCompletedIntro) {
    return <IntroSplashScreen onComplete={() => setHasCompletedIntro(true)} />;
  }

  return (
    <div 
      ref={containerRef}
      className="w-full h-[100dvh] bg-black text-white flex flex-col overflow-hidden select-none"
    >
      {viewMode === 'home' ? (
        <SpotsufyHome
          onStartPresentation={() => setViewMode('presentation')}
          isPlayingAudio={isPlayingAudio}
          onTogglePlayAudio={handleTogglePlayAudio}
          activeAudioTrack={activeAudioTrack}
          onSelectTrack={handlePlayTrack}
          onOpenLiked={() => setViewMode('music')}
          onOpenReferences={() => setViewMode('references')}
        />
      ) : viewMode === 'music' ? (
        <MusicLibraryPage
          isPlayingAudio={isPlayingAudio}
          activeAudioTrack={activeAudioTrack}
          onSelectTrack={handlePlayTrack}
          onGoHome={() => setViewMode('home')}
          onStartPresentation={() => setViewMode('presentation')}
          volume={volume}
          onVolumeChange={handleVolumeChange}
        />
      ) : viewMode === 'references' ? (
        <ReferencePage
          onGoHome={() => setViewMode('home')}
          onSelectSlide={(slideIdx) => {
            setCurrentSlideIndex(slideIdx);
            setViewMode('presentation');
          }}
        />
      ) : (
        <>
          {/* Top Application Bar: Minimal, Scholarly, Clean */}
          <header className="h-12 lg:h-11 bg-[#121212] border-b border-white/5 px-3 sm:px-4 flex items-center justify-between gap-2 shrink-0 z-30">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className="lg:hidden p-1.5 -ml-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Daftar Slide"
                aria-label="Buka daftar slide"
              >
                <Menu className="w-5 h-5" />
              </button>

              <button
                onClick={() => setViewMode('home')}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors border border-white/10"
                title="Kembali ke Beranda"
              >
                <div className="w-4 h-4 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                  <img src={spotsufyLogo} alt="Spotsufy Logo" className="w-full h-full object-cover" />
                </div>
                <span>Beranda</span>
              </button>

              <div className="h-3 w-[1px] bg-white/10 hidden sm:block" />

              <span className="text-xs font-medium text-white/80 truncate max-w-sm hidden md:inline">
                Konsep Terapi Samā‘iy: Al-Ghazali & Al-Farabi
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <span className="text-xs font-mono text-white/60 whitespace-nowrap bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                Slide {currentSlideIndex + 1} / {SLIDES_DATA.length}
              </span>

              <button
                onClick={() => setViewMode('music')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/80 hover:text-white transition-colors border border-white/10"
                title="Buka Koleksi Musik (Liked Songs)"
              >
                <Heart className="w-3.5 h-3.5 text-purple-400 fill-current" />
                <span className="hidden sm:inline">Liked Songs</span>
              </button>

              <button
                onClick={() => setIsRefModalOpen(true)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/80 hover:text-white transition-colors border border-white/10"
                title="Buka Referensi Primer"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Rujukan Primer</span>
              </button>

              <button
                onClick={() => setShowGroupModal(true)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/80 hover:text-white transition-colors border border-white/10"
                title="Info Kelompok 8 Penyusun"
              >
                <Users className="w-3.5 h-3.5 text-[#1DB954]" />
                <span className="hidden sm:inline">Kelompok 8</span>
              </button>

              <button
                onClick={() => setShowShortcutHelp(prev => !prev)}
                className="hidden lg:block p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                title="Bantuan Tombol [H]"
              >
                <HelpCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          </header>

          {/* Main Workspace: sidebar (desktop) + kanvas 16:9 (desktop) atau halaman scroll (mobile/tablet) */}
          <div className="flex-1 min-h-0 flex overflow-hidden">
            {/* Sidebar daftar slide: hanya di desktop; di mobile jadi drawer (lihat bawah) */}
            {isDesktop && (
              <SpotifySidebar
                slides={SLIDES_DATA}
                currentSlideIndex={currentSlideIndex}
                onSelectSlide={handleSelectSlide}
                isPlayingAudio={isPlayingAudio}
                isCollapsed={isSidebarCollapsed}
                onToggleCollapse={() => setIsSidebarCollapsed(prev => !prev)}
                onGoHome={() => setViewMode('home')}
                onOpenMusicLibrary={() => setViewMode('music')}
              />
            )}

            {isDesktop ? (
              /* DESKTOP: kanvas 16:9 diskalakan proporsional, isi otomatis dipas agar tidak keluar frame */
              <main
                ref={mainRef}
                className="flex-1 min-w-0 bg-gradient-to-b from-[#181818] via-[#121212] to-black p-4 flex items-center justify-center overflow-hidden relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] max-w-full max-h-full bg-[#1DB954]/5 rounded-full blur-3xl pointer-events-none" />

                <div
                  data-stage
                  className="relative shrink-0 bg-[#121212] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                  style={{ width: DESIGN_W * stageScale, height: DESIGN_H * stageScale }}
                >
                  <SlideStage scale={stageScale} slideKey={currentSlide.id}>
                    <SlideContent
                      slide={currentSlide}
                      isPlayingAudio={isPlayingAudio}
                      activeAudioTrack={activeAudioTrack}
                      onPlayTrack={handlePlayTrack}
                      onOpenReferences={() => setIsRefModalOpen(true)}
                      isLiked={likedSlides.has(currentSlide.id)}
                      onToggleLike={handleToggleLike}
                      onSelectSlide={handleSelectSlide}
                      isFullscreen={isFullscreen}
                    />
                  </SlideStage>
                </div>
              </main>
            ) : (
              /* MOBILE / TABLET: slide mengalir ke bawah dan halaman bisa di-scroll */
              <main
                ref={mainRef}
                className="flex-1 min-w-0 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain bg-gradient-to-b from-[#181818] via-[#121212] to-black p-3 sm:p-5"
              >
                <div
                  data-stage
                  className="mx-auto w-full max-w-3xl bg-[#121212] rounded-2xl border border-white/10 shadow-xl overflow-hidden"
                >
                  <SlideContent
                    slide={currentSlide}
                    isPlayingAudio={isPlayingAudio}
                    activeAudioTrack={activeAudioTrack}
                    onPlayTrack={handlePlayTrack}
                    onOpenReferences={() => setIsRefModalOpen(true)}
                    isLiked={likedSlides.has(currentSlide.id)}
                    onToggleLike={handleToggleLike}
                    onSelectSlide={handleSelectSlide}
                    isFullscreen={isFullscreen}
                  />
                </div>
                <div className="h-4" />
              </main>
            )}
          </div>

          {/* Drawer daftar slide untuk mobile/tablet */}
          {!isDesktop && isMobileNavOpen && (
            <div className="fixed inset-0 z-[60] flex">
              <div className="h-full w-[86vw] max-w-sm shadow-2xl">
                <SpotifySidebar
                  slides={SLIDES_DATA}
                  currentSlideIndex={currentSlideIndex}
                  onSelectSlide={(i) => {
                    handleSelectSlide(i);
                    setIsMobileNavOpen(false);
                  }}
                  isPlayingAudio={isPlayingAudio}
                  isCollapsed={false}
                  onToggleCollapse={() => setIsMobileNavOpen(false)}
                  onGoHome={() => setViewMode('home')}
                  onOpenMusicLibrary={() => {
                    setViewMode('music');
                    setIsMobileNavOpen(false);
                  }}
                  isDrawer
                />
              </div>
              <button
                aria-label="Tutup daftar slide"
                onClick={() => setIsMobileNavOpen(false)}
                className="flex-1 bg-black/70 backdrop-blur-sm"
              />
            </div>
          )}

      {/* Spotify Bottom Now Playing Bar (Collapsible) */}
      {isPlayerBarVisible && (
        <SpotifyPlayerBar
          currentSlide={currentSlide}
          totalSlides={SLIDES_DATA.length}
          currentSlideIndex={currentSlideIndex}
          onPrevSlide={handlePrevSlide}
          onNextSlide={handleNextSlide}
          onSeekSlide={handleSelectSlide}
          isPlayingAudio={isPlayingAudio}
          activeAudioTrack={activeAudioTrack}
          onTogglePlayAudio={handleTogglePlayAudio}
          onSelectAudioTrack={handlePlayTrack}
          volume={volume}
          onVolumeChange={handleVolumeChange}
          isLiked={likedSlides.has(currentSlide.id)}
          onToggleLike={handleToggleLike}
          onOpenReferences={() => setIsRefModalOpen(true)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={handleToggleFullscreen}
          onHide={() => setIsPlayerBarVisible(false)}
          onOpenMusicLibrary={() => setViewMode('music')}
        />
      )}
        </>
      )}

      {/* Reference Drawer Modal */}
      <ReferenceDrawer
        isOpen={isRefModalOpen}
        onClose={() => setIsRefModalOpen(false)}
        currentSlide={currentSlide}
      />

      {/* Group 8 Information Modal */}
      <GroupInfoModal
        isOpen={showGroupModal}
        onClose={() => setShowGroupModal(false)}
      />

      {/* Keyboard Shortcut Modal */}
      {showShortcutHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md p-6 bg-[#181818] border border-white/10 rounded-2xl shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Music className="w-4 h-4 text-[#1DB954]" /> Pintasan Papan Ketik Presenter
              </h3>
              <button
                onClick={() => setShowShortcutHelp(false)}
                className="text-xs text-white/50 hover:text-white"
              >
                ✕ Tutup
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded bg-black/40">
                <span className="text-[#B3B3B3]">Slide Selanjutnya</span>
                <span className="font-mono text-white bg-white/10 px-2 py-0.5 rounded">→</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-black/40">
                <span className="text-[#B3B3B3]">Slide Sebelumnya</span>
                <span className="font-mono text-white bg-white/10 px-2 py-0.5 rounded">←</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-black/40">
                <span className="text-[#B3B3B3]">Putar / Jeda Musik Audio</span>
                <span className="font-mono text-[#1DB954] bg-[#1DB954]/10 px-2 py-0.5 rounded font-bold">Spasi (atau P)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-black/40">
                <span className="text-[#B3B3B3]">Buka Referensi Akademik</span>
                <span className="font-mono text-white bg-white/10 px-2 py-0.5 rounded">R</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-black/40">
                <span className="text-[#B3B3B3]">Layar Penuh (Fullscreen)</span>
                <span className="font-mono text-white bg-white/10 px-2 py-0.5 rounded">F</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-black/40">
                <span className="text-[#B3B3B3]">Sembunyikan / Tampilkan Navigasi Bawah</span>
                <span className="font-mono text-[#1DB954] bg-[#1DB954]/10 px-2 py-0.5 rounded font-bold">B</span>
              </div>
            </div>

            <p className="text-[11px] text-[#727272] text-center pt-2">
              Didesain khusus untuk kenyamanan pemateri saat presentasi di kelas / proyektor 16:9.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
