import React, { useState } from 'react';
import Question from './Question';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 2,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 1,
  },
  // Add more questions as needed
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (selected !== null) {
      if (selected === quizData[currentQuestion].answer) {
        setScore(score + 1);
      }
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelected(null);
      } else {
        alert(`Quiz completed! Your score is ${score + 1}`);
      }
    } else {
      alert('Please select an answer!');
    }
  };

  return (
    <div>
      {currentQuestion < quizData.length ? (
        <>
          <Question
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            selected={selected}
            onSelectAnswer={setSelected}
          />
          <button onClick={handleNext}>Next</button>
        </>
      ) : (
        <div>
          <h2>Quiz completed!</h2>
          <p>Your score is {score}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
