import {
  FolderOpen,
  Mail,
  Globe,
  Plug,
  FileText,
  Clock,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react'


export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            <TrendingUp size={14} aria-hidden="true" />
            이런 업무를 자동화합니다
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            "이거 자동화 되나요?" — 됩니다.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            설명하기 귀찮았던 그 반복 업무, 막상 맡기면 생각보다 쉽게 해결됩니다.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4">
          {/* Large card: 파일 취합 & 보고서 */}
          <article
            className="bento-card rounded-2xl p-7 border border-blue-200 bg-blue-50 sm:col-span-2 sm:row-span-2 cursor-default"
            tabIndex={0}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-blue-100 border border-blue-200 shadow-sm">
              <FolderOpen size={24} className="text-blue-600" aria-hidden="true" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-semibold mb-4">
              <ShieldCheck size={11} aria-hidden="true" />
              가장 많이 찾는 서비스
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">파일 취합 & 보고서 자동 생성</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              여러 팀에서 받은 엑셀 파일을 하나로 합치고, 보고서 양식에 맞춰 자동으로 정리합니다.
              매주·매월 반복하던 그 작업, 이제 버튼 하나로 끝납니다.
            </p>
            <ul className="space-y-2 mb-6">
              {['여러 엑셀 파일 자동 취합', '보고서 양식 자동 완성', '완료 시 카카오·이메일 알림'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {['Excel', 'Python', 'Google Sheets'].map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/80 text-slate-600 border border-blue-200">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Small cards */}
          <article className="bento-card rounded-2xl p-5 border border-violet-200 bg-violet-50 cursor-default" tabIndex={0}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-violet-100 border border-violet-200">
              <Mail size={20} className="text-violet-600" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1.5">대량 메일 & 알림 자동 발송</h3>
            <p className="text-sm text-slate-600 mb-3">수십·수백 명에게 개인화된 메일을 자동으로 발송합니다.</p>
            <div className="flex flex-wrap gap-1.5">
              {['Gmail', 'Outlook', '카카오'].map((tag) => (
                <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-white/70 text-slate-600 border border-slate-200/60">{tag}</span>
              ))}
            </div>
          </article>

          <article className="bento-card rounded-2xl p-5 border border-cyan-200 bg-cyan-50 cursor-default" tabIndex={0}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-cyan-100 border border-cyan-200">
              <Globe size={20} className="text-cyan-600" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1.5">웹 데이터 자동 수집</h3>
            <p className="text-sm text-slate-600 mb-3">사이트에서 매일 반복하던 데이터 복사·붙여넣기, 자동화합니다.</p>
            <div className="flex flex-wrap gap-1.5">
              {['크롤링', 'Playwright'].map((tag) => (
                <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-white/70 text-slate-600 border border-slate-200/60">{tag}</span>
              ))}
            </div>
          </article>

          {/* Wide card: 시스템 연동 */}
          <article className="bento-card rounded-2xl p-5 border border-orange-200 bg-orange-50 sm:col-span-2 cursor-default" tabIndex={0}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-100 border border-orange-200 shrink-0">
                <Plug size={20} className="text-orange-600" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-800 mb-1.5">시스템 간 데이터 연동</h3>
                <p className="text-sm text-slate-600 mb-3">ERP, 그룹웨어, 엑셀 사이에서 수작업으로 옮기던 데이터를 자동으로 연결합니다.</p>
                <div className="flex flex-wrap gap-1.5">
                  {['ERP', '그룹웨어', 'Google Sheets', 'Notion'].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-white/70 text-slate-600 border border-slate-200/60">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="bento-card rounded-2xl p-5 border border-emerald-200 bg-emerald-50 cursor-default" tabIndex={0}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-emerald-100 border border-emerald-200">
              <FileText size={20} className="text-emerald-600" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1.5">양식 입력 & 문서 자동화</h3>
            <p className="text-sm text-slate-600 mb-3">반복 입력하는 서류·양식, 데이터만 넣으면 자동으로 완성됩니다.</p>
            <div className="flex flex-wrap gap-1.5">
              {['PDF', 'Excel', 'Word'].map((tag) => (
                <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-white/70 text-slate-600 border border-slate-200/60">{tag}</span>
              ))}
            </div>
          </article>

          <article className="bento-card rounded-2xl p-5 border border-pink-200 bg-pink-50 cursor-default" tabIndex={0}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-pink-100 border border-pink-200">
              <Clock size={20} className="text-pink-600" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1.5">스케줄 기반 자동 실행</h3>
            <p className="text-sm text-slate-600 mb-3">매일 아침, 매주 월요일… 정해진 시간에 자동으로 실행됩니다.</p>
            <div className="flex flex-wrap gap-1.5">
              {['예약 실행', '알림 연동'].map((tag) => (
                <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-white/70 text-slate-600 border border-slate-200/60">{tag}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
