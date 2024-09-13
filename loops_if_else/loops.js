/* 
Create an array of with the following values: 'Peter', 7, 'Marianne', true, 'Helle' and 8. Notice it is a mix
of strings, numbers and a boolean.
Use a loop to iterate over the array and generate the following in the console:
Peter is a string
7 is a number
Marianne is a string
true is a boolean
Helle is a string
8 is a number
Hint: You can use typeof to determine the type of a value
*/

const array = ['Peter', 7, 'Marianne', true, 'Helle', 8];

array.forEach((element) => {
    console.log(element + ' is a ' + typeof element);
});

/* ▪ Create a function, findLargest, that takes 4 numbers as 4 parameters and returns
the largest of the 4 numbers. */

function findLargest(a, b, c, d) {
    return Math.max(a, b, c, d);
}

/* ▪ Create a function that takes 3 numbers as 3 parameters. The first parameter is the
number to check. The 2nd and 3rd parameter is a range (from and to). If the first
parameter is within the range of the range it should return true and false if not. */

function checkRange(number, from, to) {
    return number >= from && number <= to;
}
