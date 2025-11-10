let dogs = [];

for (let i = 0; i < 6; i++) {
  let name = prompt("Enter the name of dog " + (i + 1) + ":");
  dogs.push(name);
}

dogs.sort().reverse();

document.write("<h3>Dog Names (Z–A):</h3>");
document.write("<ul>");
for (let i = 0; i < dogs.length; i++) {
  document.write("<li>" + dogs[i] + "</li>");
}
document.write("</ul>");
