import React from 'react';

export default function Controls({ currentIndex, total, onPrev, onNext, onReset }) {
  return (
    <div className="controls">
      <div className="controls-left">
        <button className="button" type="button" onClick={onPrev} disabled={total === 0}>
          Previous
        </button>
        <button className="button primary" type="button" onClick={onNext} disabled={total === 0}>
          Next
        </button>
        <button className="button" type="button" onClick={onReset}>
          Start over
        </button>
      </div>
      <div className="progress-text">
        {total > 0
          ? `Card ${currentIndex + 1} of ${total}`
          : 'No cards in this deck yet'}
      </div>
    </div>
  );
}

