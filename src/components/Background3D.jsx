import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial, Points, PointMaterial, Ring, Dodecahedron } from '@react-three/drei';
import * as THREE from 'three';

const Galaxy = ({ position, scale, colorInside, colorOutside, spinSpeed = 0.03, mouse }) => {
  const points = useMemo(() => {
    const p = new Float32Array(15000 * 3);
    const colors = new Float32Array(15000 * 3);
    const cIn = new THREE.Color(colorInside);
    const cOut = new THREE.Color(colorOutside);

    for (let i = 0; i < 15000; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 25;
      const spinAngle = radius * 4.5;
      const branchAngle = ((i % 3) * 2 * Math.PI) / 3;

      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * radius;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * radius;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4 * radius;

      p[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      p[i3 + 1] = randomY * 0.2;
      p[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = cIn.clone();
      mixedColor.lerp(cOut, radius / 25);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }
    return { positions: p, colors };
  }, [colorInside, colorOutside]);

  const galaxyRef = useRef();
  useFrame((state, delta) => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.y += delta * spinSpeed;
      galaxyRef.current.rotation.x = THREE.MathUtils.lerp(galaxyRef.current.rotation.x, mouse.y * 0.05, 0.05);
    }
  });

  return (
    <group position={position} scale={scale} rotation={[Math.PI / 4, 0, 0]}>
      <Points ref={galaxyRef} positions={points.positions} colors={points.colors} stride={3}>
        <PointMaterial
          transparent
          vertexColors
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.7}
        />
      </Points>
    </group>
  );
};

const AsteroidBelt = ({ count = 500 }) => {
  const asteroids = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const radius = 22 + Math.random() * 18;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 6;
      const scale = 0.06 + Math.random() * 0.18;
      data.push({ position: [x, y, z], scale });
    }
    return data;
  }, [count]);

  const beltRef = useRef();
  useFrame((state, delta) => {
    if (beltRef.current) {
      beltRef.current.rotation.y += delta * 0.012;
    }
  });

  return (
    <group ref={beltRef}>
      {asteroids.map((ast, i) => (
        <Dodecahedron key={i} position={ast.position} scale={ast.scale}>
          <meshStandardMaterial color="#443322" roughness={1} />
        </Dodecahedron>
      ))}
    </group>
  );
};

const Planet = ({ radius, speed, color, size, offset = 0, position = [0, 0, 0], hasRings = false }) => {
  const meshRef = useRef();
  const groupRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    if (groupRef.current) groupRef.current.position.set(x + position[0], position[1], z + position[2]);
    if (meshRef.current) meshRef.current.rotation.y += 0.02;
  });

  return (
    <group ref={groupRef}>
      <Sphere ref={meshRef} args={[size, 64, 64]}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.8} 
          metalness={0.2} 
          emissive={color}
          emissiveIntensity={0.05}
        />
      </Sphere>
      {hasRings && (
        <Ring args={[size * 1.5, size * 2.5, 64]} rotation={[Math.PI / 2.2, 0, 0]}>
          <meshStandardMaterial color="#6b5e4f" transparent opacity={0.3} side={THREE.DoubleSide} />
        </Ring>
      )}
    </group>
  );
};

const SolarSystem = ({ isDarkMode, mouse }) => {
  const sunColor = isDarkMode ? "#fbbf24" : "#ffffff";
  return (
    <group position={[15, 8, -20]}>
      {/* Sun */}
      <Sphere args={[2.5, 64, 64]}>
        <meshStandardMaterial
          color={sunColor}
          emissive={sunColor}
          emissiveIntensity={1}
          roughness={1}
        />
      </Sphere>
      <pointLight intensity={8} color={sunColor} distance={50} />
      
      {/* Planets */}
      <Planet radius={6} speed={0.8} color="#94a3b8" size={0.3} />
      <Planet radius={9} speed={0.5} color="#fdba74" size={0.5} offset={1} />
      <Planet radius={12} speed={0.3} color="#3b82f6" size={0.6} offset={2.5} />
      <Planet radius={16} speed={0.2} color="#ef4444" size={0.45} offset={4} />
      <Planet radius={22} speed={0.1} color="#d97706" size={1.5} offset={1.2} hasRings />
      
      {/* Asteroids Belt */}
      <AsteroidBelt />
    </group>
  );
};

const Scene = ({ isDarkMode, mouse }) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    const { camera } = state;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 2.5, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 2.5, 0.05);
    camera.lookAt(0, 0, 0);
    state.scene.rotation.y = scrollY * 0.0003;
  });

  return (
    <>
      {/* Dense Star Field with Pure black background */}
      <Stars radius={400} depth={300} count={35000} factor={7} fade speed={1} />
      
      <group>
        {/* Galaxies and Solar System removed for cleaner UI */}
      </group>

      <ambientLight intensity={isDarkMode ? 0.02 : 0.4} />
      
      {/* Far Background Plane to block light leakage */}
      <mesh position={[0, 0, -150]}>
        <planeGeometry args={[1000, 1000]} />
        <meshBasicMaterial color={isDarkMode ? "#000000" : "#f8fafc"} />
      </mesh>
    </>
  );
};

const Background3D = ({ isDarkMode }) => {
  const mouse = useRef({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="background-3d-container">
      <Canvas 
        camera={{ position: [0, 0, 45], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene isDarkMode={isDarkMode} mouse={mouse.current} />
      </Canvas>
      <div className="vignette" />
      <style jsx="true">{`
        .background-3d-container {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: var(--bg-color);
        }
        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 40%, var(--bg-color) 100%);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default Background3D;
