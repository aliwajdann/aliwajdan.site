// components/ProductConfigurator3D.tsx
import { Environment, PresentationControls } from '@react-three/drei'
// import { ThreeEvent } from '@react-three/fiber'

type ProductConfigurator3DProps = {
  color: string
  size: number
  onColorChange?: (color: string) => void
}

export default function ProductConfigurator3D({ color, size }: ProductConfigurator3DProps) {
  return (
    <>
      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        azimuth={[-0.4, 0.2]}
      >
        <mesh scale={size}>
          <torusGeometry args={[3, 1, 16, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </PresentationControls>
      <Environment preset="city" />
    </>
  )
}