import { Heart, ArrowRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: '매달 반복하던 정산 작업이 6시간에서 10분으로 줄었어요. 처음 실행했을 때 진짜 이게 되는 건지 믿기지 않았습니다.',
    author: '중소기업 경리 담당 (40대)',
  },
  {
    quote: '생각만 하던 기획안을 실제로 실현해볼 수 있도록 해주셨어요! 비용이 저렴하다 보니 처음에는 큰 기대를 안 한 것도 사실인데, 시작하고 나니 제가 잘못 생각했더라구요. 실력도 좋으시고 궁금한 부분도 답변 잘 해주셔서 너무 좋았습니다!',
    author: '스타트업 대표',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-stone-50" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <Heart size={14} className="fill-orange-500 text-orange-500" aria-hidden="true" />
              시작된 이유
            </div>
            <h2 id="story-heading" className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
              "엄마, 이제 그 일은<br />
              <span className="text-amber-700">프로그램한테 맡겨."</span>
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                저희 어머니는 중소기업 경리로 일하십니다. 매년 같은 시기가 되면 며칠씩 야근을 하셨는데, 알고 보니 매번 똑같은 작업의 반복이었습니다.
              </p>
              <p>
                직접 자동화 프로그램을 만들어드렸습니다. 처음 실행하는 날, 어머니가 감동받으셨습니다. 며칠씩 걸리던 일이 몇 분 만에 끝났으니까요.
              </p>
              <p className="font-medium text-stone-800">
                이런 분들이 정말 많을 거라고 생각했습니다.<br />
                설명하기는 귀찮고 어렵지만, 막상 맡기면 쉽게 해결되는 일들.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
            >
              지금 상담 신청하기
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Right: Testimonials */}
          <div>
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-5">고객 후기</p>
            <ul className="space-y-4">
              {testimonials.map((t) => (
                <li
                  key={t.author}
                  className="bg-white rounded-2xl px-6 py-5 border border-stone-100 shadow-sm"
                >
                  <Quote size={20} className="text-amber-300 mb-3" aria-hidden="true" />
                  <p className="text-stone-700 text-sm leading-relaxed mb-4">{t.quote}</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" aria-hidden="true" />
                    <span className="text-xs font-semibold text-stone-500">{t.author}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
