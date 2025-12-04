import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function HouseModel() {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/models/house-model.glb')

  // Ajustar materiais para melhor aparência
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        if (mesh.material) {
          const material = mesh.material as THREE.MeshStandardMaterial
          material.metalness = 0.1
          material.roughness = 0.7
          material.envMapIntensity = 0.5
          
          // Habilitar sombras
          mesh.castShadow = true
          mesh.receiveShadow = true
        }
      }
    })
  }, [scene])

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <primitive object={scene} scale={1} />
    </group>
  )
}

// Preload do modelo
useGLTF.preload('/models/house-model.glb')