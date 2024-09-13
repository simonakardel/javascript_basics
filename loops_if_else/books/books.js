/* ▪ Create an array of book objects, with title and author (where both are strings).
Create 5 objects in the array.
▪ Create an HTML page with a <ul>.
▪ Write javascript that loops over the array of book objects and create a new <li> for
each book object and add the title and author to the <li> and insert it into the <ul>.
▪ Verify that it works with any number of objects by removing 2 of the 5 objects from
the array and run it again. */

const books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
    },
    {
        title: '1984',
        author: 'George Orwell',
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
    },
];

books.pop();
books.pop();

const ul = document.getElementById('books');
books.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}`;
    ul.appendChild(li);
});

// other option with map and join
// document.getElementById('books').innerHTML = books.map(book => `<li>${book.title} by ${book.author}</li>`).join('');
