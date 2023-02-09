const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits;
console.log(myArray);
//[ 'Banana', 'Orange', 'Apple', 'Mango' ]

const numbers = [2, 45, 30, 100];
function getSum(total, num) {
  return total - num;
}
//Compute the result from subtracting the numbers in the array right-to-left.
let reduceRight = numbers.reduceRight(getSum);
console.log(reduceRight);
//23

//copyWithin
const copyWithinfruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Kiwi",
  "Papaya",
];
//copyWithin() copies array elements to another position in an array, overwriting existing values.
//array.copyWithin(target, start, end)
let copiedArray = copyWithinfruits.copyWithin(2, 0, 2);
console.log(copiedArray);
//[ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi', 'Papaya' ]

//isArray
const isArrayfruits = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(isArrayfruits);
console.log(result);
//true

//enteries()

const enteriesFruits = ["Banana", "Orange", "Apple", "Mango"];
const f = enteriesFruits.entries();
for (let x of f) {
  console.log(JSON.stringify(x));
}

//every
const ages = [32, 33, 16, 40];
let below = ages.every((age) => age < 18);
console.log(below);

//fill
//The fill() method fills specified elements in an array with a value.
//The fill() method overwrites the original array.
//Start and end position can be specified. If not, all elements will be filled.
//array.fill(value, start, end)
const fillfruits = ["Banana", "Orange", "Apple", "Mango"];
fillfruits.fill("Kiwi", 2, 4);