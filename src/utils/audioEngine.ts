import { AudioTrackType } from '../types/presentation';

// Otomatis membaca semua berkas audio di dalam folder src/assets/music/
const localMusicAssets = import.meta.glob('../assets/music/*.{mp3,MP3,wav,WAV,m4a,M4A,ogg,OGG}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
}) as Record<string, string>;

export interface MusicItem {
  id: string;
  filename: string;
  title: string;
  subtitle: string;
  artist: string;
  album: string;
  category: string;
  durationStr: string;
  trackKey: AudioTrackType;
  url: string;
  isUploadedMp3: boolean;
  description: string;
  arabicTitle?: string;
  tags?: string[];
}

// Strict keyword matching with fallback to real assets
export function findMusicUrl(track: AudioTrackType | string): string | null {
  const allAssets = Object.entries(localMusicAssets);
  if (allAssets.length === 0) return null;

  const trackKey = (track || '').toLowerCase().replace('maqam_', '');

  // 1. Classical contemplation & acoustic backgrounds: prefer Rumi's Sufi Sounds / Ney flute
  if (trackKey === 'arabian_acoustic' || trackKey === 'calm_acoustic' || trackKey === 'ambient_reflection' || trackKey.includes('rumi') || trackKey.includes('healing')) {
    for (const [path, url] of allAssets) {
      const lower = path.toLowerCase();
      if (lower.includes('rumi') || lower.includes('healing') || lower.includes('sufi')) {
        return url;
      }
    }
    // Fallback for background contemplation: Bayati
    for (const [path, url] of allAssets) {
      if (path.toLowerCase().includes('bayati.mp3')) return url;
    }
  }

  // 2. Strict 1-to-1 matching for 10 Maqamat
  const maqamKeywords: Record<string, string[]> = {
    'hijaz': ['hijaz'],
    'bayati_2': ['bayati2', 'bayati-2', 'bayati_2'],
    'bayati': ['bayati'],
    'rast': ['rast'],
    'sikah': ['sikah'],
    'saba': ['saba'],
    'nahawand': ['nahawand', 'nahwand'],
    'jiharkah': ['jiharkah', 'jaharkah'],
    'ajam': ['ajam'],
    'kurd': ['kurd'],
    'iraqi': ['iraqi'],
    'song_beranjak_dewasa': ['beranjak', 'dewasa', 'amizah'],
    'song_everything_u_are': ['everything', 'hindia'],
    'song_sorai': ['sorai']
  };

  const keywords = maqamKeywords[trackKey] || [trackKey];

  for (const [path, url] of allAssets) {
    const filename = path.split('/').pop()?.toLowerCase() || '';
    const baseName = filename.replace(/\.[^/.]+$/, '');
    for (const kw of keywords) {
      if (trackKey === 'bayati' && (filename.includes('bayati2') || filename.includes('bayati-2') || filename.includes('bayati_2'))) {
        continue;
      }
      if (baseName === kw || baseName.startsWith(kw) || filename.includes(kw)) {
        return url;
      }
    }
  }

  // 3. Fallback: return the first available audio URL so audio NEVER fails silently
  return allAssets[0][1] || null;
}

export function getAllAvailableMusic(): MusicItem[] {
  const items: MusicItem[] = [];

  // Helper metadata dictionary based on actual files
  const metadataMap: Record<string, {
    title: string;
    arabicTitle?: string;
    subtitle: string;
    artist: string;
    album: string;
    category: string;
    durationStr: string;
    trackKey: AudioTrackType;
    description: string;
    order: number;
  }> = {
    'BAYATI.mp3': {
      title: 'Māqām Bāyātī',
      arabicTitle: 'مَقَام بَيَاتِي',
      subtitle: 'Imam Al-Farabi · Kitāb al-Mūsīqá al-Kabīr',
      artist: 'Imam Al-Farabi (Teori Maqam Klasik)',
      album: '10 Maqām Terapi Jiwa',
      category: '10 Maqamat Al-Farabi',
      durationStr: '02:35',
      trackKey: 'maqam_bayati',
      description: 'Suka cita, kelapangan jiwa & resonansi pembacaan Al-Qur’an yang menyentuh qalb',
      order: 1
    },
    'BAYATI2.mp3': {
      title: 'Māqām Bāyātī 2 (Versi Kontemplasi)',
      arabicTitle: 'مَقَام بَيَاتِي - تَأَمُّلِيّ',
      subtitle: 'Imam Al-Farabi · Terapi Relaksasi Batin',
      artist: 'Imam Al-Farabi (Teori Maqam Klasik)',
      album: '10 Maqām Terapi Jiwa',
      category: '10 Maqamat Al-Farabi',
      durationStr: '03:15',
      trackKey: 'maqam_bayati_2',
      description: 'Alunan panjang penenang syaraf, peredam psikosomatis & relaksasi parasimpatis',
      order: 2
    },
    'HIJAZ.mp3': {
      title: 'Māqām Hījāz',
      arabicTitle: 'مَقَام حِجَاز',
      subtitle: 'Imam Al-Farabi · Kitāb al-Mūsīqá al-Kabīr',
      artist: 'Imam Al-Farabi (Teori Maqam Klasik)',
      album: '10 Maqām Terapi Jiwa',
      category: '10 Maqamat Al-Farabi',
      durationStr: '02:42',
      trackKey: 'maqam_hijaz',
      description: 'Kesyahduan relung batin, kerendahan hati, kekhusyukan & kedekatan Ilahi',
      order: 3
    },
    'RAST.mp3': {
      title: 'Māqām Rāst',
      arabicTitle: 'مَقَام رَاسْت',
      subtitle: 'Imam Al-Farabi · Kitāb al-Mūsīqá al-Kabīr',
      artist: 'Imam Al-Farabi (Teori Maqam Klasik)',
      album: '10 Maqām Terapi Jiwa',
      category: '10 Maqamat Al-Farabi',
      durationStr: '02:40',
      trackKey: 'maqam_rast',
      description: 'Pikiran positif, kejernihan akal sehat, optimisme & kebanggaan kalbu fitri',
      order: 4
    },
    'SABA.mp3': {
      title: 'Māqām Sābā',
      arabicTitle: 'مَقَام صَبَا',
      subtitle: 'Imam Al-Farabi · Kitāb al-Mūsīqá al-Kabīr',
      artist: 'Imam Al-Farabi (Teori Maqam Klasik)',
      album: '10 Maqām Terapi Jiwa',
      category: '10 Maqamat Al-Farabi',
      durationStr: '03:05',
      trackKey: 'maqam_saba',
      description: 'Keharuan mendalam, kelembutan rasa, introspeksi diri & sentuhan sanubari',
      order: 5
    },
    'SIKAH.mp3': {
      title: 'Māqām Sīkāh',
      arabicTitle: 'مَقَام سِيكَاه',
      subtitle: 'Imam Al-Farabi · Kitāb al-Mūsīqá al-Kabīr',
      artist: 'Imam Al-Farabi (Teori Maqam Klasik)',
      album: '10 Maqām Terapi Jiwa',
      category: '10 Maqamat Al-Farabi',
      durationStr: '02:38',
      trackKey: 'maqam_sikah',
      description: 'Kasih sayang mendalam, kerinduan Ilahiah (Mahabbah) & keteduhan batin',
      order: 6
    },
    'NAHAWAND.mp3': {
      title: 'Māqām Nāhwānd',
      arabicTitle: 'مَقَام نَهَاوَنْد',
      subtitle: 'Imam Al-Farabi · Kitāb al-Mūsīqá al-Kabīr',
      artist: 'Imam Al-Farabi (Teori Maqam Klasik)',
      album: '10 Maqām Terapi Jiwa',
      category: '10 Maqamat Al-Farabi',
      durationStr: '02:50',
      trackKey: 'maqam_nahawand',
      description: 'Refleksi perenungan teduh tanpa terjebak dalam keputusasaan batin',
      order: 7
    },
    'JIHARKAH.mp3': {
      title: 'Māqām Jīhārkāh',
      arabicTitle: 'مَقَام جَهَارْكَاه',
      subtitle: 'Imam Al-Farabi · Kitāb al-Mūsīqá al-Kabīr',
      artist: 'Imam Al-Farabi (Teori Maqam Klasik)',
      album: '10 Maqām Terapi Jiwa',
      category: '10 Maqamat Al-Farabi',
      durationStr: '02:30',
      trackKey: 'maqam_jiharkah',
      description: 'Kelembutan rasa manis emosi & kehangatan hubungan antarsesama manusia',
      order: 8
    },
    'AJAM.mp3': {
      title: 'Māqām Ājām',
      arabicTitle: 'مَقَام عَجَم',
      subtitle: 'Imam Al-Farabi · Kitāb al-Mūsīqá al-Kabīr',
      artist: 'Imam Al-Farabi (Teori Maqam Klasik)',
      album: '10 Maqām Terapi Jiwa',
      category: '10 Maqamat Al-Farabi',
      durationStr: '02:18',
      trackKey: 'maqam_ajam',
      description: 'Keceriaan, vitalitas cemerlang, penangkal kedukaan & penggerak semangat hidup',
      order: 9
    },
    'KURD.mp3': {
      title: 'Māqām Kûrd',
      arabicTitle: 'مَقَام كُورْد',
      subtitle: 'Imam Al-Farabi · Kitāb al-Mūsīqá al-Kabīr',
      artist: 'Imam Al-Farabi (Teori Maqam Klasik)',
      album: '10 Maqām Terapi Jiwa',
      category: '10 Maqamat Al-Farabi',
      durationStr: '02:20',
      trackKey: 'maqam_kurd',
      description: 'Semangat gairah hidup, keteguhan hati & pelepasan ketegangan cemas (anxiety)',
      order: 10
    },
    'IRAQI.mp3': {
      title: 'Māqām Īrāqī',
      arabicTitle: 'مَقَام عِرَاقِي',
      subtitle: 'Imam Al-Farabi · Kitāb al-Mūsīqá al-Kabīr',
      artist: 'Imam Al-Farabi (Teori Maqam Klasik)',
      album: '10 Maqām Terapi Jiwa',
      category: '10 Maqamat Al-Farabi',
      durationStr: '02:26',
      trackKey: 'maqam_iraqi',
      description: 'Kewaspadaan, ketajaman fokus mental & penataan dinamika drama emosi jiwa',
      order: 11
    },
    'Feel the Healing – Rumi’s Sufi Sounds from Anatolia.mp3': {
      title: 'Feel the Healing (Rumi’s Sufi Sounds)',
      arabicTitle: 'صَوْتُ الشِّفَاءِ الرُّوحِيّ',
      subtitle: 'Sufi Sounds of Anatolia · Seruling Ney & Zikir',
      artist: 'Sufi Sounds from Anatolia',
      album: 'Sufi Healing & Anatolian Ney',
      category: 'Sufi Healing & Meditasi',
      durationStr: '04:12',
      trackKey: 'arabian_acoustic',
      description: 'Hembusan syahdu seruling Ney & petikan kontemplasi penstabil ritme gelombang otak Alpha-Theta',
      order: 12
    },
    'Beranjak Dewasa - Nadin Amizah.mp3': {
      title: 'Beranjak Dewasa',
      subtitle: 'Nadin Amizah · Selamat Ulang Tahun',
      artist: 'Nadin Amizah',
      album: 'Selamat Ulang Tahun',
      category: 'Lagu Refleksi & Pop',
      durationStr: '04:55',
      trackKey: 'song_beranjak_dewasa',
      description: 'Resonansi penerimaan proses bertumbuh, transisi fase kedewasaan & katarsis emosi',
      order: 13
    },
    'Everything U Are - Hindia.mp3': {
      title: 'Everything U Are',
      subtitle: 'Hindia · Menari dengan Bayangan',
      artist: 'Hindia (Baskara Putra)',
      album: 'Menari dengan Bayangan',
      category: 'Lagu Refleksi & Pop',
      durationStr: '03:48',
      trackKey: 'song_everything_u_are',
      description: 'Resonansi kelelahan mental, afirmasi empati & validasi hangat atas kerentanan manusia',
      order: 14
    },
    'Sorai - Nadin Amizah.mp3': {
      title: 'Sorai',
      subtitle: 'Nadin Amizah · Selamat Ulang Tahun',
      artist: 'Nadin Amizah',
      album: 'Selamat Ulang Tahun',
      category: 'Lagu Refleksi & Pop',
      durationStr: '04:22',
      trackKey: 'song_sorai',
      description: 'Penerimaan tulus atas perjumpaan & perpisahan dengan rasa syukur yang mendalam',
      order: 15
    }
  };

  for (const [path, url] of Object.entries(localMusicAssets)) {
    const filename = path.split('/').pop() || '';
    const meta = metadataMap[filename];

    if (meta) {
      items.push({
        id: filename,
        filename,
        title: meta.title,
        arabicTitle: meta.arabicTitle,
        subtitle: meta.subtitle,
        artist: meta.artist,
        album: meta.album,
        category: meta.category,
        durationStr: meta.durationStr,
        trackKey: meta.trackKey,
        url,
        isUploadedMp3: true,
        description: meta.description
      });
    } else {
      // Dynamic fallback for any newly added MP3
      const rawBaseName = filename.replace(/\.[^/.]+$/, '');
      const cleanTitle = rawBaseName.replace(/[-_]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      items.push({
        id: filename,
        filename,
        title: cleanTitle,
        subtitle: 'Audio Terupload di src/assets/music/',
        artist: 'Spotsufy Collection',
        album: 'Koleksi Audio Pengguna',
        category: 'Koleksi Musik Tambahan',
        durationStr: '03:00',
        trackKey: 'arabian_acoustic',
        url,
        isUploadedMp3: true,
        description: `Berkas audio asli (${filename}) di folder src/assets/music`
      });
    }
  }

  // Sort by defined order
  return items.sort((a, b) => {
    const orderA = metadataMap[a.filename]?.order ?? 99;
    const orderB = metadataMap[b.filename]?.order ?? 99;
    return orderA - orderB;
  });
}

export function getTrackDisplayName(track: AudioTrackType): { name: string; subtitle: string; hasRealAudio: boolean } {
  if (audioEngine.getCustomTitle()) {
    return {
      name: audioEngine.getCustomTitle()!,
      subtitle: audioEngine.getCustomSubtitle() || 'Koleksi Musik Spotsufy',
      hasRealAudio: true
    };
  }

  const currentItem = audioEngine.getCurrentItem();
  if (currentItem) {
    return {
      name: currentItem.title,
      subtitle: currentItem.subtitle,
      hasRealAudio: true
    };
  }

  const hasReal = !!findMusicUrl(track);
  switch (track) {
    case 'maqam_hijaz':
      return { name: 'Māqām Hījāz', subtitle: 'Al-Farabi · Kesyahduan Relung Hati & Kedekatan Ilahi', hasRealAudio: hasReal };
    case 'maqam_bayati':
      return { name: 'Māqām Bāyātī', subtitle: 'Al-Farabi · Suka Cita, Kelapangan Jiwa & Resonansi Qur’ani', hasRealAudio: hasReal };
    case 'maqam_bayati_2':
      return { name: 'Māqām Bāyātī (Alunan Panjang)', subtitle: 'Al-Farabi · Terapi Relaksasi Jiwa & Psikosomatis', hasRealAudio: hasReal };
    case 'maqam_rast':
      return { name: 'Māqām Rāst', subtitle: 'Al-Farabi · Pemulihan Pikiran Positif & Akal Sehat', hasRealAudio: hasReal };
    case 'maqam_saba':
      return { name: 'Māqām Sābā', subtitle: 'Al-Farabi · Keharuan Jiwa & Sentuhan Batin Mendalam', hasRealAudio: hasReal };
    case 'maqam_sikah':
      return { name: 'Māqām Sīkāh', subtitle: 'Al-Farabi · Kasih Sayang & Kerinduan Ilahiah', hasRealAudio: hasReal };
    case 'maqam_nahawand':
      return { name: 'Māqām Nāhwānd', subtitle: 'Al-Farabi · Refleksi Teduh & Penjernih Pikiran', hasRealAudio: hasReal };
    case 'maqam_jiharkah':
      return { name: 'Māqām Jīhārkāh', subtitle: 'Al-Farabi · Kelembutan Rasa & Keseimbangan Emosi', hasRealAudio: hasReal };
    case 'maqam_ajam':
      return { name: 'Māqām Ājām', subtitle: 'Al-Farabi · Keceriaan, Vitalitas & Harapan Hidup', hasRealAudio: hasReal };
    case 'maqam_kurd':
      return { name: 'Māqām Kûrd', subtitle: 'Al-Farabi · Semangat Energi Positif & Pelepasan Cemas', hasRealAudio: hasReal };
    case 'maqam_iraqi':
      return { name: 'Māqām Īrāqī', subtitle: 'Al-Farabi · Kewaspadaan & Ketajaman Konsentrasi', hasRealAudio: hasReal };
    case 'arabian_acoustic':
    case 'calm_acoustic':
    case 'ambient_reflection':
    case 'sufi_rumi_healing':
      return { name: 'Feel the Healing (Rumi’s Sufi Sounds)', subtitle: 'Seruling Ney Anatolia · Terapi Gelombang Batin', hasRealAudio: hasReal };
    case 'song_beranjak_dewasa':
      return { name: 'Beranjak Dewasa', subtitle: 'Nadin Amizah · Selamat Ulang Tahun', hasRealAudio: hasReal };
    case 'song_everything_u_are':
      return { name: 'Everything U Are', subtitle: 'Hindia · Menari dengan Bayangan', hasRealAudio: hasReal };
    case 'song_sorai':
      return { name: 'Sorai', subtitle: 'Nadin Amizah · Selamat Ulang Tahun', hasRealAudio: hasReal };
    default:
      return { name: 'Spotsufy Music Engine', subtitle: '15 Koleksi Audio Terapi Samā‘iy', hasRealAudio: hasReal };
  }
}

class PresentationAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private currentTrack: AudioTrackType = 'none';
  private currentItem: MusicItem | null = null;
  private currentAudioUrl: string | null = null;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private volumeLevel = 0.8;
  private onStateChange: ((isPlaying: boolean, track: AudioTrackType, item: MusicItem | null) => void) | null = null;

  // Real Audio Media Element
  private audioElement: HTMLAudioElement | null = null;
  private audioSourceNode: MediaElementAudioSourceNode | null = null;
  private currentTime = 0;
  private duration = 0;
  private timeListeners: Set<(currentTime: number, duration: number) => void> = new Set();
  private customTitle: string | null = null;
  private customSubtitle: string | null = null;

  // Playback options
  private isShuffle = false;
  private isRepeat = false;

  constructor() {
    // Lazy initialized on user action
  }

  public getCustomTitle(): string | null {
    return this.customTitle;
  }

  public getCustomSubtitle(): string | null {
    return this.customSubtitle;
  }

  public getCurrentItem(): MusicItem | null {
    return this.currentItem;
  }

  public setListener(cb: (isPlaying: boolean, track: AudioTrackType, item?: MusicItem | null) => void) {
    this.onStateChange = cb;
  }

  public addTimeListener(cb: (currentTime: number, duration: number) => void): () => void {
    this.timeListeners.add(cb);
    cb(this.currentTime, this.duration);
    return () => {
      this.timeListeners.delete(cb);
    };
  }

  private notifyTime(cur: number, dur: number) {
    this.currentTime = cur;
    this.duration = dur;
    this.timeListeners.forEach(listener => listener(cur, dur));
  }

  private initContext() {
    if (!this.ctx) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AudioContextClass();
        this.analyser = this.ctx.createAnalyser();
        this.analyser.fftSize = 64;
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volumeLevel, this.ctx.currentTime);
        this.masterGain.connect(this.analyser);
        this.analyser.connect(this.ctx.destination);
      } catch (e) {
        console.warn('Web Audio Context not supported or restricted', e);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  private ensureAudioElement() {
    this.initContext();
    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.crossOrigin = 'anonymous';
      this.audioElement.preload = 'auto';

      if (this.ctx && this.masterGain) {
        try {
          this.audioSourceNode = this.ctx.createMediaElementSource(this.audioElement);
          this.audioSourceNode.connect(this.masterGain);
        } catch {
          // Ignore if already connected or blocked by browser
        }
      }

      this.audioElement.addEventListener('timeupdate', () => {
        if (this.audioElement) {
          const cur = this.audioElement.currentTime;
          const dur = this.audioElement.duration || 0;
          this.notifyTime(cur, dur);
        }
      });

      this.audioElement.addEventListener('loadedmetadata', () => {
        if (this.audioElement) {
          const cur = this.audioElement.currentTime;
          const dur = this.audioElement.duration || 0;
          this.notifyTime(cur, dur);
        }
      });

      this.audioElement.addEventListener('ended', () => {
        if (this.isRepeat) {
          if (this.audioElement) {
            this.audioElement.currentTime = 0;
            this.audioElement.play().catch(() => {});
          }
        } else {
          // Advance to next song in playlist automatically
          this.nextTrack();
        }
      });

      this.audioElement.addEventListener('play', () => {
        this.isPlaying = true;
        if (this.onStateChange) {
          this.onStateChange(true, this.currentTrack, this.currentItem);
        }
      });

      this.audioElement.addEventListener('pause', () => {
        this.isPlaying = false;
        if (this.onStateChange) {
          this.onStateChange(false, this.currentTrack, this.currentItem);
        }
      });
    }
  }

  public setVolume(vol: number) {
    this.volumeLevel = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.setTargetAtTime(this.volumeLevel, this.ctx.currentTime, 0.05);
      } catch {
        // Fallback
      }
    }
    if (this.audioElement) {
      this.audioElement.volume = this.volumeLevel;
    }
  }

  public getVolume(): number {
    return this.volumeLevel;
  }

  public getAnalyser(): AnalyserNode | null {
    return this.analyser;
  }

  public getCurrentTrack(): AudioTrackType {
    return this.currentTrack;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentTime(): number {
    return this.currentTime;
  }

  public getDuration(): number {
    return this.duration;
  }

  public toggleShuffle(): boolean {
    this.isShuffle = !this.isShuffle;
    return this.isShuffle;
  }

  public getIsShuffle(): boolean {
    return this.isShuffle;
  }

  public toggleRepeat(): boolean {
    this.isRepeat = !this.isRepeat;
    return this.isRepeat;
  }

  public getIsRepeat(): boolean {
    return this.isRepeat;
  }

  // Geser posisi audio ke detik mana pun
  public seek(seconds: number) {
    const target = Math.max(0, seconds);
    if (this.audioElement) {
      const maxDur = this.audioElement.duration || 0;
      const safeTime = maxDur > 0 ? Math.min(target, maxDur) : target;
      try {
        this.audioElement.currentTime = safeTime;
      } catch {}
      this.notifyTime(safeTime, maxDur);
    }
  }

  public pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.isPlaying = false;
    if (this.onStateChange) {
      this.onStateChange(false, this.currentTrack, this.currentItem);
    }
  }

  public resume() {
    this.initContext();
    this.ensureAudioElement();
    if (this.audioElement && this.currentAudioUrl) {
      this.audioElement.volume = this.volumeLevel;
      this.audioElement.play().then(() => {
        this.isPlaying = true;
        if (this.onStateChange) {
          this.onStateChange(true, this.currentTrack, this.currentItem);
        }
      }).catch(err => {
        console.warn('Audio resume error:', err);
      });
    } else {
      // If nothing loaded yet, play first track
      this.playFirstTrack();
    }
  }

  public togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.resume();
    }
  }

  public stop() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
    this.isPlaying = false;
    this.currentTrack = 'none';
    this.currentItem = null;
    this.customTitle = null;
    this.customSubtitle = null;
    this.currentAudioUrl = null;
    if (this.onStateChange) {
      this.onStateChange(false, 'none', null);
    }
  }

  // Plays a specific MusicItem from the library
  public playItem(item: MusicItem) {
    this.initContext();
    this.ensureAudioElement();

    // If clicking current playing track, toggle pause/play
    if (this.currentItem?.id === item.id) {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.resume();
      }
      return;
    }

    this.currentItem = item;
    this.currentTrack = item.trackKey;
    this.customTitle = item.title;
    this.customSubtitle = item.subtitle;

    this.playAudioSource(item.url);
  }

  // Plays custom audio by URL and meta
  public playCustomAudio(url: string, title: string, subtitle: string) {
    this.initContext();
    this.ensureAudioElement();

    const all = getAllAvailableMusic();
    const matched = all.find(m => m.url === url || m.title === title);

    this.currentItem = matched || null;
    this.currentTrack = matched?.trackKey || 'arabian_acoustic';
    this.customTitle = title;
    this.customSubtitle = subtitle;

    this.playAudioSource(url);
  }

  // Plays a track by AudioTrackType
  public playTrack(track: AudioTrackType) {
    if (track === 'none') {
      this.pause();
      return;
    }

    this.initContext();
    this.ensureAudioElement();

    // If currently playing the same track, toggle pause
    if (this.isPlaying && this.currentTrack === track) {
      this.pause();
      return;
    }

    // Find URL for track
    const realUrl = findMusicUrl(track);
    if (!realUrl) return;

    const all = getAllAvailableMusic();
    const matched = all.find(m => m.trackKey === track || m.url === realUrl);

    this.currentItem = matched || null;
    this.currentTrack = track;
    this.customTitle = matched?.title || null;
    this.customSubtitle = matched?.subtitle || null;

    this.playAudioSource(realUrl);
  }

  public playFirstTrack() {
    const list = getAllAvailableMusic();
    if (list.length > 0) {
      this.playItem(list[0]);
    }
  }

  public nextTrack() {
    const list = getAllAvailableMusic();
    if (list.length === 0) return;

    if (!this.currentItem) {
      this.playItem(list[0]);
      return;
    }

    if (this.isShuffle) {
      const remaining = list.filter(m => m.id !== this.currentItem?.id);
      const randomIdx = Math.floor(Math.random() * remaining.length);
      this.playItem(remaining[randomIdx] || list[0]);
      return;
    }

    const currentIdx = list.findIndex(m => m.id === this.currentItem?.id);
    const nextIdx = (currentIdx + 1) % list.length;
    this.playItem(list[nextIdx]);
  }

  public prevTrack() {
    const list = getAllAvailableMusic();
    if (list.length === 0) return;

    // If more than 3 seconds in, restart track
    if (this.currentTime > 3) {
      this.seek(0);
      return;
    }

    if (!this.currentItem) {
      this.playItem(list[list.length - 1]);
      return;
    }

    const currentIdx = list.findIndex(m => m.id === this.currentItem?.id);
    const prevIdx = (currentIdx - 1 + list.length) % list.length;
    this.playItem(list[prevIdx]);
  }

  private playAudioSource(url: string) {
    if (!this.audioElement) return;

    this.currentAudioUrl = url;
    if (this.audioElement.src !== url) {
      this.audioElement.src = url;
      this.audioElement.currentTime = 0;
    }

    this.audioElement.volume = this.volumeLevel;
    this.audioElement.play().then(() => {
      this.isPlaying = true;
      if (this.onStateChange) {
        this.onStateChange(true, this.currentTrack, this.currentItem);
      }
    }).catch(err => {
      console.warn('Audio play request failed or was blocked by browser policy:', err);
    });
  }
}

export const audioEngine = new PresentationAudioEngine();
