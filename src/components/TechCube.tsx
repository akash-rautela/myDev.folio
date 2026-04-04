import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';

const techLabels = ['React', 'Node', 'Python', 'AWS', 'TS', 'DB'];

function CubeWithLabels() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const autoRotate = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: PointerEvent) => {
    setIsDragging(true);
    dragState.current.prevX = e.clientX;
    dragState.current.prevY = e.clientY;
  };

  const handleMouseMove = (e: PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragState.current.prevX;
    const deltaY = e.clientY - dragState.current.prevY;
    
    autoRotate.current.y += deltaX * 0.01;
    autoRotate.current.x += deltaY * 0.01;
    
    dragState.current.prevX = e.clientX;
    dragState.current.prevY = e.clientY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (isDragging) {
      groupRef.current.rotation.y = autoRotate.current.y;
      groupRef.current.rotation.x = autoRotate.current.x;
    } else {
      // Smooth auto-rotation when not dragging
      const speed = hovered ? 0.8 : 0.4;
      autoRotate.current.y += delta * speed;
      autoRotate.current.x += delta * (speed * 0.35);
      groupRef.current.rotation.y = autoRotate.current.y;
      groupRef.current.rotation.x = autoRotate.current.x;
    }
  });

  const textures = useMemo(() => {
    return techLabels.map((label) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d')!;

      // Radial gradient background
      const gradient = ctx.createLinearGradient(0, 0, 512, 512);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 1)');
      gradient.addColorStop(0.5, 'rgba(20, 35, 60, 0.95)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 512, 512);

      // Outer glow border
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
      ctx.lineWidth = 3;
      ctx.strokeRect(12, 12, 488, 488);

      // Primary border
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.8)';
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 20, 472, 472);

      // Inner accent line
      ctx.strokeStyle = 'rgba(147, 197, 253, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(28, 28, 456, 456);

      // Shadow effect
      const shadowGradient = ctx.createRadialGradient(256, 256, 100, 256, 256, 300);
      shadowGradient.addColorStop(0, 'rgba(30, 58, 138, 0)');
      shadowGradient.addColorStop(1, 'rgba(15, 23, 42, 0.3)');
      ctx.fillStyle = shadowGradient;
      ctx.fillRect(0, 0, 512, 512);

      // Text with glow effect
      ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
      ctx.shadowBlur = 20;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      ctx.fillStyle = '#60A5FA';
      ctx.font = 'bold 72px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, 256, 256);

      // Text outline for extra polish
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.6)';
      ctx.lineWidth = 1;
      ctx.strokeText(label, 256, 256);

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    });
  }, []);

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => {
        setHovered(false);
        setIsDragging(false);
      }}
      onPointerDown={(e: any) => handleMouseDown(e.nativeEvent)}
      onPointerMove={(e: any) => handleMouseMove(e.nativeEvent)}
      onPointerUp={(e: any) => handleMouseUp()}
    >
      <mesh>
        <boxGeometry args={[2.4, 2.4, 2.4]} />
        {textures.map((tex, i) => (
          <meshStandardMaterial
            key={i}
            attach={`material-${i}`}
            map={tex}
            transparent
            opacity={0.95}
            roughness={0.15}
            metalness={0.25}
            emissive="#1e3a8a"
            emissiveIntensity={0.15}
          />
        ))}
      </mesh>

      {/* Outer wireframe glow */}
      <mesh>
        <boxGeometry args={[2.45, 2.45, 2.45]} />
        <meshBasicMaterial wireframe color="#3B82F6" transparent opacity={0.2} />
      </mesh>

      {/* Inner accent wireframe */}
      <mesh>
        <boxGeometry args={[2.35, 2.35, 2.35]} />
        <meshBasicMaterial wireframe color="#60A5FA" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

const TechCube = () => {
  return (
    <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [3.8, 2.8, 3.8], fov: 40 }} dpr={[1, 2]}>
        {/* Ambient light for base illumination */}
        <ambientLight intensity={0.55} />

        {/* Primary key light */}
        <pointLight position={[6, 6, 6]} intensity={1.2} color="#60A5FA" />

        {/* Fill light */}
        <pointLight position={[-5, -2, -5]} intensity={0.6} color="#3B82F6" />

        {/* Side accent light */}
        <pointLight position={[0, 3, -6]} intensity={0.4} color="#93C5FD" />

        {/* Back glow light */}
        <directionalLight position={[2, 4, 8]} intensity={0.4} color="#1E40AF" />

        <CubeWithLabels />
      </Canvas>
    </div>
  );
};

export default TechCube;
