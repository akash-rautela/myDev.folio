import { useRef, useCallback, type ReactNode, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowClassName?: string;
  tiltMax?: number;
}

const GlowCard = ({ children, className, glowClassName, tiltMax = 12 }: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = x / rect.width - 0.5;
    const cy = y / rect.height - 0.5;

    // Tilt
    cardRef.current.style.transform = `perspective(600px) rotateY(${cx * tiltMax}deg) rotateX(${-cy * tiltMax}deg) translateY(-4px) scale(1.03)`;

    // Dynamic shadow
    const sx = -cx * 20;
    const sy = -cy * 20;
    cardRef.current.style.boxShadow = `${sx}px ${sy}px 30px -8px hsl(var(--primary) / 0.12), 0 8px 24px -4px hsl(var(--border) / 0.5)`;

    // Glow follows cursor behind card
    glowRef.current.style.opacity = '1';
    glowRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, hsl(var(--primary) / 0.15), transparent 70%)`;
  }, [tiltMax]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || !glowRef.current) return;
    cardRef.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)';
    cardRef.current.style.boxShadow = '';
    glowRef.current.style.opacity = '0';
  }, []);

  return (
    <div className="relative group" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Glow layer — behind card */}
      <div
        ref={glowRef}
        className={cn(
          'absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 -z-10',
          glowClassName
        )}
      />
      {/* Card */}
      <div
        ref={cardRef}
        className={cn(
          'relative z-10 rounded-2xl border border-border bg-card p-6 transition-[transform,box-shadow] duration-200 ease-out',
          'shadow-sm',
          className
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
