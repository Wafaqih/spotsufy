import React, { useState, useMemo, useEffect } from 'react';
import { 
  Play, Pause, Heart, Search, ArrowLeft, Music, Disc, 
  Clock, Layers, Volume2, VolumeX, Shuffle, Repeat, 
  SkipBack, SkipForward, Sparkles, Filter, CheckCircle2, Home
} from 'lucide-react';
import { AudioTrackType } from '../types/presentation';
import { 
  audioEngine, 
  getAllAvailableMusic, 
  MusicItem 
} from '../utils/audioEngine';
import { AudioVisualizer } from './AudioVisualizer';
import spotsufyLogo from '../assets/images/logo_spotsufy.png';

interface MusicLibraryPageProps {
  isPlayingAudio: boolean;
  activeAudioTrack: AudioTrackType;
  onSelectTrack: (track: AudioTrackType) => void;
  onGoHome: () => void;
  onStartPresentation: () => void;
  volume?: number;
  onVolumeChange?: (vol: number) => void;
}

export const MusicLibraryPage: React.FC<MusicLibraryPageProps> = ({
  isPlayingAudio,
  activeAudioTrack,
  onSelectTrack,
  onGoHome,
  onStartPresentation,
  volume = 0.8,
  onVolumeChange
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  // All tracks in Liked Songs are liked by default, but user can toggle
  const [unlikedMap, setUnlikedMap] = useState<Record<string, boolean>>({});
  
  // Track audio progress
  const [audioTime, setAudioTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragValue, setDragValue] = useState(0);
  const [isShuffle, setIsShuffle] = useState(() => audioEngine.getIsShuffle());
  const [isRepeat, setIsRepeat] = useState(() => audioEngine.getIsRepeat());
  const [currentVolume, setCurrentVolume] = useState(volume);
  const [prevVolume, setPrevVolume] = useState(volume || 0.8);

  const currentItem = audioEngine.getCurrentItem();

  // Dynamic list of all music
  const allMusic = useMemo(() => {
    return getAllAvailableMusic();
  }, []);

  useEffect(() => {
    const unsub = audioEngine.addTimeListener((cur, dur) => {
      if (!isDragging) {
        setAudioTime(cur);
        setAudioDuration(dur);
      }
    });
    return unsub;
  }, [isDragging]);

  const filteredMusic = useMemo(() => {
    return allMusic.filter(item => {
      const term = searchTerm.toLowerCase();
      const matchesSearch = 
        item.title.toLowerCase().includes(term) ||
        item.subtitle.toLowerCase().includes(term) ||
        item.artist.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        (item.arabicTitle && item.arabicTitle.includes(searchTerm));

      if (selectedCategory === 'All') return matchesSearch;
      if (selectedCategory === 'Maqamat') return matchesSearch && item.category.includes('Maqam');
      if (selectedCategory === 'Songs') return matchesSearch && item.category.includes('Pop');
      if (selectedCategory === 'Sufi') return matchesSearch && item.category.includes('Sufi');
      return matchesSearch;
    });
  }, [allMusic, searchTerm, selectedCategory]);

  const handlePlayItem = (item: MusicItem) => {
    audioEngine.playItem(item);
  };

  const handleTogglePlayAll = () => {
    if (isPlayingAudio) {
      audioEngine.pause();
    } else {
      if (currentItem) {
        audioEngine.resume();
      } else if (filteredMusic.length > 0) {
        audioEngine.playItem(filteredMusic[0]);
      } else if (allMusic.length > 0) {
        audioEngine.playItem(allMusic[0]);
      }
    }
  };

  const handleNextTrack = () => {
    audioEngine.nextTrack();
  };

  const handlePrevTrack = () => {
    audioEngine.prevTrack();
  };

  const toggleShuffle = () => {
    const next = audioEngine.toggleShuffle();
    setIsShuffle(next);
  };

  const toggleRepeat = () => {
    const next = audioEngine.toggleRepeat();
    setIsRepeat(next);
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUnlikedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isCurrentItemPlaying = (item: MusicItem) => {
    if (!isPlayingAudio) return false;
    if (currentItem && currentItem.id === item.id) return true;
    if (item.trackKey !== 'none' && activeAudioTrack === item.trackKey) return true;
    return false;
  };

  const handleVolumeSlide = (val: number) => {
    setCurrentVolume(val);
    audioEngine.setVolume(val);
    if (onVolumeChange) onVolumeChange(val);
  };

  const toggleMute = () => {
    if (currentVolume > 0) {
      setPrevVolume(currentVolume);
      handleVolumeSlide(0);
    } else {
      handleVolumeSlide(prevVolume || 0.8);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="w-full h-full bg-[#121212] text-white flex flex-col overflow-hidden select-none font-sans">
      {/* ----------------- TOP NAVBAR ----------------- */}
      <header className="h-14 px-4 sm:px-6 md:px-8 bg-black/40 backdrop-blur-md border-b border-white/5 flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-bold text-white transition-colors border border-white/10"
            title="Kembali ke Beranda Spotsufy"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Beranda</span>
          </button>

          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
            <span className="text-white/40 hidden md:inline">Spotsufy</span>
            <span className="text-white/40 hidden md:inline">/</span>
            <span className="text-[#1DB954] font-bold flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-current text-purple-400" />
              Liked Songs
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onStartPresentation}
            className="px-3.5 py-1.5 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-extrabold text-xs flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95 shadow-md shadow-[#1DB954]/20"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Slide Presentasi</span>
          </button>
        </div>
      </header>

      {/* ----------------- SCROLLABLE PLAYLIST CONTENT ----------------- */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden bg-gradient-to-b from-[#40126a] via-[#1a0b2e] to-[#121212]">
        {/* HERO HEADER: Spotify Liked Songs Iconic Box */}
        <div className="p-5 sm:p-7 lg:p-9 flex flex-col sm:flex-row items-center sm:items-end gap-5 sm:gap-7 bg-gradient-to-b from-purple-800/40 via-purple-950/20 to-transparent">
          {/* Big Gradient Heart Box */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-[#450af5] via-[#8e2de2] to-[#00d2ff] flex items-center justify-center shadow-2xl shadow-purple-950/80 shrink-0 border border-white/10 relative group">
            <Heart className="w-20 h-20 sm:w-24 sm:h-24 text-white fill-current drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Music className="w-8 h-8 text-white drop-shadow" />
            </div>
          </div>

          {/* Playlist Info */}
          <div className="space-y-1.5 sm:space-y-2 flex-1 text-center sm:text-left">
            <span className="text-[11px] uppercase font-mono font-extrabold tracking-widest text-white/70 block">
              PLAYLIST PUBLIK
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Liked Songs
            </h1>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed pt-1">
              Koleksi 15 audio terapi psikospiritual: 10 Maqām Jiwa Al-Farabi dari <em>Kitāb al-Mūsīqá al-Kabīr</em>, alunan meditatif seruling Ney Anatolia, serta karya musik refleksi jiwa penenang hati.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 text-xs text-white/90">
              <div className="flex items-center gap-1.5 font-bold">
                <div className="w-5 h-5 rounded-full overflow-hidden bg-black shrink-0">
                  <img src={spotsufyLogo} alt="Spotsufy" className="w-full h-full object-cover" />
                </div>
                <span>Spotsufy</span>
              </div>
              <span className="text-white/40">•</span>
              <span className="text-[#1DB954] font-semibold">Kelompok 8 Tasawuf Psikoterapi</span>
              <span className="text-white/40">•</span>
              <span>{allMusic.length} Lagu</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60">Sekitar 48 Menit</span>
            </div>
          </div>
        </div>

        {/* CONTROLS BAR: Play Button, Shuffle, Filter Pills, Search */}
        <div className="px-4 sm:px-6 md:px-8 py-4 space-y-4 bg-[#121212]/60 backdrop-blur-sm sticky top-0 z-10 border-b border-white/5">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Big Green Play Button + Quick Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleTogglePlayAll}
                className="w-14 h-14 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black flex items-center justify-center shadow-xl shadow-[#1DB954]/30 hover:scale-105 active:scale-95 transition-all"
                title={isPlayingAudio ? "Jeda Pemutaran" : "Putar Semua Lagu"}
              >
                {isPlayingAudio ? (
                  <Pause className="w-6 h-6 fill-current" />
                ) : (
                  <Play className="w-6 h-6 fill-current ml-1" />
                )}
              </button>

              <button
                onClick={toggleShuffle}
                className={`p-2 rounded-full transition-colors ${
                  isShuffle ? 'text-[#1DB954] bg-[#1DB954]/10' : 'text-white/60 hover:text-white'
                }`}
                title={isShuffle ? "Acak Aktif" : "Aktifkan Mode Acak"}
              >
                <Shuffle className="w-5 h-5" />
              </button>

              <button
                onClick={toggleRepeat}
                className={`p-2 rounded-full transition-colors relative ${
                  isRepeat ? 'text-[#1DB954] bg-[#1DB954]/10' : 'text-white/60 hover:text-white'
                }`}
                title={isRepeat ? "Ulangi Aktif" : "Aktifkan Ulangi"}
              >
                <Repeat className="w-5 h-5" />
              </button>

              {isPlayingAudio && currentItem && (
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1DB954]/10 border border-[#1DB954]/30">
                  <AudioVisualizer isPlaying={isPlayingAudio} barCount={8} height={14} />
                  <span className="text-xs font-mono font-bold text-[#1DB954] truncate max-w-xs">
                    Memutar: {currentItem.title}
                  </span>
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari lagu, maqām, atau penyanyi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 hover:bg-white/15 focus:bg-[#202020] text-xs text-white placeholder-white/40 pl-9 pr-3 py-2.5 rounded-full border border-white/10 focus:outline-none focus:border-[#1DB954] transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Filter Categories Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {[
              { key: 'All', label: `Semua (${allMusic.length})` },
              { key: 'Maqamat', label: '10 Maqamat Al-Farabi (11)' },
              { key: 'Songs', label: 'Lagu Pop & Refleksi (3)' },
              { key: 'Sufi', label: 'Sufi Healing Anatolia (1)' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setSelectedCategory(tab.key)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                  selectedCategory === tab.key
                    ? 'bg-white text-black font-bold'
                    : 'bg-white/5 text-[#B3B3B3] hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SPOTIFY MUSIC TABLE */}
        <div className="px-4 sm:px-6 md:px-8 py-4 pb-28">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[11px] font-mono text-[#A7A7A7] uppercase tracking-wider">
                  <th className="py-3 px-3 w-12 text-center">#</th>
                  <th className="py-3 px-3">Judul & Pembawa</th>
                  <th className="py-3 px-3 hidden sm:table-cell">Album / Sumber</th>
                  <th className="py-3 px-3 hidden lg:table-cell">Pengaruh Batin & Fungsi</th>
                  <th className="py-3 px-3 text-center w-24">Durasi</th>
                  <th className="py-3 px-3 text-right w-20">Putar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredMusic.map((item, index) => {
                  const isPlaying = isCurrentItemPlaying(item);
                  const isUnliked = unlikedMap[item.id] || false;

                  return (
                    <tr
                      key={item.id}
                      onClick={() => handlePlayItem(item)}
                      className={`group hover:bg-white/10 transition-colors cursor-pointer ${
                        isPlaying ? 'bg-white/10 text-[#1DB954]' : 'text-white'
                      }`}
                    >
                      {/* # Index / Equalizer / Play button */}
                      <td className="py-3.5 px-3 text-center font-mono">
                        {isPlaying ? (
                          <div className="flex items-center justify-center">
                            <AudioVisualizer isPlaying={isPlayingAudio} barCount={4} height={12} />
                          </div>
                        ) : (
                          <>
                            <span className="text-[#A7A7A7] group-hover:hidden">
                              {index + 1}
                            </span>
                            <Play className="w-4 h-4 text-white hidden group-hover:block mx-auto fill-current" />
                          </>
                        )}
                      </td>

                      {/* Title & Artist */}
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow border border-white/10 ${
                            item.category.includes('Maqam') 
                              ? 'bg-amber-950/40 text-amber-400' 
                              : item.category.includes('Sufi')
                              ? 'bg-emerald-950/40 text-emerald-400'
                              : 'bg-indigo-950/40 text-indigo-400'
                          }`}>
                            <Disc className={`w-5 h-5 ${isPlaying ? 'text-[#1DB954] animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
                          </div>

                          <div className="min-w-0 pr-2">
                            <div className="flex items-center gap-2">
                              <p className={`font-bold truncate text-sm ${isPlaying ? 'text-[#1DB954]' : 'text-white'}`}>
                                {item.title}
                              </p>
                              {item.arabicTitle && (
                                <span 
                                  dir="rtl" 
                                  lang="ar" 
                                  className="hidden md:inline-block text-xs font-amiri text-amber-300 font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/25 leading-normal"
                                >
                                  {item.arabicTitle}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#A7A7A7] truncate mt-0.5">
                              {item.artist}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Album / Category */}
                      <td className="py-3.5 px-3 hidden sm:table-cell text-[#B3B3B3]">
                        <span className="truncate block max-w-xs">
                          {item.album}
                        </span>
                        <span className="text-[10px] text-white/40 block">
                          {item.category}
                        </span>
                      </td>

                      {/* Description / Effect */}
                      <td className="py-3.5 px-3 hidden lg:table-cell text-[#8E8E8E]">
                        <p className="line-clamp-2 text-[11px]">
                          {item.description}
                        </p>
                      </td>

                      {/* Duration */}
                      <td className="py-3.5 px-3 text-center text-[11px] font-mono text-[#A7A7A7]">
                        {item.durationStr}
                      </td>

                      {/* Actions: Heart + Play */}
                      <td className="py-3.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={(e) => toggleLike(item.id, e)}
                            className={`p-1.5 transition-colors ${
                              !isUnliked ? 'text-[#1DB954]' : 'text-white/20 hover:text-white'
                            }`}
                            title={!isUnliked ? "Tersimpan di Liked Songs" : "Sukai Lagu"}
                          >
                            <Heart className={`w-4 h-4 ${!isUnliked ? 'fill-current' : ''}`} />
                          </button>

                          <button
                            onClick={() => handlePlayItem(item)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 ${
                              isPlaying
                                ? 'bg-[#1DB954] text-black shadow-md shadow-[#1DB954]/30'
                                : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                            title={isPlaying ? "Jeda" : "Putar"}
                          >
                            {isPlaying ? (
                              <Pause className="w-3.5 h-3.5 fill-current" />
                            ) : (
                              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filteredMusic.length === 0 && (
              <div className="p-12 text-center text-white/50 space-y-2">
                <Music className="w-8 h-8 mx-auto text-white/30" />
                <p className="text-sm font-semibold">Tidak ada lagu yang cocok dengan pencarian "{searchTerm}"</p>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ----------------- SPOTIFY BOTTOM PLAYER BAR ----------------- */}
      <footer className="h-20 bg-[#181818] border-t border-white/10 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0 z-30">
        {/* Left: Current Track Thumbnail & Info */}
        <div className="flex items-center gap-3 w-1/4 min-w-[180px] max-w-xs">
          <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center shrink-0 shadow overflow-hidden relative">
            <Disc className={`w-6 h-6 text-[#1DB954] ${isPlayingAudio ? 'animate-spin' : ''}`} style={{ animationDuration: '5s' }} />
          </div>

          <div className="min-w-0 pr-1">
            <h4 className="text-xs font-bold text-white truncate">
              {currentItem ? currentItem.title : 'Pilih Lagu untuk Diputar'}
            </h4>
            <p className="text-[10px] text-[#A7A7A7] truncate mt-0.5">
              {currentItem ? currentItem.artist : 'Spotsufy Terapi Samā‘iy'}
            </p>
          </div>

          {currentItem && (
            <button
              onClick={(e) => toggleLike(currentItem.id, e)}
              className={`p-1.5 transition-colors hidden sm:block ${
                !unlikedMap[currentItem.id] ? 'text-[#1DB954]' : 'text-white/30 hover:text-white'
              }`}
              title="Sukai Lagu"
            >
              <Heart className={`w-4 h-4 ${!unlikedMap[currentItem.id] ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>

        {/* Center: Playback Controls & Scrubber */}
        <div className="flex-1 max-w-xl flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleShuffle}
              className={`p-1.5 transition-colors ${
                isShuffle ? 'text-[#1DB954]' : 'text-white/60 hover:text-white'
              }`}
              title="Acak"
            >
              <Shuffle className="w-4 h-4" />
            </button>

            <button
              onClick={handlePrevTrack}
              className="text-white/80 hover:text-white transition-colors p-1"
              title="Lagu Sebelumnya"
            >
              <SkipBack className="w-5 h-5 fill-current" />
            </button>

            {/* Circular Play / Pause Button */}
            <button
              onClick={handleTogglePlayAll}
              className="w-9 h-9 rounded-full bg-white hover:scale-105 active:scale-95 text-black flex items-center justify-center transition-all shadow-md shadow-white/10"
              title={isPlayingAudio ? "Jeda" : "Putar"}
            >
              {isPlayingAudio ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={handleNextTrack}
              className="text-white/80 hover:text-white transition-colors p-1"
              title="Lagu Berikutnya"
            >
              <SkipForward className="w-5 h-5 fill-current" />
            </button>

            <button
              onClick={toggleRepeat}
              className={`p-1.5 transition-colors ${
                isRepeat ? 'text-[#1DB954]' : 'text-white/60 hover:text-white'
              }`}
              title="Ulangi"
            >
              <Repeat className="w-4 h-4" />
            </button>
          </div>

          {/* Time Scrubber */}
          <div className="w-full flex items-center gap-2.5">
            <span className="text-[10px] font-mono text-[#A7A7A7] w-8 text-right tabular-nums">
              {formatTime(isDragging ? dragValue : audioTime)}
            </span>

            <div className="relative flex-1 group py-1 flex items-center cursor-pointer">
              <input
                type="range"
                min={0}
                max={audioDuration > 0 ? audioDuration : 180}
                step={0.5}
                value={isDragging ? dragValue : audioTime}
                onMouseDown={() => {
                  setIsDragging(true);
                  setDragValue(audioTime);
                }}
                onTouchStart={() => {
                  setIsDragging(true);
                  setDragValue(audioTime);
                }}
                onChange={(e) => setDragValue(Number(e.target.value))}
                onMouseUp={(e) => {
                  setIsDragging(false);
                  const val = Number((e.target as HTMLInputElement).value);
                  audioEngine.seek(val);
                }}
                onTouchEnd={() => {
                  setIsDragging(false);
                  audioEngine.seek(dragValue);
                }}
                className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-[#1DB954] hover:accent-[#1ed760] transition-colors"
              />
            </div>

            <span className="text-[10px] font-mono text-[#A7A7A7] w-8 tabular-nums">
              {audioDuration > 0 ? formatTime(audioDuration) : (currentItem?.durationStr || '0:00')}
            </span>
          </div>
        </div>

        {/* Right: Volume & Go to Presentation */}
        <div className="hidden sm:flex items-center justify-end gap-3 w-1/4 min-w-[180px]">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-white/60 hover:text-white transition-colors"
              title={currentVolume === 0 ? "Bunyikan" : "Bisukan"}
            >
              {currentVolume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={currentVolume}
              onChange={(e) => handleVolumeSlide(Number(e.target.value))}
              className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#1DB954]"
              title="Volume Audio"
            />
          </div>

          <button
            onClick={onStartPresentation}
            className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white/90 transition-colors border border-white/10 flex items-center gap-1.5"
            title="Kembali ke Layar Slide"
          >
            <Layers className="w-3.5 h-3.5 text-[#1DB954]" />
            <span className="hidden md:inline">Buka Slide</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
