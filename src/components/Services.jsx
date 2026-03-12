import {
  FolderOpen,
  Mail,
  Globe,
  Plug,
  FileText,
  Clock,
  TrendingUp,
} from 'lucide-react'

const services = [
  {
    icon: FolderOpen,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100 border-amber-200',
    title: '파일 취합 & 보고서 자동 생성',
    desc: '여러 팀에서 받은 엑셀 파일을 하나로 합치고, 보고서 양식에 맞춰 자동으로 정리합니다. 매주·매월 반복하던 그 작업, 이제 버튼 하나로 끝납니다.',
    tags: ['Excel', 'Python', 'Google Sheets'],
  },
  {
    icon: Mail,
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-100 border-rose-200',
    title: '대량 메일 & 알림 자동 발송',
    desc: '수십·수백 명에게 개인화된 메일을 자동으로 발송합니다.',
    tags: ['Gmail', 'Discord', '카카오'],
  },
  {
    icon: Globe,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100 border-teal-200',
    title: '웹 데이터 자동 수집',
    desc: '사이트에서 매일 반복하던 데이터 복사·붙여넣기, 자동화합니다.',
    tags: ['크롤링', 'Playwright'],
  },
  {
    icon: Plug,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100 border-orange-200',
    title: '시스템 간 데이터 연동',
    desc: 'ERP, 그룹웨어, 엑셀 사이에서 수작업으로 옮기던 데이터를 자동으로 연결합니다.',
    tags: ['ERP', '그룹웨어', 'Google Sheets', 'Notion'],
  },
  {
    icon: FileText,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100 border-emerald-200',
    title: '양식 입력 & 문서 자동화',
    desc: '반복 입력하는 서류·양식, 데이터만 넣으면 자동으로 완성됩니다.',
    tags: ['PDF', 'Excel', 'Word'],
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
            "이거 자동화 되나요?" — 됩니다.
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            설명하기 귀찮았던 그 반복 업무, 막상 맡기면 생각보다 쉽게 해결됩니다.
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
