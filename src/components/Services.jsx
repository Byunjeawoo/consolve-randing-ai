import {
  FileText,
  Mail,
  BarChart2,
  MessageCircle,
  Instagram,
  Clock,
  TrendingUp,
} from 'lucide-react'

const services = [
  {
    icon: FileText,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100 border-amber-200',
    title: '견적서·계약서·인보이스 자동 생성',
    desc: '문의가 들어오면 견적서가 자동으로 만들어지고 발송됩니다. 매번 직접 작성하던 그 시간, 이제 없어도 됩니다.',
    tags: ['PDF', 'Excel', '카카오 알림'],
  },
  {
    icon: BarChart2,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100 border-emerald-200',
    title: '클라이언트 보고서 자동화',
    desc: '작업 내역·성과 데이터를 자동으로 정리해 보고서로 만들어드립니다. 매달 반복하던 정리 작업, 버튼 하나로 끝납니다.',
    tags: ['Google Sheets', 'Excel', 'Notion'],
  },
  {
    icon: MessageCircle,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-100 border-rose-200',
    title: 'CS 자동 응답',
    desc: '자주 오는 문의는 자동으로 답변하고, 중요한 건 알림으로 받습니다. 혼자서도 CS가 돌아가는 구조를 만들어드립니다.',
    tags: ['카카오', '이메일', 'Discord'],
  },
  {
    icon: Instagram,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100 border-orange-200',
    title: '콘텐츠·SNS 자동화',
    desc: '포스팅 예약, 댓글 관리, 콘텐츠 수집까지 자동화합니다. 직접 운영하며 인스타그램 1.5만을 키운 경험을 녹였습니다.',
    tags: ['인스타그램', '블로그', '예약 포스팅'],
  },
  {
    icon: Mail,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100 border-teal-200',
    title: '반복 메일 & 알림 자동 발송',
    desc: '개인화된 메일을 자동으로 발송하고, 원하는 채널로 알림을 연결합니다.',
    tags: ['Gmail', '카카오', 'Discord'],
  },
  {
    icon: Clock,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100 border-amber-200',
    title: '스케줄 기반 자동 실행',
    desc: '매일 아침, 매주 월요일… 정해진 시간에 자동으로 실행됩니다.',
    tags: ['예약 실행', '알림 연동'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50" aria-labelledby="services-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            <TrendingUp size={14} aria-hidden="true" />
            이런 업무를 자동화합니다
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            반복 작업에 소중한 시간을 사용하지 마세요.
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            자동화한 대표님들은 이 업무, 이제 안 합니다.
          </p>
        </div>

        {/* List */}
        <ol className="space-y-3" aria-label="자동화 서비스 목록">
          {services.map((service, index) => {
            const Icon = service.icon
            const isFirst = index === 0
            return (
              <li
                key={service.title}
                className={`flex items-center gap-5 rounded-2xl px-6 py-5 border transition-shadow hover:shadow-md cursor-default ${
                  isFirst
                    ? 'bg-amber-50 border-amber-300 shadow-md'
                    : 'bg-white border-stone-200'
                }`}
              >
                {/* Index */}
                <span className={`text-xs font-mono font-bold w-5 shrink-0 ${isFirst ? 'text-amber-500' : 'text-stone-300'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${
                  isFirst ? service.iconBg : service.iconBg
                }`}>
                  <Icon size={20} className={service.iconColor} aria-hidden="true" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-bold mb-1.5 ${isFirst ? 'text-stone-900' : 'text-stone-800'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isFirst ? 'text-stone-600' : 'text-stone-500'}`}>
                    {service.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="hidden sm:flex flex-wrap gap-1.5 shrink-0 justify-end max-w-[160px]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-2 py-1 rounded-full border ${
                        isFirst
                          ? 'bg-white text-amber-700 border-amber-200'
                          : 'bg-stone-50 text-stone-500 border-stone-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
