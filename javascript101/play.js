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
    { language: 'perl', color: 'gold' }
];

let usedLanguages = new Set();
let attempts = [];
let failedAttempts = 0;
const maxAttempts = 20;
const maxFailures = 5;

const corr = new Audio('./correct.mp3');
const wrong = new Audio('./wrong.mp3');

window.onload = () => {
    const displayContainer = document.getElementById('all');
    displayContainer.innerHTML = items.map(item => 
        `<div style="background-color: ${item.color}; padding: 10px; margin: 5px;">${item.language}</div>`
    ).join('');
    
    setTimeout(() => {
        displayContainer.style.display = 'none';
        document.getElementById('inputs').style.display = 'block';
    }, 4000);
};

document.getElementById('submit').addEventListener('click', () => {
    const languageInput = document.getElementById('lang').value.toLowerCase();
    const colorInput = document.getElementById('col').value.toLowerCase();

    if (usedLanguages.has(languageInput)) {
        displayMessage(`Language "${languageInput}" has already been used.`, 'red');
        handleFailedAttempt();
        return;
    }

    const match = items.find(item => 
        item.language === languageInput && item.color === colorInput
    );

    if (match) {
        handleSuccessAttempt(match);
    } else {
        handleFailedAttempt();
        displayMessage(`Incorrect match for "${languageInput}".`, 'red');
    }

    if (attempts.length >= maxAttempts || failedAttempts >= maxFailures) {
        endGame();
    }
});

function handleSuccessAttempt(match) {
    corr.play();
    usedLanguages.add(match.language);
    attempts.push({ language: match.language, color: match.color, status: 'success' });
    updateResultsTable();
    changeBackgroundColor(match.color);
    displayMessage(`Correct! "${match.language}" matches the color "${match.color}".`, 'green');
}

function handleFailedAttempt() {
    wrong.play();
    failedAttempts++;
    const languageInput = document.getElementById('lang').value;
    const colorInput = document.getElementById('col').value;
    attempts.push({ language: languageInput, color: colorInput, status: 'failed' });
    updateResultsTable();
    changeBackgroundColor('red');
}

function changeBackgroundColor(color) {
    const body = document.getElementById('body');
    body.style.backgroundColor = color;

    setTimeout(() => {
        body.style.backgroundColor = 'white';
    }, 1000);
}

function updateResultsTable() {
    const tableBody = document.getElementById('results-body');
    tableBody.innerHTML = attempts.map((attempt, index) => `
        <tr>
            <td>${index + 1}</td>
            <td style="background-color: ${attempt.color};">${attempt.language}</td>
            <td style="background-color: ${attempt.status === 'success' ? 'green' : 'red'};">
                ${attempt.status === 'success' ? '✔' : '✘'}
            </td>
        </tr>
    `).join('');
}

function endGame() {
    document.getElementById('submit').disabled = true;
    displayMessage('Game Over! Check your results table.', 'blue');
    document.getElementById('results-table').style.display = 'table';
}

function displayMessage(message, color) {
    const messageDisplay = document.getElementById('result');
    messageDisplay.style.display = 'block';
    messageDisplay.style.color = color;
    messageDisplay.textContent = message;
}
