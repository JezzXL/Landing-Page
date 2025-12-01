interface Grid3DProps {
  scrollY: number
}

export default function Grid3D({ scrollY }: Grid3DProps) {
  return (
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: `perspective(500px) rotateX(60deg) translateY(${scrollY * 0.3}px) scale(2)`,
        transformOrigin: 'center top',
      }}
    />
  )
}