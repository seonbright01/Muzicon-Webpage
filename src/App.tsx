/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="bg-[#FBF7EF] text-[#141414] font-body antialiased selection:bg-[#141414] selection:text-[#FFE459]" id="top">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-multiply pointer-events-none">
        <div className="pointer-events-auto">
          <span className="font-display text-2xl tracking-tighter italic">MUZICON</span>
        </div>
        <a href="#contact" className="pointer-events-auto group flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity duration-500">
          <span>Contact Us</span>
          <iconify-icon icon="solar:arrow-right-linear" width="16" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
        </a>
      </nav>

      {/* Hero Block */}
      <header className="relative w-full min-h-screen flex flex-col justify-end bg-[#FFE459] px-6 pb-12 pt-32 md:px-12 md:pb-20">
        <div className="max-w-screen-2xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-9">
              <h1 className="font-display text-7xl md:text-9xl tracking-tight leading-[0.9] font-light italic">
                Music IP <br />
                <span className="not-italic">Solutions.</span>
              </h1>
            </div>
            <div className="md:col-span-3 flex flex-col justify-end gap-6">
              <p className="font-body font-light text-sm md:text-base leading-relaxed opacity-90">
                복잡한 음악저작권의 맥락을 정확히 진단하고, 상생을 위한 비즈니스 솔루션을 처방합니다.
              </p>
              <div className="w-full h-[1px] bg-[#141414] opacity-20"></div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-80">
                <iconify-icon icon="solar:music-note-linear" width="16" strokeWidth="1.5"></iconify-icon>
                <span>음악저작권 전문 컨설팅 그룹</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Context Block: ABOUT */}
      <section className="w-full py-24 md:py-40 px-6 md:px-12 bg-[#FBF7EF]">
        <div className="max-w-screen-md mx-auto">
          <span className="block font-body text-xs uppercase tracking-widest opacity-40 mb-8">ABOUT MUZICON</span>
          <h2 className="font-display text-4xl md:text-5xl leading-tight font-normal mb-12 tracking-tight">
            음악은 창작자의 땀과 노력으로 태어난 소중한 자산입니다.
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/12 border-t border-[#141414] opacity-20 pt-2"></div>
            <div className="w-full md:w-11/12">
              <p className="font-body text-lg md:text-xl font-light leading-relaxed text-[#141414] opacity-80">
                훌륭한 음악이 세상에 나와 정당한 가치를 인정받고 유통되기까지는 복잡한 법률적, 구조적 장벽들이 존재합니다. MUZICON은 라이센싱부터 비즈니스 모델 설계, 비신탁 저작물 유통, 투자에 이르기까지 권리자와 이용자 모두가 상생할 수 있는 건강한 음악 생태계를 구축합니다. 다년간 축적된 심도 있는 지식과 실무 경험을 바탕으로 가장 최적화된 맞춤형 솔루션을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tri Concept Block: Core Values */}
      <section className="w-full py-12 md:py-24 px-6 md:px-12 bg-[#FBF7EF]">
        <div className="max-w-screen-2xl mx-auto border-t border-b border-[#141414] border-opacity-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Item 1 */}
            <div className="py-16 md:py-32 md:pr-12 border-b md:border-b-0 md:border-r border-[#141414] border-opacity-10 flex flex-col justify-between min-h-[40vh]">
              <div className="mb-8">
                <iconify-icon icon="solar:magnifer-linear" width="32" strokeWidth="1.5" className="opacity-60 mb-6"></iconify-icon>
                <h3 className="font-display text-4xl md:text-5xl tracking-tight">정확한<br /><span className="italic">진단</span></h3>
              </div>
              <p className="font-body text-sm font-light opacity-60 max-w-xs">
                법제와 권리 구조에 대한 깊은 이해를 바탕으로 잠재적 법적 분쟁 요소를 오차 없이 진단합니다.
              </p>
            </div>
            {/* Item 2 */}
            <div className="py-16 md:py-32 md:px-12 border-b md:border-b-0 md:border-r border-[#141414] border-opacity-10 flex flex-col justify-between min-h-[40vh]">
              <div className="mb-8">
                <iconify-icon icon="solar:chart-square-linear" width="32" strokeWidth="1.5" className="opacity-60 mb-6"></iconify-icon>
                <h3 className="font-display text-4xl md:text-5xl tracking-tight">투명한<br /><span className="italic">수익 모델링</span></h3>
              </div>
              <p className="font-body text-sm font-light opacity-60 max-w-xs">
                창작자와 기업 모두에게 합리적으로 산정 및 지급될 수 있도록 투명한 수익 분배 모델(BM)을 설계합니다.
              </p>
            </div>
            {/* Item 3 */}
            <div className="py-16 md:py-32 md:pl-12 flex flex-col justify-between min-h-[40vh]">
              <div className="mb-8">
                <iconify-icon icon="solar:users-group-rounded-linear" width="32" strokeWidth="1.5" className="opacity-60 mb-6"></iconify-icon>
                <h3 className="font-display text-4xl md:text-5xl tracking-tight">건강한<br /><span className="italic">동반 성장</span></h3>
              </div>
              <p className="font-body text-sm font-light opacity-60 max-w-xs">
                신규 비즈니스 및 비신탁 저작물 활성화를 통해 장기적으로 함께 성장하는 비전을 제시합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#FBF7EF]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {/* Service 1 */}
            <article className="group cursor-default">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#F2EDE4] mb-6 relative flex items-center justify-center transition-colors duration-700 group-hover:bg-[#141414] group-hover:text-[#FFE459]">
                <iconify-icon icon="solar:document-text-linear" width="64" strokeWidth="1" className="opacity-40 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-110 transform"></iconify-icon>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-2xl tracking-tight">라이센싱 컨설팅</h3>
                <p className="font-body text-sm opacity-60 leading-relaxed">합법적이고 안전한 권리 확보 및 투명하고 합리적인 비용 구조 설계</p>
              </div>
            </article>

            {/* Service 2 */}
            <article className="group cursor-default">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#F2EDE4] mb-6 relative flex items-center justify-center transition-colors duration-700 group-hover:bg-[#141414] group-hover:text-[#FFE459]">
                <iconify-icon icon="solar:case-linear" width="64" strokeWidth="1" className="opacity-40 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-110 transform"></iconify-icon>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-2xl tracking-tight">비즈니스 컨설팅</h3>
                <p className="font-body text-sm opacity-60 leading-relaxed">신규 사업(AI, 메타버스 등) 저작권 이슈 검토 및 수익 분배 구조 구축</p>
              </div>
            </article>

            {/* Service 3 */}
            <article className="group cursor-default">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#F2EDE4] mb-6 relative flex items-center justify-center transition-colors duration-700 group-hover:bg-[#141414] group-hover:text-[#FFE459]">
                <iconify-icon icon="solar:global-linear" width="64" strokeWidth="1" className="opacity-40 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-110 transform"></iconify-icon>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-2xl tracking-tight">비신탁 유통 컨설팅</h3>
                <p className="font-body text-sm opacity-60 leading-relaxed">독립 창작자 및 AI 생성 음원의 권리 증명 및 글로벌 직접 배급 구조 설계</p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Contact Form Block */}
      <section id="contact" className="w-full py-24 px-6 md:px-12 bg-[#FBF7EF]">
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full bg-[#F2EDE4] relative overflow-hidden flex flex-col md:flex-row items-stretch group">
            
            {/* Left Info */}
            <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center relative z-10">
              <h3 className="font-display text-4xl md:text-6xl tracking-tight mb-6">상담 문의</h3>
              <p className="font-body text-sm opacity-60 mb-12 leading-relaxed break-keep">
                음악저작권과 관련된 모든 고민, MUZICON과 함께 해결하세요.<br />
                아래 폼을 작성해 주시면 신속하게 답변해 드리겠습니다.
              </p>
              <div>
                <span className="block font-body text-xs uppercase tracking-widest opacity-40 mb-2">Email Us</span>
                <a href="mailto:muzicon23@gmail.com" className="font-display text-2xl md:text-3xl hover:opacity-60 transition-opacity">
                  muzicon23@gmail.com
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-1/2 p-12 md:p-24 bg-[#EBE5D9] relative z-10">
              <form action="https://formspree.io/f/xjgazbkp" method="POST" className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-body text-xs uppercase tracking-widest opacity-60">이름</label>
                  <input type="text" id="name" name="name" required className="w-full bg-transparent border-b border-[#141414] border-opacity-20 py-3 outline-none focus:border-opacity-100 transition-colors font-body text-sm" placeholder="홍길동" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact" className="font-body text-xs uppercase tracking-widest opacity-60">연락처</label>
                  <input type="text" id="contact" name="contact" required className="w-full bg-transparent border-b border-[#141414] border-opacity-20 py-3 outline-none focus:border-opacity-100 transition-colors font-body text-sm" placeholder="010-0000-0000" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-body text-xs uppercase tracking-widest opacity-60">상담 내용</label>
                  <textarea id="message" name="message" rows={4} required className="w-full bg-transparent border-b border-[#141414] border-opacity-20 py-3 outline-none focus:border-opacity-100 transition-colors font-body text-sm resize-none" placeholder="문의하실 내용을 상세히 적어주세요."></textarea>
                </div>

                <button type="submit" className="mt-4 flex items-center justify-center gap-3 px-8 py-4 border border-[#141414] hover:bg-[#141414] hover:text-[#FBF7EF] transition-colors duration-300 rounded-full group w-max">
                  <span className="text-sm uppercase tracking-widest font-body">전송하기</span>
                  <iconify-icon icon="solar:arrow-right-linear" width="20" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-500"></iconify-icon>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Closing Manifesto */}
      <section className="w-full py-32 md:py-48 px-6 md:px-12 bg-[#FFE459] flex items-center justify-center text-center">
        <div className="max-w-screen-md">
          <iconify-icon icon="solar:record-circle-linear" width="48" strokeWidth="1" className="mb-12 opacity-80 animate-spin-slow" style={{ animationDuration: '10s' }}></iconify-icon>
          <p className="font-display text-4xl md:text-6xl tracking-tight italic leading-tight mb-12">
            "투명하고 합리적인 저작권 생태계,<br />MUZICON이 함께 만듭니다."
          </p>
          <div className="flex justify-center">
            <a href="#top" className="font-body text-xs uppercase tracking-widest border-b border-[#141414] pb-1 hover:opacity-50 transition-opacity">
              페이지 최상단으로 (Back to Top)
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-6 md:px-12 bg-[#FFE459] flex justify-between items-center border-t border-[#141414] border-opacity-10">
        <span className="font-body text-xs opacity-40">© MUZICON</span>
        <div className="flex gap-4 opacity-40">
          <a href="#" className="hover:opacity-100 transition-opacity"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
          <a href="#" className="hover:opacity-100 transition-opacity"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
        </div>
      </footer>
    </div>
  );
}
