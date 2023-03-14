let n = 0;
while (n <= 0) {
  n = parseInt(prompt("Enter number N:"));
}

let m = n;
while (m <= n) {
  m = parseInt(prompt("Enter number M (must be greater than N):"));
}

let skipEvenNumber = confirm("Skip even numbers?");

let sum = 0;
let i = n;
while (i <= m) {
  if (!skipEvenNumber || i % 2 !== 0) {
    sum += i;
  }
  i++;
}

document.writeln(`The sum of numbers from ${n} to ${m} is ${sum}`);
