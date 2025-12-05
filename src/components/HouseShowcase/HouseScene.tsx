import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import HouseModel from './HouseModel'

interface HouseSceneProps {
  scrollProgress: number
}

export default function HouseScene({ scrollProgress }: HouseSceneProps) {
  // Tour pelos cômodos - CORRIGIDO com nomes reais
  const cameraPositions = [
    // 1. Sala de Estar - Entrada
    { 
      x: -6.4, y: 2, z: 0.3, 
      lookAt: [2, -1, 4],
      name: 'Sala de Estar'
    },
    
    // 2. Cozinha - Movimento para esquerda
    { 
      x: -3, y: 2, z: 1, 
      lookAt: [-2, 1, -1],
      name: 'Cozinha Gourmet'
    },
    
    // 3. Área de Jantar - Ao lado da cozinha
    { 
      x: -2, y: 2, z: 3.6, 
      lookAt: [4, 1.5, -3],
      name: 'Área de Jantar'
    },
    
    // 4. Hall - Transição
    { 
      x: 1, y: 2, z: 3.5, 
      lookAt: [3.1, 1.5, 3.8],
      name: 'Hall'
    },
    
    // 5. Escritório - Movimento para direita
    { 
      x: 4, y: 2, z: 1, 
      lookAt: [6, 0.3, -1.7],
      name: 'Escritório / Home Office'
    },
    
    // 6. Banheiro - Dentro do quarto
    { 
      x: 8.9, y: 2, z: 1.7, 
      lookAt: [2, 0, -5],
      name: 'Banheiro'
    },
    
    // 7. Suíte Master - Final
    { 
      x: 14, y: 2, z: 1.6, 
      lookAt: [6, -1, -3],
      name: 'Suíte Master'
    }
  ]

  const currentIndex = Math.floor(scrollProgress * (cameraPositions.length - 1))
  const nextIndex = Math.min(currentIndex + 1, cameraPositions.length - 1)
  const localProgress = (scrollProgress * (cameraPositions.length - 1)) - currentIndex

  // Suavização da interpolação (easing)
  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }
  const easedProgress = easeInOutCubic(localProgress)

  // Interpolar posição da câmera
  const cameraPos = {
    x: cameraPositions[currentIndex].x + (cameraPositions[nextIndex].x - cameraPositions[currentIndex].x) * easedProgress,
    y: cameraPositions[currentIndex].y + (cameraPositions[nextIndex].y - cameraPositions[currentIndex].y) * easedProgress,
    z: cameraPositions[currentIndex].z + (cameraPositions[nextIndex].z - cameraPositions[currentIndex].z) * easedProgress,
  }

  // Interpolar lookAt
  const lookAtPos = {
    x: cameraPositions[currentIndex].lookAt[0] + (cameraPositions[nextIndex].lookAt[0] - cameraPositions[currentIndex].lookAt[0]) * easedProgress,
    y: cameraPositions[currentIndex].lookAt[1] + (cameraPositions[nextIndex].lookAt[1] - cameraPositions[currentIndex].lookAt[1]) * easedProgress,
    z: cameraPositions[currentIndex].lookAt[2] + (cameraPositions[nextIndex].lookAt[2] - cameraPositions[currentIndex].lookAt[2]) * easedProgress,
  }

  const currentRoom = cameraPositions[currentIndex].name

  return (
    <div className="w-full h-screen sticky top-0">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={[cameraPos.x, cameraPos.y, cameraPos.z]}
            fov={65}
          />

          {/* Iluminação para ambientes internos */}
          <ambientLight intensity={0.7} />
          
          {/* Luz principal (sol entrando pela janela) */}
          <directionalLight
            position={[-10, 8, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          
          {/* Luz de preenchimento */}
          <directionalLight position={[5, 5, -5]} intensity={0.5} color="#ffffff" />
          
          {/* Luz ambiente de baixo (reflexo do chão) */}
          <hemisphereLight
            color="#ffffff"
            groundColor="#888888"
            intensity={0.6}
          />

          {/* Luzes pontuais para cada ambiente */}
          <pointLight position={[0, 2.8, 0]} intensity={0.6} color="#fef3c7" distance={5} />
          <pointLight position={[-3, 2.8, 0]} intensity={0.6} color="#fef3c7" distance={5} />
          <pointLight position={[3, 2.8, 0]} intensity={0.6} color="#fef3c7" distance={5} />
          <pointLight position={[0, 2.8, -3]} intensity={0.6} color="#fef3c7" distance={5} />

          {/* Modelo da casa - SEM scrollProgress */}
          <HouseModel />

          {/* Sombra */}
          <ContactShadows
            position={[0, 0, 0]}
            opacity={0.4}
            scale={20}
            blur={2}
            far={6}
          />

          {/* Ambiente para reflexos */}
          <Environment preset="apartment" />

          {/* Controles que seguem o lookAt */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            target={[lookAtPos.x, lookAtPos.y, lookAtPos.z]}
          />
        </Suspense>
      </Canvas>

      {/* Indicador de cômodo atual - CORRIGIDO */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 backdrop-blur-xl px-8 py-3 rounded-full border border-cyan-400/30 shadow-2xl">
          <span className="text-white font-bold text-lg">{currentRoom}</span>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-20">
        <div className="text-sm mb-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
          Role para explorar os cômodos
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">
            {currentIndex + 1} / {cameraPositions.length}
          </span>
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-400 transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-400">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>
      </div>

      {/* Setas de navegação visual */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-1">
          {cameraPositions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-cyan-400 scale-125' 
                  : index < currentIndex 
                  ? 'bg-cyan-600' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}