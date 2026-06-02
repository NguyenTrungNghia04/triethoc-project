import { useState } from 'react'

export default function App() {
  const [activeTab, setActiveTab] = useState('Tổng quan')
  const tabs = ['Tổng quan', 'Lý thuyết', 'Tình huống', 'Video', 'Game']

  // State phụ phục vụ riêng cho Tab Lý thuyết để người xem không bị ngợp chữ
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

        {/* ================= TAB 2: LÝ THUYẾT CHI TIẾT (ĐẦY ĐỦ NỘI DUNG GỐC) ================= */}
        {activeTab === 'Lý thuyết' && (
          <div className="grid md:grid-cols-4 gap-8 animate-fadeIn">

            {/* Thanh menu phụ bên trái để chuyển đổi giữa 2 mục lớn */}
            <div className="md:col-span-1 space-y-2">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-3">Danh mục bài giảng</div>
              <button
                onClick={() => setTheorySection('3.5.1')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${theorySection === '3.5.1' ? 'bg-teal-600 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                  }`}
              >
                3.5.1. Khái niệm & Bản chất
              </button>
              <button
                onClick={() => setTheorySection('3.5.2')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${theorySection === '3.5.2' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
                  }`}
              >
                3.5.2. Tha hóa & Giải phóng
              </button>
            </div>

            {/* Khung nội dung chi tiết bên phải */}
            <div className="md:col-span-3 space-y-8">

              {/* CHI TIẾT MỤC 3.5.1 */}
              {theorySection === '3.5.1' && (
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm space-y-8">
                  <h3 className="text-2xl font-black text-slate-950 border-b border-gray-100 pb-4 text-teal-800">
                    3.5.1. KHÁI NIỆM CON NGƯỜI VÀ BẢN CHẤT CON NGƯỜI
                  </h3>

                  {/* a. Con người là thực thể sinh học - xã hội */}
                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-teal-100 text-teal-800 text-xs rounded font-black">a</span>
                      Con người là thực thể sinh học - xã hội
                    </h4>
                    <p className="text-sm text-gray-600 pl-7 italic">
                      Con người là thực thể thống nhất giữa mặt tự nhiên và mặt xã hội “thực thể tự nhiên có tính chất người”.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 pl-7 pt-2">
                      <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1.5 text-gray-600">
                        <p className="font-bold text-teal-800 uppercase tracking-wider mb-1">CON NGƯỜI TỰ NHIÊN</p>
                        <p>• CN là bộ phận của tự nhiên, là kết quả quá trình tiến hóa của tự nhiên</p>
                        <p>• CN có hệ thống nhu cầu tự nhiên</p>
                        <p>• CN chịu sự chi phối của quy luật tự nhiên</p>
                        <p>• Là một bộ phận đặc biệt, quan trọng của giới tự nhiên, nhưng lại có thể biến đổi giới tự nhiên và chính bản thân mình, dựa trên các quy luật khách quan.</p>
                        <p>• Bằng hoạt động thực tiễn con người trở thành một bộ phận của giới tự nhiên có quan hệ với giới tự nhiên, thống nhất với giới tự nhiên, bởi giới tự nhiên là “thân thể vô cơ của con người”.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1.5 text-gray-600">
                        <p className="font-bold text-teal-800 uppercase tracking-wider mb-1">CON NGƯỜI XÃ HỘI</p>
                        <p>• Lao động (cơ bản)</p>
                        <p>• CN có những hoạt động xã hội</p>
                        <p>• CN chịu sự chi phối của quy luật xã hội</p>
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs pl-7 text-gray-700 ml-7">
                      <p className="font-bold text-amber-900 mb-1">Ý nghĩa nghiên cứu:</p>
                      <p>• Trong nhận thức và thực tiễn: cần chú ý cả mặt tự nhiên và mặt xã hội của con người, không tuyệt đối hóa mặt nào.</p>
                      <p>• Trong sự nghiệp đổi mới đất nước: phát triển con người cả về mặt tự nhiên và mặt xã hội; nâng cao đời sống vật chất và văn hóa cho nhân dân.</p>
                    </div>
                  </div>

                  {/* b. Con người là sản phẩm của lịch sử... */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-teal-100 text-teal-800 text-xs rounded font-black">b</span>
                      Con người là sản phẩm của lịch sử và của chính bản thân con người
                    </h4>
                    <p className="text-sm text-gray-600 pl-7 leading-relaxed">
                      Con người vừa là sản phẩm của sự phát triển lâu dài của giới tự nhiên, vừa là sản phẩm của lịch sử xã hội loài người và con người hiện thực đang hoạt động, lao động sản xuất và làm ra lịch sử của chính mình, làm cho họ trở thành những con người như đang tồn tại.
                    </p>
                  </div>

                  {/* c. Con người vừa là chủ thể vừa là sản phẩm... */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-teal-100 text-teal-800 text-xs rounded font-black">c</span>
                      Con người vừa là chủ thể của lịch sử, vừa là sản phẩm của lịch sử
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 pl-7 text-xs text-gray-600">
                      <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                        <p className="font-bold text-emerald-900 mb-2">Con người là chủ thể của lịch sử</p>
                        <p className="mb-1">• Không có con người thì không có lịch sử</p>
                        <p className="mb-1">• Sáng tạo ra các giá trị vật chất và tinh thần</p>
                        <p>• Động lực thúc đẩy sự phát triển của lịch sử (qua hoạt động thực tiễn)</p>
                      </div>
                      <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                        <p className="font-bold text-blue-900 mb-2">Con người là sản phẩm của lịch sử</p>
                        <p className="mb-1">• Sản phẩm của thời đại đang sống</p>
                        <p>• Sản phẩm của một nền văn hóa nhất định</p>
                      </div>
                    </div>
                  </div>

                  {/* d. Bản chất con người là tổng hòa các quan hệ xã hội */}
                  {/* d. Bản chất con người là tổng hòa các quan hệ xã hội */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-teal-100 text-teal-800 text-xs rounded font-black">d</span>
                      Bản chất con người là tổng hòa các quan hệ xã hội
                    </h4>

                    {/* Đã đổi font-serif thành font-sans và thêm font-medium để chữ nét, đẹp và không bao giờ lỗi */}
                    <div className="bg-slate-900 text-amber-400 p-5 rounded-xl font-sans italic font-medium text-sm text-center mx-7 tracking-normal text-rendering-optimizeLegibility">
                      “Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội” <br />
                      <span className="text-[11px] font-sans text-gray-400 block mt-2 font-normal">(Luận cương về Feuerbach; Mác và Ăngghen, t.3, 1995, tr.11)</span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1.5 pl-7 text-gray-600 ml-7">
                      <p className="font-bold text-slate-800 mb-1">Lưu ý cực kỳ quan trọng:</p>
                      <p>• Không có con người chung chung, trừu tượng phi giai cấp, phi dân tộc, phi thời đại (CN trong không - thời gian cụ thể). Tức là con người hiện thực.</p>
                      <p>• Bản chất con người không nhất thành, bất biến.</p>
                      <p>• Bản chất con người được hình thành, phát triển thông qua các mối quan hệ xã hội hiện thực.</p>
                    </div>
                  </div>
                </div>
              )}


              {/* CHI TIẾT MỤC 3.5.2 */}
              {theorySection === '3.5.2' && (
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm space-y-8">
                  <h3 className="text-2xl font-black text-slate-950 border-b border-gray-100 pb-4 text-indigo-800">
                    3.5.2. HIỆN TƯỢNG THA HÓA CON NGƯỜI VÀ VẤN ĐỀ GIẢI PHÓNG CON NGƯỜI
                  </h3>

                  {/* a. Thực chất hiện tượng tha hóa... */}
                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 text-xs rounded font-black">a</span>
                      Thực chất của hiện tượng tha hóa con người là lao động của con người bị tha hóa
                    </h4>

                    <div className="space-y-3 pl-7 text-xs text-gray-600">
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="font-bold text-slate-800 mb-1">• Tha hóa với sản phẩm của lao động:</p>
                        <p>Sản phẩm của lao động từ chỗ để phục vụ con người, để phát triển con người đã bị biến thành lực lượng đối lập, nô dịch và thống trị con người.</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="font-bold text-slate-800 mb-1">• Tha hóa trong hoạt động lao động:</p>
                        <p>Lao động bị cưỡng bức, bị ép buộc bởi điều kiện xã hội. Mặc dù là hoạt động sáng tạo của con người, là đặc trưng chỉ có ở con người, nhưng khi hoạt động nó lại trở thành hoạt động của con vật.</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="font-bold text-slate-800 mb-1">• Tha hóa bản chất con người:</p>
                        <p className="mb-1">- Quan hệ giữa người và người đã bị thay thế bằng quan hệ giữa người và vật.</p>
                        <p>- Tha hóa trong lao động tất yếu dẫn đến tha hóa trong đời sống tinh thần, sự nô dịch tinh thần, sự cằn cỗi trong tâm hồn con người…</p>
                      </div>
                      <div className="bg-red-50 text-red-950 border border-red-100 p-3 rounded-lg">
                        <p className="font-bold mb-1">📌 Nguyên nhân tha hóa con người:</p>
                        <p>Tha hóa của con người là một hiện tượng lịch sử đặc thù, chỉ diễn ra trong xã hội có phân chia giai cấp. Nguyên nhân gây nên hiện tượng tha hóa con người là <strong>chế độ tư hữu về tư liệu sản xuất</strong>.</p>
                      </div>
                    </div>
                  </div>

                  {/* b. Vĩnh viễn giải phóng toàn thể xã hội... */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 text-xs rounded font-black">b</span>
                      “Vĩnh viễn giải phóng toàn thể xã hội khỏi ách bóc lột, ách áp bức”
                    </h4>
                    <div className="pl-7 text-xs text-gray-600 space-y-2">
                      <p className="font-semibold text-indigo-900 text-sm">Đây là tư tưởng xuyên suốt, mục đích cuối cùng của học thuyết Mác - Lênin</p>
                      <p>• Xóa bỏ chế độ tư hữu - thiết lập sở hữu chân chính, đích thực của con người</p>
                      <p>• Lực lượng: “tinh lực hiện thực của con người” - vai trò lịch sử của giai cấp vô sản</p>
                      <p className="font-bold text-slate-800">➔ Gắn liền với quá trình hình thành và phát triển của hình thái KT-XH CSCN</p>
                      <p className="bg-slate-100 p-3 rounded-lg italic">
                        “Bất kỳ sự giải phóng nào cũng bao hàm ở chỗ là nó trả thế giới con người, những quan hệ của con người về với bản thân con người”, là “giải phóng người lao động thoát khỏi lao động bị tha hóa”
                      </p>
                    </div>
                  </div>

                  {/* c. Sự phát triển tự do của mỗi người... */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 text-xs rounded font-black">c</span>
                      “Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người”
                    </h4>
                    <div className="pl-7 text-xs text-gray-600 space-y-1">
                      <p>• Giải phóng hoàn toàn con người</p>
                      <p>• Sự phát triển tự do của mỗi người là điều kiện phát triển tự do cho tất cả mọi người <span className="text-[11px] text-gray-400 font-bold">(Mác và Ăngghen, t.4, tr.628)</span></p>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>
        )}

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

        {/* ================= TAB 5: GAME TRẮC NGHIỆM TƯƠNG TÁC ================= */}
        {activeTab === 'Game' && (
          <div className="max-w-2xl mx-auto animate-fadeIn">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              {!showScore ? (
                <div>
                  <div className="flex justify-between items-center text-xs text-gray-400 font-bold mb-4">
                    <span>CÂU HỎI {currentQuestion + 1} / {quizQuestions.length}</span>
                    <span className="text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">Điểm: {score}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 mb-6">{quizQuestions[currentQuestion].question}</h3>

                  <div className="space-y-2">
                    {quizQuestions[currentQuestion].options.map((option, index) => {
                      let btnStyle = "border-slate-200 text-slate-700 hover:bg-slate-50"
                      if (selectedAnswer !== null) {
                        if (index === quizQuestions[currentQuestion].answer) btnStyle = "bg-emerald-500 text-white border-emerald-500"
                        else if (index === selectedAnswer) btnStyle = "bg-red-500 text-white border-red-500"
                        else btnStyle = "opacity-40 border-slate-100 text-gray-400"
                      }
                      return (
                        <button
                          key={index}
                          disabled={selectedAnswer !== null}
                          onClick={() => {
                            setSelectedAnswer(index);
                            const correct = index === quizQuestions[currentQuestion].answer;
                            setIsCorrect(correct);
                            if (correct) setScore(score + 1);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-semibold transition-all ${btnStyle}`}
                        >
                          {String.fromCharCode(65 + index)}. {option}
                        </button>
                      )
                    })}
                  </div>

                  {selectedAnswer !== null && (
                    <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                      <p className="text-xs font-bold text-slate-900 mb-1">{isCorrect ? "✅ ĐÚNG RỒI!" : "❌ CHƯA CHÍNH XÁC!"}</p>
                      <p className="text-xs text-gray-500">{quizQuestions[currentQuestion].explain}</p>
                      <button
                        onClick={() => {
                          setSelectedAnswer(null); setIsCorrect(null);
                          if (currentQuestion + 1 < quizQuestions.length) setCurrentQuestion(currentQuestion + 1);
                          else setShowScore(true);
                        }}
                        className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg float-right"
                      >
                        {currentQuestion + 1 === quizQuestions.length ? "Xem kết quả chung cuộc" : "Câu tiếp theo →"}
                      </button>
                      <div className="clear-both"></div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-6">
                  <span className="text-4xl block mb-2">🏆</span>
                  <h3 className="text-xl font-black text-slate-950 mb-2">Hoàn Thành Mini-Game!</h3>
                  <p className="text-xs text-gray-500 mb-6">Bạn đạt điểm số đúng {score}/{quizQuestions.length} câu hỏi tương tác bài học.</p>
                  <button
                    onClick={() => { setCurrentQuestion(0); setScore(0); setShowScore(false); }}
                    className="px-5 py-2 bg-teal-700 text-white text-xs font-bold rounded-xl"
                  >
                    Chơi lại từ đầu
                  </button>
                </div>
              )}
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