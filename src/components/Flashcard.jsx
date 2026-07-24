import React, { useState } from 'react';

export default function Flashcard({ card, index, total }) {
  const [showAnswer, setShowAnswer] = useState(false);

  if (!card) {
    return (
      <div className="flashcard">
        <div className="flashcard-question">
          No cards in this deck yet.
        </div>
        <div className="flashcard-meta">
          Add more CLEP questions to <code>src/data/clep_questions.json</code>.
        </div>
      </div>
    );
  }

  const handleToggle = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <div className="flashcard" onClick={handleToggle}>
      <div className="flashcard-question">
        {showAnswer ? card.answer : card.question}
      </div>
      <div className="flashcard-answer">
        {showAnswer ? 'Tap to see question' : 'Tap to see answer'}
      </div>
      <div className="flashcard-meta">
        Card {index + 1} of {total}
      </div>
    </div>
  );
}

