import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import Resources from './pages/Resources';
import Quizzes from './pages/Quizzes';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/quizzes" element={<Quizzes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
