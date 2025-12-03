import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

export default function Building3DModel() {
  const buildingRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (buildingRef.current) {
      buildingRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      buildingRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={buildingRef} position={[0, 0, 0]}>
      {/* Base do prédio */}
      <Box args={[1.5, 3, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#1e40af"
          metalness={0.8}
          roughness={0.2}
          emissive="#0ea5e9"
          emissiveIntensity={0.2}
        />
      </Box>

      {/* Torre principal */}
      <Box args={[1, 2, 1]} position={[0, 2.5, 0]}>
        <meshStandardMaterial
          color="#0ea5e9"
          metalness={0.9}
          roughness={0.1}
          emissive="#06b6d4"
          emissiveIntensity={0.3}
        />
      </Box>

      {/* Topo/Antena */}
      <Cylinder args={[0.1, 0.1, 1.5, 8]} position={[0, 4.5, 0]}>
        <meshStandardMaterial
          color="#38bdf8"
          metalness={1}
          roughness={0}
          emissive="#0ea5e9"
          emissiveIntensity={0.5}
        />
      </Cylinder>

      {/* Janelas - Linha 1 */}
      {[...Array(3)].map((_, i) => (
        <Box key={`row1-${i}`} args={[0.15, 0.3, 0.02]} position={[-0.4 + i * 0.4, 0.5, 0.76]}>
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={0.8}
          />
        </Box>
      ))}

      {/* Janelas - Linha 2 */}
      {[...Array(3)].map((_, i) => (
        <Box key={`row2-${i}`} args={[0.15, 0.3, 0.02]} position={[-0.4 + i * 0.4, 1.2, 0.76]}>
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={0.8}
          />
        </Box>
      ))}

      {/* Janelas - Linha 3 */}
      {[...Array(2)].map((_, i) => (
        <Box key={`row3-${i}`} args={[0.15, 0.3, 0.02]} position={[-0.2 + i * 0.4, 2.5, 0.51]}>
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={0.9}
          />
        </Box>
      ))}

      {/* Janelas - Linha 4 */}
      {[...Array(2)].map((_, i) => (
        <Box key={`row4-${i}`} args={[0.15, 0.3, 0.02]} position={[-0.2 + i * 0.4, 3.2, 0.51]}>
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={0.9}
          />
        </Box>
      ))}

      {/* Luzes de destaque */}
      <pointLight position={[0, 4, 0]} intensity={1} color="#0ea5e9" distance={5} />
      <pointLight position={[0, -1, 2]} intensity={0.5} color="#06b6d4" distance={4} />
    </group>
  )
}