import React, { useState } from 'react';
import quizzesData from '../data/quizzes.json';

const Quizzes = () => {
  const [selectedWeek, setSelectedWeek] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAttempts, setUserAttempts] = useState({});
  const [showResult, setShowResult] = useState(false);

  const weeks = Object.keys(quizzesData).sort((a, b) => {
    return a.localeCompare(b, undefined, { numeric: true });
  });

  const quiz = selectedWeek ? quizzesData[selectedWeek] : [];

  const handleSelectWeek = (week) => {
    setSelectedWeek(week);
    setCurrentQuestionIndex(0);
    setUserAttempts({});
    setShowResult(false);
  };

  const handleAnswer = (optionId) => {
    if (showResult) return;
    const currentQ = quiz[currentQuestionIndex];
    const attempts = userAttempts[currentQuestionIndex] || [];
    
    if (attempts.includes(currentQ.answer)) return;
    if (attempts.includes(optionId)) return;
    
    const newAttempts = [...attempts, optionId];
    setUserAttempts({
      ...userAttempts,
      [currentQuestionIndex]: newAttempts
    });
  };

  const calculateScore = () => {
    let score = 0;
    quiz.forEach((q, index) => {
      const attempts = userAttempts[index] || [];
      if (attempts.length > 0 && attempts[0] === q.answer) {
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
  const currentAttempts = userAttempts[currentQuestionIndex] || [];
  const isAnsweredCorrectly = currentAttempts.includes(currentQ.answer);

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
              Bạn đã hoàn thành bài kiểm tra! Điểm chỉ được tính khi bạn chọn đúng ở ngay lần đầu tiên.
            </p>
            <button className="btn btn-primary" onClick={() => handleSelectWeek(selectedWeek)}>
              Làm lại bài này
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Câu hỏi {currentQuestionIndex + 1} / {quiz.length}</span>
              <span>Đã trả lời đúng: {Object.keys(userAttempts).filter(k => userAttempts[k].includes(quiz[k].answer)).length} / {quiz.length}</span>
            </div>

            <h3 style={{ marginBottom: '30px', lineHeight: '1.5' }}>{currentQ.question}</h3>

            <div style={{ marginBottom: '20px' }}>
              {currentQ.options.map((opt) => {
                const isGuessed = currentAttempts.includes(opt.id);
                const isCorrect = opt.id === currentQ.answer;
                
                let btnClass = 'option-btn';
                let inlineStyle = { textAlign: 'left' };
                
                if (isGuessed) {
                  if (isCorrect) {
                    btnClass += ' correct';
                    inlineStyle = { ...inlineStyle, backgroundColor: '#d4edda', borderColor: '#28a745', color: '#155724' };
                  } else {
                    btnClass += ' incorrect';
                    inlineStyle = { ...inlineStyle, backgroundColor: '#f8d7da', borderColor: '#dc3545', color: '#721c24', opacity: 0.7, cursor: 'not-allowed' };
                  }
                } else if (isAnsweredCorrectly) {
                   inlineStyle = { ...inlineStyle, opacity: 0.7, cursor: 'not-allowed' };
                }

                return (
                  <button
                    key={opt.id}
                    className={btnClass}
                    style={inlineStyle}
                    onClick={() => handleAnswer(opt.id)}
                    disabled={isAnsweredCorrectly || isGuessed}
                  >
                    <strong>{opt.id}.</strong> {opt.text}
                  </button>
                )
              })}
            </div>

            {isAnsweredCorrectly && currentQ.explanation && (
              <div className="explanation-box page-enter" style={{ padding: '20px', backgroundColor: '#e8f5e9', borderLeft: '4px solid #4CAF50', marginBottom: '30px', borderRadius: '4px' }}>
                <h4 style={{ color: '#2E7D32', marginBottom: '10px' }}>💡 Giải thích:</h4>
                <p style={{ color: '#111827' }}>{currentQ.explanation}</p>
              </div>
            )}

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
                  disabled={!isAnsweredCorrectly}
                >
                  Nộp bài
                </button>
              ) : (
                <button 
                  className="btn btn-primary"
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                  disabled={!isAnsweredCorrectly}
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
