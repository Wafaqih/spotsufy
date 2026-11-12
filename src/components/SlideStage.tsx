import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

/** Ukuran kanvas desain slide (16:9). Seluruh slide disusun pada ukuran ini lalu diskalakan ke layar. */
export const DESIGN_W = 1280;
export const DESIGN_H = 720;
const MIN_FIT = 0.55;

interface SlideStageProps {
  /** Skala dari kanvas desain ke ukuran tampil di layar. */
  scale: number;
  /** Berubah setiap pergantian slide agar ukuran konten dihitung ulang. */
  slideKey: string | number;
  children: React.ReactNode;
}

/**
 * Kanvas presentasi untuk desktop.
 * 1. Slide dirender pada kanvas 1280x720 yang tetap, lalu diskalakan proporsional (tidak ada elemen yang bergeser antar layar).
 * 2. Jika isi slide masih lebih tinggi/lebar dari frame, isi dikecilkan otomatis sampai pas, sehingga tidak ada yang keluar frame.
 */
export const SlideStage: React.FC<SlideStageProps> = ({ scale, slideKey, children }) => {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number>(0);

  const fit = useCallback(() => {
    const inner = innerRef.current;
    if (!inner) return;
    const root = inner.querySelector('[data-slide-root]') as HTMLElement | null;
    if (!root) return;

    const apply = (v: number) => {
      inner.style.width = `${DESIGN_W / v}px`;
      inner.style.height = `${DESIGN_H / v}px`;
      inner.style.transform = `scale(${v})`;
    };

    let f = 1;
    apply(f);
    for (let i = 0; i < 8; i++) {
      const overY = root.scrollHeight - root.clientHeight;
      const overX = root.scrollWidth - root.clientWidth;
      if (overY <= 1 && overX <= 1) break;
      const ratio = Math.min(
        root.clientHeight / Math.max(root.scrollHeight, 1),
        root.clientWidth / Math.max(root.scrollWidth, 1)
      );
      f = Math.max(MIN_FIT, f * ratio * 0.985);
      apply(f);
      if (f <= MIN_FIT) break;
    }
    inner.dataset.fit = f.toFixed(3);
  }, []);

  const scheduleFit = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(fit);
  }, [fit]);

  // Hitung ulang saat slide berganti
  useLayoutEffect(() => {
    fit();
  }, [slideKey, fit]);

  // Hitung ulang saat konten berubah (tab interaktif di dalam slide) atau font selesai dimuat
  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    const mo = new MutationObserver(scheduleFit);
    mo.observe(inner, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    fonts?.ready.then(scheduleFit).catch(() => {});
    fonts?.addEventListener?.('loadingdone', scheduleFit);
    return () => {
      mo.disconnect();
      fonts?.removeEventListener?.('loadingdone', scheduleFit);
      cancelAnimationFrame(rafRef.current);
    };
  }, [scheduleFit]);

  return (
    <div
      style={{
        width: DESIGN_W,
        height: DESIGN_H,
        transform: `scale(${scale})`,
        transformOrigin: 'top left'
      }}
    >
      <div ref={innerRef} style={{ width: DESIGN_W, height: DESIGN_H, transformOrigin: 'top left' }}>
        {children}
      </div>
    </div>
  );
};
