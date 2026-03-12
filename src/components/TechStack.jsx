import { Cpu } from 'lucide-react'

const techCategories = [
  {
    category: 'RPA & 자동화',
    techs: ['Python', 'Selenium', 'Playwright', 'PyAutoGUI', 'pywinauto'],
    color: 'bg-blue-500',
  },
  {
    category: '데이터',
    techs: ['Pandas', 'NumPy', 'openpyxl', 'SQLAlchemy', 'xlwings'],
    color: 'bg-violet-500',
  },
  {
    category: '웹 & API',
    techs: ['FastAPI', 'Django', 'React', 'REST API', 'Webhook', 'OAuth'],
    color: 'bg-cyan-500',
  },
  {
    category: '문서 & 리포팅',
    techs: ['Excel/VBA', 'PDF Generation', 'Google Sheets', 'Notion API', 'Jira', 'Slack API'],
    color: 'bg-emerald-500',
  },
  {
    category: '인프라 & 배포',
    techs: ['AWS', 'GCP', 'Docker', 'GitHub Actions', 'Task Scheduler', 'Linux Server'],
    color: 'bg-orange-500',
  },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-24 bg-stone-900 overflow-hidden" aria-labelledby="tech-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-700/60 text-stone-300 text-sm font-medium mb-4 border border-stone-700">
            <Cpu size={14} aria-hidden="true" />
            기술 스택
          </div>
          <h2 id="tech-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            최신 기술로 구현합니다
          </h2>
          <p className="text-lg text-stone-400 max-w-xl mx-auto">
            검증된 기술 스택으로 안정적이고 확장 가능한 자동화 솔루션을 제공합니다.
          </p>
        </div>

        {/* Tech categories */}
        <div className="space-y-8">
          {techCategories.map((cat) => (
            <div key={cat.category} className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="sm:w-40 shrink-0">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${cat.color} shrink-0`} aria-hidden="true" />
                  <span className="text-sm font-semibold text-stone-300">{cat.category}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-sm px-3 py-1.5 rounded-lg bg-stone-800/80 text-stone-200 border border-stone-700/60 hover:border-stone-500 transition-colors duration-150"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-stone-500 text-sm mt-12">
          * 프로젝트 요구사항에 따라 최적의 기술 스택을 선정합니다.
        </p>
      </div>
    </section>
  )
}
