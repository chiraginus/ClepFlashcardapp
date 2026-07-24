import React from 'react';

export default function DeckSelector({ decks, activeDeckId, onSelect }) {
  return (
    <div className="sidebar">
      <div className="sidebar-title">CLEP Decks</div>
      <div className="deck-list">
        {decks.map((deck) => (
          <button
            key={deck.id}
            className={
              'deck-item' + (deck.id === activeDeckId ? ' active' : '')
            }
            onClick={() => onSelect(deck.id)}
            type="button"
          >
            <span className="deck-name">{deck.name}</span>
            <span className="deck-count">{deck.cards.length} cards</span>
          </button>
        ))}
      </div>
      <div className="sidebar-note">
        Edit <code>src/data/clep_questions.json</code> to add more decks and
        questions for your wife.
      </div>
    </div>
  );
}

