import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 1600, suffix: '만+', label: '앱·웹 개발 매출', desc: '검증된 개발 실력' },
  { value: 3, suffix: '년+', label: '개발 경력', desc: '앱·웹 외주 전문' },
  { value: 24, suffix: '시간', label: '평균 응답 시간', desc: '빠른 커뮤니케이션' },
  { value: 49, suffix: ',000원~', label: '얼리버드 시작가', desc: '수요 증가 시 인상' },
]

function useCountUp(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

function StatItem({ value, suffix, label, desc, started }) {
  const count = useCountUp(value, 1200, started)
  return (
    <div className="text-center px-4">
      <div className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-1 tabular-nums">
        {count}
        <span>{suffix}</span>
      </div>
      <div className="text-base font-semibold text-slate-800 mb-1">{label}</div>
      <div className="text-sm text-slate-500">{desc}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 bg-white border-y border-slate-100" ref={ref} aria-label="주요 성과">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y-2 lg:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
