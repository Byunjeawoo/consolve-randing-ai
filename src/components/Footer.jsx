import { Mail, MessageCircle } from 'lucide-react'

const footerLinks = {
  서비스: [
    { label: 'RPA / 업무 자동화', href: '#services' },
    { label: '웹 스크래핑', href: '#services' },
    { label: 'API 연동', href: '#services' },
    { label: '챗봇 개발', href: '#services' },
    { label: '문서 자동화', href: '#services' },
  ],
  회사: [
    { label: '프로세스', href: '#process' },
    { label: '기술 스택', href: '#tech' },
    { label: '고객 후기', href: '#testimonials' },
    { label: '요금제', href: '#pricing' },
    { label: '문의하기', href: '#contact' },
  ],
}

export default function Footer({ onPrivacyOpen }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 text-stone-400" aria-label="푸터">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-2 mb-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg">
<span className="font-bold text-xl text-white">Consolve</span>
            </a>
            <p className="text-sm leading-relaxed text-stone-400 max-w-xs mb-6">
              자동화 프로그램 전문 개발 외주 파트너.
              반복 업무를 자동화하여 비즈니스 효율을 극대화합니다.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:contact@consolve.kr"
                aria-label="이메일"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-800 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Mail size={16} aria-hidden="true" />
              </a>
              <a
                href="http://pf.kakao.com/_SZxgZX/chat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="카카오톡 채팅"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-yellow-400 hover:bg-stone-800 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <MessageCircle size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-white mb-4">{group}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-stone-400 hover:text-white transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <p>© {year} Consolve. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={onPrivacyOpen} className="hover:text-stone-400 transition-colors cursor-pointer">개인정보처리방침</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
