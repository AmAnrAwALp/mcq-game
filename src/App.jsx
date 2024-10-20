import React, { useState } from 'react';
import Question from './components/Question';
import './App.css';

const questions = [
  {
    questionText: 'Who is the founder of internshalla?',
    answerOptions: [
      { answerText: 'mohit mehta', isCorrect: false },
      { answerText: 'Sarvesh agarwal', isCorrect: true },
      { answerText: 'vijya prakash', isCorrect: false },
      { answerText: 'Dubkesh lal', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the chemical formula of water?',
    answerOptions: [
      { answerText: 'H2SO4', isCorrect: false },
      { answerText: 'H2O', isCorrect: true },
      { answerText: 'C12H22O11', isCorrect: false },
      { answerText: 'PAANI', isCorrect: false },
    ],
  },{
    questionText: 'Who is the inventor of computer?',
    answerOptions: [
      { answerText: 'me ', isCorrect: false },
      { answerText: 'you', isCorrect: false },
      { answerText: 'charles babbage', isCorrect: true },
      { answerText: 'none', isCorrect: false },
    ],
  },{
    questionText: 'What kind of products does samsung produce?',
    answerOptions: [
      { answerText: 'chowmein', isCorrect: false },
      { answerText: 'cement', isCorrect: false },
      { answerText: 'engine oil', isCorrect: false },
      { answerText: 'moblie phone', isCorrect: true },
    ],
  },{
    questionText: 'What is the best bike in 200cc segment?',
    answerOptions: [
      { answerText: 'apache rtr 200', isCorrect: false },
      { answerText: 'pulsar 200ns', isCorrect: true },
      { answerText: 'KTM Duke 200', isCorrect: false },
      { answerText: 'none', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  // More questions can be added
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <Question
          question={questions[currentQuestion]}
          handleAnswerButtonClick={handleAnswerButtonClick}
        />
      )}
    </div>
  );
};

export default App;
