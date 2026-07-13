import { Link } from 'react-router-dom';
import { BookOpen, FileText, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="page-enter">
      <section className="hero">
        <div className="container">
          <h1>Ứng dụng AI trong Nông nghiệp</h1>
          <p>
            Môn học cung cấp kiến thức nền tảng và chuyên sâu về cách ứng dụng trí tuệ nhân tạo (AI), học máy (Machine Learning) 
            và học sâu (Deep Learning) vào các bài toán nông nghiệp thông minh.
          </p>
          <Link to="/syllabus" className="btn btn-primary">Bắt đầu học ngay</Link>
        </div>
      </section>

      <section className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Nội dung chính</h2>
        <div className="grid-3">
          <div className="card glass-panel" style={{ textAlign: 'center' }}>
            <BookOpen size={48} color="var(--primary-light)" style={{ marginBottom: '20px' }} />
            <h3>Lịch trình học</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Danh sách chi tiết các buổi học từ Tuần 1 đến Tuần 10 kèm theo slide bài giảng.
            </p>
            <Link to="/syllabus" className="btn btn-secondary">Xem lịch trình</Link>
          </div>

          <div className="card glass-panel" style={{ textAlign: 'center' }}>
            <FileText size={48} color="var(--primary-light)" style={{ marginBottom: '20px' }} />
            <h3>Tài liệu & Ebooks</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Kho tài liệu đọc thêm, sách chuyên ngành và các tài liệu tham khảo bằng tiếng Việt.
            </p>
            <Link to="/resources" className="btn btn-secondary">Tải tài liệu</Link>
          </div>

          <div className="card glass-panel" style={{ textAlign: 'center' }}>
            <CheckCircle size={48} color="var(--primary-light)" style={{ marginBottom: '20px' }} />
            <h3>Kiểm tra kiến thức</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Hệ thống làm bài trắc nghiệm trực tuyến giúp củng cố kiến thức sau mỗi tuần học.
            </p>
            <Link to="/quizzes" className="btn btn-secondary">Làm trắc nghiệm</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
