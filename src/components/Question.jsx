import React from 'react';

const Question = ({ question, handleAnswerButtonClick }) => {
  return (
    <div className="question-section">
      <h2>{question.questionText}</h2>
      <div className="answer-section">
        {question.answerOptions.map((answerOption, index) => (
          <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
