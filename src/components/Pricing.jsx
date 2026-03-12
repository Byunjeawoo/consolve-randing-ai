import { Check, Zap, ArrowRight, ShieldCheck, Video, CreditCard, Package } from 'lucide-react'

const plans = [
  {
    name: 'Simple',
    tagline: '딱 하나만 자동화하고 싶을 때',
    price: '49,000',
    priceUnit: '원~',
    desc: '단순 반복 업무 1가지 자동화',
    features: [
      '단일 자동화 프로그램 제작',
      '엑셀·파일·메일 중 1가지',
      '사용 방법 안내 포함',
      '3일 무료 유지보수',
    ],
    cta: '지금 시작하기',
    highlight: false,
  },
  {
    name: 'Standard',
    tagline: '가장 많이 선택하는 플랜',
    price: '99,000',
    priceUnit: '원~',
    desc: '복합 자동화 (2~3단계 연결)',
    features: [
      '2~3단계 연결 자동화',
      '파일 취합 + 보고서 생성 등',
      '스케줄 자동 실행 설정',
      '사용 방법 안내 포함',
      '7일 무료 유지보수',
    ],
    cta: '지금 시작하기',
    highlight: true,
  },
  {
    name: 'Advanced',
    tagline: '복잡하고 까다로운 업무',
    price: '490,000',
    priceUnit: '원~',
    desc: '고급 자동화 (웹 연동 · API 연결 포함)',
    features: [
      'Standard의 모든 기능 포함',
      '웹 데이터 수집 포함',
      '시스템 간 데이터 연동',
      '커스텀 대시보드 옵션',
      '요구사항 변경 1회 무료',
      '30일 무료 유지보수',
    ],
    cta: '상담 신청',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-amber-50/30" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            <Zap size={14} aria-hidden="true" />
            요금제
          </div>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            부담 없이 시작해보세요
          </h2>
          <p className="text-lg text-stone-500 max-w-xl mx-auto">
            하루 식비 한 번으로, 매달 수 시간씩 반복하던 업무를 자동화합니다.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl p-5 md:p-7 flex flex-col transition-transform duration-200 hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-white border-2 border-amber-500 shadow-2xl shadow-amber-200/60'
                  : 'bg-stone-50 border border-stone-200 text-stone-900'
              }`}
            >
              {plan.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg whitespace-nowrap"
                  aria-label="가장 인기 있는 플랜"
                >
                  가장 인기
                </div>
              )}

              <div className={`mb-5 ${plan.highlight ? 'mt-3 md:mt-2' : ''}`}>
                <div className={`text-sm font-semibold mb-1 ${plan.highlight ? 'text-amber-600' : 'text-stone-500'}`}>
                  {plan.tagline}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-stone-900' : 'text-stone-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-3xl md:text-4xl font-bold tabular-nums ${plan.highlight ? 'text-amber-700' : 'text-amber-700'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-base font-medium pb-1 ${plan.highlight ? 'text-stone-500' : 'text-stone-500'}`}>
                    {plan.priceUnit}
                  </span>
                </div>
                <p className={`text-sm ${plan.highlight ? 'text-stone-600' : 'text-stone-600'}`}>{plan.desc}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-7">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-amber-600' : 'text-amber-700'}`}
                      aria-hidden="true"
                    />
                    <span className={`text-sm ${plan.highlight ? 'text-stone-700' : 'text-stone-700'}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 cursor-pointer ${
                  plan.highlight
                    ? 'bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-amber-700 hover:bg-amber-800 text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 md:mt-12 max-w-3xl mx-auto rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <ShieldCheck size={28} className="text-amber-600 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold text-stone-900">결과물 확인 후 마음에 드시면 그때 결제하세요</h3>
              <p className="text-sm text-stone-500">마음에 안 드시면 언제든 비용 없이 종료하실 수 있습니다.</p>
            </div>
          </div>
          <ol className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: Zap, step: '1', label: '업무 내용 전달', desc: '카카오톡으로\n내용 전달' },
              { icon: Video, step: '2', label: '작동 영상 확인', desc: '실제 작동하는\n화면을 영상으로 확인' },
              { icon: CreditCard, step: '3', label: '결과물 검토 & 결제', desc: '불만족시 결제\n없이 종료' },
              { icon: Package, step: '4', label: '프로그램 수령', desc: '결제 확인 후\n즉시 전달' },
            ].map(({ icon: Icon, step, label, desc }) => (
              <li key={step} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center">
                  <Icon size={18} className="text-amber-700" aria-hidden="true" />
                </div>
                <span className="text-xs font-bold text-amber-700">STEP {step}</span>
                <span className="text-sm font-semibold text-stone-800 whitespace-pre-line leading-tight">{label}</span>
                <span className="text-xs text-stone-500 whitespace-pre-line leading-tight">{desc}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="text-center text-stone-400 text-sm mt-8">
          * 업무 복잡도에 따라 견적이 달라질 수 있습니다. 먼저 문의주시면 정확한 견적을 알려드립니다.
        </p>
      </div>
    </section>
  )
}
