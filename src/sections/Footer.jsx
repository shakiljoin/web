export default function Footer() {
  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el && window.lenis) {
      window.lenis.scrollTo(el, { offset: -80 })
    }
  }

  return (
    <footer className="border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[1400px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8">
          <div className="flex items-center gap-2">
            <button onClick={() => scrollToSection('#home')}>
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#2563EB] to-[#7c3aed] flex items-center justify-center text-white text-[8px] font-bold">
                SA
              </div>
            </button>
            <span className="text-xs text-[#999999]">
              © {new Date().getFullYear()} Shakil Ahamed. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            {[
              { label: 'GitHub', href: 'https://github.com/shakiljoin' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shakilahamedweb/' },
              { label: 'Email', href: 'mailto:shakil.joinup@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-[#999999] hover:text-[#2563EB] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
