import { MessageCircle, Search, Code2, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: '무료 상담',
    desc: '현재 업무 프로세스와 자동화 목표를 파악합니다. 30분 무료 화상 상담으로 시작하세요.',
    duration: '30분',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-600',
  },
  {
    icon: Search,
    step: '02',
    title: '요구사항 분석',
    desc: '상세 분석을 통해 최적의 자동화 방법론과 예상 비용·일정을 제안드립니다.',
    duration: '3–5일',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    badge: 'bg-violet-600',
  },
  {
    icon: Code2,
    step: '03',
    title: '개발 & 테스트',
    desc: '애자일 방식으로 개발하며 주기적으로 진행 상황을 공유합니다. 단계별 테스트로 품질을 보장합니다.',
    duration: '2–8주',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    badge: 'bg-orange-500',
  },
  {
    icon: Rocket,
    step: '04',
    title: '납품 & 유지보수',
    desc: '완성된 솔루션을 인도하고 담당자 교육을 진행합니다. 3개월 무료 유지보수를 제공합니다.',
    duration: '지속적 지원',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-600',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-4">
            검증된 프로세스
          </div>
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            시작부터 완성까지
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            4단계 체계적인 프로세스로 프로젝트 성공을 보장합니다.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 via-orange-200 to-emerald-200 z-0"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="relative z-10">
                <div
                  className={`rounded-2xl p-6 border ${step.border} ${step.bg} h-full`}
                >
                  {/* Step number + icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white border ${step.border} shadow-sm`}>
                      <Icon size={22} className={step.color} aria-hidden="true" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full text-white ${step.badge}`}>
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{step.desc}</p>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                    {step.duration}
                  </div>
                </div>

                {/* Arrow (between cards, not after last) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute top-12 -right-3 z-20 w-6 h-6 items-center justify-center bg-white rounded-full border border-slate-200 shadow-sm"
                    aria-hidden="true"
                  >
                    <ArrowRight size={12} className="text-slate-400" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white shadow-lg shadow-orange-500/20 cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
          >
            지금 바로 상담 시작하기
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
