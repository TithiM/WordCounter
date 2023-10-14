

import React, { useState } from 'react';
import "./WordCounter.css"

function WordCounter() {
  const [inputText, setInputText] = useState('');
  const words = inputText.trim().split(/\s+/);
  const wordCount = words.length;

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="word-counter">
      <h2>Responsive Paragraph Word Counter</h2>
      <textarea
        rows="6"
        value={inputText}
        onChange={handleTextChange}
      />
      <div className="word-count">
        Word Count: {wordCount}
      </div>
    </div>
  );
}

export default WordCounter;
