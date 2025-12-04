import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import * as THREE from 'three'

interface BuildingProps {
  position: [number, number, number]
  height: number
  width: number
  depth: number
  color: string
  emissive: string
  hasWindows?: boolean
}

function Building({ position, height, width, depth, color, emissive, hasWindows = true }: BuildingProps) {
  const buildingRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (buildingRef.current) {
      buildingRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.05
    }
  })

  const windowRows = Math.floor(height * 2)
  const windowCols = 3

  return (
    <group ref={buildingRef} position={position}>
      {/* Prédio principal */}
      <Box args={[width, height, depth]}>
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={emissive}
          emissiveIntensity={0.1}
        />
      </Box>

      {/* Janelas iluminadas */}
      {hasWindows && [...Array(windowRows)].map((_, row) => (
        <group key={`row-${row}`}>
          {[...Array(windowCols)].map((_, col) => {
            const shouldLight = Math.random() > 0.3 // 70% das janelas acesas
            return (
              <Box
                key={`window-${row}-${col}`}
                args={[0.08, 0.12, 0.02]}
                position={[
                  -width / 3 + (col * width / 3),
                  -height / 2 + 0.3 + (row * (height / windowRows)),
                  depth / 2 + 0.01
                ]}
              >
                <meshStandardMaterial
                  color={shouldLight ? "#fbbf24" : "#1e293b"}
                  emissive={shouldLight ? "#fbbf24" : "#000000"}
                  emissiveIntensity={shouldLight ? 1 : 0}
                />
              </Box>
            )
          })}
        </group>
      ))}

      {/* Luz no topo */}
      {hasWindows && (
        <pointLight
          position={[0, height / 2 + 0.2, 0]}
          intensity={0.5}
          color="#0ea5e9"
          distance={2}
        />
      )}
    </group>
  )
}

export default function CityScape3D() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  // Configuração dos prédios da cidade
  const buildings = [
    // Prédio central (principal)
    { position: [0, 1.5, 0] as [number, number, number], height: 3, width: 1, depth: 1, color: "#0ea5e9", emissive: "#06b6d4", hasWindows: true },
    
    // Prédios à esquerda
    { position: [-2, 1, -1] as [number, number, number], height: 2, width: 0.8, depth: 0.8, color: "#1e40af", emissive: "#0ea5e9", hasWindows: true },
    { position: [-3, 0.75, 0.5] as [number, number, number], height: 1.5, width: 0.6, depth: 0.6, color: "#1e3a8a", emissive: "#0284c7", hasWindows: true },
    { position: [-1.5, 1.25, 1] as [number, number, number], height: 2.5, width: 0.7, depth: 0.7, color: "#075985", emissive: "#0ea5e9", hasWindows: true },
    { position: [-3.5, 0.5, -1.5] as [number, number, number], height: 1, width: 0.5, depth: 0.5, color: "#0c4a6e", emissive: "#0284c7", hasWindows: false },
    
    // Prédios à direita
    { position: [2, 0.9, -0.5] as [number, number, number], height: 1.8, width: 0.7, depth: 0.7, color: "#1e40af", emissive: "#0ea5e9", hasWindows: true },
    { position: [3, 1.1, 1] as [number, number, number], height: 2.2, width: 0.8, depth: 0.8, color: "#075985", emissive: "#06b6d4", hasWindows: true },
    { position: [1.5, 0.6, 1.5] as [number, number, number], height: 1.2, width: 0.6, depth: 0.6, color: "#0c4a6e", emissive: "#0284c7", hasWindows: true },
    { position: [3.5, 1.4, -1] as [number, number, number], height: 2.8, width: 0.9, depth: 0.9, color: "#1e3a8a", emissive: "#0ea5e9", hasWindows: true },
    
    // Prédios ao fundo
    { position: [0, 0.8, -2] as [number, number, number], height: 1.6, width: 0.7, depth: 0.7, color: "#0c4a6e", emissive: "#0284c7", hasWindows: true },
    { position: [-1, 0.65, -2.5] as [number, number, number], height: 1.3, width: 0.5, depth: 0.5, color: "#1e3a8a", emissive: "#075985", hasWindows: false },
    { position: [1.5, 0.55, -2.2] as [number, number, number], height: 1.1, width: 0.5, depth: 0.5, color: "#075985", emissive: "#0c4a6e", hasWindows: false },
  ]

  return (
    <group ref={groupRef}>
      {buildings.map((building, index) => (
        <Building key={index} {...building} />
      ))}

      {/* Luzes ambiente para a cidade */}
      <pointLight position={[0, 3, 0]} intensity={0.5} color="#0ea5e9" distance={8} />
      <pointLight position={[-3, 2, -2]} intensity={0.3} color="#06b6d4" distance={5} />
      <pointLight position={[3, 2, -2]} intensity={0.3} color="#06b6d4" distance={5} />
      
      {/* Luz de base (simula reflexo do chão) */}
      <pointLight position={[0, -1, 0]} intensity={0.2} color="#0284c7" distance={10} />
    </group>
  )
}