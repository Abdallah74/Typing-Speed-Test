// Array Of Words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Upwork",
  "Rust",
  "Playing",
];

// Lvls
const lvls = {
  Easy: 5,
  Normal: 3,
  Hard: 2,
};

// Default Lvl
const defaulLvl = "Normal";
const defaulLvlSeconds = lvls[defaulLvl];

// Catch Selectors
const startBtn = document.querySelector(".start"),
  lvlName = document.querySelector(".msg .lvl"),
  lvlSeconds = document.querySelector(".msg .seconds"),
  theWord = document.querySelector(".the-word"),
  upComingWords = document.querySelector(".upcoming-words"),
  input = document.querySelector(".input"),
  time = document.querySelector(".time span"),
  scoreGot = document.querySelector(".score .got"),
  scoreTotal = document.querySelector(".score .total"),
  finishMsg = document.querySelector(".finish");

// Lvls Name + Score + Seconds
lvlName.innerHTML = defaulLvl;
lvlSeconds.innerHTML = defaulLvlSeconds;
time.innerHTML = defaulLvlSeconds;
scoreTotal.innerHTML = words.length;

// Disable Paste Event
input.onpaste = () => {
  return false;
};

// Start Game
startBtn.onclick = () => {
  startBtn.remove();
  input.focus();
  // Genrate  Word Function
  genrate();
};

function genrate() {
  // Get Random Word From Array
  const rand = words[Math.floor(Math.random() * words.length)];
  // Set Random Word
  const randWord = words.indexOf(rand);
  // Remove Word From Array
  words.splice(randWord, 1);
  // Show The Random Word
  theWord.innerHTML = rand;
  // Empty Upcoming Word
  upComingWords.innerHTML = "";
  // Genrate Upcoming Word
  for (let i = 0; i < words.length; i++) {
    // Create Element Div
    const div = document.createElement("div");
    const txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upComingWords.appendChild(div);
  }
  // Call Start Play Function
  startPlay();
}

function startPlay() {
  time.innerHTML = defaulLvlSeconds;
  let start = setInterval(() => {
    time.innerHTML--;
    if (time.innerHTML === "0") {
      clearInterval(start);
      // Compare Words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Empty input Field
        input.value = "";
        // Increase Score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          genrate();
          upComingWords.remove();
        } else {
          const span = document.createElement("span");
          span.className = "good";
          span.textContent = "Good Job!";
          finishMsg.appendChild(span);
        }
      } else {
        const span = document.createElement("span");
        span.className = "bad";
        span.textContent = "Game Over!";
        finishMsg.appendChild(span);
      }
    }
  }, 1000);
}
