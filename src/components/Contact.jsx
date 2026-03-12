import { useState } from 'react'
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'

const serviceOptions = [
  'RPA / 업무 자동화',
  '웹 스크래핑 / 데이터 수집',
  'API 연동 자동화',
  '문서 자동화',
  '챗봇 개발',
  '기타 (직접 입력)',
]

const initialState = { name: '', email: '', company: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = '이름을 입력해주세요.'
    if (!form.email.trim()) {
      errs.email = '이메일을 입력해주세요.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = '유효한 이메일 주소를 입력해주세요.'
    }
    if (!form.service) errs.service = '문의 서비스를 선택해주세요.'
    if (!form.message.trim()) errs.message = '문의 내용을 입력해주세요.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      const firstKey = Object.keys(errs)[0]
      document.getElementById(`field-${firstKey}`)?.focus()
      return
    }
    setStatus('loading')
    await new Promise((res) => setTimeout(res, 1500))
    setStatus('success')
    setForm(initialState)
  }

  return (
    <section id="contact" className="py-24 bg-stone-50" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
              무료 상담
            </div>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              지금 바로 시작하세요
            </h2>
            <p className="text-lg text-stone-500 mb-10 leading-relaxed">
              자동화 도입이 망설여지신다면, 부담 없이 상담부터 시작하세요.
              30분 무료 상담을 통해 어떤 자동화가 가장 효과적인지 알아드립니다.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-amber-700" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-800">이메일</div>
                  <a href="mailto:contact@consolve.kr" className="text-sm text-amber-700 hover:underline">
                    contact@consolve.kr
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-amber-700" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-800">전화 상담</div>
                  <a href="tel:010-7731-7146" className="text-sm text-amber-700 hover:underline">
                    010-7731-7146
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-amber-700" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-800">위치</div>
                  <span className="text-sm text-stone-600">인천광역시 연수구 워터프론트로</span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { label: '응답 시간', value: '24시간 내' },
                { label: '무료 상담', value: '30분 제공' },
                { label: '비밀 보장', value: 'NDA 가능' },
              ].map((b) => (
                <div key={b.label} className="text-center bg-white rounded-xl p-4 border border-stone-100 shadow-sm">
                  <div className="text-base font-bold text-amber-700 mb-1">{b.value}</div>
                  <div className="text-xs text-stone-500">{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-lg">
            {/* KakaoTalk CTA */}
            <a
              href="http://pf.kakao.com/_SZxgZX/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-semibold text-stone-900 mb-6 transition-opacity hover:opacity-90"
              style={{ background: '#FEE500' }}
            >
              <MessageCircle size={18} aria-hidden="true" />
              카카오톡으로 바로 문의하기
            </a>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-stone-100" />
              <span className="text-xs text-stone-400 shrink-0">또는 폼으로 신청</span>
              <div className="flex-1 h-px bg-stone-100" />
            </div>
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">상담 신청 완료!</h3>
                <p className="text-stone-500 mb-6">
                  빠른 시일 내로 연락드리겠습니다.<br />
                  보통 영업일 기준 24시간 이내에 답변드립니다.
                </p>
                <button
                  className="btn-secondary px-6 py-3 rounded-xl text-sm font-semibold text-amber-700 border border-amber-200 hover:bg-amber-50 cursor-pointer"
                  onClick={() => setStatus(null)}
                >
                  다시 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="상담 신청 폼">
                <h3 className="text-xl font-bold text-stone-900 mb-6">무료 상담 신청</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="field-name" className="block text-sm font-medium text-stone-700 mb-1.5">
                      이름 <span className="text-red-500" aria-label="필수">*</span>
                    </label>
                    <input
                      id="field-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
                        errors.name ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-stone-50 hover:border-stone-300'
                      }`}
                      placeholder="홍길동"
                    />
                    {errors.name && (
                      <p id="error-name" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                        <AlertCircle size={12} aria-hidden="true" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="field-company" className="block text-sm font-medium text-stone-700 mb-1.5">
                      회사명
                    </label>
                    <input
                      id="field-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 hover:border-stone-300 transition-colors"
                      placeholder="(주)회사명"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="field-email" className="block text-sm font-medium text-stone-700 mb-1.5">
                    이메일 <span className="text-red-500" aria-label="필수">*</span>
                  </label>
                  <input
                    id="field-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-stone-50 hover:border-stone-300'
                    }`}
                    placeholder="example@company.com"
                  />
                  {errors.email && (
                    <p id="error-email" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                      <AlertCircle size={12} aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div className="mb-4">
                  <label htmlFor="field-service" className="block text-sm font-medium text-stone-700 mb-1.5">
                    문의 서비스 <span className="text-red-500" aria-label="필수">*</span>
                  </label>
                  <select
                    id="field-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? 'error-service' : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors cursor-pointer ${
                      errors.service ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-stone-50 hover:border-stone-300'
                    }`}
                  >
                    <option value="">서비스를 선택해주세요</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="error-service" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                      <AlertCircle size={12} aria-hidden="true" />
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="field-message" className="block text-sm font-medium text-stone-700 mb-1.5">
                    문의 내용 <span className="text-red-500" aria-label="필수">*</span>
                  </label>
                  <textarea
                    id="field-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'error-message' : 'helper-message'}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors resize-none ${
                      errors.message ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-stone-50 hover:border-stone-300'
                    }`}
                    placeholder="현재 어떤 업무를 자동화하고 싶으신지, 현재 상황 등을 자유롭게 작성해주세요."
                  />
                  <p id="helper-message" className="mt-1 text-xs text-stone-400">
                    자세할수록 더 정확한 답변이 가능합니다.
                  </p>
                  {errors.message && (
                    <p id="error-message" className="mt-1.5 text-xs text-red-500 flex items-center gap-1" role="alert">
                      <AlertCircle size={12} aria-hidden="true" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full py-4 rounded-xl text-sm font-semibold text-white inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      전송 중...
                    </>
                  ) : (
                    <>
                      무료 상담 신청하기
                      <Send size={16} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
