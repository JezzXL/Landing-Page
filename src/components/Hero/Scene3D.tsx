import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import Building3DModel from './Building3DModel'

export default function Scene3D() {
  return (
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[5, 3, 5]} />
          
          {/* Luzes */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#0ea5e9" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
          
          {/* Modelo 3D */}
          <Building3DModel />
          
          {/* Ambiente */}
          <Environment preset="city" />
          
          {/* Controles suaves (sem interação devido ao pointer-events-none) */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}