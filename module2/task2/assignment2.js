let count = prompt("Enter the number of participants:");
count = Number(count);

let participants = [];

for (let i = 0; i < count; i++) {
  let name = prompt("Enter the name of participant " + (i + 1) + ":");
  participants.push(name);
}

participants.sort();

document.write("<h3>Participants in Alphabetical Order:</h3>");
document.write("<ol>");
for (let i = 0; i < participants.length; i++) {
  document.write("<li>" + participants[i] + "</li>");
}
document.write("</ol>");
