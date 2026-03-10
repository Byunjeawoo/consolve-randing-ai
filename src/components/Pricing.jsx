import { Check, Zap, ArrowRight } from 'lucide-react'

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
      '실행 파일 or 스크립트 납품',
      '사용 방법 안내 포함',
      '카카오톡 문의 지원',
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
      '완료 알림 연동',
      '2주 무료 수정 지원',
      '카카오톡 우선 응답',
    ],
    cta: '지금 시작하기',
    highlight: true,
  },
  {
    name: 'Advanced',
    tagline: '복잡하고 까다로운 업무',
    price: '190,000',
    priceUnit: '원~',
    desc: '고급 자동화 (웹 연동·크롤링 포함)',
    features: [
      '웹 데이터 수집 포함',
      '시스템 간 데이터 연동',
      '커스텀 대시보드 옵션',
      '1개월 무료 유지보수',
      '요구사항 변경 1회 무료',
      '카카오톡 우선 응답',
    ],
    cta: '상담 신청',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            <Zap size={14} aria-hidden="true" />
            요금제
          </div>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            부담 없이 시작해보세요
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            얼리버드 특가로 제공합니다. 수요가 늘어나면 가격이 단계적으로 인상될 예정입니다.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-transform duration-200 hover:-translate-y-1 ${
                plan.highlight
                  ? 'gradient-bg text-white shadow-2xl shadow-blue-500/25 scale-105'
                  : 'bg-slate-50 border border-slate-200 text-slate-900'
              }`}
            >
              {plan.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg"
                  aria-label="가장 인기 있는 플랜"
                >
                  가장 인기
                </div>
              )}

              <div className="mb-6">
                <div className={`text-sm font-semibold mb-1 ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>
                  {plan.tagline}
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-bold tabular-nums ${plan.highlight ? 'text-white' : 'text-violet-600'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-base font-medium pb-1 ${plan.highlight ? 'text-blue-200' : 'text-slate-500'}`}>
                    {plan.priceUnit}
                  </span>
                </div>
                <p className={`text-sm ${plan.highlight ? 'text-blue-200' : 'text-slate-600'}`}>{plan.desc}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-7">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-blue-200' : 'text-violet-600'}`}
                      aria-hidden="true"
                    />
                    <span className={`text-sm ${plan.highlight ? 'text-blue-100' : 'text-slate-700'}`}>
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
                    : 'bg-violet-600 hover:bg-violet-700 text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          * 업무 복잡도에 따라 견적이 달라질 수 있습니다. 먼저 문의주시면 정확한 견적을 알려드립니다.
          <br />* 현재 얼리버드 가격이며, 수요 증가 시 순차적으로 인상됩니다.
        </p>
      </div>
    </section>
  )
}
