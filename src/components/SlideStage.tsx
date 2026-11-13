import React from 'react';

export const DESIGN_W = 1280;
export const DESIGN_H = 720;

interface SlideStageProps {
  scale: number;
  slideKey: number | string;
  children: React.ReactNode;
}

export const SlideStage: React.FC<SlideStageProps> = ({ scale, slideKey, children }) => {
  return (
    <div
      key={slideKey}
      className="origin-top-left bg-[#121212] text-white overflow-hidden"
      style={{
        width: `${DESIGN_W}px`,
        height: `${DESIGN_H}px`,
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
};
