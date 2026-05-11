export default function GradientBlob({ className = '', color1 = '#2563EB', color2 = '#7c3aed', size = 300 }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color1} 0%, ${color2} 50%, transparent 70%)`,
      }}
    />
  )
}
