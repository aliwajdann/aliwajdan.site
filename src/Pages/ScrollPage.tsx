// import { Canvas } from '@react-three/fiber';
// import { useTexture } from '@react-three/drei';
// import { OrbitControls, useTexture } from '@react-three/drei';
// import { Suspense, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// import * as THREE from 'three';
// import img from "../assets/planet.png"

// function Planet() {
//   const texture = useTexture(img);
//   return (
//     <mesh rotation={[0.4, 0.2, 0]}>
//       <sphereGeometry args={[2.5, 64, 64]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// }

// function FloatingParticles() {
//   const count = 500;
//   const particlesGeometry = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     for (let i = 0; i < count * 3; i++) {
//       positions[i] = (Math.random() - 0.5) * 20;
//     }
//     const geometry = new THREE.BufferGeometry();
//     geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     return geometry;
//   }, [count]);

//   return (
//     <points geometry={particlesGeometry}>
//       <pointsMaterial color="#00ffff" size={0.05} />
//     </points>
//   );
// }

function AnimatedShapes({ scrollYProgress }: { scrollYProgress: any }) {
  const boxX = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  const boxRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <motion.div
      className="absolute top-[150vh] left-1/2 -translate-x-1/2 z-10"
      style={{ x: boxX, rotate: boxRotate }}
    >
      <div className="w-32 h-32 bg-cyan-500 rounded-xl shadow-xl"></div>
    </motion.div>
  );
}

// function Scene() {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={2} color="#0ff" />
//       <Suspense fallback={null}>
//         <Planet />
//       </Suspense>
//       <FloatingParticles />
//       <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
//     </>
//   );
// }

// function CanvasBackground() {
//   return (
//     <Canvas
//       className="absolute inset-0 w-full h-full z-0"
//       camera={{ position: [0, 0, 8], fov: 60 }}
//     >
//       <color attach="background" args={["#01010f"]} />
//       <Scene />
//     </Canvas>
//   );
// }

export default function ScrollPage() {
  const { scrollYProgress } = useScroll();
  const scalePlanet = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const rotatePlanet = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  return (
    <div className="relative w-full min-h-[300vh] bg-black text-white overflow-hidden">
      {/* <CanvasBackground /> */}

      <motion.div className="absolute top-[30vh] left-0 w-full text-center z-10"
        style={{ scale: scalePlanet }}>
        <h1 className="text-5xl font-bold">Ali's Universe</h1>
      </motion.div>

      <motion.div className="absolute top-[100vh] w-full text-center z-10"
        style={{ rotate: rotatePlanet }}>
        <h2 className="text-4xl">Explore the Planet</h2>
      </motion.div>

      <motion.div className="absolute top-[170vh] w-full text-center z-10"
        style={{ opacity: scrollYProgress }}>
        <h2 className="text-4xl font-semibold">Scroll changes everything...</h2>
      </motion.div>

      <AnimatedShapes scrollYProgress={scrollYProgress} />

      <div className="absolute top-[250vh] w-full text-center z-10">
        <h3 className="text-3xl">This is just the beginning...</h3>
      </div>
    </div>
  );
}