import { useEffect, useRef } from "react";

const MouseGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = e.clientX + "px";
      ref.current.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2
      w-[400px] h-[400px] rounded-full blur-[120px] opacity-20
      bg-yellow-400 hidden md:block"
    />
  );
};

export default MouseGlow;