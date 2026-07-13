import React, { useState, useEffect } from 'react';
import quizzesData from '../data/quizzes.json';

const Quizzes = () => {
  const [selectedWeek, setSelectedWeek] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const weeks = Object.keys(quizzesData).sort((a, b) => {
    // Sort weeks logically if possible, otherwise string sort
    return a.localeCompare(b, undefined, { numeric: true });
  });

  const quiz = selectedWeek ? quizzesData[selectedWeek] : [];

  const handleSelectWeek = (week) => {
    setSelectedWeek(week);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResult(false);
  };

  const handleAnswer = (optionId) => {
    if (showResult) return;
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: optionId
    });
  };

  const calculateScore = () => {
    let score = 0;
    quiz.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        score += 1;
      }
    });
    return score;
  };

  if (!selectedWeek) {
    return (
      <div className="container page-enter" style={{ paddingTop: '40px' }}>
        <h2>Bài tập Trắc nghiệm</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
          Chọn một tuần để bắt đầu làm bài kiểm tra trắc nghiệm.
        </p>
        <div className="grid-3">
          {weeks.map(week => (
            <button 
              key={week} 
              className="btn btn-secondary card glass-panel"
              onClick={() => handleSelectWeek(week)}
              style={{ padding: '30px', fontSize: '1.2rem' }}
            >
              Trắc nghiệm Tuần {week}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const currentQ = quiz[currentQuestionIndex];

  return (
    <div className="container page-enter" style={{ paddingTop: '40px' }}>
      <button 
        className="btn btn-secondary" 
        onClick={() => setSelectedWeek('')}
        style={{ marginBottom: '20px' }}
      >
        &larr; Quay lại danh sách
      </button>

      <div className="quiz-container glass-panel" style={{ padding: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Trắc nghiệm Tuần {selectedWeek}</h2>
        
        {showResult ? (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--primary-light)' }}>
              Kết quả: {calculateScore()} / {quiz.length}
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
              Bạn đã hoàn thành bài kiểm tra!
            </p>
            <button className="btn btn-primary" onClick={() => handleSelectWeek(selectedWeek)}>
              Làm lại bài này
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Câu hỏi {currentQuestionIndex + 1} / {quiz.length}</span>
              <span>Đã trả lời: {Object.keys(userAnswers).length} / {quiz.length}</span>
            </div>

            <h3 style={{ marginBottom: '30px', lineHeight: '1.5' }}>{currentQ.question}</h3>

            <div style={{ marginBottom: '40px' }}>
              {currentQ.options.map((opt) => {
                const isSelected = userAnswers[currentQuestionIndex] === opt.id;
                return (
                  <button
                    key={opt.id}
                    className={`option-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleAnswer(opt.id)}
                  >
                    <strong>{opt.id}.</strong> {opt.text}
                  </button>
                )
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button 
                className="btn btn-secondary"
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
              >
                Câu trước
              </button>
              
              {currentQuestionIndex === quiz.length - 1 ? (
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowResult(true)}
                  disabled={Object.keys(userAnswers).length < quiz.length}
                >
                  Nộp bài
                </button>
              ) : (
                <button 
                  className="btn btn-primary"
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                >
                  Câu tiếp theo
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quizzes;
