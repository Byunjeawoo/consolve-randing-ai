import { ArrowRight, Play, CheckCircle } from 'lucide-react'

const highlights = ['엑셀 보고서 자동화', '반복 메일 발송', '데이터 자동 수집', '문서 자동 생성']

const codeLines = [
  { indent: 0, content: '# 매일 반복하는 그 업무', color: 'text-slate-500' },
  { indent: 0, content: 'import consolve', color: 'text-blue-400' },
  { indent: 0, content: '', color: '' },
  { indent: 0, content: 'task = consolve.automate(', color: 'text-slate-300' },
  { indent: 2, content: 'target="엑셀 보고서 정리",', color: 'text-green-400' },
  { indent: 2, content: 'schedule="매일 09:00",', color: 'text-green-400' },
  { indent: 2, content: 'notify="완료 시 카카오 알림"', color: 'text-orange-400' },
  { indent: 0, content: ')', color: 'text-slate-300' },
  { indent: 0, content: '', color: '' },
  { indent: 0, content: 'task.run()  # 이제 자동으로 처리됩니다', color: 'text-slate-500' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-zinc-900 via-violet-950 to-zinc-900"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/8 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse-dot" aria-hidden="true" />
              지금 얼리버드 모집 중
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              하루 2~3시간씩
              <br />
              <span className="gradient-text">반복하는 그 업무,</span>
              <br />
              이제 프로그램이 해결하세요.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
              중소기업 경리인 저희 어머니의 반복 업무를 자동화해드렸습니다.
              <br />
              설명하기 귀찮은 그 업무, <strong className="text-white">맡기면 간단히 해결됩니다.</strong>
              <br />
              앱·웹 개발 외주 누적 매출 <strong className="text-white">1,600만원+</strong>의 검증된 개발력.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-slate-300"
                >
                  <CheckCircle size={15} className="text-violet-400 flex-shrink-0" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-white shadow-xl shadow-orange-500/20 cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
              >
                업무 자동화 시작하기
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="btn-secondary inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-white border border-white/20 hover:bg-white/10 cursor-pointer"
              >
                <Play size={16} aria-hidden="true" />
                서비스 알아보기
              </a>
            </div>
          </div>

          {/* Right: Code mockup */}
          <div className="hidden lg:block animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Browser chrome */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/40 border border-white/10">
                {/* Title bar */}
                <div className="bg-slate-800/90 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 ml-3">
                    <div className="bg-slate-700/60 rounded-md px-3 py-1 text-xs text-slate-400 font-mono max-w-xs">
                      automation_project.py
                    </div>
                  </div>
                </div>
                {/* Code area */}
                <div className="bg-slate-900/95 p-6 min-h-[280px]">
                  <pre className="text-sm font-mono leading-7">
                    {codeLines.map((line, i) => (
                      <div key={i} className="flex">
                        <span className="text-slate-600 select-none w-7 text-right mr-4 shrink-0">
                          {i + 1}
                        </span>
                        <span
                          className={line.color}
                          style={{ paddingLeft: `${line.indent * 16}px` }}
                        >
                          {line.content}
                        </span>
                      </div>
                    ))}
                  </pre>
                  {/* Cursor */}
                  <div className="mt-1 ml-7 flex items-center gap-3">
                    <span className="text-slate-600 select-none w-7 text-right mr-4 text-sm font-mono shrink-0">
                      {codeLines.length + 1}
                    </span>
                    <span className="w-2 h-5 bg-blue-400 animate-pulse" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -right-6 top-8 glass-card rounded-xl px-4 py-3 shadow-xl border border-blue-200/40"
                aria-hidden="true"
              >
                <div className="text-2xl font-bold text-blue-600">1,600만+</div>
                <div className="text-xs text-slate-500 font-medium">앱·웹 개발 매출</div>
              </div>
              <div
                className="absolute -left-6 bottom-12 glass-card rounded-xl px-4 py-3 shadow-xl border border-orange-200/40"
                aria-hidden="true"
              >
                <div className="text-2xl font-bold text-orange-500">49,000원~</div>
                <div className="text-xs text-slate-500 font-medium">얼리버드 특가</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 55 900 65 720 45C540 25 240 5 0 30L0 60Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  )
}
