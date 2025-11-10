function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let resultsDiv = document.getElementById("results");
let rolls = [];
let result;


do {
  result = rollDice();
  rolls.push(result);
} while (result !== 6);

let ul = "<ul>";
for (let i = 0; i < rolls.length; i++) {
  ul += "<li>Roll " + (i + 1) + ": " + rolls[i] + "</li>";
}
ul += "</ul>";

resultsDiv.innerHTML = ul;
