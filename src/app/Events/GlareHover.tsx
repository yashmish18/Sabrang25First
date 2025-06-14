import React, { useState, useRef, useEffect } from 'react';

interface GlareHoverProps {
  children: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.3,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (playOnce && hasPlayed) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    setOpacity(1);
    if (playOnce) setHasPlayed(true);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {children}
      <div
        style={{
          position: 'absolute',
          top: position.y - glareSize / 2,
          left: position.x - glareSize / 2,
          width: glareSize,
          height: glareSize,
          background: `radial-gradient(circle at center, ${glareColor} 0%, transparent 70%)`,
          opacity: opacity * glareOpacity,
          transform: `rotate(${glareAngle}deg)`,
          pointerEvents: 'none',
          transition: `opacity ${transitionDuration}ms ease-out`,
        }}
      />
    </div>
  );
};

export default GlareHover; 