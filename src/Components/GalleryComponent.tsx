// components/PortfolioGallery.tsx
import { OrbitControls, useTexture, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DoubleSide } from 'three'
import img from "../assets/image-1.jpg"
import img1 from "../assets/image-1.jpg"
import img2 from "../assets/image-2.jpg"
import img3 from "../assets/p1.jpg"
import img4 from "../assets/p2.jpg"
import img5 from "../assets/p3.jpg"
// Sample portfolio items data
const portfolioItems = [
  { id: 1, imageUrl: img, title: 'Picture', slug: 'project-1' },
  { id: 2, imageUrl: img1, title: 'Project 2', slug: 'project-2' },
  { id: 3, imageUrl: img2, title: 'Project 3', slug: 'project-3' },
  { id: 4, imageUrl: img3, title: 'Project 4', slug: 'project-4' },
  { id: 5, imageUrl: img4, title: 'Project 5', slug: 'project-5' },
  { id: 6, imageUrl: img5, title: 'Project 6', slug: 'project-6' },
//   { id: 7, imageUrl: '/images/project7.jpg', title: 'Project 7', slug: 'project-7' },
//   { id: 8, imageUrl: '/images/project8.jpg', title: 'Project 8', slug: 'project-8' },
//   { id: 9, imageUrl: '/images/project9.jpg', title: 'Project 9', slug: 'project-9' },
]

export function PortfolioGallery() {
  const [windowHeight, setWindowHeight] = useState('100vh')
  const [activeItem, setActiveItem] = useState<number | null>(null)

  // Handle mobile viewport units
  useEffect(() => {
    const setRealViewportHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      setWindowHeight('calc(var(--vh, 1vh) * 100)')
    }

    setRealViewportHeight()
    window.addEventListener('resize', setRealViewportHeight)
    
    return () => window.removeEventListener('resize', setRealViewportHeight)
  }, [])

  return (
    <div style={{ 
      height: windowHeight,
      minHeight: '100svh',
      width: '100%',
      position: 'relative'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        
        {/* 3D Grid of Portfolio Items */}
        {portfolioItems.map((item, index) => {
          const row = Math.floor(index / 3) - 1 // -1, 0, 1 for rows
          const col = (index % 3) - 1 // -1, 0, 1 for columns
          return (
            <PortfolioItem 
              key={item.id}
              position={[col * 3, 0, row * 3]}
              imageUrl={item.imageUrl}
              title={item.title}
              slug={item.slug}
              isActive={activeItem === item.id}
              onActiveChange={(isActive) => 
                setActiveItem(isActive ? item.id : null)
              }
            />
          )
        })}
      </Canvas>
    </div>
  )
}

type PortfolioItemProps = {
  position: [number, number, number]
  imageUrl: string
  title: string
  slug: string
  isActive: boolean
  onActiveChange: (isActive: boolean) => void
}

function PortfolioItem({ position, imageUrl, title, slug, isActive, onActiveChange }: PortfolioItemProps) {
  const texture = useTexture(imageUrl)
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  const [hasError, ] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (texture) setLoaded(true)
  }, [texture])

  const handleClick = () => {
    navigate(`/portfolio/${slug}`)
  }

  const handlePointerOver = () => {
    setHovered(true)
    onActiveChange(true)
  }

  const handlePointerOut = () => {
    setHovered(false)
    onActiveChange(false)
  }

  // Animation values
  const scale = isActive ? 1.1 : hovered ? 1.05 : 1
  const rotationY = hovered ? Math.PI * 0.02 : 0
  const zPosition = isActive ? 0.5 : hovered ? 0.2 : 0

  if (hasError) {
    return (
      <group position={position}>
        <mesh position={[0, 0, zPosition]}>
          <boxGeometry args={[2, 2, 0.2]} />
          <meshStandardMaterial color="#ff5555" />
        </mesh>
        <Text
          position={[0, -1.5, 0.11]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Failed to load
        </Text>
      </group>
    )
  }

  return (
    <group 
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      {/* Main Image Panel */}
      <mesh 
        position={[0, 0, zPosition]}
        scale={[scale, scale, scale]}
        rotation={[0, rotationY, 0]}
      >
        <boxGeometry args={[2, 2, 0.2]} />
        <meshStandardMaterial 
          map={loaded ? texture : null}
          color={loaded ? undefined : '#333333'}
          emissive={hovered || isActive ? '#ffffff' : '#000000'}
          emissiveIntensity={hovered ? 0.3 : isActive ? 0.5 : 0}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Title Label */}
      {loaded && (
        <Text
          position={[0, -1.5, 0.11]}
          fontSize={0.3}
          color={isActive ? '#ffffff' : '#aaaaaa'}
          anchorX="center"
          anchorY="middle"
          outlineColor="#000000"
          outlineWidth={0.01}
        >
          {title}
        </Text>
      )}

      {/* Loading Indicator */}
      {!loaded && !hasError && (
        <mesh position={[0, 0, 0.11]}>
          <boxGeometry args={[1.8, 1.8, 0.01]} />
          <meshStandardMaterial 
            color="#333333"
            side={DoubleSide}
          />
          <Text
            position={[0, 0, 0.02]}
            fontSize={0.2}
            color="#aaaaaa"
            anchorX="center"
            anchorY="middle"
          >
            Loading...
          </Text>
        </mesh>
      )}
    </group>
  )
}