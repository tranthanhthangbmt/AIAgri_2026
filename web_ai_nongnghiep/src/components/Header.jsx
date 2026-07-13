import { Link, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <Leaf color="var(--primary-light)" size={28} />
          <span>AI Nông Nghiệp</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Trang chủ</Link>
          <Link to="/syllabus" className={`nav-link ${location.pathname === '/syllabus' ? 'active' : ''}`}>Bài giảng</Link>
          <Link to="/resources" className={`nav-link ${location.pathname === '/resources' ? 'active' : ''}`}>Tài liệu</Link>
          <Link to="/quizzes" className={`nav-link ${location.pathname === '/quizzes' ? 'active' : ''}`}>Trắc nghiệm</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
