import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: '서비스', href: '#services' },
  { label: '프로세스', href: '#process' },
  { label: '기술 스택', href: '#tech' },
  { label: '고객 후기', href: '#testimonials' },
  { label: '요금제', href: '#pricing' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 border-b ${
        scrolled
          ? 'bg-amber-50/90 backdrop-blur-md shadow-lg shadow-stone-200/50 border-stone-200/60'
          : 'bg-transparent border-transparent'
      }`}
      aria-label="주 내비게이션"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className={`flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg`}
            aria-label="Consolve 홈으로"
          >
<span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-stone-800' : 'text-white'}`}>
              Consolve
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1 ${scrolled ? 'text-stone-600 hover:text-amber-700' : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary px-5 py-2 rounded-xl text-sm font-semibold text-white gradient-bg shadow-md cursor-pointer"
            >
              업무 자동화 시작하기
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors duration-150 ${scrolled ? 'text-stone-600 hover:bg-stone-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass-card border-t border-stone-200/60 px-4 pb-4 pt-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors border-b border-stone-100 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 block text-center btn-primary px-5 py-3 rounded-xl text-sm font-semibold text-white gradient-bg shadow-md"
            onClick={() => setIsOpen(false)}
          >
            업무 자동화 시작하기
          </a>
        </div>
      )}
    </nav>
  )
}
