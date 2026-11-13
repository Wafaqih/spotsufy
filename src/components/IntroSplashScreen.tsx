import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import introVideo from '../assets/intro spotsufy.mp4';
import spotsufyLogo from '../assets/images/logo_spotsufy.png';

interface IntroSplashScreenProps {
  onComplete: () => void;
}

export const IntroSplashScreen: React.FC<IntroSplashScreenProps> = ({ onComplete }) => {
  const [videoError, setVideoError] = useState(false);

  // Fallback timer so intro auto-advances cleanly even if autoplay is restricted
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete();
    }, 6500);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center overflow-hidden select-none">
      {!videoError ? (
        <video
          src={introVideo}
          autoPlay
          muted
          playsInline
          onEnded={onComplete}
          onError={() => setVideoError(true)}
          className="w-full h-full object-contain max-h-[100dvh]"
        />
      ) : (
        <div className="flex flex-col items-center gap-4 p-8 text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-2xl shadow-[#1DB954]/30 border border-white/10">
            <img src={spotsufyLogo} alt="Spotsufy" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-[#1DB954]">Spotsufy</h1>
          <p className="text-sm text-white/75 max-w-md">
            Konsep Terapi Samā‘iy · Imam Al-Ghazali & Imam Al-Farabi
          </p>
        </div>
      )}

      <button
        onClick={onComplete}
        className="fixed bottom-6 right-6 z-10 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#1DB954] hover:text-black text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/15 transition-all inline-flex items-center gap-2 shadow-xl"
      >
        <span>Masuk ke Spotsufy</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
