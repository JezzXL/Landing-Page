import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Stars } from '@react-three/drei'
import { Suspense } from 'react'
import CityScape3D from './CityScape3D'

export default function Scene3D() {
  return (
    <div className="absolute inset-0 opacity-40 pointer-events-none">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[6, 4, 6]} />
          
          {/* Estrelas no fundo */}
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={0.5}
          />
          
          {/* Luzes principais */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} color="#0ea5e9" />
          <directionalLight position={[-10, 5, -5]} intensity={0.4} color="#06b6d4" />
          <hemisphereLight
            color="#0ea5e9"
            groundColor="#0c4a6e"
            intensity={0.3}
          />
          
          {/* Cidade 3D */}
          <CityScape3D />
          
          {/* Ambiente (reflexos e iluminação) */}
          <Environment preset="night" />
          
          {/* Controles suaves */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3.5}
          />
          
          {/* Fog para profundidade */}
          <fog attach="fog" args={['#0f172a', 5, 15]} />
        </Suspense>
      </Canvas>
    </div>
  )
}