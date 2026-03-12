import { X } from 'lucide-react'

export default function PrivacyModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="privacy-heading"
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-stone-100 sticky top-0 bg-white rounded-t-2xl">
          <h2 id="privacy-heading" className="text-lg font-bold text-stone-900">개인정보처리방침</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="닫기"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 text-sm text-stone-600 leading-relaxed space-y-6">
          <p>
            Consolve(이하 "회사")는 개인정보보호법에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.
          </p>

          <section>
            <h3 className="font-bold text-stone-800 mb-2">1. 수집하는 개인정보 항목</h3>
            <p>회사는 상담 신청 시 아래의 개인정보를 수집합니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>필수항목: 이름, 이메일 주소, 문의 서비스, 문의 내용</li>
              <li>선택항목: 회사명</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-stone-800 mb-2">2. 개인정보의 수집 및 이용 목적</h3>
            <p>수집한 개인정보는 다음의 목적으로만 이용합니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>무료 상담 신청 접수 및 답변</li>
              <li>서비스 안내 및 문의 처리</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-stone-800 mb-2">3. 개인정보의 보유 및 이용 기간</h3>
            <p>
              수집한 개인정보는 상담 목적 달성 후 즉시 파기합니다. 단, 관계 법령에 따라 보존이 필요한 경우 해당 법령에서 정한 기간 동안 보관합니다.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-stone-800 mb-2">4. 개인정보의 제3자 제공</h3>
            <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.</p>
          </section>

          <section>
            <h3 className="font-bold text-stone-800 mb-2">5. 이용자의 권리</h3>
            <p>이용자는 언제든지 아래의 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>개인정보 열람 요청</li>
              <li>개인정보 정정·삭제 요청</li>
              <li>개인정보 처리 정지 요청</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-stone-800 mb-2">6. 개인정보 보호책임자</h3>
            <ul className="space-y-1">
              <li>상호: 컨솔브</li>
              <li>대표자: 변재우</li>
              <li>사업자등록번호: 202-04-95848</li>
              <li>주소: 인천광역시 연수구 워터프론트로</li>
              <li>이메일: contact@consolve.kr</li>
              <li>전화: 010-7731-7146</li>
            </ul>
          </section>

          <p className="text-stone-400 text-xs">시행일: 2026년 3월 12일</p>
        </div>
      </div>
    </div>
  )
}
