import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
import * as THREE from 'three';
import planett from "../assets/planet.png"

function Planet() {
  // Ensure you have placed your planet image in your public folder as 'planet.jpg'
  const texture = useTexture(planett); 

  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function FloatingParticles() {
  const count = 500;

  // Create the positions inside useMemo for performance and to avoid re-creating on every render
  const particlesGeometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [count]);

  return (
    <points geometry={particlesGeometry}>
      <pointsMaterial color="#00ffff" size={0.05} />
    </points>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#0ff" />
    </>
  );
}

function Scene() {
  return (
    <>
      <Lights />
      <Suspense fallback={null}>
        <Planet />
      </Suspense>
      <FloatingParticles />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </>
  );
}

export default function App() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={['#01010f']} />
        <Scene />
      </Canvas>
    </div>
  );
}
