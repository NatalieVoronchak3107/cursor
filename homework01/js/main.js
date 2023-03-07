const carryMat = 15.678;
const tent = 123.965;
const sleepingBag = 90.2345;
console.log(`Price of the carry mat is: ${carryMat}`);
console.log(`Price of the tent is: ${tent}`);
console.log(`Price of the sleeping bag is: ${sleepingBag}`);
const maxPrice = Math.max(carryMat, tent, sleepingBag);
console.log(`Maximum price is: ${maxPrice}`);
const minPrice = Math.min(carryMat, tent, sleepingBag);
console.log(`Minimum price is: ${minPrice}`);
const totalPrice = (carryMat, tent, sleepingBag);
console.log(`Total price of all products is: ${totalPrice}`);
const roundedTotalPrice =
  Math.floor(carryMat) + Math.floor(tent) + Math.floor(sleepingBag);
console.log(`Total price of all prcoducts, rounded down: ${roundedTotalPrice}`);
const roundedToHundreds = Math.round(roundedTotalPrice / 100) * 100;
console.log(`Total price rounded to hundreds: ${roundedToHundreds}`);
const RoundedTotalPriceEven = roundedTotalPrice % 2 === 0;
console.log(`Total price is even number: ${RoundedTotalPriceEven}`);
const clientsPayment = 500;
const clientsRest = clientsPayment - totalPrice;
console.log(`Remainder from 500UAH: ${clientsRest}`);
const avgPrice = ((carryMat, tent, sleepingBag) / 3).toFixed(2);
console.log(`Average price is: ${avgPrice}`);
const randomDiscount = Math.round(Math.random() * 99) + 1;
console.log(`Random discount is: ${randomDiscount}%`);
const discountAmount = (totalPrice * randomDiscount) / 100;
console.log(`Discount amount for the client is: ${discountAmount}`);
const priceAfterDiscount = (totalPrice - discountAmount).toFixed(2);
console.log(`Price after discount: ${priceAfterDiscount}`);
const netProfit = (priceAfterDiscount - totalPrice / 2).toFixed(2);
console.log(`Net profit after discount: ${netProfit}`);
console.log(
  `Maximum price is: ${maxPrice}\nMinimum price is: ${minPrice}\nTotal price of all products is: ${totalPrice}\nTotal price of all prcoducts, rounded down: ${roundedTotalPrice}\nTotal price rounded to hundreds: ${roundedToHundreds}\nTotal price is even number: ${RoundedTotalPriceEven}\nRemainder from 500UAH: ${clientsRest}\nAverage price is: ${avgPrice}`
);
