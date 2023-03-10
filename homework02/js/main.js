let n = parseInt(prompt("Enter number N:"));
let m = parseInt(prompt("Enter number M:"));
let skipEvenNumber = confirm("Skip even numbers?");

let sum = 0;
for (let i = n; i <= m; i++) {
  if (!skipEvenNumber || i % 2 !== 0) {
    sum += i;
  }
}

document.writeln(`The sum of number ${n} and number ${m} is ${sum}`);
