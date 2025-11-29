import { Building2 } from 'lucide-react'

interface Building3DProps {
  scrollY: number
}

export default function Building3D({ scrollY }: Building3DProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
      <div 
        className="relative"
        style={{
          transform: `rotateY(${scrollY * 0.1}deg) rotateX(20deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <Building2 className="w-96 h-96 text-purple-500" strokeWidth={0.5} />
      </div>
    </div>
  )
}