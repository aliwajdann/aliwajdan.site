// components/DataViz.tsx
import { Line } from '@react-three/drei'
// import { useThree } from '@react-three/fiber'

 function DataViz() {
  const data = [0, 1, 3, 5, 7, 4, 2] // Sample data
  
  return (
    <group position={[0, -2, 0]}>
      {/* X, Y, Z axes */}
      <Line points={[[0, 0, 0], [5, 0, 0]]} color="red" />
      <Line points={[[0, 0, 0], [0, 5, 0]]} color="green" />
      <Line points={[[0, 0, 0], [0, 0, 5]]} color="blue" />
      
      {/* 3D Data Visualization */}
      {data.map((value, i) => (
        <mesh key={i} position={[i, value/2, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#ff00aa" />
        </mesh>
      ))}
    </group>
  )
}
 export default DataViz