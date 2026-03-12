import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyModal from './components/PrivacyModal'
import { MessageCircle } from 'lucide-react'

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-medium"
      >
        본문으로 이동
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      {privacyOpen && <PrivacyModal onClose={() => setPrivacyOpen(false)} />}

      {/* 모바일 고정 카카오톡 CTA */}
      <a
        href="http://pf.kakao.com/_SZxgZX/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-stone-900 shadow-xl shadow-yellow-400/30"
        style={{ background: '#FEE500' }}
        aria-label="카카오톡으로 상담하기"
      >
        <MessageCircle size={18} aria-hidden="true" />
        카카오톡으로 상담하기
      </a>
    </>
  )
}
