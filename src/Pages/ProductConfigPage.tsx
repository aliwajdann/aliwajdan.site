// components/ProductConfigurator.tsx
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import ProductConfigurator3D from '../Components/ProductConfiComp'

export function ProductConfigurator() {
  const [color, setColor] = useState('#ff0000')
  const [size, setSize] = useState(0.6)

  return (
    <div className="relative h-screen w-full">
      {/* 3D Canvas - takes full screen */}
      <Canvas className="absolute inset-0">
        <ProductConfigurator3D color={color} size={size} />
      </Canvas>
      
      {/* 2D Controls - positioned on top */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/80 p-4 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block mb-1">Color:</label>
          <input 
            type="color" 
            value={color} 
            onChange={(e) => setColor(e.target.value)} 
            className="w-16 h-8"
          />
        </div>
        <div>
          <label className="block mb-1">Size: {size.toFixed(1)}</label>
          <input 
            type="range" 
            min="0.5" 
            max="2" 
            step="0.1"
            value={size}
            onChange={(e) => setSize(parseFloat(e.target.value))}
            className="w-48"
          />
        </div>
      </div>
    </div>
  )
}