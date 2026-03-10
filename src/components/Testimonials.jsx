import { Heart, ArrowRight } from 'lucide-react'

const painPoints = [
  '매월 같은 엑셀 작업을 반복하고 있다',
  '여러 파일을 하나하나 열어서 데이터를 복사한다',
  '같은 내용의 메일을 수십 명에게 하나씩 보낸다',
  '웹사이트에서 데이터를 매일 손으로 긁어온다',
  '보고서 양식에 숫자 채워 넣는 게 일의 대부분이다',
  '"자동화되면 좋겠다"는 생각은 하지만 어디에 물어봐야 할지 모른다',
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
              <Heart size={14} className="fill-orange-500 text-orange-500" aria-hidden="true" />
              시작된 이유
            </div>
            <h2 id="story-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              "엄마, 이제 그 일은<br />
              <span className="text-blue-600">프로그램이 해줄게."</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                저희 어머니는 중소기업 경리로 일하십니다. 매년 같은 시기가 되면 며칠씩 야근을 하셨는데, 알고 보니 매번 똑같은 작업의 반복이었습니다.
              </p>
              <p>
                직접 자동화 프로그램을 만들어드렸습니다. 처음 실행하는 날, 어머니가 감동받으셨습니다. 며칠씩 걸리던 일이 몇 분 만에 끝났으니까요.
              </p>
              <p className="font-medium text-slate-800">
                이런 분들이 정말 많을 거라고 생각했습니다.<br />
                설명하기는 귀찮고 어렵지만, 막상 맡기면 쉽게 해결되는 일들.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
            >
              지금 업무 맡기기
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Right: Pain points */}
          <div>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-5">혹시 이런 상황이신가요?</p>
            <ul className="space-y-3">
              {painPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-slate-100 shadow-sm text-slate-700 text-sm leading-relaxed"
                >
                  <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0 mt-1.5" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate-500 text-center">
              하나라도 해당된다면, 자동화할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
