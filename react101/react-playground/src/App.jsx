import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const items = [
    { language: 'python', color: 'blue' },
    { language: 'javascript', color: 'yellow' },
    { language: 'java', color: 'brown' },
    { language: 'c#', color: 'green' },
    { language: 'ruby', color: 'red' },
    { language: 'php', color: 'purple' },
    { language: 'go', color: 'lightblue' },
    { language: 'swift', color: 'orange' },
    { language: 'typescript', color: 'darkblue' },
    { language: 'kotlin', color: 'rustorange' },
    { language: 'rust', color: 'lightgray' },
    { language: 'html', color: 'lightgreen' },
    { language: 'css', color: 'teal' },
    { language: 'r', color: 'lightgray' },
    { language: 'dart', color: 'cyan' },
    { language: 'scala', color: 'maroon' },
    { language: 'elixir', color: 'magenta' },
    { language: 'haskell', color: 'lavender' },
    { language: 'lua', color: 'lime' },
    { language: 'perl', color: 'gold' },
  ];

  const [usedLanguages, setUsedLanguages] = useState(new Set());
  const [attempts, setAttempts] = useState([]);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [showInputs, setShowInputs] = useState(false);
  const [languageInput, setLanguageInput] = useState('');
  const [colorInput, setColorInput] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const maxAttempts = 20;
  const maxFailures = 5;

  useEffect(() => {
    // show all languages for 4 seconds
    const timer = setTimeout(() => {
      setShowInputs(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    if (isGameOver) return;

    const language = languageInput.toLowerCase();
    const color = colorInput.toLowerCase();

    if (usedLanguages.has(language)) {
      handleFailedAttempt(`Language "${language}" has already been used.`);
      return;
    }

    const match = items.find(
      (item) => item.language === language && item.color === color
    );

    if (match) {
      handleSuccessAttempt(match);
    } else {
      handleFailedAttempt(`Incorrect match for "${language}".`);
    }

    if (attempts.length + 1 >= maxAttempts || failedAttempts + 1 >= maxFailures) {
      endGame();
    }
  };

  const handleSuccessAttempt = (match) => {
    const correctSound = new Audio('/sounds/correct.mp3');
    correctSound.play();
    setUsedLanguages((prev) => new Set([...prev, match.language]));
    setAttempts((prev) => [
      ...prev,
      { language: match.language, color: match.color, status: 'success' },
    ]);
    setBackgroundColor(match.color);
    setTimeout(() => setBackgroundColor('white'), 1000);
  };

  const handleFailedAttempt = (message) => {
    const wrongSound = new Audio('/sounds/wrong.mp3');
    wrongSound.play();

    setFailedAttempts((prev) => prev + 1);
    setAttempts((prev) => [
      ...prev,
      { language: languageInput, color: colorInput, status: 'failed' },
    ]);
    setBackgroundColor('red');
    setTimeout(() => setBackgroundColor('white'), 1000);
    console.error(message);
  };

  const endGame = () => {
    setIsGameOver(true);
    setShowInputs(false);
    setBackgroundColor('white');
  };

  const successfulAttempts = attempts.filter((a) => a.status === 'success').length;

  return (
    <div id="body" style={{ backgroundColor, minHeight: '100vh', transition: 'background-color 0.5s' }}>
      <h1>Programming Language Color Game</h1>

      {/* Displayin all languages for 4 seconds */}
      {!showInputs && !isGameOver && (
        <div id="all">
          {items.map((item) => (
            <div
              key={item.language}
              style={{
                backgroundColor: item.color,
                padding: '10px',
                margin: '5px',
              }}
            >
              {item.language}
            </div>
          ))}
        </div>
      )}

      {/* Input box*/}
      {showInputs && !isGameOver && (
        <div id="inputs">
          <label>
            Programming Language:
            <input
              type="text"
              value={languageInput}
              onChange={(e) => setLanguageInput(e.target.value)}
              placeholder="Enter language"
            />
          </label>
          <br />
          <label>
            Color:
            <input
              type="text"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
              placeholder="Enter color"
            />
          </label>
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {/* Results table */}
      {isGameOver && (
        <div>
          <h3>Game Over!</h3>
          <p>
            <strong>Final Score:</strong> {successfulAttempts} correct, {failedAttempts} failed.
          </p>
          <table border="1" id="results-table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Attempt Number</th>
                <th>Programming Language</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="results-body">
              {attempts.map((attempt, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ backgroundColor: attempt.color }}>{attempt.language}</td>
                  <td
                    style={{
                      backgroundColor: attempt.status === 'success' ? 'green' : 'red',
                    }}
                  >
                    {attempt.status === 'success' ? '✔' : '✘'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
