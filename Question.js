import React from 'react';

function Question({ question, options, selected, onSelectAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="answer"
              value={index}
              checked={selected === index}
              onChange={() => onSelectAnswer(index)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Question;
