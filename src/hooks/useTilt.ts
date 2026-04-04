import { useRef, useCallback } from 'react';

export const useTilt = (maxTilt = 15) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const shadowX = -x * 30;
    const shadowY = -y * 30;
    const shadowBlur = 40 + Math.abs(x * 20) + Math.abs(y * 20);

    ref.current.style.transform = `perspective(800px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) scale3d(1.03, 1.03, 1.03)`;
    ref.current.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px -10px hsl(var(--primary) / 0.2), 0 0 20px hsl(var(--primary) / 0.05)`;
  }, [maxTilt]);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    ref.current.style.boxShadow = '0 0 0 0 transparent';
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
};
