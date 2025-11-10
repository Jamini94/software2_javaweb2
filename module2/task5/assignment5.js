let numbers = [];
let input;
let isDuplicate = false;

while (!isDuplicate) {
  input = prompt("Enter a number:");
  input = Number(input);

  if (numbers.includes(input)) {
    alert("This number has already been given! Program stops.");
    isDuplicate = true;
  } else {
    numbers.push(input);
  }
}

numbers.sort(function(a, b) {
  return a - b;
});

console.log("Numbers entered in ascending order:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
