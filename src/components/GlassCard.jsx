export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`glass-card rounded-2xl p-6 transition-all duration-500 ${className}`}>
      {children}
    </div>
  )
}
