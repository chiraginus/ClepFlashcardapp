import React, { useState, useMemo } from 'react';
import data from './data/clep_questions.json';
import Flashcard from './components/Flashcard.jsx';
import DeckSelector from './components/DeckSelector.jsx';
import Controls from './components/Controls.jsx';

export default function App() {
  const [activeDeckId, setActiveDeckId] = useState(
    data.decks[0]?.id ?? null
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeDeck = useMemo(
    () => data.decks.find((d) => d.id === activeDeckId) ?? null,
    [activeDeckId]
  );

  const cards = activeDeck?.cards ?? [];

  const handleSelectDeck = (deckId) => {
    setActiveDeckId(deckId);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (!cards.length) return;
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    if (!cards.length) return;
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-title">Dhara’s CLEP Study App</div>
        <div className="app-subtitle">
          Tap card to flip • Use Previous/Next to move through questions
        </div>
      </header>

      <div className="layout">
        <DeckSelector
          decks={data.decks}
          activeDeckId={activeDeckId}
          onSelect={handleSelectDeck}
        />

        <div className="main-panel">
          <Flashcard
            card={cards[currentIndex]}
            index={currentIndex}
            total={cards.length}
          />
          <Controls
            currentIndex={currentIndex}
            total={cards.length}
            onPrev={handlePrev}
            onNext={handleNext}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}

