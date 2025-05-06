import  { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Text } from '@react-three/drei';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Three.js Floating Hearts Component
const FloatingHearts = ({ count = 30 }: { count?: number }) => {
  const hearts = useRef<THREE.Mesh[]>([]);
  
  useFrame(() => {
    hearts.current.forEach((heart, i) => {
      if (heart) {
        heart.position.y += 0.01 + i * 0.001;
        heart.rotation.z += 0.01;
        if (heart.position.y > 10) {
          heart.position.y = -10;
          heart.position.x = Math.random() * 10 - 5;
        }
      }
    });
  });

  const heartShape = new THREE.Shape();
  heartShape.moveTo(0, 0);
  heartShape.bezierCurveTo(0, 0.5, 0.5, 1, 0, 1.5);
  heartShape.bezierCurveTo(-0.5, 1, 0, 0.5, 0, 0);

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) {
              hearts.current[i] = el;
            }
          }}
          position={[Math.random() * 10 - 5, Math.random() * -10, Math.random() * -5]}
          rotation={[0, 0, Math.random() * Math.PI]}
          scale={[0.2 + Math.random() * 0.3, 0.2 + Math.random() * 0.3, 0.1]}
        >
          <extrudeGeometry args={[heartShape, { depth: 0.1, bevelEnabled: true, bevelSegments: 2, steps: 2 }]} />
          <meshStandardMaterial color="#ff3366" emissive="#ff3366" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </>
  );
};

// Three.js Scene
const ThreeScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingHearts />
      <Text
        position={[0, -2, 0]}
        color="#ff3366"
        fontSize={0.3}
        maxWidth={5}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.ttf"
      >
        Happy Birthday
      </Text>
    </Canvas>
  );
};

// Main Birthday Component
const BirthdayWish = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const messageRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    // GSAP animations
    if (nameRef.current) {
      gsap.from(nameRef.current, {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "back.out(1.7)",
        delay: 0.5
      });
    }

    messageRefs.current.forEach((ref, i) => {
      if (ref) {
        gsap.from(ref, {
          duration: 1,
          y: 30,
          opacity: 0,
          ease: "power2.out",
          delay: 1 + i * 0.3,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      }
    });

    // Floating balloons animation
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon, i) => {
      gsap.to(balloon, {
        y: -20,
        duration: 15 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5
      });
    });
  }, []);

  return (
    <div className="birthday-container" ref={containerRef}>
      {/* Three.js Background */}
      <div className="three-background">
        <ThreeScene />
      </div>

      {/* Content */}
      <div className="content">
        <motion.h1 
          ref={nameRef}
          className="name"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: 0.3
          }}
        >
          Happy Birthday
        </motion.h1>

        <div className="messages">
          <p ref={el => messageRefs.current[0] = el} className="message">
            Wishing you the most wonderful birthday!
          </p>
          {/* <p ref={el => messageRefs.current[1] = el} className="message">
            May your day be filled with joy, laughter, and love.
          </p> */}
          <p ref={el => messageRefs.current[2] = el} className="message">
            You deserve all the happiness in the world.
          </p>
          <p ref={el => messageRefs.current[3] = el} className="message">
            Cheers to another amazing year!
          </p>
        </div>

        <motion.div 
          className="heart-pulse"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ❤️
        </motion.div>
      </div>

      {/* Floating Balloons */}
      <div className="balloon" style={{ left: '10%', fontSize: '24px', animationDelay: '0s' }}>🎈</div>
      <div className="balloon" style={{ left: '30%', fontSize: '30px', animationDelay: '0.5s' }}>🎈</div>
      <div className="balloon" style={{ left: '50%', fontSize: '20px', animationDelay: '1s' }}>🎈</div>
      <div className="balloon" style={{ left: '70%', fontSize: '28px', animationDelay: '1.5s' }}>🎈</div>
      <div className="balloon" style={{ left: '90%', fontSize: '26px', animationDelay: '2s' }}>🎈</div>

      {/* Confetti */}
      <div className="confetti-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="confetti"
            initial={{ 
              y: -10,
              x: Math.random() * 100 - 50,
              rotate: Math.random() * 360,
              opacity: 0
            }}
            animate={{ 
              y: [0, window.innerHeight + 100],
              opacity: [0, 1, 0],
              x: Math.random() * 100 - 50 + (i % 2 === 0 ? 20 : -20)
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              backgroundColor: `hsl(${Math.random() * 60 + 330}, 100%, 60%)`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
      </div>
    </div>
  );
};

// CSS Styles (should be in a separate file or CSS-in-JS)
const styles = `
  .birthday-container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #ffcce6, #ff99cc);
    color: #fff;
    font-family: 'Arial', sans-serif;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }

  .three-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
    max-width: 600px;
    width: 100%;
    padding: 20px;
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .name {
    font-size: 3rem;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    color: #ff3366;
  }

  .messages {
    margin-bottom: 30px;
  }

  .message {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  .heart-pulse {
    font-size: 3rem;
    margin: 20px 0;
  }

  .balloon {
    position: absolute;
    bottom: -50px;
    z-index: 2;
    animation: float 15s infinite ease-in-out;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-100vh) rotate(10deg); }
  }

  .confetti-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  }

  .confetti {
    position: absolute;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    .name {
      font-size: 2.2rem;
    }
    
    .message {
      font-size: 1rem;
    }
    
    .content {
      padding: 15px;
    }
  }
`;

// Add styles to the document
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

// export default BirthdayWish;