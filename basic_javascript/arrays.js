/*Create an array with 5 names. Print out the first element (name) using console.log()
▪ Use the indexOf function to get the index of a name that exists in your array.
▪ Try the indexOf function with a name that does not exist. What is returned?
▪ Use the push function to add a new name to the array of names, so you have 6
names in the array. 'log' the array to verify.
▪ Use the slice function on the array, to create a new array with the first 3 names. 'log'
the array to verify.
▪ Create 2 objects with firstname, lastname, email – values. Add the two objects to a
new array. 'log' the array to verify. Also 'log' the first objects' email in a separate
'log'.*/

const names = ['John', 'Jane', 'Jack', 'Jill', 'Jim'];
console.log(names[0]);
console.log(names.indexOf('Jack'));

console.log(names.indexOf('Simona')); // prints -1 when the name is not in the array

names.push('Simona');
console.log(names);

const firstThreeNames = names.slice(0, 3);
console.log(firstThreeNames);

const person1 = {
    firstname: 'Charlie',
    lastname: 'Kardel',
    email: 'chk@gmail.com',
};
const person2 = {
    firstname: 'Gustaf',
    lastname: 'Kardel',
    email: 'gk@gmail.com',
};
const people = [person1, person2];
console.log(people);
console.log(people[0].email);
