import React, { useState } from 'react';
import { Download, MessageSquare, Eye, X, Image as ImageIcon, PlayCircle } from 'lucide-react';

const Syllabus = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const weeks = [
    { num: 1, title: "Tổng quan về AI và Nông nghiệp thông minh", slide: "slide Chương 1_ Tổng quan về AI và Nông nghiệp thông minh.pdf", notebookLink: "https://notebooklm.google.com/notebook/9146c2cd-ab7a-4ae0-85a8-29b1e3a10509?authuser=1", audio: "Buổi 1_Nông_nghiệp_Chính_xác_AI_và_Cuộc_Chiến_Dữ_liệu.m4a", infographic: "Buổi 1_Nông_Nghiệp_Chính_Xác_Dùng_AI_.png", video: "Buổi 1_AI_trong_Nông_nghiệp.mp4" },
    { num: 2, title: "Học máy (Machine Learning) trong nông nghiệp", slide: "slide Chương 2_ Học máy (Machine Learning) trong nông nghiệp.pdf", notebookLink: "https://notebooklm.google.com/notebook/265ea77f-1bc0-4902-9f69-1b3fca2eae82?authuser=1", audio: "Buổi 2_AI_và_Dữ_liệu_Thay_đổi_Nông_nghiệp_Cũ_Kỹ.m4a", infographic: "Buổi 2_Tổng_quan_học_máy_nông_nghiệp.png", video: "Buổi 2_Học_Máy_trong_Nông_nghiệp.mp4" },
    { num: 3, title: "Học sâu (Deep Learning) và Mạng Nơ-ron", slide: "slide Chương 3_ Học sâu (Deep Learning) và Mạng Nơ-ron.pdf", notebookLink: "https://notebooklm.google.com/notebook/4c803418-bb96-4787-a7b0-96213f232510?authuser=1", audio: "Buổi 3_Học_sâu_chẩn_bệnh_lá_cây_chính_xác.m4a", infographic: "Buổi 3_Sức_Mạnh_Học_Sâu_Nông_Nghiệp.png", video: "Buổi 3_Học_Sâu_Cứu_Vãn_Mùa_Màng.mp4" },
    { num: 4, title: "Thị giác máy tính (Computer Vision) ứng dụng", slide: "slide Chương 4_ Thị giác máy tính (Computer Vision) ứng dụng.pdf", notebookLink: "https://notebooklm.google.com/notebook/4218d659-4a64-4378-8af0-212655e83598?authuser=1", audio: "Buổi 4_Thị_giác_máy_tính_và_Nông_nghiệp_số.m4a", infographic: "Buổi 4_Thị_Giác_Máy_Tính_Cho_Nông_Nghiệp.png", video: "Buổi 4_Thị_giác_máy_tính__Dạy_máy_cách_nhìn.mp4" },
    { num: 5, title: "Ứng dụng AI trong quản lý nước và dinh dưỡng", slide: "slide Chương 5_ Ứng dụng AI trong quản lý nước và dinh dưỡng.pdf", notebookLink: null, audio: null, infographic: null, video: null },
    { num: 6, title: "Ứng dụng AI trong dự báo & hoạch định sản xuất", slide: "slide Chương 6_ Ứng dụng AI trong dự báo & hoạch định sản xuất.pdf", notebookLink: "https://notebooklm.google.com/notebook/6124a970-cdaf-4740-b750-acd3d451dcfe?authuser=1", audio: "Buổi 6_Tính_toán_từng_giọt_nước_bằng_AI.m4a", infographic: "Buổi 6_Nông_nghiệp_thông_minh__AI_tối_ưu_hóa.png", video: "Buổi 6_AI_trong_Nông_nghiệp.mp4" },
    { num: 7, title: "Báo cáo nhóm và Thảo luận dự án", slide: "slide Chương 7_ Báo cáo nhóm và Thảo luận dự án.pdf", notebookLink: "https://notebooklm.google.com/notebook/d5b10e29-1b19-46a3-9f7d-a4c520a3ddaf?authuser=1", audio: "Buổi 7_AI_biến_nông_nghiệp_thành_khoa_học_dữ_liệu.m4a", infographic: "Buổi 7_AI_Nâng_Cao_Năng_Suất,_Sản_Xuất.png", video: "Buổi 7_AI__Gieo_Mầm_Tương_Lai_Nông_Nghiệp.mp4" },
    { num: 8, title: "Ôn tập và Kiểm tra giữa kỳ", slide: null, notebookLink: "https://notebooklm.google.com/notebook/35d22988-e433-45f3-a8f4-f635290f8691?authuser=1", audio: "Buổi 8_Cân_Bằng_Kỹ_Thuật_Và_Đạo_Đức_AI_Nông_Nghiệp.m4a", infographic: "Buổi 8_Báo_cáo_Dự_án_AI_Nông_nghiệp.png", video: "Buổi 8_Xây_dựng_AI_trong_Nông_nghiệp_một_cách_có_trách_nhiệm.mp4" },
    { num: "9&10", title: "Thực hành (Phần 1 - tại doanh nghiệp/trang trại)", slide: "slide Chương 9&10_Thực hành (Phần 1 - tại doanh nghiệp_trang trại).pdf", notebookLink: null, audio: null, infographic: null, video: null },
  ];

  return (
    <>
      <div className="container page-enter" style={{ paddingTop: '40px' }}>
        <h2>Lịch trình & Bài giảng</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
          Dưới đây là lịch trình chi tiết của môn học. Click vào nút tải về để xem Slide của từng chương.
        </p>

        <div className="grid-2">
          {weeks.map((week, index) => (
            <div key={index} className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ color: 'var(--primary-light)', fontSize: '1.2rem' }}>Tuần {week.num}</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '20px', fontWeight: 500 }}>{week.title}</p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {week.slide ? (
                  <button 
                    onClick={() => setSelectedPdf(`${import.meta.env.BASE_URL}slides/${week.slide}`)}
                    className="btn btn-secondary" 
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', width: '100%' }}
                  >
                    <Eye size={18} />
                    Xem Slide Bài Giảng
                  </button>
                ) : (
                  <div style={{ padding: '12px', textAlign: 'center', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                    Không có slide bài giảng
                  </div>
                )}

                {week.infographic && (
                  <button 
                    onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}media/Infographic/${week.infographic}`)}
                    className="btn btn-secondary" 
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', width: '100%' }}
                  >
                    <ImageIcon size={18} />
                    Xem Infographic
                  </button>
                )}

                {week.video && (
                  <button 
                    onClick={() => setSelectedVideo(`${import.meta.env.BASE_URL}media/Video/${week.video}`)}
                    className="btn btn-secondary" 
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', width: '100%', background: 'var(--primary-dark)', borderColor: 'var(--primary-dark)' }}
                  >
                    <PlayCircle size={18} />
                    Xem Video Bài Giảng
                  </button>
                )}

                {week.notebookLink && (
                  <a href={week.notebookLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <MessageSquare size={18} />
                    Hỏi đáp cùng Chuyên gia
                  </a>
                )}

                {week.audio && (
                  <div style={{ marginTop: '10px' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Nghe Audio Tóm Tắt:</p>
                    <audio controls src={`${import.meta.env.BASE_URL}media/Audio/${week.audio}`} style={{ width: '100%', height: '40px' }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPdf && (
        <div className="pdf-modal-overlay" onClick={() => setSelectedPdf(null)}>
          <div className="pdf-modal-content" onClick={e => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>Xem Slide</h3>
              <button className="close-btn" onClick={() => setSelectedPdf(null)}>
                <X size={20} />
              </button>
            </div>
            <div className="pdf-modal-body">
              <iframe src={`${selectedPdf}#view=FitH`} title="PDF Viewer" width="100%" height="100%" style={{ border: 'none', display: 'block' }} />
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="pdf-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="pdf-modal-content" onClick={e => e.stopPropagation()} style={{ background: 'transparent', border: 'none', boxShadow: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button className="close-btn" onClick={() => setSelectedImage(null)} style={{ position: 'absolute', top: '10px', right: '10px' }}>
              <X size={20} />
            </button>
            <img src={selectedImage} alt="Infographic" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '12px' }} />
          </div>
        </div>
      )}

      {selectedVideo && (
        <div className="pdf-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="pdf-modal-content" onClick={e => e.stopPropagation()} style={{ background: '#000', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button className="close-btn" onClick={() => setSelectedVideo(null)} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 100 }}>
              <X size={20} />
            </button>
            <video controls src={selectedVideo} style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%', objectFit: 'contain' }} autoPlay />
          </div>
        </div>
      )}
    </>
  );
};

export default Syllabus;
