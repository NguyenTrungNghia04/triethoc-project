import { useState, useCallback, useEffect } from 'react'

// =============================================
// DỮ LIỆU SLIDES CHO MỤC 3.5.1
// =============================================
const slides351 = [
  {
    id: 'intro-351',
    badge: 'Mục lớn I · Giới thiệu',
    badgeColor: 'bg-teal-500/20 text-teal-300 border border-teal-500/30',
    title: '3.5.1. KHÁI NIỆM CON NGƯỜI VÀ BẢN CHẤT CON NGƯỜI',
    accent: 'from-teal-500 to-emerald-500',
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-6 py-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-3xl shadow-lg shadow-teal-500/30">
          🧬
        </div>
        <p className="text-slate-300 text-xl leading-relaxed max-w-xl">
          Triết học Mác - Lênin tiếp cận con người từ góc độ <strong className="text-white">vật chất - biện chứng</strong>, kết hợp cả hai chiều: <em className="text-teal-300">tự nhiên</em> và <em className="text-teal-300">xã hội</em>.
        </p>
        <div className="grid grid-cols-2 gap-4 w-full max-w-lg mt-2">
          {['a. Thực thể sinh học – xã hội', 'b. Sản phẩm của lịch sử', 'c. Chủ thể & sản phẩm lịch sử', 'd. Bản chất là tổng hòa QHXH'].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-xl text-slate-300 font-medium text-left">
              <span className="text-teal-400 font-bold mr-1">{String.fromCharCode(9312 + i)}</span> {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'slide-351-a',
    badge: 'Mục 3.5.1 · Luận điểm A',
    badgeColor: 'bg-teal-500/20 text-teal-300 border border-teal-500/30',
    title: 'a. Con người là thực thể sinh học – xã hội',
    accent: 'from-teal-500 to-emerald-500',
    content: (
      <div className="space-y-5">
        <p className="text-slate-300 text-xl leading-relaxed italic border-l-2 border-teal-500 pl-4">
          Con người là thực thể thống nhất giữa mặt tự nhiên và mặt xã hội — <span className="text-teal-300">"thực thể tự nhiên có tính chất người"</span>.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/60 border border-teal-500/20 p-5 rounded-2xl space-y-2">
            <p className="text-xl font-black text-teal-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" /> CON NGƯỜI TỰ NHIÊN
            </p>
            {[
              'Là bộ phận của tự nhiên, kết quả quá trình tiến hóa',
              'Có hệ thống nhu cầu tự nhiên',
              'Chịu sự chi phối của quy luật tự nhiên',
              'Có thể biến đổi giới tự nhiên dựa trên quy luật khách quan',
              'Giới tự nhiên là "thân thể vô cơ của con người"',
            ].map((t, i) => (
              <p key={i} className="text-lg text-slate-300 flex gap-2">
                <span className="text-teal-500 mt-0.5 shrink-0">•</span>{t}
              </p>
            ))}
          </div>
          <div className="bg-slate-800/60 border border-emerald-500/20 p-5 rounded-2xl space-y-2">
            <p className="text-lg font-black text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> CON NGƯỜI XÃ HỘI
            </p>
            {[
              'Lao động — hoạt động đặc trưng cơ bản nhất',
              'Có những hoạt động xã hội đặc thù',
              'Chịu sự chi phối của quy luật xã hội',
            ].map((t, i) => (
              <p key={i} className="text-lg text-slate-300 flex gap-2">
                <span className="text-emerald-500 mt-0.5 shrink-0">•</span>{t}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/25 p-4 rounded-2xl">
          <p className="text-lg font-bold text-amber-400 mb-2 flex items-center gap-1.5">💡 Ý nghĩa nghiên cứu</p>
          <p className="text-lg text-slate-300 leading-relaxed">Cần chú ý <strong className="text-white">cả hai mặt</strong> tự nhiên và xã hội, không tuyệt đối hóa mặt nào. Trong sự nghiệp đổi mới: phát triển con người toàn diện, nâng cao đời sống vật chất lẫn văn hóa.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'slide-351-b',
    badge: 'Mục 3.5.1 · Luận điểm B',
    badgeColor: 'bg-teal-500/20 text-teal-300 border border-teal-500/30',
    title: 'b. Con người là sản phẩm của lịch sử và của chính bản thân con người',
    accent: 'from-teal-500 to-emerald-500',
    content: (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-5 items-stretch">
          <div className="flex-1 bg-slate-800/60 border border-white/10 rounded-2xl p-5 space-y-3 flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-xl shadow-md shadow-teal-500/20 mb-1">🌿</div>
            <p className="text-lg font-bold text-white">Sản phẩm của giới tự nhiên</p>
            <p className="text-lg text-slate-400 leading-relaxed flex-1">
              Con người là kết quả của quá trình tiến hóa lâu dài của thế giới tự nhiên — mang những đặc tính sinh học được kế thừa từ hàng triệu năm tiến hóa.
            </p>
          </div>
          <div className="hidden md:flex items-center text-slate-600 text-2xl font-light">+</div>
          <div className="flex-1 bg-slate-800/60 border border-white/10 rounded-2xl p-5 space-y-3 flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-xl shadow-md shadow-blue-500/20 mb-1">🏛️</div>
            <p className="text-lg font-bold text-white">Sản phẩm của lịch sử xã hội</p>
            <p className="text-lg text-slate-400 leading-relaxed flex-1">
              Con người còn là sản phẩm của lịch sử xã hội loài người — được hình thành, phát triển trong các điều kiện xã hội, thời đại cụ thể.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-5 text-center space-y-2">
          <p className="text-xl font-bold text-slate-400 uppercase tracking-widest">Luận điểm cốt lõi của Mác</p>
          <p className="text-xl text-white leading-relaxed">
            Con người hiện thực đang <strong className="text-teal-300">hoạt động, lao động sản xuất</strong> và làm ra lịch sử của chính mình — không phải thụ động chờ đợi lịch sử ban cho.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'slide-351-c',
    badge: 'Mục 3.5.1 · Luận điểm C',
    badgeColor: 'bg-teal-500/20 text-teal-300 border border-teal-500/30',
    title: 'c. Con người vừa là chủ thể của lịch sử, vừa là sản phẩm của lịch sử',
    accent: 'from-teal-500 to-emerald-500',
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-emerald-500/10 border border-emerald-500/25 p-5 rounded-2xl space-y-3">
            <p className="text-xl font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <span className="text-xl">⚡</span> Chủ thể của lịch sử
            </p>
            {[
              { label: 'Không có con người → Không có lịch sử', icon: '🔑' },
              { label: 'Sáng tạo ra các giá trị vật chất và tinh thần', icon: '✨' },
              { label: 'Động lực thúc đẩy sự phát triển của lịch sử qua hoạt động thực tiễn', icon: '🚀' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-lg text-slate-300">
                <span className="text-xl mt-0.5">{item.icon}</span>
                <span className="leading-relaxed">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="bg-blue-500/10 border border-blue-500/25 p-5 rounded-2xl space-y-3">
            <p className="text-xl font-black text-blue-400 uppercase tracking-widest flex items-center gap-2">
              <span className="text-xl">🏷️</span> Sản phẩm của lịch sử
            </p>
            {[
              { label: 'Sản phẩm của thời đại đang sống', icon: '📅' },
              { label: 'Sản phẩm của một nền văn hóa nhất định', icon: '🎭' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-lg text-slate-300">
                <span className="text-xl mt-0.5">{item.icon}</span>
                <span className="leading-relaxed">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative bg-slate-800/50 border border-white/10 rounded-2xl p-5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5" />
          <p className="relative text-lg text-slate-300 leading-relaxed text-center">
            Đây là <strong className="text-white">mối quan hệ biện chứng</strong>: con người tạo ra lịch sử nhưng cũng bị lịch sử tạo ra — không phải thụ động một chiều. Mác gọi đây là <em className="text-teal-300">tính hai mặt</em> của vị thế con người trong lịch sử.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'slide-351-d',
    badge: 'Mục 3.5.1 · Luận điểm D',
    badgeColor: 'bg-teal-500/20 text-teal-300 border border-teal-500/30',
    title: 'd. Bản chất con người là tổng hòa các quan hệ xã hội',
    accent: 'from-teal-500 to-emerald-500',
    content: (
      <div className="space-y-5">
        <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-6 text-center space-y-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5" />
          <p className="relative text-xl text-amber-300 italic font-medium leading-relaxed">
            "Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội"
          </p>
          <p className="relative text-lg text-slate-500 mt-2">— Luận cương về Feuerbach; Mác và Ăngghen, t.3, 1995, tr.11</p>
        </div>
        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-5 space-y-3">
          <p className="text-xl font-black text-white uppercase tracking-widest mb-1 flex items-center gap-2">
            <span className="text-yellow-400">⚠️</span> Lưu ý cực kỳ quan trọng
          </p>
          {[
            'Không có con người chung chung, trừu tượng phi giai cấp, phi dân tộc, phi thời đại. Con người luôn tồn tại trong không - thời gian lịch sử cụ thể.',
            'Bản chất con người không nhất thành, bất biến — nó vận động, biến đổi theo thực tiễn xã hội.',
            'Bản chất con người được hình thành và phát triển thông qua các mối quan hệ xã hội hiện thực.',
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-3 text-lg text-slate-300 leading-relaxed">
              <span className="text-teal-400 font-bold shrink-0 mt-0.5">{i + 1}.</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

// =============================================
// DỮ LIỆU SLIDES CHO MỤC 3.5.2
// =============================================
const slides352 = [
  {
    id: 'intro-352',
    badge: 'Mục lớn II · Giới thiệu',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    title: '3.5.2. HIỆN TƯỢNG THA HÓA CON NGƯỜI VÀ VẤN ĐỀ GIẢI PHÓNG CON NGƯỜI',
    accent: 'from-indigo-500 to-purple-500',
    content: (
      <div className="flex flex-col items-center justify-center text-center space-y-6 py-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl shadow-lg shadow-indigo-500/30">
          ⛓️
        </div>
        <p className="text-slate-300 text-xl leading-relaxed max-w-xl">
          Mác phân tích hiện tượng <strong className="text-white">tha hóa lao động</strong> — khi lao động không còn giải phóng con người mà trở thành công cụ <em className="text-indigo-300">nô dịch</em> con người.
        </p>
        <div className="grid grid-cols-3 gap-3 w-full max-w-lg mt-2">
          {['a. Thực chất tha hóa lao động', 'b. Giải phóng toàn thể xã hội', 'c. Phát triển tự do mỗi người'].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-xl text-slate-300 font-medium text-left">
              <span className="text-indigo-400 font-bold mr-1">{String.fromCharCode(9312 + i)}</span> {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'slide-352-a',
    badge: 'Mục 3.5.2 · Luận điểm A',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    title: 'a. Thực chất của hiện tượng tha hóa con người là lao động của con người bị tha hóa',
    accent: 'from-indigo-500 to-purple-500',
    content: (
      <div className="space-y-4">
        {[
          {
            icon: '📦',
            title: 'Tha hóa với sản phẩm lao động',
            body: 'Sản phẩm lao động — từ chỗ để phục vụ và phát triển con người — đã bị biến thành lực lượng đối lập, nô dịch và thống trị con người.',
            color: 'border-rose-500/30 bg-rose-500/5',
            titleColor: 'text-rose-400',
          },
          {
            icon: '⚙️',
            title: 'Tha hóa trong hoạt động lao động',
            body: 'Lao động bị cưỡng bức, ép buộc bởi điều kiện xã hội. Dù là hoạt động sáng tạo đặc trưng của con người, nó trở thành hoạt động của con vật.',
            color: 'border-orange-500/30 bg-orange-500/5',
            titleColor: 'text-orange-400',
          },
          {
            icon: '👤',
            title: 'Tha hóa bản chất con người',
            body: 'Quan hệ giữa người và người bị thay thế bằng quan hệ giữa người và vật. Dẫn đến tha hóa tinh thần, sự nô dịch và cằn cỗi tâm hồn.',
            color: 'border-purple-500/30 bg-purple-500/5',
            titleColor: 'text-purple-400',
          },
        ].map((item, i) => (
          <div key={i} className={`border rounded-2xl p-4 flex gap-4 ${item.color}`}>
            <div className="text-2xl shrink-0 mt-0.5">{item.icon}</div>
            <div className="space-y-1">
              <p className={`text-lg font-bold ${item.titleColor}`}>{item.title}</p>
              <p className="text-lg text-slate-300 leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
        <div className="bg-red-900/30 border border-red-500/40 rounded-2xl p-4 flex gap-3">
          <span className="text-xl shrink-0">📌</span>
          <div>
            <p className="text-lg font-bold text-red-400 mb-1">Nguyên nhân căn bản:</p>
            <p className="text-lg text-slate-300 leading-relaxed">Tha hóa con người chỉ diễn ra trong xã hội có phân chia giai cấp. Nguyên nhân là <strong className="text-white">chế độ tư hữu về tư liệu sản xuất</strong>.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'slide-352-b',
    badge: 'Mục 3.5.2 · Luận điểm B',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    title: 'b. "Vĩnh viễn giải phóng toàn thể xã hội khỏi ách bóc lột, ách áp bức"',
    accent: 'from-indigo-500 to-purple-500',
    content: (
      <div className="space-y-5">
        <div className="bg-indigo-500/10 border border-indigo-500/25 rounded-2xl p-4 text-center">
          <p className="text-xl font-bold text-indigo-300">Đây là tư tưởng xuyên suốt, mục đích cuối cùng của học thuyết Mác - Lênin</p>
        </div>
        <div className="space-y-3">
          {[
            { icon: '🏗️', text: 'Xóa bỏ chế độ tư hữu — thiết lập sở hữu chân chính, đích thực của con người', color: 'text-indigo-400' },
            { icon: '✊', text: '"Tinh lực hiện thực của con người" — vai trò lịch sử của giai cấp vô sản', color: 'text-purple-400' },
            { icon: '🌐', text: 'Gắn liền với quá trình hình thành và phát triển của hình thái KT-XH Cộng sản chủ nghĩa', color: 'text-violet-400' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/8 rounded-xl p-4">
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className="text-lg text-slate-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-5">
          <p className="text-lg text-slate-400 italic leading-relaxed text-center">
            "Bất kỳ sự giải phóng nào cũng bao hàm ở chỗ là nó trả thế giới con người, những quan hệ của con người về với bản thân con người, là giải phóng người lao động thoát khỏi lao động bị tha hóa"
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'slide-352-c',
    badge: 'Mục 3.5.2 · Luận điểm C',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    title: 'c. "Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người"',
    accent: 'from-indigo-500 to-purple-500',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 py-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-3xl shadow-lg shadow-indigo-500/30">
          🕊️
        </div>
        <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6 text-center space-y-4 max-w-lg w-full">
          <p className="text-lg text-white font-bold leading-relaxed">
            "Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người"
          </p>
          <p className="text-xl text-slate-500">— Mác và Ăngghen, t.4, tr.628</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 w-full max-w-lg">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
            <p className="text-lg font-bold text-indigo-400">Ý nghĩa thực tiễn</p>
            <p className="text-lg text-slate-400 leading-relaxed">Giải phóng hoàn toàn con người là mục tiêu cao cả nhất của chủ nghĩa cộng sản.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
            <p className="text-lg font-bold text-purple-400">Tính biện chứng</p>
            <p className="text-lg text-slate-400 leading-relaxed">Tự do cá nhân và tự do xã hội không đối lập mà thống nhất, bổ sung cho nhau.</p>
          </div>
        </div>
      </div>
    ),
  },
]

// =============================================
// COMPONENT SLIDESHOW CHÍNH
// =============================================
function TheorySlideshow({ slides, accentFrom, accentTo }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= slides.length) return
    setCurrentSlide(idx)
    setAnimKey(k => k + 1)
  }, [slides.length])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') goTo(currentSlide + 1)
      if (e.key === 'ArrowLeft') goTo(currentSlide - 1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [currentSlide, goTo])

  const slide = slides[currentSlide]
  const progress = ((currentSlide + 1) / slides.length) * 100

  return (
    <div
      className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
      style={{ background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(24px)' }}
    >
      {/* Thanh progress bar trên cùng */}
      <div className="relative h-1 bg-white/10 w-full">
        <div
          className="slide-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header slide */}
      <div className="flex items-center justify-between px-8 pt-6 pb-4 border-b border-white/8">
        <span className={`text-xs font-bold px-4 py-1.5 rounded-full ${slide.badgeColor}`}>
          {slide.badge}
        </span>
        <span className="slide-counter-badge" style={{ fontSize: '13px' }}>
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Nội dung slide */}
      <div className="px-8 md:px-16 lg:px-24 py-10 flex flex-col" style={{ minHeight: '70vh' }}>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-8 leading-tight">
          <span className={`bg-gradient-to-r ${slide.accent} bg-clip-text text-transparent`}>
            {slide.title}
          </span>
        </h3>
        <div
          key={animKey}
          className="slide-content-animate flex-1 text-base"
        >
          {slide.content}
        </div>
      </div>

      {/* Navigation footer */}
      <div className="flex items-center justify-between px-6 pb-6 pt-2 border-t border-white/8">
        {/* Nút Prev */}
        <button
          className="slide-nav-btn"
          onClick={() => goTo(currentSlide - 1)}
          disabled={currentSlide === 0}
          title="Slide trước (←)"
        >
          ←
        </button>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`progress-dot ${i === currentSlide ? 'active' : ''}`}
              title={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Nút Next */}
        <button
          className="slide-nav-btn"
          onClick={() => goTo(currentSlide + 1)}
          disabled={currentSlide === slides.length - 1}
          title="Slide tiếp (→)"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Tổng quan')
  const tabs = ['Tổng quan', 'Lý thuyết', 'Tình huống', 'Video']

  // State cho section lý thuyết (3.5.1 hoặc 3.5.2)
  const [theorySection, setTheorySection] = useState('3.5.1')

  // State cho Mini-Game
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)

  const quizQuestions = [
    {
      question: "Theo Luận cương về Feuerbach của C.Mác, bản chất con người là gì?",
      options: ["Sự tiến hóa thuần túy của giới tự nhiên.", "Tổng hòa các quan hệ xã hội.", "Ý niệm tuyệt đối tự tha hóa.", "Thực thể có tư duy và ngôn ngữ."],
      answer: 1,
      explain: "Mác khẳng định: 'Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội'."
    },
    {
      question: "Nguyên nhân cốt lõi gây nên hiện tượng tha hóa con người theo triết học Mác là gì?",
      options: ["Do sự phát triển của máy móc.", "Do bản tính ích kỷ của con người.", "Chế độ tư hữu về tư liệu sản xuất.", "Do sự phân hóa giàu nghèo tự nhiên."],
      answer: 2,
      explain: "Nguyên nhân gây nên hiện tượng tha hóa con người là chế độ tư hữu về tư liệu sản xuất trong các xã hội có phân chia giai cấp."
    }
  ]

  return (
    // Đổi nền thành màu dải ngân hà Deep Space Nebula cực đẹp giống ảnh mẫu
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black font-sans text-gray-800 relative">

      {/* ================= HỆ THỐNG SAO RƠI ĐỘNG (BACKGROUND ANIMATION) ================= */}
      <div className="star-container">
        {/* Các ngôi sao băng được thiết kế lệch vị trí và thời gian rơi ngẫu nhiên */}
        <div className="falling-star" style={{ top: '0px', right: '10%', width: '150px', animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="falling-star" style={{ top: '100px', right: '30%', width: '100px', animationDelay: '1.5s', animationDuration: '4s' }}></div>
        <div className="falling-star" style={{ top: '0px', right: '50%', width: '200px', animationDelay: '0.7s', animationDuration: '5s' }}></div>
        <div className="falling-star" style={{ top: '250px', right: '15%', width: '120px', animationDelay: '2.3s', animationDuration: '3.5s' }}></div>
        <div className="falling-star" style={{ top: '50px', right: '70%', width: '80px', animationDelay: '3.8s', animationDuration: '4.5s' }}></div>
      </div>

      {/* ================= NAVBAR (Đã chỉnh sang tone sáng để nổi trên nền tối) ================= */}
      <header className="flex flex-col md:flex-row justify-between items-center px-10 py-5 bg-slate-950/40 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800/60 shadow-lg">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-black text-white tracking-wider">MLN111</h1>
          <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">Chủ nghĩa duy vật và lịch sử xã hội</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-0 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === tab
                ? 'bg-blue-600 text-white shadow-md scale-105'
                : 'text-gray-400 hover:text-white hover:bg-slate-800/50'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Các phần code <main> phía dưới của các Tab giữ nguyên hoàn toàn không cần sửa đổi gì thêm */}

      {/* ================= MAIN CONTENT ================= */}
      {/* ================= TAB 2: LÝ THUYẾT - SLIDESHOW (nằm ngoài main để chiếm full width) ================= */}
      {activeTab === 'Lý thuyết' && (
        <section className="animate-fadeIn w-full px-4 md:px-8 py-10 flex flex-col items-center gap-6">
          {/* Tiêu đề + tab chọn mục */}
          <div className="text-center space-y-4 w-full">
            <h2 className="text-2xl font-black text-white tracking-tight">Lý Thuyết Chi Tiết</h2>
            <p className="text-xs text-slate-400">Dùng nút ← → hoặc phím mũi tên để lật slide</p>
            <div className="inline-flex bg-slate-900/60 border border-white/10 rounded-2xl p-1.5 gap-1.5">
              <button
                onClick={() => setTheorySection('3.5.1')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  theorySection === '3.5.1'
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                🧬 3.5.1. Khái niệm & Bản chất
              </button>
              <button
                onClick={() => setTheorySection('3.5.2')}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  theorySection === '3.5.2'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                ⛓️ 3.5.2. Tha hóa & Giải phóng
              </button>
            </div>
          </div>
          {/* Khung slideshow toàn màn hình */}
          <div className="w-full">
            {theorySection === '3.5.1' && <TheorySlideshow key="351" slides={slides351} />}
            {theorySection === '3.5.2' && <TheorySlideshow key="352" slides={slides352} />}
          </div>
        </section>
      )}

      {/* ================= MAIN CONTENT (các tab còn lại) ================= */}
      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* ================= TAB 1: TỔNG QUAN (ĐÃ SỬA CHÌM MÀU) ================= */}
        {activeTab === 'Tổng quan' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Phần tiêu đề chính đã được chuyển sang màu trắng và xanh neon để nổi bật trên nền tối */}
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-black text-white tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                Tổng Quan Nội Dung Thuyết Trình
              </h2>
              <p className="text-sm text-blue-300 max-w-2xl mx-auto font-medium leading-relaxed">
                Dưới đây là cấu trúc mạch bài giảng gồm 2 mục lớn và các luận điểm nhánh sẽ được phân tích sâu ở phần lý thuyết.
              </p>
            </div>

            {/* Hai thẻ danh mục (Mục lớn I & II) giữ nguyên cấu trúc nền trắng nổi bật */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Mục lớn I */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col justify-between transform transition-all hover:scale-[1.01]">
                <div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Mục lớn I
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-3 mb-6">
                    3.5.1. KHÁI NIỆM CON NGƯỜI VÀ BẢN CHẤT CON NGƯỜI
                  </h3>
                  <ul className="space-y-4 text-sm text-slate-600 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="text-teal-500 font-bold">a.</span>
                      <span>Con người là thực thể sinh học - xã hội</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-500 font-bold">b.</span>
                      <span>Con người là sản phẩm của lịch sử và của chính bản thân con người</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-500 font-bold">c.</span>
                      <span>Con người vừa là chủ thể của lịch sử, vừa là sản phẩm của lịch sử</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-500 font-bold">d.</span>
                      <span>Bản chất con người là tổng hòa các quan hệ xã hội</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => setActiveTab('Lý thuyết')}
                  className="w-full mt-8 py-3 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-blue-600 transition-colors"
                >
                  Khám phá Chi tiết Mục 3.5.1 →
                </button>
              </div>

              {/* Mục lớn II */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col justify-between transform transition-all hover:scale-[1.01]">
                <div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                    Mục lớn II
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-3 mb-6">
                    3.5.2. HIỆN TƯỢNG THA HÓA CON NGƯỜI VÀ VẤN ĐỀ GIẢI PHÓNG CON NGƯỜI
                  </h3>
                  <ul className="space-y-4 text-sm text-slate-600 font-medium">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">a.</span>
                      <span>Thực chất của hiện tượng tha hóa con người là lao động của con người bị tha hóa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">b.</span>
                      <span>"Vĩnh viễn giải phóng toàn thể xã hội khỏi ách bóc lột, ách áp bức"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">c.</span>
                      <span>"Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người"</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => setActiveTab('Lý thuyết')}
                  className="w-full mt-8 py-3 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-blue-600 transition-colors"
                >
                  Khám phá Chi tiết Mục 3.5.2 →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Lý thuyết được render bên ngoài main — không cần render ở đây */}

        {/* ================= TAB 3: TÌNH HUỐNG (CASE STUDY SINH VIÊN M) ================= */}
        {activeTab === 'Tình huống' && (

          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-slate-100">

              {/* Header Tình huống */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-6 mb-6">
                <div>
                  <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">
                    Bài tập Tình huống Giảng đường
                  </span>
                  <h3 className="text-2xl font-black text-slate-950 mt-2">
                    Khủng Hoảng Bản Sắc Của Sinh Viên M Trên Không Gian Số
                  </h3>
                </div>
                <div className="text-xs bg-teal-50 text-teal-800 px-3 py-1.5 rounded-xl font-bold border border-teal-100 shrink-0">
                  💡 Chủ đề: Bản chất con người là tổng hòa các quan hệ xã hội
                </div>
              </div>

              {/* Tóm tắt Cốt truyện theo phong cách Nhật ký / Story */}
              <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl relative overflow-hidden shadow-inner">
                <div className="absolute right-4 top-2 text-7xl text-slate-800 font-black select-none pointer-events-none">“</div>
                <p className="text-sm text-gray-200 leading-relaxed font-medium mb-4 relative z-10">
                  Sinh viên M lên thành phố học đại học. Trên mạng xã hội, M xây dựng hình ảnh một người năng động, tích cực, “truyền cảm hứng”. Tuy nhiên, ngoài đời M lại sống khép kín, áp lực, nhiều khi cảm thấy cô đơn và mệt mỏi.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-xs text-gray-300 border-t border-slate-800 pt-4 relative z-10">
                  <p className="bg-slate-950/40 p-3 rounded-lg border border-slate-800">
                    <strong className="text-amber-400 block mb-1">➔ Hệ quả 1:</strong> M bắt đầu hành động theo “hình tượng online” hơn là cảm xúc thật của mình.
                  </p>
                  <p className="bg-slate-950/40 p-3 rounded-lg border border-slate-800">
                    <strong className="text-amber-400 block mb-1">➔ Hệ quả 2:</strong> Các mối quan hệ cũng trở nên “diễn” nhiều hơn “thật”.
                  </p>
                  <p className="bg-slate-950/40 p-3 rounded-lg border border-slate-800">
                    <strong className="text-amber-400 block mb-1">➔ Hệ quả 3:</strong> M cảm thấy mình “không biết con người thật của mình là ai”.
                  </p>
                </div>
              </div>

              {/* Hai quan điểm tranh luận */}
              <div className="mt-8">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">Two Viewpoints - Hai quan điểm tranh luận trái chiều</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50/50 border border-red-100 p-4 rounded-xl">
                    <p className="text-xs font-bold text-red-800 mb-1">🚨 QUAN ĐIỂM 1:</p>
                    <p className="text-xs text-gray-600 leading-relaxed italic">
                      “Con người phải sống đúng với bản chất thật bên trong, không bị xã hội chi phối.”
                    </p>
                  </div>
                  <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl">
                    <p className="text-xs font-bold text-blue-800 mb-1">🚨 QUAN ĐIỂM 2:</p>
                    <p className="text-xs text-gray-600 leading-relaxed italic">
                      “Con người vốn là sản phẩm của xã hội, nên việc thay đổi theo môi trường là bình thường.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Phân tích sâu theo Triết học Mác - Lênin */}
              <div className="mt-10 pt-8 border-t border-slate-100 space-y-6">
                <h4 className="text-base font-bold text-slate-950 flex items-center gap-2">
                  🧠 Vận Dụng Quan Điểm Triết Học Mác - Lênin Để Giải Quyết Tình Huống
                </h4>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm space-y-2">
                    <p className="font-bold text-teal-800 text-xs uppercase tracking-wide">1. Phê phán Quan điểm 1</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      <strong>Sai lầm vì cô lập con người khỏi thực tiễn:</strong> Triết học Mác bác bỏ quan điểm cho rằng có một "bản chất thật bên trong" trừu tượng, có sẵn và bất biến độc lập với xã hội. Bản sắc hay tâm lý của M không tự nhiên sinh ra trong chân không, mà luôn được hình thành từ quá trình giao tiếp. Đòi hỏi M sống mà hoàn toàn "không bị xã hội chi phối" là điều không tưởng.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm space-y-2">
                    <p className="font-bold text-teal-800 text-xs uppercase tracking-wide">2. Khắc phục Quan điểm 2</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      <strong>Thiếu sót vì biến con người thành thụ động:</strong> Quan điểm 2 đúng khi thấy M là sản phẩm của môi trường xã hội mới (đô thị, thế giới mạng). Tuy nhiên, coi việc M phải "diễn" và chịu đựng cô đơn là "bình thường" là sai lầm. Mác khẳng định con người còn là <em>chủ thể cải tạo xã hội</em>. Việc để "hình tượng ảo" nô dịch cảm xúc thật là biểu hiện rõ nét của <strong>sự tha hóa quan hệ xã hội</strong>.
                    </p>
                  </div>

                  <div className="bg-white border border-teal-50 p-5 rounded-xl shadow-sm space-y-2 border-l-4 border-l-teal-600">
                    <p className="font-bold text-teal-900 text-xs uppercase tracking-wide">3. Chìa khóa từ luận điểm C.Mác</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      <strong>Sự tổng hòa các quan hệ xã hội:</strong> Sự khủng hoảng của M phát sinh từ sự <strong>đứt gãy và mâu thuẫn</strong> giữa 2 hệ thống quan hệ xã hội: <em>Quan hệ xã hội ảo</em> (mạng xã hội - đòi hỏi sự bóng bẩy, truyền cảm hứng) và <em>Quan hệ xã hội hiện thực</em> (áp lực kinh tế, học tập, sự cô đơn nơi thành thị). Con người thực của M chính là tổng hòa của cả hai xung đột này.
                    </p>
                  </div>
                </div>

                {/* Giải pháp thực tiễn */}
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl text-xs text-gray-600 space-y-2">
                  <p className="font-bold text-slate-800 text-sm">➔ Giải pháp thực tiễn cho sinh viên M:</p>
                  <p className="leading-relaxed">
                    Theo Mác, để giải quyết tha hóa, phải thông qua **hoạt động thực tiễn**. M không thể tìm lại bản sắc bằng cách ngồi suy ngẫm cô độc. M cần chủ động thay đổi các mối quan hệ xã hội đời thực của mình: bớt thời gian sống ảo, tích cực tham gia các hoạt động tập thể tại trường đại học, câu lạc bộ, hoạt động xã hội tình nguyện. Khi các quan hệ xã hội hiện thực trở nên lành mạnh, bản chất con người M sẽ tự khắc tìm lại được sự cân bằng, chân thật và tích cực đích thực.
                  </p>
                </div>

                {/* Hướng dẫn làm sản phẩm sáng tạo */}
                <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-xl space-y-2 text-xs">
                  <p className="font-bold text-indigo-900 flex items-center gap-1.5">
                    🎨 GỢI Ý TRIỂN KHAI SẢN PHẨM SÁNG TẠO (BONUS ĐIỂM NHÓM):
                  </p>
                  <p className="text-indigo-950 leading-relaxed">
                    Nhóm nên thiết kế bài tập này dưới dạng một <strong>"Video Story dạng nhật ký kỹ thuật số của M"</strong>. Sử dụng công nghệ AI để tạo hình ảnh: một nửa màn hình là hình ảnh M lung linh, rực rỡ thu hút hàng nghìn like trên mạng, nửa màn hình còn lại là hình ảnh M thui thủi ăn mì tôm trong căn phòng trọ chật hẹp. Kết hợp chạy sub và lồng tiếng AI kể câu chuyện này làm clip mở đầu bài thuyết trình, chắc chắn giảng viên sẽ cực kỳ ấn tượng vì tính sáng tạo và bám sát đề bài!
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 4: VIDEO TƯ LIỆU ================= */}
        {activeTab === 'Video' && (
          <div className="max-w-3xl mx-auto space-y-4 animate-fadeIn text-center">
            <div className="aspect-video bg-slate-950 rounded-[2rem] flex flex-col items-center justify-center text-white p-6 border border-slate-800 shadow-md">
              <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center text-white text-lg cursor-pointer hover:scale-105 transition-transform mb-3">▶</div>
              <p className="font-bold text-sm text-gray-300">Tư Liệu Trực Quan: Hiện Tượng Tha Hóa Lao Động Trong Thời Đại Công Nghiệp</p>
              <p className="text-[11px] text-gray-500 mt-1">[Chèn link đính kèm mã nhúng video thuyết trình nhóm tại đây]</p>
            </div>
          </div>
        )}

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-6 text-[11px] text-gray-400 border-t border-gray-100 bg-white mt-12">
        <p>© Sản phẩm Landing Page Thuyết trình Triết học Mác - Lênin | Nhóm Sinh viên Học phần MLN111</p>
      </footer>

    </div>
  )
}