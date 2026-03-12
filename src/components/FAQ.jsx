import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: '비개발자도 이용할 수 있나요?',
    a: '네. 기술 지식이 없어도 됩니다. 어떤 업무를 반복하고 있는지만 말씀해주시면 나머지는 저희가 해결합니다!',
  },
  {
    q: '회사 내부 데이터를 공유해야 하나요?',
    a: '개발에 필요한 최소한의 샘플 데이터만 공유받으며, 개발 완료 후 바로 데이터를 삭제합니다.',
  },
  {
    q: '납품 후 프로그램이 오작동하면 어떻게 되나요?',
    a: '납품 후 3일간 무료로 수정 지원합니다. 도움이 필요하신 경우 언제든 편하게 연락주세요!',
  },
  {
    q: '개발 기간은 얼마나 걸리나요?',
    a: '단순 자동화는 1일, 복합 자동화는 1주 내외입니다. 다만 요청하신 기능의 범위와 복잡도에 따라 달라질 수 있습니다.',
  },
  {
    q: '지금 가격이 계속 유지되나요?',
    a: '현재 가격은 개발 일정과 운영 상황에 따라 언제든 변경될 수 있습니다. 문의 시점 기준으로 안내드리고 있으니 미리 상담해두시는 걸 추천드립니다.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <li className="border border-stone-200 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-stone-50 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-stone-800">{q}</span>
        <ChevronDown
          size={18}
          className={`text-stone-400 shrink-0 ml-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="px-6 pt-3 pb-5 bg-white">
          <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">{a}</p>
        </div>
      )}
    </li>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            <HelpCircle size={14} aria-hidden="true" />
            자주 묻는 질문
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-stone-900">
            궁금한 점이 있으신가요?
          </h2>
        </div>
        <ul className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </ul>
      </div>
    </section>
  )
}
