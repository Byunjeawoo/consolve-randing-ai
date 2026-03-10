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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-card shadow-lg shadow-slate-200/50'
          : 'bg-transparent'
      }`}
      aria-label="주 내비게이션"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            aria-label="Consolve 홈으로"
          >
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shadow-md">
              <Zap size={16} className="text-white" aria-hidden="true" />
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">
              Consolve
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
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
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors duration-150"
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
          className="md:hidden glass-card border-t border-slate-200/60 px-4 pb-4 pt-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors border-b border-slate-100 last:border-0"
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
